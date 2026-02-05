// VibeFlow Landing Page JavaScript

// Lightbox state
let currentImageIndex = 0;
let galleryImages = [];

document.addEventListener('DOMContentLoaded', () => {
    console.log('VibeFlow landing page loaded successfully!');
    initLightbox();
});

// Lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Store all gallery images
    galleryImages = Array.from(galleryItems).map(item => ({
        src: item.querySelector('img').src,
        alt: item.querySelector('img').alt
    }));
    
    // Open lightbox on gallery item click
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);
    
    // Navigation
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.classList.add('lightbox-open');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.classList.remove('lightbox-open');
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    const currentCounter = document.getElementById('currentImage');
    const totalCounter = document.getElementById('totalImages');
    
    // Update image
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxImage.alt = galleryImages[currentImageIndex].alt;
    
    // Update counter
    currentCounter.textContent = currentImageIndex + 1;
    totalCounter.textContent = galleryImages.length;
}
