// Parse the URL to get the scene parameter
function getSceneFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('scene'); // Returns the scene ID from URL
}

// Switch to the 360 view based on the scene ID passed in the URL
function showScene(sceneId) {
  const scene = APP_DATA.scenes.find(scene => scene.id === sceneId);

  if (scene) {
    const initialViewParameters = scene.initialViewParameters;

    // Assuming Marzipano or similar viewer is set up to display the scene
    console.log(`Switching to scene: ${sceneId} - ${scene.name}`);
    viewer.setScene(sceneId); // This method should correctly switch the scene
    viewer.lookAt(initialViewParameters.yaw, initialViewParameters.pitch, initialViewParameters.fov);
  } else {
    console.error("Scene not found:", sceneId);
  }
}

// Once the page is loaded, fetch the scene ID from the URL and load the 360 view
document.addEventListener('DOMContentLoaded', function() {
  const sceneId = getSceneFromUrl();
  console.log("Scene ID from URL:", sceneId); // Debug log for the scene ID

  if (sceneId) {
    showScene(sceneId); // Load scene based on URL parameter
  } else {
    console.log("No scene ID found in URL. Loading the default scene.");
    // Default to the first scene if no scene ID is found in the URL
    showScene(APP_DATA.scenes[0].id); // Ensure you load the first scene by default
  }
});
