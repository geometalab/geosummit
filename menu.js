function buttonOneAction() {
    document.getElementById("main").innerHTML = document.getElementById("part1").innerHTML;
    document.getElementById("dateTextMob").textContent = "Mi Morgen";
}

function buttonTwoAction() {
    document.getElementById("main").innerHTML = document.getElementById("part2").innerHTML;
    document.getElementById("dateTextMob").textContent = "Mi Nachmittag";
}

function buttonThreeAction() {
    document.getElementById("main").innerHTML = document.getElementById("part3").innerHTML;
    document.getElementById("dateTextMob").textContent = "Do Morgen";
}

function buttonFourAction() {
    document.getElementById("main").innerHTML = document.getElementById("part4").innerHTML;
    document.getElementById("dateTextMob").textContent = "Do Nachmittag";
}

$(document).on("click", 'ul li', function(){
    $('ul li').removeClass('active');
    $(this).addClass('active');
});