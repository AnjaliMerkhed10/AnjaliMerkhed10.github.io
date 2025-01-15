



const voiceSearchButton = document.getElementById("voiceSearch");
const voiceStatus = document.getElementById("voiceStatus");
const voiceResult = document.querySelector("#voiceResult span");

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    let isRecognizing = false;

  
    voiceSearchButton.addEventListener("click", () => {
        if (!isRecognizing) {
            recognition.start();
            isRecognizing = true;
            voiceStatus.style.display = "block";
            voiceStatus.textContent = "Listening...";
        }
    });

    // Process the voice result and trigger map.js function
    recognition.onresult = (event) => {
        if (event.results.length > 0) {
            const transcript = event.results[0][0].transcript.toLowerCase();
           
            voiceResult.textContent = transcript;
            voiceStatus.textContent = `Searching for: "${transcript}"`;

            // Use the map.js function to search for results on the map
            if (typeof window.searchAndShowPinpoints === 'function') {
                window.searchAndShowPinpoints(transcript);
            } else {
                console.error("searchAndShowPinpoints is not defined in map.js");
            }
        } else {
            voiceStatus.textContent = "No speech detected. Please try again.";
        }
    };

    recognition.onspeechend = () => {
        recognition.stop();
        isRecognizing = false;
        voiceStatus.style.display = "none";
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        voiceStatus.textContent = `Error: ${event.error}`;
        setTimeout(() => voiceStatus.style.display = "none", 2000);
        isRecognizing = false;
    };
} else {
    voiceStatus.textContent = "Speech recognition not supported in this browser.";
}


function searchAndShowPinpoints(transcript) {
    // Normalize transcript to remove extra words and punctuation
    const normalizedTranscript = transcript
        .replace(/^(show|find|search|locate)\s+/i, "") // Remove common prefixes
        .replace(/[^\w\s]/g, "") // Remove punctuation
        .trim()
        .toLowerCase();

    // Get the selected language (for example, 'en', 'hi', 'mr')
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

    // Create a function to get the title based on the selected language
    function getTitleForLanguage(location) {
        return location.title && location.title[selectedLanguage] ? location.title[selectedLanguage].toLowerCase() : ''; 
    }

    // Combine all locations (PINPOINTS + TOURIST_PLACES)
    const allLocations = [...PINPOINTS, ...TOURIST_PLACES];

    // Find the exact or closest match
    const location = allLocations.find(point => {
        const title = getTitleForLanguage(point); // Get the title based on the selected language
        const id = point.id ? point.id.toLowerCase() : ''; // Ensure id is a string
        
        return title.includes(normalizedTranscript) || id.includes(normalizedTranscript);
    });

    if (location && map) {
        map.setCenter({ lat: location.lat, lng: location.lng });
        map.setZoom(30); // Adjust zoom as necessary
        console.log(`Zooming into: ${location.title[selectedLanguage]}`);
        
        // Hide the voice search status and result after zooming in
        voiceStatus.style.display = "none"; // Hide voice status
        voiceResult.textContent = ""; // Clear the transcript text
    } else {
        // Fallback to default location
        const defaultLocation = PINPOINTS.find(point => point.id === "Platform 1 ");
        console.log('Fallback to Default Location:', defaultLocation);
        if (defaultLocation) {
            map.setCenter({ lat: defaultLocation.lat, lng: defaultLocation.lng });
            map.setZoom(20); // Adjust zoom for default location
            console.log("No match found. Showing default location: Platform 1");
        } else {
            console.error("No match or default location found.");
        }
    }
}
