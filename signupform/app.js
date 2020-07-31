// Name and Password from the register-form
var nm = document.getElementById('nm');
var pw = document.getElementById('pw');
var pw2 = document.getElementById('pw2');
var emails=document.getElementById('emails');
// storing input from register-form
function store() {
   
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('pw2', pw2.value);
    localStorage.setItem('emails', emails.value);
    var storedPw = localStorage.getItem('pw');
    var storedPw2 = localStorage.getItem('pw2');
    
if(nm.value=="" || pw.value==""||pw2.value==""||emails.value=="" ){
    alert('error please fill in all the fields')
}else{

    if(storedPw == storedPw2){
        alert("signup successful");
        window.location="../home/home.html";
        event.preventDefault();
    }else{
        alert("invalid input");
        event.preventDefault();
    }
}
    
    
}


