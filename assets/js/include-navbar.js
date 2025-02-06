document.addEventListener('DOMContentLoaded', function () {
    // No need for basePath logic — use relative path directly
    fetch('components/navbar.html')  // Relative path works in both environments
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('#navbar-placeholder').innerHTML = data;

            // Dynamically set the active link
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
