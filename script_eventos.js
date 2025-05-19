 // Carousel functionality
 let slideIndex = [1, 1, 1];

 function plusSlides(n, no) {
     showSlides(slideIndex[no] += n, no);
 }

 function currentSlide(n, no) {
     showSlides(slideIndex[no] = n, no);
 }

 function showSlides(n, no) {
     let carouselContainers = document.querySelectorAll(".carousel-container");
     let slides = carouselContainers[no].querySelectorAll(".carousel-slide img");
     let dots = carouselContainers[no].querySelectorAll(".dot");

     if (n > slides.length) { slideIndex[no] = 1 }
     if (n < 1) { slideIndex[no] = slides.length }

     // Hide all slides
     slides.forEach(slide => slide.classList.remove('active'));
     
     // Remove active class from all dots
     dots.forEach(dot => dot.classList.remove('active'));

     // Show current slide and activate current dot
     slides[slideIndex[no] - 1].classList.add('active');
     dots[slideIndex[no] - 1].classList.add('active');
 }

 // Initialize carousels
 document.addEventListener('DOMContentLoaded', function() {
     const numCarousels = document.querySelectorAll('.carousel-container').length;
     for (let i = 0; i < numCarousels; i++) {
         showSlides(1, i);
     }

     // Auto-advance carousels
     setInterval(() => {
         for (let i = 0; i < numCarousels; i++) {
             plusSlides(1, i);
         }
     }, 5000);
 });

 // Mobile menu functionality
 const hamburger = document.querySelector('.hamburger');
 const mobileMenu = document.querySelector('.mobile-menu');

 hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('open');
     mobileMenu.classList.toggle('open');
 });

 // Close mobile menu when clicking outside
 document.addEventListener('click', (event) => {
     if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
         hamburger.classList.remove('open');
         mobileMenu.classList.remove('open');
     }
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Add scroll effect to header
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     if (window.scrollY > 100) {
         header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
     } else {
         header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
     }
 });

 // Button click animations
 document.querySelectorAll('.btn-saiba-mais').forEach(button => {
     button.addEventListener('click', function() {
         this.style.transform = 'scale(0.95)';
         setTimeout(() => {
             this.style.transform = 'scale(1)';
         }, 150);
     });
 });