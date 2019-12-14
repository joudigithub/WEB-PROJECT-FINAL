$(document).ready(function() {

    // init options
    (function() {
        $('#start').html();
    })();


    // MODALS
    var btn = $("#tickets-card");
    var btn2 = $("#destination-card");
    var span = $(".close");
    //var span2 = $(".close")[1];
    btn.click(function() {
        $("#tickets-modal").css('display', 'block');
    });
    // btn2.click(function() {
    //     $("#destination-modal").css('display', 'block');
    // });
    span.click(function() {
        $("#tickets-modal").css('display', 'none');
    });
    // span2.click(function() {
    //     $("#destination-modal").style.display = "none";
    // });
    window.onclick = function(event) {
            if (event.target == $("#tickets-modal")) {
                $("#tickets-modal").style.display = "none";
            }
        }
        // window.onclick = function(event) {
        //     if (event.target == modal2) {
        //         $("#destination-modal").style.display = "none";
        //     }
        // }

    //Validate Form
    // function validateForm() {
    //     select = this;
    //     if (select.value == "") {
    //         alert("Please Choose A Trip")
    //         return false;
    //     }
    //     return true;
    // }

    // function resetFunction() {
    //     document.getElementById("whole-ticket-form").reset();
    // }
    // //Form Price Calculation

    // function pricecalculation() {
    //     var select_deck = document.getElementById("select-deck").value;
    //     var adult_number = document.getElementById("adultno").value;
    //     var total_price = select_deck * adult_number;
    //     document.getElementById("total_price").value = total_price;
    // }
})