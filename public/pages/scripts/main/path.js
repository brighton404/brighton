//This serves as a dynamic link for filling content into the index page
let currentPage = sessionStorage.getItem('currentPage') || 'profile';

function loadProfile() {
    const about = document.getElementById('about');
    const home = document.getElementById('home');
    const profile = document.getElementById('profile');
    const navhome = document.getElementById('navhome');
    const navabout = document.getElementById('navabout');

    profile.style.display = 'block';
    about.style.display = 'none';
    navhome.classList.add ('active');
    navhome.style.display = 'none';
    navabout.style.display = 'block';
    
    fetch('/public/pages/html/profile.html')
        .then(response => response.text())
        .then(data => {
            profile.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));

    currentPage = 'profile';
    sessionStorage.setItem('currentPage', currentPage);
}

function loadAbout() {
    const about = document.getElementById('about');
    const home = document.getElementById('home');
    const profile = document.getElementById('profile');
    const navabout = document.getElementById('navabout');
    const navhome = document.getElementById('navhome');

    profile.style.display = 'none';
    about.style.display = 'block';
    navabout.classList.add ('active');
    navabout.style.display = 'none';
    navhome.style.display = 'block';

    fetch('/public/pages/html/about.html')
        .then(response => response.text())
        .then(data => {
            about.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));

    currentPage = 'about';
    sessionStorage.setItem('currentPage', currentPage);
}

document.addEventListener('DOMContentLoaded', function () {
    if (currentPage === 'profile') {
        loadProfile();
    } else if (currentPage === 'about') {
        loadAbout();
    }
});

function toggleTruncation(element) {
    element.classList.toggle('expand-text');

    const allElements = document.querySelectorAll('.with-x-years');
    allElements.forEach((el) => {
      if (el !== element) {
        el.classList.remove('expand-text');
      }
    });
  }


    const brightonlunahealthcoText = document.getElementById(
      "brightonlunahealthcoText"
    );
    if (brightonlunahealthcoText) {
      brightonlunahealthcoText.addEventListener("click", function () {
        window.location.href =
          "mailto:brighton@lunahealth.co?subject=brighton@lunahealth.co";
      });
    }
    
    var linkedInText = document.getElementById("linkedInText");
    if (linkedInText) {
      linkedInText.addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/julius-brighton/");
      });
    }
    
    var veroText = document.getElementById("veroText");
    if (veroText) {
      veroText.addEventListener("click", function () {
        window.open("https://vero.co/jomviking");
      });
    }
    
    var behanceText = document.getElementById("behanceText");
    if (behanceText) {
      behanceText.addEventListener("click", function () {
        window.open("https://www.behance.net/juliusbrighton");
      });
    }
    
    var readcvText = document.getElementById("readcvText");
    if (readcvText) {
      readcvText.addEventListener("click", function () {
        window.open("https://read.cv/brightonjulius");
      });
    }