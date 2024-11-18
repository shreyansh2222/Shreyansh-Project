

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

   
    alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
