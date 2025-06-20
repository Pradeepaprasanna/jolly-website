
    document.querySelector("form").addEventListener("submit", function (e) {
        // Prevent default form submission
        e.preventDefault();

        // Get form values
        const firstName = document.querySelectorAll("#Name")[0].value.trim();
        const lastName = document.querySelectorAll("#Name")[1].value.trim();
        const mobile = document.getElementById("Mobile Number").value.trim();
        const email = document.getElementById("email").value.trim();
        const comments = document.getElementById("comments").value.trim();

        // Basic validation checks
        if (firstName === "" || lastName === "") {
            alert("Please enter your full name.");
            return;
        }

        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (comments === "") {
            alert("Please enter your message.");
            return;
        }

        // If everything is valid
        alert("Form submitted successfully!");
        this.submit(); // Optionally allow submission
    });

