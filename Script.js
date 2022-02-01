//html veribels
let userInputs = document.getElementById("userInput");
let velkommen = document.getElementById("velkommen");
let ranTall = document.getElementById("ranTall");
let grat = document.getElementById("gratis");
let sounds = document.getElementById("annoing");
let luckyness = document.getElementById("lykkenumber");

// local og session storage
const form = document.querySelector("form")
form.addEventListener("submit", e =>{
    e.preventDefault();

   let input = userInputs.value;

    if(input != ""){
    localStorage.setItem("name",input)
    let online = localStorage.getItem("name");
    velkommen.innerHTML = "Velkommen, vi ønsker deg alt som er godt, "+ online+ "!";


      let allUsernames = new Object();
  
      allUsernames = userInputs.value;
  
      if(sessionStorage.users)
      {
        users= JSON.parse(sessionStorage.getItem('users'));
      }else{
        users=[];
      }
      users.push(allUsernames )
      sessionStorage.setItem('users', JSON.stringify(users));
  
      let show = sessionStorage["users"];
      document.getElementById("thisSession").innerHTML = show;
} else{
  return;
}
})

// byter background farge, random tall og random neste tall
function timstart(){
  let ran = Math.floor(Math.random() * (100-1) -1)
  ranTall.innerHTML = ran;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor
    ran = Math.floor(Math.random() * (100-1) -1)
    grat.innerHTML = "";
    window.lRan = ran;
}
timstart();

//andre submit knapp
const form2 = document.querySelector("form.rTF2")
form2.addEventListener("submit", e =>{
  let luck = luckyness.value
  e.preventDefault();

  localStorage.setItem("lucky",luck)
  let guess = localStorage.getItem("lucky");

  //Kjeker vis talle du gjetter er like som random talle. og tinge de skall gjøre hvis riktig
  if (guess == window.lRan){
    grat.innerHTML = "Gratulerer du har gjetter riktig lykke tall" ;
    ranTall.innerHTML = window.lRan;
    sounds.play()
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor
  } 
  // clearer input
  luckyness.value = "";
})


//byter random tall vært ekte minute
  setTimeout(
    () => { 

      
      setInterval(() => {
        sounds.play()
        timstart();
        
      }, 60 * 1000
      );
    },
    (60 - new Date().getSeconds()) * 
      1000,
  );