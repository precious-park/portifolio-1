/*------sticky navbar----*/
window.onscroll = () =>{
let header = document.querySelector(".header");
header.classList.toggle("sticky", window.scrollY > 100);
};
/*------theme-button toggle----*/
// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
/*----contact me functionality--*/
// JavaScript
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // TODO: Implement your logic to handle the form submission
  // For example, you can send an AJAX request to a server-side script

  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Display success message or perform other actions
  alert("Message sent successfully!");
});

