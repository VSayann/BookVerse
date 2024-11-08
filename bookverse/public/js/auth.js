const signInForm = document.getElementById('signin-form');
const signUpForm = document.getElementById('signup-form');
const signInButton = document.getElementById('signin-button');
const signUpButton = document.getElementById('signup-button');

sign-inButton.addEventListener('click', () => {
    console.log('Sign In button clicked');
});

sign-upButton.addEventListener('click', () => {
    console.log('Sign Up button clicked');
});
sign-inButton.addEventListener('click', () => {
    document.getElementById('signin-form').style.display = 'block';
});

sign-inForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    try {
        const response = await fetch('../api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        console.log('Sign in response:', data);
    } catch (error) {
        console.error('Error during sign in:', error);
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    try {
        const response = await fetch('../api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        console.log('Sign up response:', data);
    } catch (error) {
        console.error('Error during sign up:', error);
    }
});



