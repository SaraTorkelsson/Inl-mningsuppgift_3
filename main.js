// Funktion som ändrar till darkmode
function changeMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
}

let getResults = document.querySelector("#getResults");

// Skriver ut sista resultatet och visar passande färg.
// let finalScore = document.createElement


// getResults.addEventlistener("click", () => {
//     let counter = 0;
//     if (document.getElementById(""))
// })




if (result == 7) {
    "Grattis! Du hade alla rätt!"
    finalScore.style.color = green;
} 
else if (result > 3){
    "Snyggt jobbat! Du hade mer än hälften rätt!"
    finalScore.style.color = orange;
}
else {
    "Försök igen! Du hade mindre än hälften rätt!"
    finalScore.style.color = red;
}

// <h3>Batman är starkast i DC-Universe!</h3>
// <input type="radio" value="true" name="sant" />
// <label for="sant">Sant</label>

// let quizAnswer = () => {
//   inputs.forEach((input) => {
//     if(input.checked){
//       answer = input.value;
//     if(answer == "true"){
//         count++;
//       }
//     }
//   });
