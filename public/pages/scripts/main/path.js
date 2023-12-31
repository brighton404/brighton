//This serves as a dynamic link for filling content into the index page
let currentPage = sessionStorage.getItem('currentPage') || 'home';

function loadHome() {
    const about = document.getElementById('about');
    const home = document.getElementById('home');
    const profile = document.getElementById('profile');

    profile.style.display = 'none';
    about.style.display = 'none';
    home.style.display = 'block';

    currentPage = 'profile';
    sessionStorage.setItem('currentPage', currentPage);
}

function loadProfile() {
    const about = document.getElementById('about');
    const home = document.getElementById('home');
    const profile = document.getElementById('profile');

    profile.style.display = 'block';
    about.style.display = 'none';
    home.style.display = 'none';
    
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

    profile.style.display = 'none';
    about.style.display = 'block';
    home.style.display = 'none';

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
    if (currentPage === 'home') {
        loadHome();
    } else if (currentPage === 'profile') {
        loadProfile();
    } else if (currentPage === 'about') {
        loadAbout();
    }
});

feather.replace();