document.addEventListener('DOMContentLoaded', () => {
    // --- Translation Code (Same as before) ---
    const translatableElements = document.querySelectorAll('.translate');
    translatableElements.forEach(element => {
        element.dataset.originalEs = element.textContent.trim();
        element.addEventListener('mouseenter', () => {
            const englishText = element.getAttribute('data-en');
            if (englishText) {
                if (!element.dataset.tempEs || element.dataset.tempEs !== element.textContent.trim()) {
                    element.dataset.tempEs = element.textContent.trim();
                 }
                element.textContent = englishText;
            }
        });
        element.addEventListener('mouseleave', () => {
            const originalSpanish = element.dataset.originalEs;
             if (originalSpanish) {
                element.textContent = originalSpanish;
             } else if (element.dataset.tempEs) {
                 element.textContent = element.dataset.tempEs;
             }
        });
    });

    // --- Smooth Scrolling (Same as before - Optional) ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Card Animation Staggering ---
    const cards = document.querySelectorAll('.fighter-card');
    cards.forEach((card, index) => {
        // Set a custom property '--card-index' for the CSS animation delay
        card.style.setProperty('--card-index', index);
    });

});