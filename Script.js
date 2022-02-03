import { addDoc, collection, db, getDocs } from "./Firestore.js";

//sends Names to firestore
async function addToDb(name) {
  await addDoc(collection(db, "Names"), {
    name: name,
  });
}

async function getNames(db) {
  const snap = collection(db, "Names");
  const snap_Name = await getDocs(snap);
  return snap_Name.docs.map((doc) => doc.data().name);
}

//html veribels
let userInputs = document.getElementById("userInput");
let velkommen = document.getElementById("velkommen");
let ranTall = document.getElementById("ranTall");
let grat = document.getElementById("gratis");
let sounds = document.getElementById("annoing");
let luckyness = document.getElementById("lykkenumber");

// local og session storage
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //local
  let input = userInputs.value;
  if (input != "") {
    localStorage.setItem("name", input);
    let online = localStorage.getItem("name");
    velkommen.innerHTML =
      "Velkommen, vi ønsker deg alt som er godt, " + online + "!";

    //firestore
    addToDb(online);

    //session
    let allUsernames = new Object();

    allUsernames = userInputs.value;
    let users;

    if (sessionStorage.users) {
      users = JSON.parse(sessionStorage.getItem("users"));
    } else {
      users = [];
    }
    users.push(allUsernames);
    sessionStorage.setItem("users", JSON.stringify(users));

    let show = sessionStorage["users"];
    document.getElementById("thisSession").innerHTML = show;
  } else {
    return;
  }
});

// byter background farge, random tall og random neste tall
function timstart() {
  let ran = Math.floor(Math.random() * (100 - 1) - 1);
  ranTall.innerHTML = ran;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  ran = Math.floor(Math.random() * (100 - 1) - 1);
  grat.innerHTML = "";
  window.lRan = ran;
}
timstart();

//andre submit knapp
const numGuess = document.querySelector("form.rTF2");
numGuess.addEventListener("submit", (e) => {
  let luck = luckyness.value;
  e.preventDefault();

  localStorage.setItem("lucky", luck);
  let guess = localStorage.getItem("lucky");

  //Kjeker vis talle du gjetter er like som random talle. og tinge de skall gjøre hvis riktig
  if (guess == window.lRan) {
    grat.innerHTML = "Gratulerer du har gjetter riktig lykke tall";
    ranTall.innerHTML = window.lRan;
    sounds.play().catch((_) => {});
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }
  // clearer input
  luckyness.value = "";
});

//show all names in firestore
async function showDb() {
  const snap = await getNames(db);
  snap.forEach((name) => {
    table.innerHTML += `<tr>${name}<tr>`;
  });
}
showDb();

//byter random tall vært ekte minute og opptaterer name den visser
setTimeout(() => {
  sounds.play().catch((_) => {});
  timstart();
  setInterval(() => {
    sounds.play().catch((_) => {});
    timstart();
  }, 60 * 1000);
}, (60 - new Date().getSeconds()) * 1000);
