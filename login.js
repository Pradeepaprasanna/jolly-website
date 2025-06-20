
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked');

        // Email reg
        const emailPattern =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;;

        // Validation
        if (!username) {
            alert("Please enter your username.");
            return;
        }

        if (!email || !emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!password || password.length <=8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        if (!dob) {
            alert("Please enter your date of birth.");
            return;
        }

        // If all validations pass
        alert("Login successful!");
        // You can now submit the form data via fetch or allow default submission
        // this.submit(); // Uncomment this if you want actual form submission
    });

