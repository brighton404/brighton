//This serves as a dynamic link for filling content into the index page [brings in html content of different files and injects into the index.html] 
//auto load the home page
let currentPage = sessionStorage.getItem('currentPage') || 'home';

function loadHome() {
    const about = document.getElementById('about');
    const home = document.getElementById('home');
    const theme1 = document.getElementById('theme1');

    theme1.style.display = 'none';
    about.style.display = 'none';
    home.style.display = 'block';
    
    fetch('/public/pages/html/home.html')
        .then(response => response.text())
        .then(data => {
            home.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));

    currentPage = 'home';
    sessionStorage.setItem('currentPage', currentPage);
}

function loadAbout() {
    const about = document.getElementById('about');
    const home = document.getElementById('home');
    const theme1 = document.getElementById('theme1');

    theme1.style.display = 'none';
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
    } else if (currentPage === 'about') {
        loadAbout();
    }
});