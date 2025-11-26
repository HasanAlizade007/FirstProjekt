const container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidepw"),
pwFileds = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link"); 


pwShowHide.forEach(eyeIcon =>{
  eyeIcon.addEventListener("click", ()=>{
      pwFileds.forEach(pwFiled =>{
          if(pwFiled.type ==="password"){
              pwFiled.type = "text";

              pwShowHide.forEach(icon =>{
                  icon.classList.replace("uil-eye-slash", "uil-eye");
              })
          }else{
              pwFiled.type = "password";

              pwShowHide.forEach(icon =>{
                  icon.classList.replace("uil-eye", "uil-eye-slash");
              })
          }
      })
  })
})

let  cont = document.querySelector(".container");

signUp.addEventListener("click", ( )=>{
  cont.classList.add("active");
});
login.addEventListener("click", ( )=>{
  container.classList.remove("active");
});

