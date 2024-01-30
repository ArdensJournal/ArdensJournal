document.addEventListener("DOMContentLoaded", function() {
  attachMenuHandler("homeButton", "menu");
  attachMenuHandler("politicsButton", "politicsMenu");
  attachMenuHandler("aboutusButton", "aboutusMenu");
  attachMenuHandler("cultureButton", "cultureMenu");

  function attachMenuHandler(buttonId, menuId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);

    function handleClick(event) {
      const target = event.target;

      if (target.id === buttonId) {
        menu.classList.toggle("show");
      } else {
        if (!menu.contains(target)) {
          menu.classList.remove("show");
        }
      }
    }

    document.addEventListener("click", handleClick);
  }

});

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

// Function for the Search Bar

// ... (previous code)
// Function for the Search Bar

document.addEventListener('DOMContentLoaded', function() {
  const searchQuery = localStorage.getItem('searchQuery');
  const searchResultsSection = document.getElementById('searchResults');

  if (searchQuery) {
    fetch('searchDataBase.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        const links = htmlDocument.getElementsByTagName('a');

        let searchResults = [];

        Array.from(links).forEach(link => {
          if (link.textContent.toLowerCase().includes(searchQuery)) {
            searchResults.push({
              title: link.textContent,
              url: link.href
            });
          }
        });

        if (searchResults.length > 0) {
          searchResults.forEach(result => {
            const resultLink = document.createElement('a');
            resultLink.textContent = result.title;
            resultLink.href = result.url;
            resultLink.target = "_blank";  // Open in a new tab
            searchResultsSection.appendChild(resultLink);
            searchResultsSection.appendChild(document.createElement('br'));
          });
        } else {
          // If there are no search results, display a message
          searchResultsSection.textContent = "No results found.";
        }
      })
      .catch(error => {
        console.error('Error fetching search data:', error);
      });
  }
});


