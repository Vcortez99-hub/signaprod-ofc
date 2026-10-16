// Endereços em um só lugar. Os links do HTML já vêm preenchidos; este script só os mantém em sincronia.
const APP_URL = 'https://app.signaprod.com.br'; // plataforma: login, cadastro, termos e privacidade
const WHATSAPP = '551331501569';                 // WhatsApp comercial

(function () {
  const msg = encodeURIComponent('Olá! Vim pelo site da SignaProd.');
  document.querySelectorAll('[data-wa]').forEach((a) => { a.href = `https://wa.me/${WHATSAPP}?text=${msg}`; });
  document.querySelectorAll('[data-app]').forEach((a) => { a.href = `${APP_URL}/app`; });
  document.querySelectorAll('[data-app-signup]').forEach((a) => { a.href = `${APP_URL}/app?modo=cadastro`; });
  document.querySelectorAll('[data-app-path]').forEach((a) => { a.href = APP_URL + a.getAttribute('data-app-path'); });

  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  const top = document.getElementById('top');
  const btn = top && top.querySelector('.menu-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const open = top.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    top.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => {
      top.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }));
  }
  const onScroll = () => top && top.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
