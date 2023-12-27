//This serves as a dynamic link for filling content into the index page [brings in html content of different files and injects into the index.html]

//auto load the home page
let pagevisible = true;
function loadContent() {
    const about = document.getElementById('about');
    const home = document.getElementById('home');
    const theme1 = document.getElementById('theme1');
    
    if (pagevisible) {
        theme1.style.display = 'none';
        about.style.display = 'none';   
        fetch('/public/pages/html/home.html')
        .then(response => response.text())
        .then(data => {
            home.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
    } else { 
        about.style.display = 'block';   
        home.style.display = 'none'; 
        theme1.style.display = 'none';  
    }
}
/* alternate function call for another button in the second page
document.addEventListener('DOMContentLoaded', function () {
    const loadContentButton = document.getElementById('load-content');

    loadContentButton.addEventListener('click', function () {
        loadContent();
    });
});
*/
//loads the about page
function loadabout() {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const theme1 = document.getElementById('theme1');

    if (pagevisible) {
        theme1.style.display = 'none';
        about.style.display = 'block';  
        home.style.display = 'none';
        fetch('/public/pages/html/about.html')
            .then(response => response.text())
            .then(data => {
                about.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    } else {
        about.style.display = 'none';
        home.style.display = 'block';
        theme1.style.display = 'none';
    }
    pagevisible = !pagevisible
};

function transitionTo(nextLayerId) {
    const currentLayer = document.querySelector('.layer[style="display: block;"]');
    const nextLayer = document.getElementById(nextLayerId);

    // Load content for the next layer
    loadContent(nextLayerId);

    // Apply transition by changing the transform property
    currentLayer.style.transform = 'translateX(-100%)';
    nextLayer.style.transform = 'translateX(0)';

    // Toggle the display property after the transition ends
    setTimeout(function() {
        currentLayer.style.display = 'none';
        nextLayer.style.display = 'block';
        currentLayer.style.transform = 'translateX(0)';
    }, 500); // Adjust the time based on your transition duration
}