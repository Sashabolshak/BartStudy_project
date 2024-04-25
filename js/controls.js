let horizontalScroll = document.querySelector('.container-slider__img-slider-row');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

rightBtn.addEventListener('click', ()=> {
    horizontalScroll.style.scrollBehavior = "smooth";
    horizontalScroll.scrollLeft += 445;
});

leftBtn.addEventListener('click', ()=> {
    horizontalScroll.style.scrollBehavior = "smooth";
    horizontalScroll.scrollLeft -= 445;
});

