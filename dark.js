let changeMode=document.querySelector("#mode");

let currentMode="light";
changeMode.addEventListener("click",()=>{
  if (currentMode==="light"){
    document.querySelector("body").style.backgroundColor="black";
currentMode="dark";
  }
  else{
    document.querySelector("body").style.backgroundColor="white";
    currentMode="light";
  }
  
})
