window.onload = function() {
    /* TICKET MODAL SCRIPTS WILL LOAD HERE */
    // Get the modal
    var modal = document.getElementById("tickets-modal");
    var modal2 = document.getElementById("destination-modal");


    // Get the button that opens the modal
    var btn = document.getElementById("tickets-card");
    var btn2 = document.getElementById("destination-card");


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[1];


    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    btn2.onclick = function() {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }


    //Validate Form
    function validateForm() {
        select = this;
        if (select.value == "") {
            alert("Please Choose A Trip")
            return false;
        }
        return true;
    }

    function resetFunction() {
        document.getElementById("whole-ticket-form").reset();
    }
    //Form Price Calculation

    function pricecalculation() {
        var select_deck = document.getElementById("select-deck").value;
        var adult_number = document.getElementById("adultno").value;
        var total_price = select_deck * adult_number;
        document.getElementById("total_price").value = total_price;
    }
}