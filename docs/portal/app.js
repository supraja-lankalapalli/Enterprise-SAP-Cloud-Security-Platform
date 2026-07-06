// SL Cloud Technologies - Enterprise SAP Cloud Security Platform

document.addEventListener("DOMContentLoaded", function () {

    const protectedPages = [
        "dashboard.html",
        "departments.html",
        "user-management.html",
        "role-management.html",
        "access-requests.html",
        "audit-logs.html",
        "rbac-matrix.html",
        "sod-analysis.html",
        "jml-workflow.html",
        "compliance-dashboard.html"
    ];

    const currentPage = window.location.pathname.split("/").pop();
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (protectedPages.includes(currentPage) && !loggedInUser) {
        window.location.href = "login.html";
    }

    const learnMoreBtn = document.getElementById("learnMoreBtn");

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const loginMessage = document.getElementById("loginMessage");

            if (username === "supraja" && password === "supraja") {
                localStorage.setItem("loggedInUser", username);
                window.location.href = "dashboard.html";
            } else {
                loginMessage.textContent = "Invalid Username or Password.";
                loginMessage.style.color = "red";
            }
        });
    }

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");
            window.location.href = "login.html";
        });
    }

});
function approveRequest(requestId){

    const statusCell =
        document.getElementById("status" + requestId);

    statusCell.innerHTML =
        "<span class='status-approved'>Approved</span>";

}

function rejectRequest(requestId){

    const statusCell =
        document.getElementById("status" + requestId);

    statusCell.innerHTML =
        "<span class='status-rejected'>Rejected</span>";

}