<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./links/style1-aj.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
<script src="./links/java1-functions.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Work+Sans:wght@500&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Playfair+Display&family=Work+Sans:wght@500&display=swap" rel="stylesheet">
<link rel="icon" href="./assets/logos/svg/AJBB.png" image>
<title>Ardens Journal</title>
</head>

<body>

  <header>
    
    <div class="header">

    <div class="logo">
      <img id="logo" src="./assets/logos/svg/AJBB.png" height="75rem">
    </div>

  

    <div class="search-bar">
      <form onsubmit="performSearch(event)">
        <input type="text" name="search" id="search" placeholder="Search..." required>
        <button type="submit" value="Search" id="search-button">Search</button>
      </form>
      <div id="searchResults"></div>
    </div>

    <div class="ardens-journal">
      <h1 id="ardens">Ardens</h1>  
      <h1 id="journal">Journal</h1>
    </div>

    <nav>
      <ul>

        <li><button id="homeButton">Home</button></li>
        <ul id="menu" class="collapsed">
          <li><button class="button-menu"><a href="./1-mainpages/1home1-mainpage.html">Home</a></button></li>
          <li><button class="button-menu"><a href="./1-mainpages/1home2-about-us.html">About Us</a></button></li>
          <li><button class="button-menu"><a href="./1-mainpages/1home3-resume.html">Owners Resume</a></button></li>
          <li><button class="button-menu"><a href="./1-mainpages/1home4-hobbies.html">Owners Hobbies</a></button></li>
        </ul>

        <li><button id="aboutusButton">Unlock Your Potential</button></li>
        <ul id="aboutusMenu" class="aboutusCollapsed">
          <li><button class="button-aboutus"><a href="./2-secondarypages/21-programing-12rules.html">  Program Mastery </a></button></li>
          <li><button class="button-aboutus">Economic Mastery</button></li>
          <li><button class="button-aboutus">Accounting Mastery</button></li>
        </ul>

        <li><button id="politicsButton">Politics</button></li>
        <ul id="politicsMenu" class="politicsCollapsed">
          <li><button class="button-politics"> <a href="./2-secondarypages/31swordsOfIron.html">Israel Today</a> </button></li>
          <li><button class="button-politics">Israel History</button></li>
          <li><button class="button-politics">The News Around the World </button></li>
        </ul>

        <li><button id="cultureButton">Culture</button></li>
        <ul id="cultureMenu" class="cultureCollapsed">
          <li><button class="button-culture">Books</button></li>
          <li><button class="button-culture">Music</button></li>
          <li><button class="button-culture">Series</button></li>
          <li><button class="button-culture">Movies</button></li>
          <li><button class="button-culture">Social Media</button></li>            
        </ul>
      </ul>
    </nav>
</div>

</header>
 
<hr/>

<div>
  <h2 id="ajlinkh">
<a id="ajlink" href="./1home1-mainpage.html"> Ardens Journal </a>
 </h2>
</div>

<div id="aj">
<h1 class="aj">
  Ardens Journal
</h1>
</div>

  <main>
    <section id="first">
      <article class="ad-container">
        <div class="video-container">
        <video id="video" src="./1-mainpages/1home1-mainpage.html" autoplay loop>About Us</video>
      </div>

        <h2>Discover Your Passion for Adventure - Learn Programming</h2>
        <p>
          Are you ready to embark on an exhilarating journey into the world of programming? Unlock your untapped potential and join the ranks of visionary creators, problem solvers, and innovators in the digital realm. Click on the link provided to gain access to a treasure trove of inspiring articles and interactive lessons that will ignite your passion for programming. Unleash your imagination, hone your skills, and unravel the mysteries of coding as you navigate exhilarating challenges and bask in the satisfaction of bringing your ideas to life. Your adventure starts now - click, learn, and let the magic of programming unfold before your eyes.        </p>
        <br/> <br/>
          Embark on our exclusive travel packages and unlock a world of possibilities. Dive into crystal-clear azure waters, witness breathtaking sunsets from majestic peaks, and connect with fellow explorers who share your passion for discovery. From off-the-beaten-path destinations to iconic landmarks, our itineraries are designed to create unforgettable moments.
          
          <br> <br> <br>

          <a class="btn" href="./2-secondarypages/21-programing-12rules.html"> Click here and find yourself </a>
                    
        <p>Article Publication date: </br>  06-October-2023</p>

      </article>
    </section>

    <aside>

      <h3 id="more">More Articles</h3>

      <ul class="article-list">

      <li>
          <a id="second-text" href="#">
            <div class="video-container-side">
              <video id="video-side" src="./assets/Kaiber/videos/books/48lawsofpower/48lawsofpower-1.mp4" autoplay loop></video>
            </div>
            48 Laws of Power
            <br> <br>
            Discover the secrets to mastering power and influence with "48 Laws of Power" - a timeless guidebook that unveils the strategies used by historical figures to achieve success.
          </a>
          <p class="second-text">by Asher Arden</p>
      </li>
      <br> <br>
       <li>
          <a id="third-text" href="#">
            <div class="video-container-side">
              <video id="video-side" src="./assets/Kaiber/videos/books/nomoremrniceguy/college.mp4 away.mp4" autoplay loop></video>
            </div>
            No more Mr. Nice Guy
            <br> <br>
            Are you tired of being a people-pleaser and feeling trapped in the "nice guy" role? "No More Mr. Nice Guy" is a transformative read that guides you towards embracing your true self and reclaiming your personal power.
          </a>
          <p class="third-text">by Asher Arden</p>
      </li>
      </ul>
    </aside>
  </main>

  <footer>
  <div id="footer">
    <div class="logofoot">
      <img id="logo-footer" src="./assets/logos/svg/AJB.png" height="74rem">
    </div>

    <div class="ardens-journal-footer">
      <h1 id="ardens-footer">Ardens</h1>  
      <h1 id="journal-footer">Journal</h1>
    </div>

    <div id="rightslegal">
      <div id="allrights">
        <p>Ardens Journal. All rights reserved. ©</p>
      </div>

      <hr style="border-color: wheat;">

      <div class="allrights">
        <p id="coutnriesrights"> Israel Edition | <a href="./1home1-mainpage.html">World Edition</a> </p>   
        <hr style="border-color: burlywood;">
        <p id="legal"> <a href="../3-footer/9footer2-privacystatment.html">AdChoices</a> | <a href="./3-footer/9footer2-privacystatment.html">Privacy Statement </a> |
           <a href="./3-footer/9footer2-privacystatment.html">Do Not Sell or Share My Personal Information</a> |
          <br> 
          <a href="./3-footer/9footer2-privacystatment.html"> Limit the Use of My Sensitive Personal Information </a> |
           <a href="./3-footer/9footer2-privacystatment.html"> Privacy Preferences </a> |
          <br>
          <a href="./3-footer/9footer4-termsofUse.html"> Terms of Service </a> | <a href="./3-footer/9footer2-privacystatment.html"> Digital Terms of Sale </a> | 
          <a href="./3-footer/9footer1-contactus.html">Contact Us</a> | <a href="./3-footer/9footer1-contactus.html"> Send Us Feedback </a>  |
          <br> <a href="./3-footer/9footer5-jobs.html"> Jobs at Ardens Journal </a> | <a href="./3-footer/9footer3-reprintsandPremissions.html">Reprints & Permissions</a>  | 
          <a href="./3-footer/9footer6-pressRoom.html">Ardens Journal Press Room</a> | <a href="./3-footer/9footer7-ads.html">Advertise</a> | <a href="./3-footer/9footer8-invest.html">Investors</a> </p>
      </div>
    </div>
  </div>

</footer> 

</body>
</html>
