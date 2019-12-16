$(document).ready(function() {
    var current = ($('span.available-points'));


    $('button.redeem-btn').click(function() {

        $('span.available-points').html(current - $('.price').val());
    });
});