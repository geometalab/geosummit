$(window).resize(function () {
    setGroupSizes();
});

function setGroupSizes() {
    var before = document.getElementById("main").getElementsByClassName("tile-group-before-break");
    var after = document.getElementById("main").getElementsByClassName("tile-group-after-break");
    var empty = document.getElementById("main").getElementsByClassName("tile-group-empty");
    var tileGroups = $.makeArray(before.concat(after).concat(empty));

    for(var i = 0; i < $(tileGroups).length; i++) {
        var tile = $(tileGroups).get(i);
        $(tile).css("height", "");
    }

    if ($(window).width() <= 800) {
        return;
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
