const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

// This part handles the hamburger menu toggle
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    nav.classList.toggle('open'); // This might affect your nav's background if not intended
});

// This part handles closing the mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInsideMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        nav.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // For the "Informações" dropdown
    const informacoesDropdownBtn = document.getElementById('informacoesDropdownBtn');
    // Selects the parent <li> element of the dropdown within the mobile menu
    const informacoesDropdown = document.querySelector('.mobile-menu .dropdown');

    console.log(informacoesDropdownBtn, informacoesDropdown); // Good for debugging

    if (informacoesDropdownBtn && informacoesDropdown) {
        informacoesDropdownBtn.addEventListener('click', function(event) {
            console.log("clicou"); // Good for debugging
            // Prevents navigation for href="javascript:void(0);"
            event.preventDefault();

            // Toggles the 'active' class on the parent <li> element of the dropdown
            informacoesDropdown.classList.toggle('active');

            // Optional: Close dropdown if clicked outside
            function closeDropdown(event) {
                // Check if the click was outside the dropdown and outside the button itself
                if (!informacoesDropdown.contains(event.target) && event.target !== informacoesDropdownBtn) {
                    informacoesDropdown.classList.remove('active');
                    document.removeEventListener('click', closeDropdown); // Remove listener once closed
                }
            }

            // Add listener to close if the dropdown was opened
            if (informacoesDropdown.classList.contains('active')) {
                // Add a small delay or use setTimeout to allow event propagation to finish
                // This prevents the same click event from immediately closing the dropdown
                setTimeout(() => {
                    document.addEventListener('click', closeDropdown);
                }, 0);
            } else {
                document.removeEventListener('click', closeDropdown); // Remove listener if dropdown is closed
            }

            // Prevents the click on the button from propagating and closing the dropdown immediately
            event.stopPropagation();
        });
    }

    // Optional: Closes the main menu and the "Informações" dropdown if resize to desktop
    // Note: `navMenu` is not defined in the provided JS. Assuming it refers to mobileMenu or nav.
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) { // Desktop view
            if (mobileMenu.classList.contains('open')) { // Assuming navMenu is mobileMenu
                mobileMenu.classList.remove('open');
                nav.classList.remove('open'); // Reset nav class if it's tied to mobile menu open
            }
            // Ensures the "Informações" dropdown is closed if returning to desktop view
            if (informacoesDropdown && informacoesDropdown.classList.contains('active')) {
                informacoesDropdown.classList.remove('active');
            }
        }
    });

    // Optional: Closes the menu and the "Informações" dropdown if a link within the menu is clicked (useful in mobile)
    const menuLinks = document.querySelectorAll('.mobile-menu a'); // Target links within the mobile menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Only close if it's not the dropdown button itself
            if (this !== informacoesDropdownBtn) {
                if (mobileMenu.classList.contains('open')) { // Assuming navMenu is mobileMenu
                    mobileMenu.classList.remove('open');
                    nav.classList.remove('open'); // Reset nav class
                }
                if (informacoesDropdown && informacoesDropdown.classList.contains('active')) {
                    informacoesDropdown.classList.remove('active');
                }
            }
        });
    });
});