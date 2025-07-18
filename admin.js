
const USERS = [
    { username: "NashikAdmin", password: "N@shik@123" },
];

const scriptURL = "https://script.google.com/macros/s/AKfycbzUp-Pa1auZasW4D5ZDM6LbOy6LbAG9tH4xJvQgtLsZHKw9C6zFZqRq6nomM_-umA2j/exec";

// Show/hide sections
function showApp() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('mainApp').style.display = 'none';
}

// Login handler
function handleLogin() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('loginError');

    const valid = USERS.some(u => u.username === user && u.password === pass);
    if (valid) {
        localStorage.setItem("loggedIn", "true");
        showApp();
        fetchData();
    } else {
        errorDiv.textContent = "Invalid username or password";
        errorDiv.style.display = 'block';
    }
}

// Format date
function formatDateInput(dateStr) {
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

// Show/hide loading/error
function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function showError(message) {
    document.getElementById('error').textContent = message;
    document.getElementById('error').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
}

// Update stats
function updateDashboard(latestData) {

    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (startDate === endDate) {
        document.getElementById('todayvisitor').style.display = 'block';
    } else {
        document.getElementById('todayvisitor').style.display = 'none';
    }

    // Overall stats
    // document.getElementById('totalCount').textContent = latestData.totalCount || '0';
    document.getElementById('visitorCount').textContent = latestData.visitorCount || '0';
    document.getElementById('todayVisitors').textContent = latestData.todayVisitorCount || '0';
    // document.getElementById('helpCount').textContent = latestData.helpCount || '0';

    // Service-wise stats
    document.getElementById('coolieCount').textContent = latestData.coolie || '0';
    document.getElementById('doctorCount').textContent = latestData.doctor || '0';
    document.getElementById('policeCount').textContent = latestData.police || '0';
    document.getElementById('wheelchairCount').textContent = latestData.wheelchair || '0';
    document.getElementById('stretcherCount').textContent = latestData.stretcher || '0';
    document.getElementById('cartCount').textContent = latestData.cart || '0';
    document.getElementById('childHelpCount').textContent = latestData.childhelp || '0';
    document.getElementById('otherCount').textContent = latestData.others || '0';

    document.getElementById('dashboard').style.display = 'block';
}

// Logout
async function logOut() {
    localStorage.removeItem("loggedIn");
    document.getElementById('dashboard').style.display = 'none';
    showLogin();
}

// Fetch data
async function fetchData() {
    if (localStorage.getItem("loggedIn") !== "true") {
        alert("Please login first!");
        showLogin();
        return;
    }

    const start = document.getElementById('startDate').value;
    const end = document.getElementById('endDate').value;
    const today = new Date().toISOString().split("T")[0];

    if (!start || !end) {
        showError("Please select both start and end dates.");
        return;
    }

    if (start > end) {
        showError("Start date cannot be after end date.");
        return;
    }

    if (start > today || end > today) {
        showError("Dates cannot exceed today.");
        return;
    }

    const startFormatted = formatDateInput(start);
    const endFormatted = formatDateInput(end);

    showLoading();

    try {
        const response = await fetch(`${scriptURL}?start=${startFormatted}&end=${endFormatted}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data-->", data);

        if (!data || data.length === 0) {
            throw new Error("No data found for the selected date range.");
        }

        const latestData = Array.isArray(data) ? data[data.length - 1] : data;

        console.log("jhghjg", latestData)

        if (!latestData) {
            throw new Error("Invalid or empty data received.");
        }

        hideLoading();
        updateDashboard(latestData);

    } catch (error) {
        hideLoading();
        showError(`Error fetching data: ${error.message}`);
        console.error('Fetch error:', error);
    }
}

// On page load
window.onload = function () {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById('startDate').value = today;
    document.getElementById('endDate').value = today;

    if (localStorage.getItem("loggedIn") === "true") {
        showApp();
        fetchData();
    } else {
        showLogin();
    }

    // Enter key press for login
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                handleLogin();
            }
        });
    });
};
