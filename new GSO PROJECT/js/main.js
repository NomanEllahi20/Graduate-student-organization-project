// main.js – Shared JavaScript for GSO Front-End

/**
 * Display a temporary alert message (Bootstrap-compatible)
 */
function showAlert(message, type = "success", duration = 3000) {
    const alertBox = document.createElement("div");
    alertBox.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3`;
    alertBox.style.zIndex = "9999";
    alertBox.style.minWidth = "300px";
    alertBox.innerHTML = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, duration);
}


/**
 * Reusable function to fetch JSON from backend
 */
async function fetchJSON(url, method = "GET", data = null) {
    try {
        const options = {
            method,
            headers: { "Content-Type": "application/json" },
        };
        if (data) options.body = JSON.stringify(data);

        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        showAlert("Something went wrong. Check console.", "danger");
        throw error;
    }
}

/**
 * Utility to reset form inputs by ID
 */
function resetForm(formId) {
    const form = document.getElementById(formId);
    if (form) form.reset();
}

/**
 * Loader overlay (optional usage)
 */
function showLoader() {
    const loader = document.createElement("div");
    loader.id = "global-loader";
    loader.className = "position-fixed top-0 start-0 w-100 h-100 bg-white bg-opacity-75 d-flex justify-content-center align-items-center";
    loader.innerHTML = `<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>`;
    loader.style.zIndex = "9999";
    document.body.appendChild(loader);
}

function hideLoader() {
    const loader = document.getElementById("global-loader");
    if (loader) loader.remove();


}