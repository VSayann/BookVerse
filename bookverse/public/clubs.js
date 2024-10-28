// "Join clubs" button

document.addEventListener('DOMContentLoaded', () => {
    const joinButtons = document.querySelectorAll('.join-btn');

    joinButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You have joined the "${button.parentNode.querySelector('h3').textContent}" club!`);
        });
    });
});
