function setupButtonSoundEffects() {
  const buttons = document.querySelectorAll('button:not(#searchButton)');
  const clickSound = document.getElementById('clickSound');

  buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      clickSound.currentTime = 0;
      clickSound.play();
      event.preventDefault();
      setTimeout(function() {
        const anchor = button.querySelector('a');
        let url = anchor.getAttribute('href');
        if (url) {
          window.open(url, '_self');
        }
      }, clickSound.duration * 1000);
    });
  });

  // Add sound effect and search functionality for search button
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', function(event) {
    clickSound.currentTime = 0;
    clickSound.play();
    event.preventDefault();
    setTimeout(function() {
      const searchText = document.getElementById('search').value.trim().toLowerCase();
      if (searchText === '') {
        const searchResultsSection = document.getElementById('searchResults');
        searchResultsSection.textContent = "No search query provided."; // Display message when no search query is provided
      } else {
        localStorage.setItem('searchQuery', searchText);
        window.location.href = 'search-results.html';
      }
    }, clickSound.duration * 1000);
  });
}

// Function to set up search functionality
function setupSearchFunctionality(clickSound) {
  const searchQuery = localStorage.getItem('searchQuery');
  const searchResultsSection = document.getElementById('searchResults');

  if (!searchResultsSection || !clickSound || searchQuery === null) {
    console.error('Search results section, clickSound, or searchQuery is missing or null.');
    return;
  }

  searchResultsSection.innerHTML = ''; // Clear previous search results

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
      // Display an error message in the searchResultsSection
      searchResultsSection.textContent = "Failed to fetch search results.";
    });
}

// Function to open WhatsApp in a new tab
function openWhatsApp() {
  let phoneNumber = "972546500310";
  let encodedPhoneNumber = encodeURIComponent(phoneNumber);
  let encodedLink = "https://wa.me/" + encodedPhoneNumber;
  window.open(encodedLink);
}

// Function to open Gmail in a new tab
function openGmail() {
  window.open("mailto:asherard@gmail.com");
}

// Function to open Instagram in a new tab
function openInstagram() {
  window.open("https://www.instagram.com/asher.arden", "_blank");
}

// Function to validate the contact form
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

// Main entry point - set up the functionality after the DOM content has loaded
document.addEventListener("DOMContentLoaded", function() {
  attachMenuHandler("homeButton", "menu");
  attachMenuHandler("politicsButton", "politicsMenu");
  attachMenuHandler("aboutusButton", "aboutusMenu");
  attachMenuHandler("cultureButton", "cultureMenu");

  setupButtonSoundEffects(); // set up button sound effects including search button

  const clickSound = document.getElementById('clickSound');
  setupSearchFunctionality(clickSound);

  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('search');
  const searchResultsSection = document.getElementById('searchResults');
  
  lsearchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === '') {
      searchResultsSection.textContent = "No search query provided."; // Display message when no search query is provided
    } else {
      localStorage.setItem('searchQuery', searchText);
      window.location.href = 'search-results.html';
    }
  });

});



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

