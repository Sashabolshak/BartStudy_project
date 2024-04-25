function toggleContent(btnClass, inputClass) {
    const btn = document.querySelector(btnClass);
    const input = document.querySelector(inputClass);

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');

        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
    });
}

toggleContent('.password', '.password__input');