export interface InquiryPayload {
	context: string;
	name: string;
	email: string;
	message: string;
	consent: boolean;
	consentVersion: string;
	submittedAt: string;
}

interface StoredInquiry {
	storedAt: string;
	iv: string;
	payload: string;
}

const encryptedStore: StoredInquiry[] = [];

function toBase64(bytes: Uint8Array) {
	let binary = '';
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary);
}

async function deriveAesKey(secret: string) {
	const encoded = new TextEncoder().encode(secret);
	const digest = await crypto.subtle.digest('SHA-256', encoded);

	return crypto.subtle.importKey('raw', digest, { name: 'AES-GCM' }, false, ['encrypt']);
}

export async function saveEncryptedInquiry(payload: InquiryPayload, secret: string) {
	if (!secret || secret.length < 16) {
		throw new Error('FORM_ENCRYPTION_KEY missing or too short.');
	}

	const key = await deriveAesKey(secret);
	const iv = crypto.getRandomValues(new Uint8Array(12));
	const serialized = new TextEncoder().encode(JSON.stringify(payload));

	const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, serialized);

	encryptedStore.push({
		storedAt: new Date().toISOString(),
		iv: toBase64(iv),
		payload: toBase64(new Uint8Array(encrypted))
	});
}

export function isValidEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
