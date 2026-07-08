document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('nav');
    const toggleIcon = navToggle.querySelector('i');

    // Toggle Mobile Menu open/close
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-active');
        
        // Dynamically swaps the hamburger bars (☰) to an "X" close icon when active
        if (navMenu.classList.contains('mobile-active')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-xmark');
            toggleIcon.style.color = '#e5a93c'; // Turns gold when open
        } else {
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
            toggleIcon.style.color = '#ffffff';
        }
    });

    // Close mobile menu if a user clicks on any link inside it
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('mobile-active')) {
                navMenu.classList.remove('mobile-active');
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
                toggleIcon.style.color = '#ffffff';
            }
        });
    });
});
