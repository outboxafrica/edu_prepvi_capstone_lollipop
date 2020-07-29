// Name and Password from the register-form
var nm = document.getElementById('nm');
var pw = document.getElementById('pw');
var pw2 = document.getElementById('pw2');
// storing input from register-form
function store() {
   
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('pw2', pw2.value);
    var storedPw = localStorage.getItem('pw');
    
    if(pw.value == storedPw && pw2.value == storedPw){
        alert("signup successful");
        window.location="../home/home.html";
      
    }else{
        alert(".error");
    }
    
    
};


