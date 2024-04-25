const burger = document.querySelector('.container-1__burger')
const classNameActive = 'active'
const classNameLock = 'lock'
const elements = [burger, document.querySelector('.container-1__menu'), document.querySelector('.container-1__buttons')]

function toggleClass(elements, classNameActive, classNameLock) {
    elements.forEach(element => element.classList.toggle(classNameActive))
    document.querySelector('body').classList.toggle(classNameLock)    
}

burger.onclick = () => toggleClass(elements, classNameActive, classNameLock)