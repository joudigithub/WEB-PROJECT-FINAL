$(document).ready(function() {
    $('button.redeem-btn').click(function() {

        $('span.available-points').html(current - $('.price').val());
    });
});