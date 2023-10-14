// const endtime ="30 January 2023 1:03 AM"

const endTime = document.getElementById("end-time").innerText;
console.log(endTime);
const int= document.querySelectorAll("input")

const time = () =>{
    const end= new Date(endTime)
    const now = new Date()
  
    const diff= (end-now)/1000;
   
    if (diff < 0) return;

 
    const days= diff/(24*60*60);
    int[0].value= Math.floor(days);

    const hrs=(diff/3600)%24;
    int[1].value = Math.floor(hrs);

    const mins= (diff/60)%60;
    int[2].value= Math.floor(mins);

    const sec= (diff)%60;
    int[3].value= Math.floor(sec);
    console.log(now)
    console.log(end)

}
 time()


setInterval(()=>{
        time()
    },  1000
    )

