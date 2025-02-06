// assets/js/include-navbar.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#navbar-placeholder').innerHTML = data;

            // After loading the navbar, dynamically set the active link
            const currentPath = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
});
