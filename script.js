function startProgram() {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("form-screen").classList.remove("hidden");
}

document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const lang = document.getElementById("language").value;

  document.getElementById("form-screen").classList.add("hidden");
  document.getElementById("program-screen").classList.remove("hidden");

  if(lang === "en") {
    document.getElementById("program-title").textContent = "++ and -- Program";
  } else {
    document.getElementById("program-title").textContent = "برنامج ++ و --";
  }
});

let value = 0;
const display = document.getElementById("value");

function preIncrement() { ++value; display.textContent = value; }
function postIncrement() { display.textContent = value; value++; }
function preDecrement() { --value; display.textContent = value; }
function postDecrement() { display.textContent = value; value--; }
