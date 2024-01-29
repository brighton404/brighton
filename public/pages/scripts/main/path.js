//This serves as a dynamic link for filling content into the index page
let currentPage = sessionStorage.getItem('currentPage') || 'profile';

function loadProfile() {
    const about = document.getElementById('about');
    const profile = document.getElementById('profile');
    const navhome = document.getElementById('navhome');
    const navabout = document.getElementById('navabout');
    const FigmaLink = document.getElementById('Figma');

    profile.style.display = 'block';
    about.style.display = 'none';
    navhome.classList.add ('active');
    FigmaLink.classList.remove ('active')
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
    const profile = document.getElementById('profile');
    const navabout = document.getElementById('navabout');
    const navhome = document.getElementById('navhome');
    const FigmaLink = document.getElementById('Figma');

    profile.style.display = 'none';
    about.style.display = 'block';
    navabout.classList.add ('active');
    FigmaLink.classList.remove('active')
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

    const allElements = document.querySelectorAll('.card-context');
    allElements.forEach((el) => {
      if (el !== element) {
        el.classList.remove('expand-text');
      }
    });
}

function Figma() {
    const about = document.getElementById('about');
    const profile = document.getElementById('profile');
    const FigmaLink = document.getElementById('Figma');

    profile.style.display.remove = 'active';
    about.style.display.remove = 'active';
    FigmaLink.classList.add ('active');

    window.location.href = 'https://www.figma.com/@brighton404'; 
}

//loader
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.loader-wrapper').style.display = 'none';
});
window.addEventListener('beforeunload', function () {
    document.querySelector('.loader-wrapper').style.display = 'flex';
});
