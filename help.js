 var code = e.keyCode || e.which;
 if(code == 13) { //Enter keycode
    dewRcon.send('Game.SetMenuEnabled 0');//Do something
 }

function setTitle(text) {
    $("#title").text(text);
}

function setMessage(text) {
    $("#message").text(text);
}

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