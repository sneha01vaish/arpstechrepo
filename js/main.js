// Mobile Menu Toggle
document.querySelector('.header-menu-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('header-nav-wrap').classList.toggle('open');
    this.classList.toggle('open');
});

// Close nav on outside click
document.addEventListener('click', function (event) {
    const nav = document.getElementById('header-nav-wrap');
    const toggle = document.querySelector('.header-menu-toggle');
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('open');
        toggle.classList.remove('open');
    }
});

// Submenu Toggle (for Patient Login)
document.querySelectorAll('.has-submenu > a').forEach(menu => {
    menu.addEventListener('click', function (e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        if (submenu.classList.contains('open')) {
            submenu.classList.remove('open');
        } else {
            document.querySelectorAll('.submenu').forEach(el => el.classList.remove('open'));
            submenu.classList.add('open');
        }
    });
});

// Optional Smooth Scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
