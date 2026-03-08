import { json } from "@sveltejs/kit";
import { b as private_env } from "../../../../chunks/shared-server.js";
import { i as isValidEmail } from "../../../../chunks/form-security.js";
async function POST({ request }) {
  const body = await request.json().catch(() => null);
  const email = body?.email?.trim();
  const consent = body?.consent === true;
  const source = body?.source?.trim() || "journal";
  if (!email || !consent) {
    return json({ error: "Email and consent are required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return json({ error: "Email format is invalid." }, { status: 400 });
  }
  const mailchimpWebhook = private_env.MAILCHIMP_SUBSCRIBE_URL;
  if (!mailchimpWebhook) {
    return json(
      {
        error: "Mailchimp integration is not configured. Set MAILCHIMP_SUBSCRIBE_URL to enable newsletter subscriptions."
      },
      { status: 503 }
    );
  }
  try {
    const response = await fetch(mailchimpWebhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, consent, source, submittedAt: (/* @__PURE__ */ new Date()).toISOString() })
    });
    if (!response.ok) {
      return json({ error: "Unable to subscribe right now." }, { status: 502 });
    }
  } catch (error) {
    console.error("Mailchimp subscribe failed", error);
    return json({ error: "Unable to subscribe right now." }, { status: 502 });
  }
  return json({ ok: true });
}
export {
  POST
};
