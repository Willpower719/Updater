$(function() {
   $(window).keypress(function(e) {
       var key = e.which;
       if (key == 27){
            $( ".genericLoader" ).fadeOut( 500, function() {
                      dewRcon.send('Game.SetMenuEnabled 0');
            });
       } else if (key ==96){
            dew.show("console");
       }
   });
});

dew.on("show", function (event) {
    switch (event.screen) {
        case "browser":
            break;
        default:
            dew.hide();
            break;
    }
});