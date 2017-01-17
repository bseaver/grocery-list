$(document).ready(function() {


  $("form").submit(function(event) {
    // Prevent page from refreshing
    event.preventDefault();

    // Put input into upperCase, then split on line feeds, then filter out blanks
    var uCGroceries = $("#inputGroceries").val().toUpperCase().split("\n").filter(function(entry) {
      return /\S/.test(entry);
    }).sort();

    // Join back together with line feeds
    $("#outputGroceries").text( uCGroceries.join("\n") );

    // Hide input and show output
    $("#inputSection").slideToggle();
    $("#outputSection").slideToggle();


  }); // End form submit

}); // End Document Ready JavaScript
