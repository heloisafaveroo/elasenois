// Carousel functionality
let slideIndex = []; // Will be dynamically populated

function plusSlides(n, carouselIndex) {
    // carouselIndex is already passed as an argument
    if (carouselIndex === -1) return; // Should not happen if called correctly
    showSlides(slideIndex[carouselIndex] += n, carouselIndex);
}

function currentSlide(n, carouselIndex) {
    // carouselIndex is already passed as an argument
    if (carouselIndex === -1) return; // Should not happen if called correctly
    showSlides(slideIndex[carouselIndex] = n, carouselIndex);
}

function showSlides(n, no) {
    let carouselContainers = document.querySelectorAll(".carousel-container");
    const targetCarousel = carouselContainers[no];
    if (!targetCarousel) return; // Ensure the carousel exists

    let slides = targetCarousel.querySelectorAll(".carousel-slide img");
    let dots = targetCarousel.querySelectorAll(".dot");

    if (n > slides.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slides.length }

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Show current slide and activate current dot
    slides[slideIndex[no] - 1].classList.add('active');
    if (dots[slideIndex[no] - 1]) { // Check if dot exists before adding class
        dots[slideIndex[no] - 1].classList.add('active');
    }
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainers = document.querySelectorAll('.carousel-container');
    slideIndex = Array(carouselContainers.length).fill(1); 

    carouselContainers.forEach((container, i) => {
        // Ensure there are slides to show for this carousel
        if (container.querySelectorAll(".carousel-slide img").length > 0) {
            showSlides(1, i);
        }
    });

    // Auto-advance carousels
    setInterval(() => {
        carouselContainers.forEach((container, i) => {
            if (container.querySelectorAll(".carousel-slide img").length > 0) {
                plusSlides(1, i);
            }
        });
    }, 5000);
});

// Rolagem suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicionar efeito de rolagem ao cabeçalho
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

 // Animações de clique de botão
 document.querySelectorAll('.btn-saiba-mais').forEach(button => {
     button.addEventListener('click', function() {
         this.style.transform = 'scale(0.95)';
         setTimeout(() => {
             this.style.transform = 'scale(1)';
         }, 150);
     });
 });