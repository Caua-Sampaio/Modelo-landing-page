
/**
 * Arquivo de Lógica Principal
 * Autor: Cauã Sampaio
 */



/* ==========================================================================
   1. HEADER SÓLIDO AO ROLAR A PÁGINA
   ========================================================================== */
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


/* ==========================================================================
   2. MENU HAMBÚRGUER (MOBILE)
   ========================================================================== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link da navegação
document.querySelectorAll('#navMenu li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});


/* ==========================================================================
   3. CARROSSEL INFINITO DE CASES / DEPOIMENTOS
   ========================================================================== */
const track = document.getElementById('casesTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const scrollAmount = 380; 

if (track && nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    
    if (track.scrollLeft >= maxScrollLeft - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });

  prevBtn.addEventListener('click', () => {
    if (track.scrollLeft <= 10) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });
}




// Mensagem estilizada no Console do Desenvolvedor
const estiloTitulo = 'background: #b8860b; color: #fff; padding: 6px 12px; font-weight: bold; font-size: 14px; border-radius: 4px;';
const estiloTexto = 'color: #333; font-size: 12px; padding: 4px 0;';

console.log('%c✨ Olá, visitante curioso!', estiloTitulo);
console.log('%cEste site foi desenvolvido com foco em alta performance, SEO e design moderno.', estiloTexto);
console.log('%cGostou do trabalho? Entre em contacto para desenvolvermos o seu próximo projeto digital!', estiloTexto);
console.log('%c📧 Contacto: caua.duarte.sampaio@gmail.com', 'color: #b8860b; font-weight: bold;');