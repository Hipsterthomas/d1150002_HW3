var btn = document.querySelector("button");
function  click(){
    var email = document.getElementById("emailin").value;
    var passwd = document.getElementById("passwdin").value;
    if(!email || !passwd){
        alert("Please enter your Email and Password! OR U WILL GET FLUNK");
    }
    else{
        alert("Congratulations!! You have been hacked\n"+"Your Email is: "+email+"\nYour Password is: "+passwd);
        alert("SO GO TO STUDY!!!");
        setTimeout(window.location.href = "https://ilearn.fcu.edu.tw/",500)
    }
}
btn.addEventListener("click",click);