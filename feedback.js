

    let selectedRating = 0;
    document.addEventListener("DOMContentLoaded", function () {
        if (sessionStorage.getItem("modalShown") === "true") return;
        let startTime = sessionStorage.getItem("modalStartTime");
        const now = Date.now();
        if (!startTime) {
            sessionStorage.setItem("modalStartTime", now);
            startTime = now;
        }
        const elapsed = now - parseInt(startTime);
        const remaining = Math.max(0, 45000 - elapsed);
        setTimeout(() => {
            if (sessionStorage.getItem("modalShown") !== "true") {
                const modal = new bootstrap.Modal(document.getElementById('feedbackModal'));
                modal.show();
                sessionStorage.setItem("modalShown", "true");
            }
        }, remaining);
        document.querySelectorAll(".star").forEach((star) => {
            star.addEventListener("click", function () {
                selectedRating = parseInt(this.dataset.value);
                highlightStars(selectedRating);
            });
        });
    });
    function highlightStars(rating) {
        document.querySelectorAll(".star").forEach((star, index) => {
            star.style.color = index < rating ? "gold" : "#ccc";
        });
    }
    function resetFeedbackForm() {
        const commentField = document.getElementById("feedbackText");
        if (commentField) commentField.value = "";
        selectedRating = 0;
        highlightStars(0);
    }
    function submitFeedback() {
        const comment = document.getElementById("feedbackText").value;
        if (selectedRating === 0 || comment.trim() === "") {
            alert("Please provide both rating and comment.");
            return;
        }
            // Show alert immediately
    alert("Thanks for your feedback!");


       // Immediately hide submit feedback form
    

    bootstrap.Modal.getInstance(document.getElementById('feedbackModal')).hide();

        const scriptUrl = "https://script.google.com/macros/s/AKfycbzUp-Pa1auZasW4D5ZDM6LbOy6LbAG9tH4xJvQgtLsZHKw9C6zFZqRq6nomM_-umA2j/exec";
        const callbackName = "handleFeedbackResponse";
        const script = document.createElement('script');
        script.src = `${scriptUrl}?rating=${selectedRating}&comment=${encodeURIComponent(comment)}&callback=${callbackName}`;
        window[callbackName] = function (response) {
            if (response && response.success) {
                resetFeedbackForm();
                // alert("Thanks for your feedback!");
                // bootstrap.Modal.getInstance(document.getElementById('feedbackModal')).hide();
            } else {
                alert("Failed to submit feedback.");
            }
            document.body.removeChild(script);
            delete window[callbackName];
        };
        script.onerror = function () {
            alert("Failed to submit feedback. Network error.");
            document.body.removeChild(script);
            delete window[callbackName];
        };
        document.body.appendChild(script);
    }
