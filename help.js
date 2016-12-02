$(function() {
   $(window).keypress(function(e) {
       var key = e.which;
       if (key == 27){
           dew.hide();
            };
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