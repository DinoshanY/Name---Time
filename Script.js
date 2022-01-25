alert("du før kanse epileptisk anfall")

const form = document.querySelector("form")
form.addEventListener("submit", e =>{
    e.preventDefault();
    let input = document.getElementById("userInput").value


    localStorage.setItem("name",input)
    let online = localStorage.getItem("name");
    document.getElementById("demo").innerHTML = "Velkommen, vi ønsker deg alt som er godt, "+ online+ "!";


      let allUsernames = new Object();
  
      allUsernames = document.getElementById('userInput').value;
  
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

})


function annoy(){
  setTimeout(function() {
    document.getElementById("colorNumber").pause();
    loop();
}, 3000);
  
}

function loop(){
const a = Math.random() * (5000-1000) -1000
setTimeout(function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor
    document.getElementById("colorNumber").play();
    annoy()
}, a);
}

annoy();




//ga opp å prøve å coble den til clocka
function timstart(){
  const ran = Math.floor(Math.random() * (100-1) -1)
  document.getElementById("tall").innerHTML = ran;
  setTimeout(timstart, 60000);
}
timstart();


