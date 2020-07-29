
// var btn2 = document.querySelector(".login");
// btn2.onclick = () => {
//     location.href = "#";
    
// };



// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('nm');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
      
        window.location="../home/home.html";
        // alert('You are loged in.');
    }else {
        alert('wrong password or username');
    }
}