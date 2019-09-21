const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');
const loginBtn = document.querySelector('#login-btn');
const errorResponse = document.querySelectorAll('.error-response');
const successResponse = document.querySelector('.success-response');
const modal = document.querySelector('.modal');
const success = document.querySelector('.success-msg');
const closeBtn = document.querySelector('#close-btn');
const userName = document.querySelector('#username');
const signupBtn = document.querySelector('#signup-btn');
const signupEmail = document.querySelector('#signup-email');
const signupPassword = document.querySelector('#signup-password');

const users = [
    {name: 'joe', email: 'joe@gmail.com', password: 'joe123'},
    {name: 'luke', email: 'luke@gmail.com', password: 'luke123'},
    {name: 'Paul', email: 'paul@gmail.com', password: 'paul123'}
]

const handleError = (msg) => {
    errorResponse.forEach(err => {
        err.innerHTML = `<p class="err">${msg}</p>`
        setTimeout(() => {
            err.innerHTML = '';  
        }, 2000);
    })
};

const handleSuccess = () => {
    successResponse.innerHTML =  '<p class="suc">Registration Successful</p>';
    setTimeout(() => {
        document.querySelector('.signup').style.display = 'none'
        document.querySelector('.login').style.display = 'block'
    }, 2000);
}

const userSignup = () => {
    if (userName.value == '') {
        return handleError('User name is required') 
    }
    if (signupEmail.value == '') {
        return handleError('Email is required') 
    }
    if (signupPassword.value == '') {
        return handleError('Password is required') 
    }
    const user = users.filter(user => signupEmail.value === user.email );

    if (user.length !== 0) {
       return handleError('Email is associated with another user')
    }
    const newUser = {
        name: userName.value,
        email: signupEmail.value,
        password: signupPassword.value
    }
    users.push(newUser);
    handleSuccess();
}

const userLogin = () => {
    if (email.value == '' || password.value == '' ) {
        return handleError('Please fill required fields');
    }
    const user = users.filter(user => email.value === user.email );
    const validCredentials = users.filter(user => email.value == user.email && password.value === user.password );

    if(user.length == 0) {
        return handleError('User does not exist');
    } else if (validCredentials.length < 1){
        return handleError('Please provide valid credentials');
    } else {
    success.innerHTML = `<p class="success-msg">Welcome ${user.name}Your Login is Successful </p>`
    modal.style.display = 'block';
    }
};

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userSignup();
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userLogin();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})