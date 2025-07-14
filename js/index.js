document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");

    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            const city = document.getElementById("city").value;

            switch (city) {
                case "Delhi":
                    window.location.href = "delhi.html";
                    break;
                case "Mumbai":
                    window.location.href = "mumbai.html";
                    break;
                case "Bangalore":
                    window.location.href = "banglore.html"; // Use correct filename
                    break;
                case "Hyderabad":
                    window.location.href = "hyderabad.html";
                    break;
                default:
                    alert("Please select a city.");
            }
        });
    }
});
