document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    fetch('assets/data/projects.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch projects.json: ${response.statusText}`);
            }
            return response.json();
        })
        .then((projects) => {
            const project = projects.find((item) => item.id === projectId) || projects[0];

            if (!project) {
                document.getElementById('project-details').innerHTML = '<div class="container"><p>Project not found.</p></div>';
                return;
            }

            document.title = `${project.title} | Blake Schmitt`;
            displayProjectDetails(project);
            displayProjectGallery(project);
        })
        .catch((error) => {
            document.getElementById('project-details').innerHTML = '<div class="container"><p>Project details could not be loaded right now.</p></div>';
            console.error('Error fetching project details:', error);
        });
});

function displayProjectDetails(project) {
    const techItems = Object.entries(project.technologies || {})
        .map(([key, value]) => `<li><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value)}</li>`)
        .join('');

    const featureItems = (project.features || [])
        .map((feature) => `<li>${escapeHtml(feature)}</li>`)
        .join('');

    const linkItems = renderProjectLinks(project);

    document.getElementById('project-details').innerHTML = `
        <div class="container project-detail-layout">
            <aside class="project-detail-summary">
                ${project.mainImage ? `<img src="${escapeAttribute(project.mainImage)}" alt="${escapeAttribute(project.title)}" class="project-image">` : renderProjectVisual(project)}
                <div class="project-links">${linkItems}</div>
            </aside>
            <article class="project-detail-content">
                <p class="section-label">Project detail</p>
                <h1>${escapeHtml(project.title)}</h1>
                <p class="project-lede">${escapeHtml(project.description || project.summary || '')}</p>

                <div class="detail-grid">
                    <section>
                        <h2>Problem</h2>
                        <p>${escapeHtml(project.problem || '')}</p>
                    </section>
                    <section>
                        <h2>My role</h2>
                        <p>${escapeHtml(project.role || '')}</p>
                    </section>
                    <section>
                        <h2>Impact</h2>
                        <p>${escapeHtml(project.impact || '')}</p>
                    </section>
                    <section>
                        <h2>Features</h2>
                        <ul class="clean-list">${featureItems}</ul>
                    </section>
                    <section class="detail-wide">
                        <h2>Technology</h2>
                        <ul class="clean-list">${techItems}</ul>
                    </section>
                </div>
            </article>
        </div>
    `;
}

function displayProjectGallery(project) {
    const gallery = document.getElementById('project-gallery');
    const images = project.images || [];

    if (!images.length) {
        gallery.innerHTML = `
            <div class="container missing-assets">
                <p>Project screenshots are not in the repo yet.</p>
                <!-- TODO: Add approved screenshots for ${escapeAttribute(project.title)} to assets/images and reference them in assets/data/projects.json. -->
            </div>
        `;
        return;
    }

    gallery.innerHTML = `
        <div class="container">
            <h2>Project screenshots</h2>
            <div class="gallery-grid">
                ${images.map((image) => `
                    <a href="${escapeAttribute(image)}" class="lightbox">
                        <img src="${escapeAttribute(image)}" alt="${escapeAttribute(project.title)} screenshot" class="gallery-item" loading="lazy">
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

function renderProjectLinks(project) {
    const links = project.links || {};
    const items = [
        links.caseStudy ? `<a class="btn btn-primary" href="${escapeAttribute(links.caseStudy)}">Case Study</a>` : '',
        links.live ? `<a class="btn btn-secondary" href="${escapeAttribute(links.live)}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : '',
        links.github ? `<a class="btn btn-secondary" href="${escapeAttribute(links.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''
    ].filter(Boolean);

    // TODO: Add missing public links in assets/data/projects.json instead of using placeholder URLs.
    return items.length ? items.join('') : '<span class="link-note">Public links not added yet.</span>';
}

function renderProjectVisual(project) {
    const tech = project.technologies ? Object.values(project.technologies).slice(0, 3) : [];

    return `
        <div class="project-visual project-detail-visual" aria-label="${escapeAttribute(project.title)} project visual summary">
            <span>${escapeHtml(project.title)}</span>
            <div class="visual-lines" aria-hidden="true">
                <i></i><i></i><i></i>
            </div>
            <ul>
                ${tech.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
        </div>
    `;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, '&#096;');
}
