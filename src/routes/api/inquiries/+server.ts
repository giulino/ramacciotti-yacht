import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { isValidEmail, saveEncryptedInquiry } from '$lib/server/form-security';

export async function POST({ request, getClientAddress }) {
	const body = (await request.json().catch(() => null)) as
		| {
				context?: string;
				name?: string;
				email?: string;
				phonePrefix?: string;
				phone?: string;
				message?: string;
				consent?: boolean;
				consentVersion?: string;
				website?: string;
		  }
		| null;

	if (!body) {
		return json({ error: 'Invalid payload.' }, { status: 400 });
	}

	if (body.website) {
		return json({ ok: true }, { status: 200 });
	}

	const context = body.context?.trim();
	const name = body.name?.trim();
	const email = body.email?.trim();
	const phonePrefix = body.phonePrefix?.trim();
	const phone = body.phone?.trim();
	const message = body.message?.trim();
	const consent = body.consent === true;
	const consentVersion = body.consentVersion?.trim() || '2026-02';

	if (!context || !name || !email || !phonePrefix || !phone || !message) {
		return json({ error: 'All fields are required.' }, { status: 400 });
	}

	if (!isValidEmail(email)) {
		return json({ error: 'Email format is invalid.' }, { status: 400 });
	}

	if (!consent) {
		return json({ error: 'Consent is required.' }, { status: 400 });
	}

	if (name.length > 120 || email.length > 160 || phonePrefix.length > 8 || phone.length > 40 || message.length > 3000) {
		return json({ error: 'Input is too long.' }, { status: 400 });
	}

	const payload = {
		context,
		name,
		email,
		phonePrefix,
		phone,
		message,
		consent,
		consentVersion,
		submittedAt: new Date().toISOString(),
		sourceHint: getClientAddress().slice(0, 3)
	};

	try {
		await saveEncryptedInquiry(payload, env.FORM_ENCRYPTION_KEY ?? '');
	} catch (error) {
		console.error('Inquiry storage failed', error);
		return json(
			{
				error:
					'Form processing is not configured yet. Set FORM_ENCRYPTION_KEY on the server to enable secure submissions.'
			},
			{ status: 503 }
		);
	}

	const webhook = env.EMAIL_WEBHOOK_URL;
	if (webhook) {
		try {
			await fetch(webhook, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(payload)
			});
		} catch (error) {
			console.error('Email webhook failed', error);
		}
	}

	return json({ ok: true });
}
