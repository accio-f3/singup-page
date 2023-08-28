const fullName = document.getElementById('fullName');
const emailAdd = document.getElementById('emailAdd');
const password = document.getElementById('password');
const cnfPassword = document.getElementById('cnfPassword');
const submitBtn = document.getElementById('btn');

let user = {
    token: tokenGen(16),
};

window.onload = () => {
    if(localStorage.getItem('user')){
        window.location.href='./profile.html';
    }
};

function tokenGen(size){
    const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let res = '';
    for (let i = 0; i < size; i++) {
        res += str.charAt(Math.floor(Math.random()*str.length));
    }
    return res;
}

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let fullNameValue = fullName.value;
    let emailAddValue = emailAdd.value;
    let passwordValue = password.value;
    let cnfPasswordValue = cnfPassword.value;
    if (fullNameValue === '' || emailAddValue === '' || passwordValue === '' || cnfPasswordValue === ''){
        alert('all fields are required');
    }
    else if(passwordValue!==cnfPasswordValue){
        password.value='';
        cnfPassword.value='';
        alert('both passwords should match');
    }
    // write better logic for checking email
    else if(emailAddValue.includes('@') && emailAddValue.includes('.com')){
        user.fullName=fullNameValue;
        user.email=emailAddValue;
        user.password=passwordValue;
        localStorage.setItem('user',JSON.stringify(user));
        window.location.href='./profile.html';
    }
    else{
        // wrong email
    }
})


