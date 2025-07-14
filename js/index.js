//  when user click on location in search then it goes to that page
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


//  sort as per highest or lowest pg's
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.page-container');
  const cards = [...container.querySelectorAll('.property-card')];

  const parseRent = card =>
    parseInt(card.querySelector('.rent').textContent.replace(/[^0-9]/g, ''), 10);

  const sortAndRender = (desc = true) => {
    cards
      .sort((a, b) => desc ? parseRent(b) - parseRent(a) : parseRent(a) - parseRent(b))
      .forEach(card => container.appendChild(card)); // re-append in sorted order
  };

  document.getElementById('sort-highest').addEventListener('click', () => sortAndRender(true));
  document.getElementById('sort-lowest').addEventListener('click', () => sortAndRender(false));
});
