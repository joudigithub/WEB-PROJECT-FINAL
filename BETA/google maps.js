var lebanon = { lat: 33.8547, lng: 35.6 };
var saida = { lat: 33.564929, lng: 35.368801 };
var beirut = { lat: 33.8938, lng: 35.5018 };
var tyre = { lat: 33.271992, lng: 35.203487 };
var tripoli = { lat: 34.43667, lng: 35.84972 };
// var end;
// var start;

let cities = [];
cities["saida"] = saida;
cities["beirut"] = beirut;
cities["tyre"] = tyre;
cities["tripoli"] = tripoli;

var saida_label = { lat: 33.53, lng: 35.368801 };
var beirut_label = { lat: 33.95, lng: 35.5018 };
var tyre_label = { lat: 33.2, lng: 35.203487 };
var tripoli_label = { lat: 34.5, lng: 35.84972 };

var tyre_icon = { lat: 33.19, lng: 35.38 };
var saida_icon = { lat: 33.53, lng: 35.54 };
var tripoli_icon = { lat: 34.33, lng: 35.99 };
var beirut_icon = { lat: 33.8038, lng: 35.71 };

function ret() {
    var from = document.getElementById("start");
    var start = from.options[from.selectedIndex].value;

    var to = document.getElementById("end");
    var end = to.options[to.selectedIndex].value;

    window.localStorage.setItem("start", start);
    window.localStorage.setItem("end", end);

    var start22 = window.localStorage.getItem("start");
    var end22 = window.localStorage.getItem("end");

    console.log(start);
    console.log(start22);

    console.log(end);
    console.log(end22);
}

var mapStyle = [
    { elementType: "geometry", stylers: [{ color: "#934e00" }] },
    {
        elementType: "labels.text.fill",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },

    {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#ffa500" }]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "road",
        elementType: "geometry",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        visibility: "false",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#000000" }, { visibility: "off" }]
    },
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#1ebbd7" }]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#1ebbd7" }]
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
    }
];

function initMap() {
    var start22 = window.localStorage.getItem("start");
    var end22 = window.localStorage.getItem("end");

    console.log("start22", start22);
    console.log("end22", end22);

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9.3,
        center: beirut,
        mapTypeControl: false,
        streetViewControl: false,
        scrollwheel: false,
        draggable: true,
        zoomControl: false
    });
    var marker1 = new google.maps.Marker({
        position: saida,
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });
    var marker2 = new google.maps.Marker({
        position: beirut,
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });
    var marker3 = new google.maps.Marker({
        position: tyre,
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });
    var marker4 = new google.maps.Marker({
        position: tripoli,
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });

    var marker5 = new google.maps.Marker({
        position: tyre_icon,
        map: map,
        icon: "photos/tyre_icon.png"
    });
    var marker6 = new google.maps.Marker({
        position: saida_icon,
        map: map,
        icon: "photos/saida_icon.png"
    });
    var marker7 = new google.maps.Marker({
        position: beirut_icon,
        map: map,
        icon: "photos/beirut_icon.png"
    });
    var marker8 = new google.maps.Marker({
        position: tripoli_icon,
        map: map,
        icon: "photos/tripoli_icon.png"
    });

    var label1 = new google.maps.Marker({
        position: saida_label,
        map: map,
        label: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "20px",
            text: "SAIDA"
        },
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 0
        }
    });
    var label2 = new google.maps.Marker({
        position: beirut_label,
        map: map,
        label: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "20px",
            text: "BEIRUT"
        },
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 0
        }
    });
    var label3 = new google.maps.Marker({
        position: tyre_label,
        map: map,
        label: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "20px",
            text: "TYRE"
        },
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 0
        }
    });
    var label4 = new google.maps.Marker({
        position: tripoli_label,
        map: map,
        label: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "20px",
            text: "TRIPOLI"
        },
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 0
        }
    });

    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };

    map.addListener("center_changed", function() {
        window.setTimeout(function() {
            map.panTo(marker2.getPosition());
        }, 250);
    });

    var line = new google.maps.Polyline({
        path: [cities[start22], cities[end22]],
        icons: [{
            icon: lineSymbol,
            offset: "100%"
        }],
        map: map
    });

    //set style
    map.set("styles", mapStyle);

    // linePath.setMap(map);
}