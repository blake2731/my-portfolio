document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    fetch('../assets/data/projects.json')
        .then(response => response.json())
        .then(projects => {
            const project = projects.find(proj => proj.id === projectId);

            if (project) {
                displayProjectDetails(project);
                displayProjectGallery(project);
            } else {
                document.getElementById('project-details').innerHTML = "<p>Project not found.</p>";
            }
        })
        .catch(error => console.error('Error fetching project details:', error));
});

function displayProjectDetails(project) {
    document.getElementById('project-details').innerHTML = `
        <div class="container">
            <img src="${project.mainImage}" alt="${project.title}" class="project-image">
            <h2 class="section-heading">${project.title}</h2>
            <p>${project.description}</p>

            <div class="features-tools-wrapper">
                <div class="features">
                    <h3>🔑 Key Features</h3>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>

                <div class="tools">
                    <h3>⚙️ Technologies Used</h3>
                    <ul>
                        ${Object.entries(project.technologies)
                          .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
                          .join('')}
                    </ul>
                </div>
            </div>

            <div class="project-links">
                <a href="${project.github}" class="btn" target="_blank">View on GitHub</a>
            </div>
        </div>
    `;
}

function displayProjectGallery(project) {
    document.getElementById('project-gallery').innerHTML = `
        <div class="container">
            <h3>📸 Project Screenshots</h3>
            <div class="gallery-grid">
                ${project.images.map(image => `
                    <a href="${image}" class="lightbox">
                        <img src="${image}" alt="Project Screenshot" class="gallery-item">
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}
