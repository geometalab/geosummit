function buttonOneAction() {
    document.getElementById("main").innerHTML = document.getElementById("part1").innerHTML;
    document.getElementById("dateText").textContent = "Mittwoch Morgen";
    document.getElementById("dateTextMob").textContent = "Mi Morgen";
}

function buttonTwoAction() {
    document.getElementById("main").innerHTML = document.getElementById("part2").innerHTML;
    document.getElementById("dateText").textContent = "Mittwoch Nachmittag";
    document.getElementById("dateTextMob").textContent = "Mi Nachmittag";
}

function buttonThreeAction() {
    document.getElementById("main").innerHTML = document.getElementById("part3").innerHTML;
    document.getElementById("dateText").textContent = "Donnerstag Morgen";
    document.getElementById("dateTextMob").textContent = "Do Morgen";
}

function buttonFourAction() {
    document.getElementById("main").innerHTML = document.getElementById("part4").innerHTML;
    document.getElementById("dateText").textContent = "Donnerstag Nachmittag";
    document.getElementById("dateTextMob").textContent = "Do Nachmittag";
}