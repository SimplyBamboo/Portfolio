// Portfolio JavaScript with PhotoSwipe integration

console.log("Portfolio script loaded.");

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all PhotoSwipe galleries
    const lightbox = new PhotoSwipeLightbox({
        gallery: '.portfolio-grid',
        children: '.portfolio-item',
        pswpModule: PhotoSwipe,
        showHideAnimationType: 'fade',
        zoomAnimationDuration: 200,
    });

    // Add custom caption if needed
    lightbox.on('uiRegister', () => {
        lightbox.pswp.ui.registerElement({
            name: 'custom-caption',
            order: 9,
            isButton: false,
            appendTo: 'root',
            html: 'Caption text',
            onInit: (el, pswp) => {
                lightbox.pswp.on('change', () => {
                    const currSlide = pswp.currSlide;
                    el.innerHTML = currSlide.data.alt || '';
                });
            }
        });
    });

    lightbox.init();

    // --- Portfolio Item Hover Effects ---
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        // Hover effects are now handled in CSS
    });

    // Fade-in effect removed, no JS needed for section visibility.

}); // Closing brace for DOMContentLoaded listener
