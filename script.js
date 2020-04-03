var register__link= document.querySelector(".register");
var login__link= document.querySelector(".login");
var registration__form= document.querySelector(".register-form");
var login__form= document.querySelector(".login-form");


register__link.addEventListener("click",function(){
    registration__form.style.display="block";
    login__form.style.display="none";
    
})

login__link.addEventListener("click",function(){
    login__form.style.display="block";
    registration__form.style.display="none";
})