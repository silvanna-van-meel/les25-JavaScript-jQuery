// JavaScript-code toevoegen
$(document).ready(function () {
    // de knop selecteren
    var knop = $("#button");
    // de bericht selecteren
    var bericht = $("#message");
    // een klik-event toevoegen aan de knop
    knop.click(function () {
        // de tekst van de bericht veranderen
        bericht.text("Hallo, dit is een simpele jQuery-toepassing!");
    });
});
