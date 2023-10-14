var firstNum = parseInt(document.querySelector("#num1").value)
var secondNum = parseInt(document.querySelector("#num2").value)

const result = document.querySelector("#result");

const buttons=document.querySelectorAll("button");

buttons.forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.id == "sum"){
    result.value=firstNum+secondNum;
    }
    else if(e.target.id =="mul"){
        result.value=(firstNum*secondNum);
        }
    else if(e.target.id == "sub"){
            result.value=firstNum-secondNum;
            }
    else{
    result.value=firstNum/secondNum;
    }   
})})




       