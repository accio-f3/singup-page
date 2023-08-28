window.onload=()=>{
    if(!localStorage.getItem('user')){
        window.location.href='./index.html';
    }
}

let user=JSON.parse(localStorage.getItem('user'));

let fullName=document.getElementById('fullName');
let emailAd=document.getElementById('email');
let password=document.getElementById('password');
let logoutBtn = document.getElementById('logout-btn');

fullName.innerText=user.fullName;
emailAd.innerText=user.email;
password.innerText=user.password;

logoutBtn.addEventListener('click',()=>{
    localStorage.clear();
    window.location.href='./index.html';
})

// <h1 id="fullName"></h1>
{/* <h1 id="email"></h1>
<h1 id="password"></h1> */}