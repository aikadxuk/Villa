let appartmentButton = document.querySelector('#appartment')
let villaButton = document.querySelector('#villa')
let penthouseButton = document.querySelector('#penthouse')

appartmentButton.addEventListener('click', appartmentClick)
villaButton.addEventListener('click', villaClick)
penthouseButton.addEventListener('click', penthouseClick)

let totalFlat = document.querySelector('#totalFlat')
let floorNumber = document.querySelector('#floorNumber')
let numberRooms = document.querySelector('#numberRooms')
let propertiesImages = document.querySelector('#propertiesImages')

function appartmentClick() {
    if (villaButton.classList.contains('orangebutton') || penthouseButton.classList.contains('orangebutton')) {
        appartmentButton.classList.replace('blackbutton', 'orangebutton')
        villaButton.classList.replace('orangebutton', 'blackbutton')
        penthouseButton.classList.replace('orangebutton', 'blackbutton')
    }
    totalFlat.innerHTML = '185 m2'
    floorNumber.innerHTML = '26th'
    numberRooms.innerHTML = '4'
    propertiesImages.setAttribute('src', './images/deal-01.jpg')
}

function villaClick() {
    if (appartmentButton.classList.contains('orangebutton') || penthouseButton.classList.contains('orangebutton')) {
        villaButton.classList.replace('blackbutton', 'orangebutton')
        appartmentButton.classList.replace('orangebutton', 'blackbutton')
        penthouseButton.classList.replace('orangebutton', 'blackbutton')
    }
    totalFlat.innerHTML = '250 m2'
    numberRooms.innerHTML = '5'
    propertiesImages.setAttribute('src', './images/deal-02.jpg')
}

function penthouseClick() {
    if (appartmentButton.classList.contains('orangebutton') || villaButton.classList.contains('orangebutton')) {
        penthouseButton.classList.replace('blackbutton', 'orangebutton')
        appartmentButton.classList.replace('orangebutton', 'blackbutton')
        villaButton.classList.replace('orangebutton', 'blackbutton')
    }
    totalFlat.innerHTML = '320 m2'
    floorNumber.innerHTML = '34th'
    numberRooms.innerHTML = '6'
    propertiesImages.setAttribute('src', './images/deal-03.jpg')
}

// Area de mapa do site


var initialCoordinates = [25.95254, -80.11878]; // Rio de Janeiro
var initialZoomLevel = 13;

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var sunnyCoordinates = [25.95254, -80.11878];
var sunnyMarkerMessage = "Sunny Isles Beach";

L.marker(sunnyCoordinates).addTo(map)
    .bindPopup(sunnyMarkerMessage)
    .openPopup();