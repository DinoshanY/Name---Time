
 

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

