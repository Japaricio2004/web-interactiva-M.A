// Obtener elementos del DOM
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll("#mobile-menu a");
const closeMenu = document.getElementById('close-menu');
const header = document.querySelector("header");

// Alternar visibilidad del menú móvil al hacer clic en el botón
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active"); // Muestra u oculta el menú móvil
});

// Cerrar el menú móvil al hacer clic en cualquier enlace del menú
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active"); // Oculta el menú
  });
});

// Cerrar menú móvil
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Cambiar el fondo del header al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Aplica la clase 'scrolled' al header
  } else {
    header.classList.remove("scrolled"); // Remueve la clase 'scrolled'
  }
});


// Arrays de imágenes para cada sección
let imagesInicio = [
    'url("images/image0.jpg")',
    'url("images/image3.jpg")',
    'url("images/image4.jpg")'
  ];
  let imagesOfrecemos = [
    'url("images/image0.jpg")',
    'url("images/image3.jpg")',
    'url("images/image4.jpg")'
  ];
  let imagesContacto = [
    'url("images/image0.jpg")',
    'url("images/image3.jpg")',
    'url("images/image4.jpg")'
  ];
  
  // Índices para controlar la imagen actual de cada sección
  let currentIndexInicio = 0;
  let currentIndexOfrecemos = 0;
  let currentIndexContacto = 0;
  
  // Función para cambiar el fondo de cada sección
  function changeBackground() {
    // Cambiar el fondo de 'inicio'
    document.querySelector('.bg-carousel-inicio').style.backgroundImage = imagesInicio[currentIndexInicio];
    currentIndexInicio = (currentIndexInicio + 1) % imagesInicio.length;
  
    // Cambiar el fondo de 'ofrecemos'
    document.querySelector('.bg-carousel-ofrecemos').style.backgroundImage = imagesOfrecemos[currentIndexOfrecemos];
    currentIndexOfrecemos = (currentIndexOfrecemos + 1) % imagesOfrecemos.length;
  
    // Cambiar el fondo de 'contacto'
    document.querySelector('.bg-carousel-contacto').style.backgroundImage = imagesContacto[currentIndexContacto];
    currentIndexContacto = (currentIndexContacto + 1) % imagesContacto.length;
  }
  
  // Cambiar el fondo cada 5 segundos para todas las secciones
  setInterval(changeBackground, 5000);
  
  // Inicializar con las primeras imágenes al cargar la página
  window.onload = () => {
    changeBackground();
  };

  const slider = document.getElementById('product-slider');
const prevButton = document.getElementById('prev-product');
const nextButton = document.getElementById('next-product');

let currentIndex = 0;

// Determinar cuántas imágenes mostrar según el tamaño de la pantalla
function getItemsToShow() {
  return window.innerWidth > 768 ? 3 : 1; // 3 imágenes en pantallas grandes, 1 en móviles
}

const updateSliderPosition = () => {
  const itemsToShow = getItemsToShow();
  const itemWidth = 100 / itemsToShow; // Calcula el ancho de cada imagen
  slider.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
};

// Botón para mover a la imagen anterior
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slider.children.length - getItemsToShow(); // Regresa al final si está en la primera
  }
  updateSliderPosition();
});

// Botón para mover a la siguiente imagen
nextButton.addEventListener('click', () => {
  if (currentIndex < slider.children.length - getItemsToShow()) {
    currentIndex++;
  } else {
    currentIndex = 0; // Regresa al inicio si está en la última
  }
  updateSliderPosition();
});

// Desplazamiento automático
setInterval(() => {
  if (currentIndex < slider.children.length - getItemsToShow()) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
}, 5000); // Cambia cada 5 segundos

// Ajustar carrusel cuando cambia el tamaño de la ventana
window.addEventListener('resize', updateSliderPosition);

