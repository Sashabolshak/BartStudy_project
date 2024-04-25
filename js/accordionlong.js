const accordionItems = document.querySelectorAll('.accordion-container-long-content');

accordionItems.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});