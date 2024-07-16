var s_l = document.getElementById('c_w')
var title = document.getElementById('title')
var submit = document.getElementById('submit')
var form = document.getElementById('form')
var pn = document.getElementById('pn')
var usere = document.getElementById('user')
var passw = document.getElementById('password')


function signup_w() {
    title.innerHTML = 'SignUp'
    s_l.innerHTML = 'I have account!'
    s_l.setAttribute('onclick', 'login_w()')
    submit.innerHTML = 'SignUp'
    submit.setAttribute('onclick', 'signup()')
    pn.setAttribute('type', 'number')

    // Clear username and password fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function login_w() {
    title.innerHTML = 'Login'
    s_l.innerHTML = 'Create account!' // Fixed typo here
    s_l.setAttribute('onclick', 'signup_w()')
    submit.innerHTML = 'Login'
    submit.setAttribute('onclick', 'login()')
    pn.setAttribute('type', 'hidden')

    // Clear username and password fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}


function show_password(){
    if(passw.type == 'text'){
        passw.setAttribute('type', 'password')
    }
    else{
        passw.setAttribute('type', 'text')
    }
}