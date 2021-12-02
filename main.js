// Funktion som ändrar till darkmode.
function changeMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
}

// Hämtar results och getResults.
let div = document.querySelector("#results")
let getResults = document.querySelector("#getResults");

// Skriver ut sista resultatet och visar passande färg.
let finalPoints = document.createElement("p");

// Kollar igenom getResults och ser om användaren har svarat rätt.
getResults.addEventListener("click", () => {
    let result = 0;
    if (document.getElementById("true1").checked) {
        result++;
    }
    if (document.getElementById("true2").checked) {
        result++;
    }
    if (document.getElementById("true3").checked) {
        result++;
    }
    if (document.getElementById("true4").checked) {
        result++;
    }
    if (document.getElementById("true5").checked) {
        result++;
    }
    if (document.getElementById("true6").checked) {
        result++;
    }
    if (
    document.getElementById("true7").checked == true &&
    document.getElementById("true8").checked == true && 
    document.getElementById("false7").checked == false &&
    document.getElementById("false8").checked == false
    ) 
    {
        result++;
    } 
    else {}

    // Skriver ut det fullständiga resultatet och visar i lämplig färg. 
    // Användaren får reda på hur många rätt hen hade.
    div.appendChild(finalPoints);
    if (result === 7) {
        finalPoints.style.color = "#32CD32";
        finalPoints.textContent = "Grattis! Du hade alla rätt! " + result + "/7";
    } 
    else if (result > 3){
        finalPoints.style.color = "#FFA500";
        finalPoints.textContent = "Snyggt jobbat! Du hade mer än hälften rätt! " + result + "/7";
    }
    else {
        finalPoints.style.color = "#ff0000";
        finalPoints.textContent = "Försök igen! Du hade färre än hälften rätt! " + result + "/7";
    }
});