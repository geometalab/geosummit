function buttonOneAction() {
    document.getElementById("main").innerHTML = document.getElementById("part1").innerHTML;
    document.getElementById("dateTextMob").textContent = "Mi Morgen";
    setGroupSizes();
}

function buttonTwoAction() {
    document.getElementById("main").innerHTML = document.getElementById("part2").innerHTML;
    document.getElementById("dateTextMob").textContent = "Mi Nachmittag";
    setGroupSizes();
}

function buttonThreeAction() {
    document.getElementById("main").innerHTML = document.getElementById("part3").innerHTML;
    document.getElementById("dateTextMob").textContent = "Do Morgen";
    setGroupSizes();
}

function buttonFourAction() {
    document.getElementById("main").innerHTML = document.getElementById("part4").innerHTML;
    document.getElementById("dateTextMob").textContent = "Do Nachmittag";
    setGroupSizes();
}

$(window).resize(function () {
    setGroupSizes();
});

function setGroupSizes() {
    var before = document.getElementById("main").getElementsByClassName("tile-group-before-break");
    var after = document.getElementById("main").getElementsByClassName("tile-group-after-break");
    var empty = document.getElementById("main").getElementsByClassName("tile-group-empty");
    var tileGroups = $.makeArray($.merge($.merge(before, after), empty));

    for(var i = 0; i < $(tileGroups).length; i++) {
        var tile = $(tileGroups).get(i);
        $(tile).css("height", "");
    }

    tileHeightToHighest(before);
    tileHeightToHighest(after);
    tileHeightToHighest(empty);
}

function getBiggestTileHeight(tiles) {
    var biggestTileHeight = 0;

    for (var i = 0; i < $(tiles).length; i++) {
        var tile = $(tiles).get(i);

        if (biggestTileHeight < $(tile).height()) {
            biggestTileHeight = $(tile).height();
        }
    }

    return biggestTileHeight;
}

function tileHeightToHighest(elements) {
    var tiles = $.makeArray(elements);
    var biggestTileHeight = getBiggestTileHeight(tiles);

    for (var i = 0; i < $(tiles).length; i++) {
        var tile = $(tiles).get(i);
        $(tile).css("height", biggestTileHeight);

        // var tables = $.makeArray(tile.getElementsByTagName("table"));
        // var tableHeight = biggestTileHeight / $(tables).length;
        //
        // for (var x = 0; x < $(tables).length; x++) {
        //     var table = $(tables).get(x);
        //     $(table).css("height", tableHeight);
        // }
    }
}

$(document).on("click", 'ul li', function(){
    $('ul li').removeClass('active');
    $(this).addClass('active');
});
