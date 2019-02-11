$(document).ready(function() {
    $('#see_more').click(function(event) {
        event.preventDefault();

        var text = $(this).text();

        if (text == "Show more") {
            $(this).html("Show less");
        } else {
            $(this).html("Show more");
        }
    })
})

var button = document.querySelector('.bt-menu-trigger');
button.addEventListener('click', function (){
  button.classList.toggle('bt-menu-open');
});