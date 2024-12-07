function toggleList(listId) {
    const list = document.getElementById(listId);
    list.classList.toggle("open");
}


   // Sidebar Toggle
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuIcon.classList.toggle("right"); // Shift the icon to the right

    // Change the image source based on sidebar state
    const iconImg = document.getElementById("iconImg");
    if (sidebar.classList.contains("open")) {
        iconImg.src = "./static/img/close.png"; // Close icon
        iconImg.classList.add("icon-close-shift"); // Apply the upward shift
    } else {
        iconImg.src = "./static/img/app.png"; // Menu icon
        iconImg.classList.remove("icon-close-shift"); // Remove the upward shift
    }
});


// Voice Search Functionality
const voiceSearchButton = document.getElementById("voiceSearch");
const voiceStatus = document.getElementById("voiceStatus");

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    voiceSearchButton.addEventListener("click", () => {
        recognition.start();
        voiceStatus.style.display = "block";
        voiceStatus.textContent = "Listening...";
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        voiceStatus.textContent = `Searching for: "${transcript}"`;

        // Check if transcript matches any location or category
        if (transcript.includes("tourist places") || transcript.includes("show all")) {
            // Show all pinpoints if "show all" or "tourist places" is said
            displayAllPinpoints();
        } else {
            // Search for specific tourist places or platforms
            searchAndShowPinpoints(transcript);
        }
    };

    recognition.onspeechend = () => {
        recognition.stop();
        voiceStatus.style.display = "none";
    };

    recognition.onerror = (event) => {
        voiceStatus.textContent = `Error occurred in recognition: ${event.error}`;
        setTimeout(() => {
            voiceStatus.style.display = "none";
        }, 2000);
    };
}

// Function to display all tourist places and pinpoints
function displayAllPinpoints() {
    // Add all tourist places and platform pinpoints to the map
    [...TOURIST_PLACES, ...PINPOINTS].forEach(place => {
        const location = { lat: place.lat, lng: place.lng };
        addMarker(location, place.title, place.icon);
    });
}

// Function to search and show specific pinpoints based on the transcript
function searchAndShowPinpoints(transcript) {
    // Filter the tourist places and pinpoints based on the search term
    const allLocations = [...TOURIST_PLACES, ...PINPOINTS];
    const filteredLocations = allLocations.filter(location =>
        location.title.toLowerCase().includes(transcript) ||
        location.name.toLowerCase().includes(transcript)
    );

    if (filteredLocations.length > 0) {
        filteredLocations.forEach(place => {
            const location = { lat: place.lat, lng: place.lng };
            addMarker(location, place.title, place.icon);
        });
    } else {
        alert(`No location found for: "${transcript}"`);
    }
}

// Function to add marker on the map
function addMarker(location, title, icon) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: title,
        icon: icon,
    });
}



// Search Bar Expand on Icon Click
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", () => {
    searchInput.focus(); // Focus the search input when the icon is clicked
});

// Search Input Functionality
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && searchInput.value.trim() !== "") {
        const searchQuery = searchInput.value.trim();

        // Perform geocoding with the search input
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: searchQuery }, (results, status) => {
            if (status === "OK") {
                const location = results[0].geometry.location;
                map.setCenter(location);
                addMarker(location, searchQuery);
            } else {
                alert(`Location not found: "${searchQuery}"`);
            }
        });
    }
});


let map;
let markers = []; // To keep track of all markers
let directionsService;
let directionsRenderer;
let userLocation;

function initMap() {
    // Custom Map Styles
    const customStyle = [
        { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#00bfff" }] },
        { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }] },
        { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] },
        { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#cccccc" }] },
        { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#ff9900" }] },
    ];

    const mapOptions = {
        zoom: 18,
        center: { lat: 19.9482, lng: 73.8421 }, // Default center: Nashik
        styles: customStyle,
    };

    // Create the map
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Initialize Directions Services
  directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: {
            strokeColor: "#0000ff", // Line color (e.g., blue)
            strokeOpacity: 0.8,     // Opacity
            strokeWeight: 8,        // Line width
        },
    });

    // Create a distance display box
    createDistanceDisplay();

    // Add predefined custom markers
    PINPOINTS.forEach((pin) => {
        addCustomMarker({ lat: pin.lat, lng: pin.lng }, pin.title, pin.icon);
    });

    // Get the current location
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            // Center map on user location
            map.setCenter(userLocation);

            // Add a marker for the user's location
            addCustomMarker(userLocation, "Your Location", null);
        },
        (error) => {
            alert("Error: The Geolocation service failed or was denied.");
        },
        {
            enableHighAccuracy: true, // Request high accuracy
            timeout: 10000, // Timeout in milliseconds
            maximumAge: 0,  // Force fresh location data
        }
    );
} else {
    alert("Error: Your browser does not support geolocation.");
}



}

// Function to add a custom marker with text and icon
function addCustomMarker(location, title, icon) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: icon
            ? {
                  url: icon, // URL of the custom icon
                  scaledSize: new google.maps.Size(30, 30), // Size of the icon
                  labelOrigin: new google.maps.Point(15, 40), // Position of the label relative to the icon
              }
            : undefined,
        label: {
            text: title, // Text label
            color: "#2d2d2d", // Label color
            fontSize: "12px",
            fontWeight: "bold",
        },
    });

    // Add a click listener to show directions and distance
    marker.addListener("click", () => {
        if (!userLocation) {
            alert("Your location is not available yet.");
            return;
        }
        calculateAndDisplayRoute(userLocation, location, title);
    });

    markers.push(marker); // Store the marker in the array
}

// Function to calculate and display the route
function calculateAndDisplayRoute(start, end, title) {
    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING, // or DRIVING, BICYCLING, TRANSIT
    };

    directionsService.route(request, (result, status) => {
        if (status === "OK") {
            directionsRenderer.setDirections(result);

            // Calculate the distance
            const distance = haversineDistance(start, end);
            updateDistanceDisplay(`Distance to "${title}": ${distance.toFixed(2)} km`);
        } else {
            alert("Directions request failed due to " + status);
        }

        
    });
}

// Function to calculate distance using the Haversine formula
function haversineDistance(coord1, coord2) {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of Earth in kilometers
    const dLat = toRad(coord2.lat - coord1.lat);
    const dLon = toRad(coord2.lng - coord1.lng);
    const lat1 = toRad(coord1.lat);
    const lat2 = toRad(coord2.lat);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Function to create a distance display box
function createDistanceDisplay() {
    const distanceBox = document.createElement("div");
    distanceBox.id = "distanceDisplay";
    distanceBox.style.position = "absolute";
    distanceBox.style.top = "60px";
    distanceBox.style.left = "50%";
    distanceBox.style.transform = "translateX(-50%)";
    distanceBox.style.padding = "20px 20px";
    distanceBox.style.backgroundColor = "#ffffff";
    distanceBox.style.border = "1px solid #ccc";
    distanceBox.style.borderRadius = "5px";
    distanceBox.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    distanceBox.style.zIndex = "1000";
    distanceBox.style.fontSize = "16px";
    distanceBox.style.textAlign = "center";
    distanceBox.textContent = "Click a marker to see the distance";
    distanceBox.style.fontWeight = "bold";

    document.body.appendChild(distanceBox);
}

// Function to update the distance display box
function updateDistanceDisplay(text) {
    const distanceBox = document.getElementById("distanceDisplay");
    if (distanceBox) {
        distanceBox.textContent = text;
    }
}

function highlightPinpoints(category) {
    // Clear previous highlights
    document.querySelectorAll('.menu-list li').forEach((li) => li.classList.remove('highlight'));

    // Highlight the selected list item
    const selectedItem = Array.from(document.querySelectorAll('.menu-list li')).find(
        (li) => li.textContent === category
    );
    if (selectedItem) selectedItem.classList.add('highlight');

    // Stop animation for all markers
    markers.forEach((marker) => marker.setAnimation(null));

    // Highlight all pinpoints in the selected category
    const selectedPins = PINPOINTS.filter((pin) => pin.category === category);
    selectedPins.forEach((pin) => {
        const marker = markers.find(
            (m) => m.getPosition().lat() === pin.lat && m.getPosition().lng() === pin.lng
        );
        if (marker) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            // Optionally pan to the first marker in the category
            map.panTo(marker.getPosition());
        }
    });
}


function highlightPinpoints(category) {
    // Clear previous highlights
    document.querySelectorAll('.menu-list li').forEach((li) => li.classList.remove('highlight'));

    // Highlight the selected menu item
    const selectedItem = Array.from(document.querySelectorAll('.menu-list li')).find(
        (li) => li.textContent === category
    );
    if (selectedItem) selectedItem.classList.add('highlight');

    // Stop animation for all markers
    markers.forEach((marker) => marker.setAnimation(null));

    // Filter and highlight all markers in the selected category
    const selectedPins = PINPOINTS.filter((pin) => pin.category === category);
    const bounds = new google.maps.LatLngBounds(); // Define bounds for zoom

    selectedPins.forEach((pin) => {
        const marker = markers.find(
            (m) => m.getPosition().lat() === pin.lat && m.getPosition().lng() === pin.lng
        );
        if (marker) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            bounds.extend(marker.getPosition()); // Add marker to bounds
        }
    });

    // Adjust the map to fit all selected markers
    map.fitBounds(bounds);
}



// Predefined constant pinpoints with text and icons
const PINPOINTS = [
    { id: 'Platform 3',lat: 19.947255492904763, lng: 73.8422848190672, title: "Platform 3", icon: "./static/img/train-station.png" }, // Example 1
    { id: 'Platform 1 Point 1', lat: 19.94773847335532, lng: 73.84220091350372, title: "Platform 1", category: "Platform 1", icon: "./static/img/train-station.png" }, // Example 2
    { id: 'Platform 1 Point 7',lat: 19.948695330002558, lng: 73.84208099586698, title: "Reservation Counter",category: "Platform 1", icon: "./static/img/ticket-office.png" }, // Example 3
    { id: 'Platform 3 Point 4',lat:19.94769388957853, lng: 73.84297092277446, title: "Railway Station Pay & Park",category: "Platform 3", icon: "./static/img/parking.png" }, // Example 1
    { id: 'Platform 3 Point 1', lat: 19.94792176280579, lng: 73.84278592004723, title: "Water Stand", category: "Platform 3", icon: "./static/img/drop (1).png" },

    { id: 'Platform 2 Point 1',lat: 19.949000752161943, lng: 73.84261514058241, title: "Lift and Stairs",category: "Platform 2", icon: "./static/img/work.png" }, // Example 3
    { id: 'Platform 1 Point 2',lat: 19.949073868898434, lng: 73.84239788165445, title: "Lift and Stairs Bhusval end",category: "Platform 1", icon: "./static/img/work.png" }, // 
    { id: 'Platform 1 Point 3',lat: 19.948904943962038, lng: 73.84242470374326, title: "Pay and Use toilet near parcel office",category: "Platform 1", icon: "./static/img/toilet.png" }, 
    { id: 'Platform 1 Point 4',lat: 19.948881622227113, lng: 73.84214240124673, title: "Parcel Office",category: "Platform 1", icon: "./static/img/box.png" }, // Example 3
    { id: 'Platform 1 Point 14',lat: 19.94875366774617, lng: 73.84240592828107, title: "Water Stand PF at middle",category: "Platform 1", icon: "./static/img/drop (1).png" }, // Example 1
    { id: 'Platform 1 Point 15',lat: 19.94837037997832, lng: 73.8415192857732, title: "Nashik road Bus stop",category: "Platform 1", icon: "./static/img/bus-stop.png" }, // Example 2
    { id: 'Platform 1 Point 6',lat: 19.948378860511262, lng: 73.84231771855413, title: "Ladies Waiting Room",category: "Platform 1", icon: "./static/img/waiting-room.png" }, // Example 3
    { id: 'Platform 1 Point 5',lat: 19.948548471074297, lng: 73.84236733867046, title: "Waiting Room and Cloak room paid",category: "Platform 1", icon: "./static/img/school-locker.png" }, // Example 3
    { id: 'Platform 3 Point 5',lat: 19.948454784853407, lng: 73.84295156280345, title: "Reservation Counter",category: "Platform 3", icon: "./static/img/ticket-office.png" }, // Example 3
    { id: 'Platform 1 Point 8',lat: 19.94755363580919, lng: 73.84188516992276, title: "Sleeping Pod(Vatsalyam)",category: "Platform 1", icon: "./static/img/bed.png" }, // Example 1
    { id: 'Platform 1 Point 9',lat: 19.947581864126462, lng: 73.84204915044238, title: "Deluxe Toilet",category: "Platform 1", icon: "./static/img/toilet.png" }, // Example 2
    { id: 'Platform 1 Point 10',lat: 19.94745544178198, lng: 73.84204121281842, title: "ATM",category: "Platform 1", icon: "./static/img/atm.png" }, // Example 3
    { id: 'Platform 1 Point 13',lat: 19.94737791202757, lng: 73.84201774349071, title: "Waiting room and Cloak room paid",category: "Platform 1", icon: "./static/img/school-locker.png" }, // Example 3
    { id: 'Platform 3 Point 2',lat: 19.947093392634322, lng: 73.84246655335382, title: "Lift and Stairs Mumbai end",category: "Platform 3", icon: "./static/img/work.png" }, // Example 2
    { id: 'Platform 2 Point 2',lat: 19.94717596512187, lng: 73.84224124780778, title: "Lift and Escalators",category: "Platform 2", icon: "./static/img/escalator-down.png" }, // Example 3
    { id: 'Platform 1 Point 12',lat: 19.94768630198704, lng: 73.84184148280016, title: "IRCTC Dorimotory ",category: "Platform 1", icon: "./static/img/bunk-bed.png" }, // Example 2
    { id: 'Platform 1 Point 11',lat: 19.947468872817097, lng: 73.84185339909355, title: "AC retiring Hall(Godavari waiting Hall)",category: "Platform 1", icon: "./static/img/waiting-room (1).png" }, // Example 3

 
];


const TOURIST_PLACES = [
    { name: 'Trimbakeshwar', lat: 19.93453011425969, lng: 73.52842423653824, title: 'Trimbakeshwar Temple', icon: './static/img/temple.png' },
    { name: 'Mukti Dham Mandir', lat:19.953828048064583, lng: 73.83737826265069, title: 'Mukti Dham Mandir', icon: './static/img/temple.png' },
    { name: 'Pandav Leni', lat: 19.94463047693236, lng: 73.7463977372903, title: 'Pandav Leni', icon: './static/img/temple.png' },
    { name: 'Panchvati', lat: 20.010315331401916, lng: 73.79150030377282, title: 'Panchvati', icon: './static/img/temple.png' },
    { name: 'Saptashrungi Devi Mandir', lat: 20.00744084120391, lng: 73.79929304059421, title: 'Saptashrungi Devi Mandir', icon: './static/img/temple.png' },
    { name: 'Sula Wine Yard', lat: 20.00583355051259, lng: 73.68834345884471, title: 'Sula Wine Yard', icon: './static/img/photo-camera-interface-symbol-for-button.png' },
    { name: 'Jain Mandir', lat: 19.950409617723597, lng: 73.5853031983178, title: 'Jain Mandir', icon: './static/img/temple.png' },
    { name: 'Anjaneri (Hanuman Temple)', lat: 19.952427945637567, lng: 73.58617831673308, title: 'Anjaneri Hanuman Temple', icon: './static/img/temple.png' },
    { name: 'Ramkund', lat: 20.008363233800278, lng: 73.792539081843, title: 'Ramkund', icon: './static/img/photo-camera-interface-symbol-for-button.png' },
    { name: 'Kalaram Mandir', lat: 20.007435753945348, lng: 73.79522129074769, title: 'Kalaram Mandir', icon: './static/img/temple.png' },
    { name: 'Sita Gufa', lat: 20.007919657116876, lng: 73.79599376690547, title: 'Sita Gufa', icon: './static/img/photo-camera-interface-symbol-for-button.png' },
    { name: 'Someshwar Mandir', lat: 20.004587365702832, lng: 73.79132816733286, title: 'Someshwar Mandir', icon: './static/img/temple.png' },
    { name: 'Coin Museum', lat: 19.958324062485083, lng: 73.61125273880573, title: 'Coin Museum', icon: './static/img/photo-camera-interface-symbol-for-button.png' },
    { name: 'Gondeshwar Mandir Sinnar', lat: 19.85149481194432, lng: 74.00206217901264, title: 'Gondeshwar Mandir', icon: './static/img/temple.png' },
    { name: 'Tapowan', lat: 19.9872720045505, lng: 73.81093044681361, title: 'Tapowan', icon: './static/img/temple.png' },
];

function addTouristPinpoints(placeName) {
    // Find the corresponding tourist place
    const place = TOURIST_PLACES.find((p) => p.name === placeName);

    if (!place) {
        console.error('Place not found:', placeName);
        return;
    }

    // Add a custom marker for the place
    addCustomMarker({ lat: place.lat, lng: place.lng }, place.title, place.icon);

    // Center the map on the added marker
    map.setCenter({ lat: place.lat, lng: place.lng });
    map.setZoom(14); // Adjust zoom level
}


// Load the map
window.initMap = initMap;
let position;
let cooords = '';
console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);