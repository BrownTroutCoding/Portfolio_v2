document.addEventListener('DOMContentLoaded', (event) => {
        // get all dropdowns from document
    const dropdowns = document.querySelectorAll('.dropdown');

    // loop through all dropdown elements
    dropdowns.forEach(dropdown => {
    // get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');  // Changed to querySelectorAll
    const selected = dropdown.querySelector('.selected');

    // add click event to the select element
    select.addEventListener('click', () => {
        // add the roate styles to caret
        caret.classList.toggle('caret-rotate');
        // add open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    // loop through all option elements
    options.forEach(option => {
        // add click event to option element
        option.addEventListener('click', (event) => {
        event.preventDefault(); // prevent the default action
        // change selected inner text to clicked option inner text
        selected.innerText = option.textContent;
        // remove the rotate styles from caret
        caret.classList.remove('caret-rotate');
        // remove open styles from the menu element
        menu.classList.remove('menu-open');
        // remove active class from all option elements
        options.forEach(option => {
            option.classList.remove('active');
        });
        // add active class to clicked option element
        option.classList.add('active');

        // scroll to the corresponding section
        const targetSection = option.getAttribute('data-target');
        const targetElement = document.querySelector(targetSection);
        targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
    });
});


