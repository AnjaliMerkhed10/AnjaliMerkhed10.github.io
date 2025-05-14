 // Disable right-click context menu
 document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Disable common keyboard shortcuts for DevTools (case-insensitive)
  document.addEventListener('keydown', function (e) {
    // Block F12
    if (e.key === 'F12') {
      e.preventDefault();
    }

    // Block Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 'i')) {
      e.preventDefault();
    }

    // Block Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 'j')) {
      e.preventDefault();
    }

    // Block Ctrl+Shift+C (Inspector)
    if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 'c')) {
      e.preventDefault();
    }

    // Block Ctrl+U (View Source)
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
      e.preventDefault();
    }

    // Block other common developer tools actions
    if (e.ctrlKey && e.key.toLowerCase() === 's') {
      e.preventDefault(); // Block save as
    }
  });

  // Optional: Detect if DevTools is open and take action
  let devtoolsOpen = false;
  setInterval(function () {
    const start = performance.now();
    debugger; // Insert the debugger here to cause a delay when DevTools is open
    const end = performance.now();
    if (end - start > 100) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        // Redirect to a blank page or any other action you'd like
        window.location.href = 'about:blank'; // Or any blocked page
        // You can use window.close() for some browsers, but it is not guaranteed to work
      }
    }
  }, 1000);