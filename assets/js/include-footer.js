document.addEventListener('DOMContentLoaded', function () {
    // Use a relative path for the fetch request
    fetch('components/footer.html')  // No need for basePath logic
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
