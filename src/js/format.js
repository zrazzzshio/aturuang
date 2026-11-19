export const rupiah = value => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Number(value)||0);
export const dateID = value => value ? new Intl.DateTimeFormat('id-ID',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(value+'T00:00:00')) : '-';
export const today = () => new Date().toISOString().slice(0,10);
export const uid = () => crypto.randomUUID ? crypto.randomUUID() : String(Date.now()+Math.random());
export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
