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
        iconImg.src = "./static/img/train (2).png"; // Menu icon
        iconImg.classList.remove("icon-close-shift"); // Remove the upward shift
    }

      // Close all submenus when the sidebar is closed   
       if (!sidebar.classList.contains("open")) {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.display = 'none'; // Hide all submenus
        });
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


// LOCATION AND SUBMENU CODE
let map;
let markers = [];
let directionsService;
let directionsRenderer;
let userLocation = null; // User's current location
let userLocationMarker = null;
let isMapCentered = false;
let closestMarker = null; // Track the selected destination marker
let distanceBox = null; // New box for displaying the distance on the path


function initMap() {
    const customStyle = [
        { "featureType": "water", "stylers": [{ "color": "#00bfff" }] },
        { "featureType": "landscape", "stylers": [{ "color": "#f2f2f2" }] },
        { "featureType": "road", "stylers": [{ "color": "#ffffff" }] },
        { "featureType": "poi", "stylers": [{ "visibility": "off" }] }
    ];

    const mapOptions = {
        zoom: 18,
        center: { lat: 19.9482, lng: 73.8421 }, // Default center
        styles: customStyle,
        mapTypeControl: false,
        streetViewControl: false,
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: {
            strokeColor: "#004DBC", // Highlighted route in red
            strokeOpacity: 0.9,
            strokeWeight: 6,
        },
        suppressMarkers: true, // Suppress default markers from directions
    });

    // Display user's location and add predefined markers
    displayUserLocation();
    PINPOINTS.forEach((pin) => {
        addCustomMarker({ lat: pin.lat, lng: pin.lng }, pin.title, pin.icon);
    });

    createDistanceBox(); // Create the new box for showing distance
}

// Display the user's location and create a marker for it
function displayUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                if (userLocationMarker) {
                    userLocationMarker.setPosition(userLocation);
                } else {
                    userLocationMarker = new google.maps.Marker({
                        position: userLocation,
                        map: map,
                        label: {
                            color: "#ffffff",
                            fontSize: "12px",
                            fontWeight: "bold",
                        },
                        icon: {
                            url: "./static/img/circle.png", // Blue marker for user
                            scaledSize: new google.maps.Size(30, 30),
                        },
                    });
                }

                if (!isMapCentered) {
                    map.setCenter(userLocation);
                    isMapCentered = true; // Prevent recentering on every location update
                }

                // If there's a closest marker, recalculate the route dynamically
                if (closestMarker) {
                    updateRoute(userLocation, closestMarker.position); // Recalculate the route
                    displayLiveDistance(userLocation, closestMarker.position); // Update live distance
                }
            },
            (error) => {
                alert("Error: Unable to fetch your location.");
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to add a custom marker with text (title) and icon
function addCustomMarker(location, title, icon) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: icon
            ? {
                  url: icon, // URL of the custom icon
                  scaledSize: new google.maps.Size(30, 30), // Custom icon size
                  labelOrigin: new google.maps.Point(15, 40), // Position of label relative to icon
              }
            : undefined,
        label: {
            text: title, // Show the title directly on the map
            color: "#000000", // Label text color
            fontSize: "10px",
            fontWeight: "bold",
        },
    });

    marker.title = title;
    // Add a click listener to calculate the route and show distance
    marker.addListener("click", () => {
        if (!userLocation) {
            alert("Your location is not available yet. Please wait.");
            return;
        }

        closestMarker = marker; // Update the closest marker
        updateRoute(userLocation, marker.position); // Recalculate the route
        displayLiveDistance(userLocation, marker.position); // Update live distance

        // Hide other markers when one is selected
        hideOtherMarkers(marker);
    });

    markers.push(marker); // Store the marker in the array
}

// Function to detect deviation and add a dotted line
function checkDeviationAndDrawDottedLine(routePolyline) {
    if (!userLocation || !routePolyline) return;

    const userPoint = new google.maps.LatLng(userLocation.lat, userLocation.lng);
    const routePath = routePolyline.getPath();
    let closestPoint = null;
    let minDistance = Infinity;

    // Find the closest point on the route to the user's location
    routePath.forEach((point) => {
        const distance = google.maps.geometry.spherical.computeDistanceBetween(
            userPoint,
            point
        );
        if (distance < minDistance) {
            minDistance = distance;
            closestPoint = point;
        }
    });

    // If deviation exceeds 20 meters, draw a dotted line
    if (minDistance > 20) {
        new google.maps.Polyline({
            path: [userPoint, closestPoint],
            map: map,
            strokeColor: "#000000",
            strokeOpacity: 0.7,
            strokeWeight: 3,
            icons: [
                {
                    icon: {
                        path: "M 0,-1 0,1",
                        strokeOpacity: 1,
                        scale: 2,
                    },
                    offset: "0",
                    repeat: "10px",
                },
            ],
        });
    }
}


function updateRoute(start, end) {
    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING,
    };

    directionsService.route(request, (result, status) => {
        if (status === "OK") {
            // Render the route
            directionsRenderer.setDirections(result);

            // Get the route's path
            const routePath = result.routes[0].overview_path;

            // Find the last point of the route
            const lastRouteablePoint = routePath[routePath.length - 1];

            // Draw a dotted line from the last point to the destination
            drawDottedLine(lastRouteablePoint, end);

            // Display total route distance
            calculateAndDisplayRouteDistance(result.routes[0].legs[0]);
        } else {
            console.warn("No route found. Drawing a direct dotted line.");
            drawDottedLine(start, end); // Draw dotted line directly if no route
        }
    });
}

// Function to draw a dotted line
function drawDottedLine(startPoint, endPoint) {
    new google.maps.Polyline({
        path: [startPoint, endPoint],
        strokeOpacity: 0, // Make the solid line invisible
        map: map,
        icons: [
            {
                icon: {
                    path: google.maps.SymbolPath.CIRCLE, // Dotted line as circles
                    fillOpacity: 1,
                    fillColor: "#74ACFF", // Black dots
                    strokeOpacity: 1,
                    strokeColor: "#000000",
                    scale: 2, // Size of dots
                },
                offset: "0",
                repeat: "10px", // Distance between dots
            },
        ],
    });
}


// Function to calculate and display the total route distance
function calculateAndDisplayRouteDistance(routeLeg) {
    const totalDistance = routeLeg.distance.text; // The distance is provided in the response
    updateDistanceDisplay(`Total route distance: ${totalDistance}`);
}

// Function to update live distance dynamically
function displayLiveDistance(start, end) {
    const distance = haversineDistance(start, end);
    let distanceMessage = "";

    if (!isNaN(distance)) {
        if (distance < 1000) {
            // Display distance in meters if less than 1 km
            distanceMessage = `Distance: ${distance.toFixed(0)} meters`;
        } else {
            // Display distance in kilometers if 1 km or more
            distanceMessage = `Distance: ${distance.toFixed(2)} km`;
        }
    }

    updateDistanceDisplay(distanceMessage);
}

// Function to hide all markers except the selected one
function hideOtherMarkers(selectedMarker) {
    markers.forEach((marker) => {
        if (marker !== selectedMarker) {
            marker.setMap(null); // Hide the marker
        }
    });
}

// Function to show all markers (for back button)
function showAllMarkers() {
    markers.forEach((marker) => {
        marker.setMap(map); // Show the marker again
    });
}
// Function to update distance display on the map
function updateDistanceDisplay(message) {
    const distanceDisplay = document.getElementById("distanceDisplay");
    if (distanceDisplay) {
        distanceDisplay.innerText = message;
    }
}



// Function to calculate the Haversine distance
function haversineDistance(coords1, coords2) {
    if (!coords1 || !coords2) return NaN;

    const R = 6371; // Radius of the Earth in kilometers
    const toRad = (value) => (value * Math.PI) / 180;

    const dLat = toRad(coords2.lat - coords1.lat);
    const dLng = toRad(coords2.lng - coords1.lng);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(coords1.lat)) *
            Math.cos(toRad(coords2.lat)) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceKm = R * c; // Distance in kilometers

    if (distanceKm < 1) {
        return distanceKm * 1000; // Convert to meters if distance is less than 1 km
    } else {
        return distanceKm; // Return distance in kilometers
    }
}

// Create a distance box for showing live distance
function createDistanceBox() {
    distanceBox = document.createElement("div");
    distanceBox.id = "distanceBox";
    distanceBox.style.position = "absolute";
    distanceBox.style.top = "50px";
    distanceBox.style.left = "50%";
    distanceBox.style.transform = "translateX(-50%)";
    distanceBox.style.padding = "10px";
    distanceBox.style.backgroundColor = "white";
    distanceBox.style.border = "1px solid #ccc";
    distanceBox.style.borderRadius = "5px";
    distanceBox.style.zIndex = "1000";
    distanceBox.innerText = "Click a marker to calculate route to Point B";

    document.body.appendChild(distanceBox);
}

// Function to update the distance display box
function updateDistanceDisplay(text) {
    if (distanceBox) {
        distanceBox.textContent = text;
    }
}



function bounceAllPins(category) {
    // Clear previous highlights
    document.querySelectorAll('.menu-list li').forEach((li) => li.classList.remove('highlight'));

    // Highlight the selected menu item
    const selectedItem = Array.from(document.querySelectorAll('.menu-list li')).find(
        (li) => li.textContent === category
    );
    if (selectedItem) selectedItem.classList.add('highlight');

    // Stop animation for all markers
    markers.forEach((marker) => marker.setAnimation(null));

    // Bounce all markers in the selected category
    const selectedPins = PINPOINTS.filter((pin) => pin.category === category);
    const bounds = new google.maps.LatLngBounds(); // Define bounds for zoom

    selectedPins.forEach((pin) => {
        const marker = markers.find(
            (m) => m.getPosition().lat() === pin.lat && m.getPosition().lng() === pin.lng
        );
        if (marker) {
            marker.setAnimation(google.maps.Animation.BOUNCE); // Make marker bounce
            bounds.extend(marker.getPosition()); // Add marker to bounds
        }
    });

    // Adjust the map to fit all selected markers
    map.fitBounds(bounds); // Fit the map to the category's bounds
}



// Predefined constant pinpoints with text and icons 
const PINPOINTS = [
      // Platform 1 markers
      { id: 'Platform 1 ', lat: 19.947730239875234, lng: 73.8421970006081, title: "Platform 1", category: "Platform 1", icon: "./static/img/train-station.png" },
      
      { id: 'Platform 1 Point 2', lat: 19.949073868898434, lng: 73.84239788165445, title: "Lift and Stairs Bhusval end", category: "Platform 1", icon: "./static/img/work.png" },
      { id: 'Platform 1 Point 3', lat: 19.947196, lng: 73.842069, title: "Passenger Lift", category: "Platform 1", icon: "./static/img/lift.png" },
      { id: 'Platform 1 Point 4', lat: 19.9485667622535, lng: 73.8422558012047, title: "Pay and Use toilet near parcel office", category: "Platform 1", icon: "./static/img/toilet.png" },
      { id: 'Platform 1 Point 5', lat: 19.948881622227113, lng: 73.84214240124673, title: "Parcel Office", category: "Platform 1", icon: "./static/img/box.png" },
    //   { id: 'Platform 1 Point 6', lat: 19.948548471074297, lng: 73.84236733867046, title: "Waiting Room and Cloak room paid", category: "Platform 1", icon: "./static/img/school-locker.png" },
      { id: 'Platform 1 Point 7', lat: 19.948378860511262, lng: 73.84231771855413, title: "Ladies Waiting Room", category: "Platform 1", icon: "./static/img/waiting-room.png" },
    //   { id: 'Platform 1 Point 8', lat: 19.948695330002558, lng: 73.84208099586698, title: "Reservation Counter", category: "Platform 1", icon: "./static/img/ticket-office.png" },
    //   { id: 'Platform 1 Point 9', lat: 19.94755363580919, lng: 73.84188516992276, title: "Sleeping Pod (Vatsalyam)", category: "Platform 1", icon: "./static/img/bed.png" },
    //   { id: 'Platform 1 Point 10', lat: 19.947581864126462, lng: 73.84204915044238, title: "Deluxe Toilet", category: "Platform 1", icon: "./static/img/toilet.png" },
      { id: 'Platform 1 Point 11', lat: 19.94745544178198, lng: 73.84204121281842, title: "ATM", category: "Platform 1", icon: "./static/img/atm.png" },
      { id: 'Platform 1 Point 12', lat: 19.947468872817097, lng: 73.84185339909355, title: "AC Retiring Hall (Godavari Waiting Hall)", category: "Platform 1", icon: "./static/img/waiting-room (1).png" },
    //   { id: 'Platform 1 Point 13', lat: 19.94768630198704, lng: 73.84184148280016, title: "IRCTC Dormitory", category: "Platform 1", icon: "./static/img/bunk-bed.png" },
      { id: 'Platform 1 Point 14', lat: 19.94737791202757, lng: 73.84201774349071, title: "Waiting Room and Cloak Room Paid", category: "Platform 1", icon: "./static/img/school-locker.png" },
      { id: 'Platform 1 Point 15', lat: 19.94875366774617, lng: 73.84240592828107, title: "Water Stand PF at Middle", category: "Platform 1", icon: "./static/img/drop (1).png" },
      { id: 'Platform 1 Point 16', lat: 19.94837037997832, lng: 73.8415192857732, title: "Nashik Road Bus Stop", category: "Platform 1", icon: "./static/img/bus-stop.png" },
      { id: 'Platform 1 Point 17', lat: 19.94796, lng: 73.842213, title: "Drinking Water", category: "Platform 1", icon: "./static/img/water.png" },
      { id: 'Platform 1 Point 18', lat: 19.947403, lng: 73.841755, title: "Escalator", category: "Platform 1", icon: "./static/img/escalator.png" },
      { id: 'Platform 1 Point 19', lat: 19.948078, lng: 73.841949, title: "Gift Shop", category: "Platform 1", icon: "./static/img/gift.png" },
      { id: 'Platform 1 Point 20', lat: 19.947048, lng: 73.842045, title: "RPF Station", category: "Platform 1", icon: "./static/img/RPF_Station.png" },
      { id: 'Platform 1 Point 21', lat: 19.947766, lng: 73.841839, title: "M. Dinshaw & Ranjit AC Dormitory, Deluxe Rooms", category: "Platform 1", icon: "./static/img/bunk-bed.png" },
    //   { id: 'Platform 1 Point 22', lat: 19.947659, lng: 73.84208, title: "Relax Zone", category: "Platform 1", icon: "./static/img/waiting-room.png" },
      { id: 'Platform 1 Point 23', lat: 19.948437, lng: 73.84187, title: "Emergency Medical Facility", category: "Platform 1", icon: "./static/img/hospital.png" },
      { id: 'Platform 1 Point 24', lat: 19.948534, lng: 73.84199, title: "Ticket Counter", category: "Platform 1", icon: "./static/img/ticket-office.png" },
      { id: 'Platform 1 Point 25', lat: 19.947580, lng: 73.84193, title: "Cafeteria", category: "Platform 1", icon: "./static/img/Snacks_stall.png" },
    //   { id: 'Platform 1 Point 26', lat: 19.947715, lng: 73.842172, title: "Pay & Use Toilet", category: "Platform 1", icon: "./static/img/toilet.png" },
      { id: 'Platform 1 Point 27', lat: 19.946823, lng: 73.841875, title: "Pay & Use Toilet", category: "Platform 1", icon: "./static/img/toilet.png" },
      { id: 'Platform 1 Point 28', lat: 19.94861, lng: 73.842431, title: "Water Stand PF-1", category: "Platform 1", icon: "./static/img/water.png" },
      { id: 'Platform 1 Point 29', lat: 19.94692, lng: 73.84154, title: "Deluxe Toilet (M/F)", category: "Platform 1", icon: "./static/img/toilet.png" },
      { id: 'Platform 1 Point 30', lat: 19.946848, lng: 73.841893, title: "Divyangjan Toilet", category: "Platform 1", icon: "./static/img/toilet.png" },
      { id: 'Platform 1 Point 31', lat: 19.948059, lng: 73.84199, title: "Khadi Garments Store", category: "Platform 1", icon: "./static/img/shopping-store.png" },
      { id: 'Platform 1 Point 32', lat: 19.948305, lng: 73.841933, title: "PF 1 Auto Stand", category: "Platform 1", icon: "./static/img/auto-rishaw.png" },
      { id: 'Platform 1 Point 33', lat: 19.94665, lng: 73.841403, title: "Pay & Park Parking", category: "Platform 1", icon: "./static/img/parking.png" },
    //   sohan sir changes
      { id: 'Platform 1 Point 34', lat: 19.9480189955569, lng: 73.8421796201009, title: "Platform 1 Enterance", category: "Platform 1", icon: "./static/img/train-station.png" },
      { id: 'Platform 1 Point 35', lat: 19.9479258110046, lng: 73.8422304943829, title: "Station Manager", category: "Platform 1", icon: "./static/img/station-master.png" },
    //   { id: 'Platform 1 Point 36', lat: 19.9480176092028, lng: 73.842178717499, title: "CTI OFFICE/HEAD TE OFFICE", category: "Platform 1", icon: "./static/img/CHILD HELP DESK.png" },
    //   { id: 'Platform 1 Point 37', lat: 19.947753, lng: 73.842124, title: "WATER STAND", category: "Platform 1", icon: "./static/img/water.png" },
    { id: 'Platform 1 Point 38', lat: 19.9477949362633, lng: 73.8421749061679, title: "Irctc Food Track", category: "Platform 1", icon: "./static/img/Snacks_stall.png" },
    { id: 'Platform 1 Point 39', lat: 19.9476854516116, lng: 73.8418588942186, title: "Irctc Dormitory & Deluxe Room", category: "Platform 1", icon: "./static/img/bed.png" },
    { id: 'Platform 1 Point 40', lat: 19.9475138912436, lng: 73.8419460051485, title: "Pay & Use Toilet(M/F)", category: "Platform 1", icon: "./static/img/toilet.png" },
    { id: 'Platform 1 Point 41', lat: 19.9475796157185, lng: 73.8419527715279, title: "Relax Zone", category: "Platform 1", icon: "./static/img/waiting-room.png" },
    { id: 'Platform 1 Point 42', lat: 19.9475539155125, lng: 73.8418786083123, title: "Vastyalyam Sleeping Pod", category: "Platform 1", icon: "./static/img/bed.png" },
    { id: 'Platform 1 Point 43', lat: 19.9472754710607, lng: 73.8416707951445, title: "Offtrack Rail Coach Restaurant", category: "Platform 1", icon: "./static/img/Snacks_stall.png" },
    { id: 'Platform 1 Point 44', lat: 19.948129339158, lng: 73.8421446919026, title: "Osop Stall", category: "Platform 1", icon: "./static/img/Snacks_stall.png" },
    { id: 'Platform 1 Point 45', lat: 19.948143067654, lng: 73.8421064781602, title: "Gift Shop", category: "Platform 1", icon: "./static/img/shopping-store.png" },
    { id: 'Platform 1 Point 46', lat: 19.9481698293033, lng: 73.8422593972415, title: "TCI Office", category: "Platform 1", icon: "./static/img/ticket-office.png" },
    { id: 'Platform 1 Point 47', lat: 19.9485308902095, lng: 73.8423358285154, title: "Multi Purpose Stall Food", category: "Platform 1", icon: "./static/img/Snacks_stall.png" },
    { id: 'Platform 1 Point 48', lat: 19.9484980281734, lng: 73.8422879214036, title: "Rail Ahar (tea)", category: "Platform 1", icon: "./static/img/Snacks_stall.png" },
    { id: 'Platform 1 Point 49', lat: 19.9482496775167, lng: 73.842275675835, title: "Upper class waiting room(Female)", category: "Platform 1", icon: "./static/img/waiting-room.png" },
    { id: 'Platform 1 Point 50', lat: 19.9482820506708, lng: 73.8422826237955, title: " Waiting Room", category: "Platform 1", icon: "./static/img/waiting-room.png" },
    { id: 'Platform 1 Point 51', lat: 19.9483622574445, lng: 73.8423036381708, title: "DYSS Office", category: "Platform 1", icon: "./static/img/Snacks_stall.png" },
    { id: 'Platform 1 Point 52', lat: 19.9483313103336, lng: 73.842295280183, title: "Kitab Ghar", category: "Platform 1", icon: "./static/img/Book_Stall.png" },
    { id: 'Platform 1 Point 53', lat: 19.9484636071821, lng: 73.8423238682215, title: " Maa Tara Ac Waiting&Cloak Room", category: "Platform 1", icon: "./static/img/waiting-room.png" },
    { id: 'Platform 1 Point 54', lat: 19.9484832502068, lng: 73.8423302994909, title: "Sleeper Class Waiting Room", category: "Platform 1", icon: "./static/img/waiting-room.png" },
    
    
     
  // Platform 2 markers 
  { id: 'Platform 2 ', lat: 19.94786441080806, lng: 73.8423292571979, title: "Platform 2", category: "Platform 2", icon: "./static/img/train-station.png" },

  { id: 'Platform 2 Point 2', lat: 19.946342, lng: 73.842008, title: "OXYGEN PARLOUR", category: "Platform 2", icon: "./static/img/oxygen-Parlour.png" },
  { id: 'Platform 2 Point 3', lat: 19.948452, lng: 73.842435, title: "TEA STALL", category: "Platform 2", icon: "./static/img/tea-shop.png" },
  { id: 'Platform 2 Point 4',lat: 19.949000752161943, lng: 73.84261514058241, title: "Lift and Stairs",category: "Platform 2", icon: "./static/img/work.png" }, 
  { id: 'Platform 2 Point 5',lat: 19.94717596512187, lng: 73.84224124780778, title: "Lift and Escalators",category: "Platform 2", icon: "./static/img/escalator-down.png" }, 

  // Platform 3 markers

  { id: 'Platform 3 Point 2', lat: 19.94742, lng: 73.842354, title: "CHILD HELP DESK", category: "Platform 3", icon: "./static/img/MAHANAND MILK.png" },
  { id: 'Platform 3 Point 3', lat: 19.948972, lng: 73.842831, title: "GENTS TOILET", category: "Platform 3", icon: "./static/img/toilet.png" },
  { id: 'Platform 3 Point 4', lat: 19.948991, lng: 73.842715, title: "LIFT", category: "Platform 3", icon: "./static/img/lift.png" },
  { id: 'Platform 3 Point 5', lat: 19.948809, lng: 73.842814, title: "HANDICAPPED TOILET", category: "Platform 3", icon: "./static/img/Handicapped_Toilet.png" },
  { id: 'Platform 3 Point 6', lat: 19.948503, lng: 73.842965, title: "RESERVATION CENTER PF-4", category: "Platform 3", icon: "./static/img/ticket-office.png" },
  { id: 'Platform 3 ',lat: 19.947093392634322, lng: 73.84246655335382, title: "Lift and Stairs Mumbai end",category: "Platform 3", icon: "./static/img/work.png" }, 
  { id: 'Platform 3 Point 7', lat: 19.94792176280579, lng: 73.84278592004723, title: "Water Stand", category: "Platform 3", icon: "./static/img/drop (1).png" }, 
  { id: 'Platform 3 Point 8',lat:19.94769388957853, lng: 73.84297092277446, title: "Railway Station Pay & Park",category: "Platform 3", icon: "./static/img/parking.png" }, 
  { id: 'Platform 3 Point 9',lat: 19.948454784853407, lng: 73.84295156280345, title: "Reservation Counter",category: "Platform 3", icon: "./static/img/ticket-office.png" }, 
  { id: 'Platform 3 Point 10',lat: 19.947255492904763, lng: 73.8422848190672, title: "Platform 3", icon: "./static/img/train-station.png" }, 
//   { id: 'Platform 3 ', lat: 19.94727556537938, lng: 73.84226307423131, title: "Platform 3", category: "Platform 3", icon: "./static/img/train-station.png" },


  { id: 'Platform 4 ', lat: 19.947206897269872, lng: 73.84249036809372, title: "Platform 4", category: "Platform 4", icon: "./static/img/train-station.png" },
//   { id: 'Platform 4 ', lat: 21.1101266727752, lng: 79.06336363929633, title: "Platform 4", category: "Platform 4", icon: "./static/img/train-station.png" },

];

function highlightPinpoints(pointId) {
    // Find the pinpoint object by id
    const location = PINPOINTS.find(point => point.id === pointId);
    
    if (location && map) {
        // Center the map on the selected location
        map.setCenter({ lat: location.lat, lng: location.lng });
        
        // Adjust zoom level (set to 18 for a closer zoom, adjust as necessary)
        map.setZoom(28); 

        console.log(`Zooming into: ${location.title}`);
    } else {
        console.error(`Location with ID '${pointId}' not found.`);
    }
}


// TOURIST CODE

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





// BACK BUTON CODE

function handleBackButtonClick() {
    // Reload the page to reset everything
    location.reload();
}

// Back button event listener
document.getElementById("backButton").addEventListener("click", handleBackButtonClick);

function clearDynamicMarkers() {
    markers.forEach((marker) => marker.setMap(null));
    markers = []; // Reset the array
}

// Handle submenu toggle with click (without hover)
document.querySelectorAll('.menu-list > li').forEach((menuItem) => {
    menuItem.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent event bubbling
        const submenu = this.querySelector('.submenu');
        if (submenu) {
            // Toggle the display of the submenu
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});


function changeLanguage(language) {
    switch (language) {
        case 'en':
            alert('English selected');
            break;
        case 'hi':
            alert('हिन्दी चुनी गई');
            break;
        case 'mr':
            alert('मराठी निवडले');
            break;
        default:
            alert('Language not supported');
    }
}


// Load the map
window.initMap = initMap;
let position;
let cooords = '';
console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);