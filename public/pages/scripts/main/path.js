//This serves as a dynamic link for filling content into the index page [brings in html content of different files and injects into the index.html]

//auto load the home page
let pagevisible = true;
function loadContent() {
    const env = document.getElementById('env');
    const home = document.getElementById('home');
    const theme1 = document.getElementById('theme1');
    
    if (pagevisible) {
        theme1.style.display = 'none';
        env.style.display = 'none';   
        fetch('/public/pages/html/home.html')
        .then(response => response.text())
        .then(data => {
            home.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
    } else { 
        env.style.display = 'block';   
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
//loads the environment page
function loadenv() {
    const home = document.getElementById('home');
    const env = document.getElementById('env');
    const theme1 = document.getElementById('theme1');

    if (pagevisible) {
        theme1.style.display = 'none';
        env.style.display = 'block';  
        home.style.display = 'none';
        fetch('/public/pages/html/Env.html')
            .then(response => response.text())
            .then(data => {
                env.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    } else {
        env.style.display = 'none';
        home.style.display = 'block';
        theme1.style.display = 'none';
    }
};