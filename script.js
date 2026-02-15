// ================= BUTTON CLICK ALERT =================
const joinButton = document.querySelector('.hero button');
if (joinButton) {
    joinButton.addEventListener('click', () => {
        alert('Welcome to Student-Hub! You will be redirected to registration.');
        window.location.href = "index.html#register"; // jump to register section
    });
}

// ================= FORM VALIDATION =================
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(event) {
        const name = this.querySelector('#name');
        const email = this.querySelector('#email');
        const password = this.querySelector('#password');

        if ((name && name.value.trim() === '') ||
            (email && email.value.trim() === '') ||
            (password && password.value.trim() === '')) {
            alert('Please fill in all required fields.');
            event.preventDefault();
        } else {
            alert('Form submitted successfully! (Demo only)');
            event.preventDefault(); // prevent actual submission since no backend
            this.reset();
        }
    });
});
