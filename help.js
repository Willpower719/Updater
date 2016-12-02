$(document).keydown(function (e) {
    // Hide when a key is pressed
    dew.hide();
});

function setTitle(text) {
    $("#title").text(text);
}

function setMessage(text) {
    $("#message").text(text);
}

$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

dew.on("show", function (event) {
    switch (event.screen) {
        case "browser":
            setTitle("Help and FAQ");
            setMessage("Check your internet connection and make sure that Game.MenuURL points to a valid URL.");
            break;
        default:
            dew.hide();
            break;
    }
});