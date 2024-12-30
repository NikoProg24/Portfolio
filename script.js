document.addEventListener("DOMContentLoaded", function () {
    // Ladda navbar
    fetch("navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load navbar.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error(error));

    // Ladda footer
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error(error));
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Tack för ditt meddelande! Jag hör av mig snart.');
});

function toggleCV() {
    var cvContainer = document.getElementById("cv-container");
    var toggleButton = document.getElementById("toggle-cv-button");


    // Kolla om CV:t är synligt eller inte
    if (cvContainer.classList.contains("hidden")) {
        // Visa CV och ändra knapptext
        cvContainer.classList.remove("hidden");
        toggleButton.innerText = "Dölj CV";
    } else {
        // Dölj CV och ändra knapptext tillbaka
        cvContainer.classList.add("hidden");
        toggleButton.innerText = "Visa CV";
    }
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    const nameField = event.target.name;
    const emailField = event.target.email;
    const messageField = event.target.message;

    // Validera namn (bara bokstäver och mellanslag)
    const nameRegex = /^[A-Za-zÅÄÖåäö\s]+$/;
    if (!nameRegex.test(nameField.value)) {
        alert('Namnet får endast innehålla bokstäver och mellanslag.');
        event.preventDefault();
        return;
    }

    // Validera e-post
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        alert('Ange en giltig e-postadress.');
        event.preventDefault();
        return;
    }

    // Validera att meddelande inte är tomt
    if (!messageField.value.trim()) {
        alert('Meddelandet får inte vara tomt.');
        event.preventDefault();
    }
});



