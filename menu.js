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

function upDateSite() {
    //getDay() Mittwoch 3, Do 4
    var now = new Date();
    if(now.getDay() == 3 && now.getHours() < 10 && now.getMinutes() < 55){
        window.location.href= "index.html";
    } else if(now.getDay() == 3 && now.getHours() > 14 && now.getMinutes() > 25) {
        window.location.href= "wednesday-afternoon.html";
    } else if(now.getDay() == 4 && now.getHours() < 10 && now.getMinutes() < 55) {
        window.location.href= "thursday-morning.html";
    } else if(now.getDay() == 4 && now.getHours() > 14 && now.getMinutes() > 25) {
        window.location.href= "thursday-afternoon.html";
    } else {
        window.location.href = "http://megageogame2.herokuapp.com/"
    }

    setGroupSizes();
    setTimeout(upDateSite, 1000000);
}