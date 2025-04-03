

console.log("Portfolio script loaded.");

document.addEventListener('DOMContentLoaded', () => {

    const lightbox = new PhotoSwipeLightbox({
        gallery: '.portfolio-grid',
        children: '.portfolio-item',
        pswpModule: PhotoSwipe,
        showHideAnimationType: 'fade',
        zoomAnimationDuration: 200,
    });


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

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {

    });


});
