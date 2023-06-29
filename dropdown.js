document.addEventListener('DOMContentLoaded', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');

        select.addEventListener('click', (event) => {
            event.stopPropagation();
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });

        options.forEach(option => {
            option.addEventListener('click', (event) => {
                event.stopPropagation();
                event.preventDefault();
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
                
                options.forEach(option => {
                    option.classList.remove('active');
                });

                option.classList.add('active');

                const targetSection = option.getAttribute('data-target');
                const targetElement = document.querySelector(targetSection);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Listen for click events on the whole document
        document.addEventListener('click', () => {
            if (menu.classList.contains('menu-open')) {
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
            }
        });
    });
});
