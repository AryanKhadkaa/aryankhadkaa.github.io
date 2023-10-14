
//parallax & fade effects
const translate = document.querySelectorAll(".translate");
const topTitle = document.querySelector(".topTitle");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const content2= document.querySelector(".content2");
const section = document.querySelector("section");
const image_container=document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const opacity2 = document.querySelector(".opacity2");
const border = document.querySelector(".border");
const section2 =document.querySelector("#myself")
const topBtn = document.querySelector("#topBtn")

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;
let section2_height = section.offsetHeight-50;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${(scroll )* -speed*1.5}px)`;

    });

   opacity.forEach(element=>{ 
    element.style.opacity =  scroll*0.56/(sectionY.top+ section2_height+ section_height ); 
});
    
 topTitle.style.opacity =  -scroll/(header_height/2)+1;
 topBtn.style.opacity =  -scroll/(header_height/2)+1;
 shadow.style.height = `${scroll * 0.5 + 300}px`; 
 border.style.width = `${scroll/(sectionY.top + section_height + section2_height)*15}%`//`${scroll /(sectionY.top + section_height)*30}%`;
 opacity2.style.opacity = scroll*2/(section2_height*2);
 if(sectionY.top >= "0"){ 
content2.style.transform =`translateY(${scroll/(section2_height)*-50}px)`
 }
    if(sectionY.top > "-600"){
     image_container.style.transform = `translateY(${scroll / (section_height + section2_height + sectionY.top) * -50+ 50}px)`;
     content.style.transform = `translateY(${scroll / (section_height + section2_height + sectionY.top) * 50 - 50}px)`;
     }

})
//navigation bar hide effect
const bar = document.getElementById("info-bar");
var pscroll = window.pageYOffset;

           

window.onscroll= function() {
     var nscroll = window.pageYOffset;
     
                               
if(pscroll > nscroll)
{                              
    bar.style.top = "0px";

}
else{
    bar.style.top = "-60px";
}
   pscroll = nscroll ;

   var pageScroll= window.pageYOffset;
   //console.log(pageScroll)
   
   if(pageScroll > "700"){
   bar.style.background="azure";
   }
   else{
       bar.style.background="transparent";
   }
}


window.onload = function(){
    window.scrollTo(0, 0);
}

// const memGame = document.querySelector(".memorygame");
