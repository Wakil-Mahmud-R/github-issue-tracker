//login page logic

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

document.getElementById('login-button').addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    
    if (username === 'admin' && password === 'admin123') {
        window.location.href = './home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }

}); 

//enter key login logic

addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const username = usernameInput.value;
        const password = passwordInput.value; 

    
    if (username === 'admin' && password === 'admin123') {
        window.location.href = './home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    } }

}); 
