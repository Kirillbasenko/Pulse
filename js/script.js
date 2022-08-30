
function changeInfoCatalog(){
   const front = document.querySelectorAll(".catalog-item__front")
   const back = document.querySelectorAll(".catalog-item__back")
   const frontBtn = document.querySelectorAll("#front")
   const backBtn = document.querySelectorAll("#back")

   frontBtn.forEach((item, i) => {
      item.addEventListener("click", (e) => {
         e.preventDefault()
         front[i].classList.add("hideContent")
         back[i].classList.add("showContent")
      })
   })
   backBtn.forEach((item, i) => {
      item.addEventListener("click", (e) => {
         e.preventDefault()
         front[i].classList.remove("hideContent")
         back[i].classList.remove("showContent")
      })
   })
}
changeInfoCatalog()

function tabs(){
   const tab = document.querySelectorAll(".catalog__tab")
   const front = document.querySelectorAll(".catalog-item")
   const run = document.querySelectorAll("#run")
   const triatlon = document.querySelectorAll("#triatlon")
   
   function showContent(){
         tab.forEach((item, i) => {
         item.addEventListener("click", (e) => {
            hideContent()
            item.classList.add("active")
            if(i === 1){
               run.forEach(item => item.classList.add("visibleContent"))
            }
            if(i === 2){
               triatlon.forEach(item => item.classList.add("visibleContent"))
            }
         })
      })
   } 
   function hideContent(){
         tab.forEach((item, i) => {
            item.classList.remove("active")
         })
         run.forEach((item, i) => {
            item.classList.remove("visibleContent")
         })
         triatlon.forEach((item, i) => {
            item.classList.remove("visibleContent")
         })
   } 
   showContent()
}
tabs()

function showInfo(){
   const form = document.querySelector("form")
   const name = document.querySelectorAll("#name")
   const phone = document.querySelectorAll("#phone")
   const email = document.querySelectorAll("#email")
   const button = document.querySelectorAll("#button")
   const thanksModal = document.querySelector("#exampleModal3")

   function validateForm(){
      if(name.length < 3){
         formAddError(name)
         return
      }else if(phone.length < 10){
         formAddError(phone)
         return
      } else return
   }
   function formAddError(input){
      input.forEach(item => item.classList.add("error"))
   }
   

   function submitForm(){
      button.forEach((item, i) => {
      item.addEventListener("click", (e) => {
      e.preventDefault()
      validateForm()
         fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body:JSON.stringify({
            name: name[i].value,
            phone: phone[i].value,
            email: email[i].value,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
         })
         .then((response) => response.json())
         .then((json) => console.log(json))
         .then(() => {
            name[i].value = ""
            phone[i].value = ""
            email[i].value = ""
         })
         .catch()
      })
   })
   }
   submitForm()
}
showInfo()
function showUp(){
   const up = document.querySelector(".pageup")
   window.addEventListener("scroll", function(e){
      if(this.scrollY > 1200){
         up.style.display = "block"
      }else{
         up.style.display = "none"
      }
   })
}
showUp()

