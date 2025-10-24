// ===== CARROSSÉIS =====
function createCarousel(carouselSelector) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;

  const slides = carousel.querySelector('.slides');
  const slideItems = carousel.querySelectorAll('.slide');
  const totalSlides = slideItems.length;

  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let index = 0;
  let slidesPerView = 4;

  function updateCarousel() {
    slides.style.transform = `translateX(-${(index * 100) / slidesPerView}%)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < totalSlides - slidesPerView) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
    } else {
      index = totalSlides - slidesPerView;
    }
    updateCarousel();
  });

  // Rolagem automática a cada 3 segundos
  setInterval(() => {
    if (index < totalSlides - slidesPerView) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  }, 3000);

  function updateSlidesPerView() {
    const width = window.innerWidth;
    if (width <= 500) {
      slidesPerView = 1;
    } else if (width <= 800) {
      slidesPerView = 2;
    } else {
      slidesPerView = 4;
    }
    updateCarousel();
  }

  window.addEventListener('resize', updateSlidesPerView);
  updateSlidesPerView();
}

// Inicializa todos os carrosséis
createCarousel('.carousel');
createCarousel('.highlight-carousel');
createCarousel('.best-sellers-carousel');

// ===== NEWSLETTER NO FOOTER =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const successMsg = document.getElementById('successMessage');
    const email = emailInput.value;
    
    // Aqui você conectaria com seu backend para salvar o email
    console.log('Email cadastrado:', email);
    
    // Exibe mensagem de sucesso
    successMsg.style.display = 'block';
    emailInput.value = '';
    
    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 3000);
  });
}

// ===== SMOOTH SCROLL PARA LINKS INTERNOS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Ignora se for apenas "#"
    if (href === '#') {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});