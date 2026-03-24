// Show alert when booking button is clicked
function bookNow() {
    alert("Thank you for choosing Glow Beauty Salon! Booking feature coming soon 💖");
}

// Simple form validation (if you add a form later)
function submitForm() {
    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;

    if (name === "" || service === "") {
        alert("Please fill all details!");
    } else {
        alert("Thank you " + name + "! Your appointment for " + service + " is booked.");
    }
}

// Add smooth scroll effect for buttons (optional)
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("Button clicked!");
        });
    });
});