const encryptedStore = [];
function toBase64(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}
async function deriveAesKey(secret) {
  const encoded = new TextEncoder().encode(secret);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return crypto.subtle.importKey("raw", digest, { name: "AES-GCM" }, false, ["encrypt"]);
}
async function saveEncryptedInquiry(payload, secret) {
  if (!secret || secret.length < 16) {
    throw new Error("FORM_ENCRYPTION_KEY missing or too short.");
  }
  const key = await deriveAesKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const serialized = new TextEncoder().encode(JSON.stringify(payload));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, serialized);
  encryptedStore.push({
    storedAt: (/* @__PURE__ */ new Date()).toISOString(),
    iv: toBase64(iv),
    payload: toBase64(new Uint8Array(encrypted))
  });
}
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
export {
  isValidEmail as i,
  saveEncryptedInquiry as s
};
