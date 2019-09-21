const signupForm = document.querySelector('.signup');
const loginForm = document.querySelector('.login');
const signup = document.querySelector('#sbtn');
const login = document.querySelector('#lbtn');

const switchdisplay = () => {
if (signupForm.style.display === 'block'){
    signupForm.style.display = 'none'
    loginForm.style.display = 'block'
} else {
    signupForm.style.display = 'block'
    loginForm.style.display = 'none' 
}
};

signup.addEventListener('click', switchdisplay);
login.addEventListener('click', switchdisplay);
