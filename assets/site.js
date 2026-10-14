// SignaProd · site
// Para trocar o endereço da plataforma ou o WhatsApp, mude só estas duas linhas.
const APP_URL = 'https://app.signaprod.com.br';
const WHATSAPP = '551331501569';

// Links da plataforma: data-app="/app?modo=cadastro&plano=essencial"
document.querySelectorAll('[data-app]').forEach((a) => { a.href = APP_URL + a.dataset.app; });
// Links do WhatsApp da Signa com a mensagem pronta: data-wa="Quero saber do plano Essencial"
document.querySelectorAll('[data-wa]').forEach((a) => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(a.dataset.wa || 'Oi! Vim do site da SignaProd.')}`;
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
