let titleH1 = document.getElementById("title");
titleH1.style.color = "green";
titleH1.style.fontFamily = "Helvetica";

function printNumbers() {
    let upto = document.getElementById("upperRange").value;
    titleH1.innerText = "Numbers from 1-" + upto;

    let numbersDiv = document.getElementById("numbers");
    let numbersHtml = "";
    for (let i = 1; i <= upto; i++) {
        numbersHtml = numbersHtml + "<h2 class='badge text-bg-warning'>" + i + "</h2>";  //<h2>1</h2><h2>2</h2>          
    }
    numbersDiv.innerHTML = numbersHtml;
}