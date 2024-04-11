import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const saveFormState = throttle(function () {
        const formData = {
            email: emailInput.value,
            message: messageInput.value
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }, 500);

    function fillFormFromLocalStorage() {
        const savedFormData = localStorage.getItem('feedback-form-state');
        if (savedFormData) {
            const formData = JSON.parse(savedFormData);
            emailInput.value = formData.email;
            messageInput.value = formData.message;
        }
    }

    fillFormFromLocalStorage();

   form.addEventListener('input', saveFormState);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        localStorage.removeItem('feedback-form-state');
        emailInput.value = '';
        messageInput.value = '';

        const formData = {
            email: emailInput.value,
            message: messageInput.value
        };
        console.log('Form data submitted:', formData);
    });
});
