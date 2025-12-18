// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navUl.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navUl.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = event.target.closest('nav');
            if (!isClickInsideNav && navUl.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navUl.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Hide/show navigation on scroll
    let lastScrollTop = 0;
    let scrollThreshold = 5; // Minimum scroll distance to trigger hide/show
    let ticking = false;
    
    function updateNavVisibility() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Only hide/show if we've scrolled past the threshold
        if (Math.abs(scrollTop - lastScrollTop) < scrollThreshold) {
            ticking = false;
            return;
        }
        
        // Close mobile menu when scrolling (if open)
        if (navUl.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navUl.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down & past 100px - hide nav
            nav.classList.add('nav-hidden');
        } else {
            // Scrolling up - show nav
            nav.classList.remove('nav-hidden');
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavVisibility);
            ticking = true;
        }
    });
});
