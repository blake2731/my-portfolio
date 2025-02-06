document.addEventListener('DOMContentLoaded', function () {
    // Determine base path dynamically (local vs GitHub Pages)
    const basePath = window.location.hostname === 'localhost' ? '' : '/my-portfolio';

    // Use correct interpolation for fetch()
    fetch(`${basePath}/components/navbar.html`)  // Dynamic path works here
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
