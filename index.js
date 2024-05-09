(function(){


const btns=document.querySelectorAll(".btn");
let count=0;

btns.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.classList.contains('up')){
            count++
        }else if(button.classList.contains('down')){
            count--
        }

        const counter=document.querySelector(".counter");
        counter.textContent= count ;
        if(count<0){
            counter.style.color="red";
        }else if(count>0){
            counter.style.color="green";
        }else{
            counter.style.color="black"
        }

        //body
    })
 
    //statment
})()

 




}) ()


const countup=document.querySelector(".countup");
const countdown=document.querySelector(".countdown");

countup.innerHTML("hi this is khan");
