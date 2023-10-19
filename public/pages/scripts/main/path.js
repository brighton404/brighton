//auto load the home page
function loadContent() {
    const home = document.getElementById('home');

    fetch('/public/pages/html/home.html')
        .then(response => response.text())
        .then(data => {
            home.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

// alternate function call for another button in the second page
document.addEventListener('DOMContentLoaded', function () {
    const loadContentButton = document.getElementById('load-content');

    loadContentButton.addEventListener('click', function () {
        loadContent();
    });
});
//loads the environment page
document.addEventListener('DOMContentLoaded', function () {
    const targetSection = document.getElementById('env');
    const loadContentButton = document.getElementById('load-content');

    loadContentButton.addEventListener('click', function () {
        fetch('external-content.html')
            .then(response => response.text())
            .then(data => {
                targetSection.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });
});