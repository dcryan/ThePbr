// Use $.ready to ensure that the DOM is set
// before executing the script;
$(function() {

  // Add script here

  $('button').click(function(){
    $('h3').text('Yo');
  });

});
