document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const navMenu = document.querySelector('header nav');

    // Function to open the menu
    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.add('active');
        });
    }

    // Function to close the menu using the close button (X)
    if (closeMenuBtn && navMenu) {
        closeMenuBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }

    // Close the menu if a user clicks anywhere outside of it
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        }
    });
});
