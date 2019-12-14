var value = {
    standard: [{
            id: 1,
            name: 'Upper Deck (7,000 L.L.)',
            value: 7000,
        },
        {
            id: 2,
            name: 'Lower Deck (3,000 L.L.)',
            value: 3000,
        }
    ],
    express: [{
        id: 3,
        name: 'Express (5,000 L.L.',
        value: 5000,
    }]
}
var trips = [{
        id: 100,
        name: '#100 BEY-TRI (EXPRESS)',
        value: value.express,
    },
    {
        id: 200,
        name: '#200 BEY- SID (STANDARD)',
        value: value.standard,
    },
    {
        id: 300,
        name: '#300 BEY-BYB (STANDARD)',
        value: value.standard,
    },
    {
        id: 400,
        name: '#400 TYR-BEI (EXPRESS)',
        value: value.express,
    },
]

function onTripChange() {
    var selectedTrip = $('#selecttrip').children("option:selected").val()

    if (selectedTrip != '') {
        $('#selectdeck').prop('disabled', false)
        var options = '<option value="">Please Choose Your Deck</option>'
        console.log(trips.find(trip => {
            return trip.id == selectedTrip
        }))
        trips.find(trip => {
            return trip.id == selectedTrip
        }).value.forEach(type => {
            options += `<option value="${type.value}">${type.name}</option>`
        })
        $('#selectdeck').html(options)
    } else {
        $('#selectdeck').prop('disabled', true)
        $('#selectdeck').html('<option value="">Please Choose Your Trip First</option>')
    }

}

$(document).ready(function() {
    $('#selectdeck').prop('disabled', false)

    // init options
    (function() {
        var tripOptions = '<option value="">Please Choose Your Trip</option>'
        trips.forEach(trip => {
            tripOptions += `<option value="${trip.id}">${trip.name}</option>`
        })
        $('#selecttrip').html(tripOptions)
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