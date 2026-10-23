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