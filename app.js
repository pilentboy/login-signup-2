// change the icon and type of the input in the password box
const BTNDisplayLoginInput=document.querySelector("#BTNDisplayLoginInput")
const eyeIconLogin=document.querySelector("#eyeIconLogin")
const passInputLogin=document.querySelector("#passInputLogin")

// login
BTNDisplayLoginInput.addEventListener("click",()=>{
    if(eyeIconLogin.classList.contains("bi-eye")){
        eyeIconLogin.classList.remove("bi-eye");
        eyeIconLogin.classList.add("bi-eye-slash");
        passInputLogin.type="text";
    }else{
        eyeIconLogin.classList.remove("bi-eye-slash");
        eyeIconLogin.classList.add("bi-eye");
        passInputLogin.type="password";
    }
})

// signup
const BTNDisplaySignupInput=document.querySelector("#BTNDisplaySignupInput")
const eyeIconSignup=document.querySelector("#eyeIconSignup")
const passInputSignup=document.querySelector("#passInputSignup")

BTNDisplaySignupInput.addEventListener("click",()=>{
    if(eyeIconSignup.classList.contains("bi-eye")){
        eyeIconSignup.classList.remove("bi-eye");
        eyeIconSignup.classList.add("bi-eye-slash");
        passInputSignup.type="text";
    }else{
        eyeIconSignup.classList.remove("bi-eye-slash");
        eyeIconSignup.classList.add("bi-eye");
        passInputSignup.type="password";
    }
})




// switch between login and signup
const goToSignUpBTN=document.querySelector("#goToSignup")
const goToLoginBTN=document.querySelector("#goToLogin")
const loginForm= document.querySelector(".login")
const signupForm= document.querySelector(".signup")


goToSignUpBTN.addEventListener("click",()=>{
    loginForm.classList.remove("disLogin")
    loginForm.classList.add("hideLogin")
    signupForm.classList.add("disSignUp")
})

goToLoginBTN.addEventListener("click",()=>{
    signupForm.classList.remove("disSignUp")
    signupForm.classList.add("hideSignup")
    loginForm.classList.remove("hideLogin")
    loginForm.classList.add("disLogin")
})

