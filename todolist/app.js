const inputBox = document.querySelector("#writeTask")
const add= document.querySelector("#tap")
const addAll= document.querySelectorAll("#tap")
const addedTask= document.querySelector("#addedTasks")
var temp=0;
add.onclick = function (){

     if (inputBox.value=="")
     {
        alert("Please enter a task")
     }
     else 
     {  
        temp++;
  
    addedTask.innerHTML +=`
    <div id="lists">
    <span id="todos">

      ${[temp]} ${inputBox.value}
        
</span>
    <button id="delete">
        <i class="far fa-trash-alt"></i>
    </button>
</div>
`
const currentTasks = document.querySelectorAll("#delete")
for(let i=0;i<currentTasks.length;i++){
    currentTasks[i].onclick = function(){
       this.parentNode.remove()
    }
}
}
//erasing the written task from the input box
inputBox.value=""


};






