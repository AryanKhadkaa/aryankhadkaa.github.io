
const userContent =  document.querySelector(".userContent")
const btn = document.querySelector("#talk")

function speak(sentence){
    const textSpeech =  new SpeechSynthesisUtterance(sentence);

    textSpeech.rate=1;
    textSpeech.pitch=1;

    window.speechSynthesis.speak(textSpeech);
}
function wishMe(){
    var date= new Date();
    var hrs= date.getHours();
    
console.log(date)
console.log(Headers)
    if(hrs >=0 && hrs < 12){

        speak("Good Morning,Boss");
    }
    else if(hrs ==12){
        speak("Good Noon,Boss")
    }
  else  if(hrs>12 && hrs < 17){
        speak("Good Afternoon,Boss")
    }
    else{
        speak("Good evening,Boss")
    }
}



window.onload = function(){
    speak("Activating KEN");
     wishMe();
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognition = new SpeechRecognition();

//  recognition.continuous = true;

 recognition.lang = 'en-GB';

recognition.onresult = function(voiceData) {
  for( const result of voiceData.results){
    console.log(voiceData.results)
    const transcript= `${result[0].transcript}`;
    userContent.textContent=transcript;
    // console.log(transcript)
    speakThis(transcript.toLowerCase());
     
  } 
 }

 btn.onclick=()=>{
  recognition.start();
  console.log("yes")
 }

let kenSpeech;
 function speakThis(message){
    const speech= new SpeechSynthesisUtterance();

    if(message.includes('hello') || message.includes('hey') ||message.includes('hi') ){
        kenSpeech ="hello boss!how are you doing?";

    }
  else if(message.includes('how are you')){
       kenSpeech="I'm good.thank you for asking"
       
   
    }
    // else if(message.includes('repeat after me')){
    //    kenSpeech= userContent.innerHTML;
      
    
    // }
    else if(message.includes('open google')){
        kenSpeech="Opening Google";
        window.open("https://google.com", "_blank")
    }
    else if(message.includes('open facebook')){
        kenSpeech="Opening facebook";
        window.open("https://facebook.com", "_blank")
    }
    else if(message.includes('open instagram')){
        kenSpeech="Opening Google";
        window.open("https://instagram.com", "_blank")
    }
    else if(message.includes('open spotify')){
        kenSpeech="opening spotify";
        window.open("https://spotify.com", "_blank")
    }
    else if(message.includes('your boss')){
        kenSpeech="aaryon is my Boss. He programmed me and I am his assistant.";
    }
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        kenSpeech = "This is what i found on wikipedia regarding " + message;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        kenSpeech = time;
       
    }
    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        kenSpeech = date;
       
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        kenSpeech = "Opening Calculator";
  
    }
    else if(message.includes('what is') || message.includes('who is') ||message.includes('what are')){
    const fst=(message.split(' ')[0]);
    const sst=(message.split(' ')[1]); 
    const remove=fst+" "+sst
    kenSpeech="This is what i found on" + message.replace(remove,"");
    window.open(`https://google.com/search?q=${message.replace(" ", "+")}`,"_blank");
    
    } 

    speech.text=kenSpeech;

    console.log("working")
    speech.volume=1;
    speech.pitch=1;
    speech.rate=1;
    window.speechSynthesis.speak(speech);
 }

