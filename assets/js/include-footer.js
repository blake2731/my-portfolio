document.addEventListener('DOMContentLoaded', function () {
    const basePath = window.location.hostname === 'localhost' ? '' : '/my-portfolio';

    fetch(`${basePath}/components/footer.html`)  // Fixed: backticks used correctly
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('#footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
