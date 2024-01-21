document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.getElementById("homeButton");
    const menu = document.getElementById("menu");
  
    function handleClick(event) {
      const target = event.target;
  
      if (target.id === "homeButton") {
        // Toggle the "show" class on the menu
        menu.classList.toggle("show");
      } else {
        // Check if the clicked element is outside the menu
        if (!menu.contains(target)) {
          // Remove the "show" class to hide the menu
          menu.classList.remove("show");
        }
      }
    }
  
    document.addEventListener("click", handleClick);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const politicsButton = document.getElementById("politicsButton");
    const menu = document.getElementById("politicsMenu");
  
    function handleClick(event) {
      const target = event.target;
  
      if (target.id === "politicsButton") {
        // Toggle the "show" class on the menu
        menu.classList.toggle("show");
      } else {
        // Check if the clicked element is outside the menu
        if (!menu.contains(target)) {
          // Remove the "show" class to hide the menu
          menu.classList.remove("show");
        }
      }
    }
  
    document.addEventListener("click", handleClick);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const aboutusButton = document.getElementById("aboutusButton");
    const menu = document.getElementById("aboutusMenu");
  
    function handleClick(event) {
      const target = event.target;
  
      if (target.id === "aboutusButton") {
        // Toggle the "show" class on the menu
        menu.classList.toggle("show");
      } else {
        // Check if the clicked element is outside the menu
        if (!menu.contains(target)) {
          // Remove the "show" class to hide the menu
          menu.classList.remove("show");
        }
      }
    }
  
    document.addEventListener("click", handleClick);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const aboutusButton = document.getElementById("cultureButton");
    const menu = document.getElementById("cultureMenu");
  
    function handleClick(event) {
      const target = event.target;
  
      if (target.id === "cultureButton") {
        // Toggle the "show" class on the menu
        menu.classList.toggle("show");
      } else {
        // Check if the clicked element is outside the menu
        if (!menu.contains(target)) {
          // Remove the "show" class to hide the menu
          menu.classList.remove("show");
        }
      }
    }
  
    document.addEventListener("click", handleClick);
  });

  function performSearch(event) {
    event.preventDefault(); // Prevent form submission
    
    var searchTerm = document.getElementById("search").value;
    
    // Send the search term to server for processing
    fetch("search.php?term=" + encodeURIComponent(searchTerm))
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("searchResults").innerHTML = data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function performSearch(event) {
    event.preventDefault(); // Prevent form submission
    
    var searchTerm = document.getElementById("search").value;
    
    // Prepare the search URL
    var searchUrl = "search.php?term=" + encodeURIComponent(searchTerm);
    
    // Open the search results in a new tab/window
    window.open(searchUrl, "_blank");
  }

/// JavaScript code to encode the WhatsApp URL
let phoneNumber = "972546500310";
let encodedPhoneNumber = encodeURIComponent(972546500310);

// Function to open WhatsApp in a new tab
function openWhatsApp() {
  let encodedLink = "https://wa.me/" + encodedPhoneNumber;
  window.open(encodedLink);
}

function openWhatsApp() {
  window.open("https://wa.me/972546500310");
}

 // Function to open Gmail in a new tab
function openGmail() {
  window.open("mailto:asherard@gmail.com");
}

// Function to open Instagram in a new tab
function openInstagram() {
  window.open("https://www.instagram.com/asher.arden", "_blank");
}


function validateForm() {
  var name = document.forms["adForm"]["name"].value;
  var email = document.forms["adForm"]["email"].value;
  var company = document.forms["adForm"]["company"].value;
  var phone = document.forms["adForm"]["phone"].value;
  var message = document.forms["adForm"]["message"].value;

  if (name == "" || email == "" || company == "" || phone == "" || message == "") {
    alert("All fields are required!");
    return false;
  }
}
