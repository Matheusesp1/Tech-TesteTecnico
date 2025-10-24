const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const totalSlides = slideItems.length;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
let slidesPerView = 4;

// Função para criar um carrossel funcional
function createCarousel(carouselSelector) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return; // evita erro se o carrossel não existir

  const slides = carousel.querySelector('.slides');
  const slideItems = carousel.querySelectorAll('.slide');
  const totalSlides = slideItems.length;

  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let index = 0;
  let slidesPerView = 4;

  // Atualiza posição do carrossel
  function updateCarousel() {
    slides.style.transform = `translateX(-${(index * 100) / slidesPerView}%)`;
  }

  // Botões
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

  // Ajusta slidesPerView conforme largura da tela
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
createCarousel('.carousel'); // Categorias
createCarousel('.highlight-carousel'); // Destaque da Semana
createCarousel('.best-sellers-carousel'); // Mais Vendidos
