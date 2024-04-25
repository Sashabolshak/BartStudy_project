rightBtn.addEventListener('click', ()=> {
    if (window.innerWidth <= 950) {
        horizontalScroll.style.scrollBehavior = "smooth";
        horizontalScroll.scrollLeft += 345;
    }
});

leftBtn.addEventListener('click', ()=> {
    if (window.innerWidth <= 950) {
        horizontalScroll.style.scrollBehavior = "smooth";
        horizontalScroll.scrollLeft -= 345;
    }
});


rightBtn.addEventListener('click', ()=> {
    if (window.innerWidth <= 390) {
        horizontalScroll.style.scrollBehavior = "smooth";
        horizontalScroll.scrollLeft += 280;
    }
});

leftBtn.addEventListener('click', ()=> {
    if (window.innerWidth <= 390) {
        horizontalScroll.style.scrollBehavior = "smooth";
        horizontalScroll.scrollLeft -= 280;
    }
});