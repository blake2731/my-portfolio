document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('slider-placeholder');

    if (!projectContainer) {
        return;
    }

    fetch('assets/data/projects.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch projects: ${response.statusText}`);
            }
            return response.json();
        })
        .then((projects) => {
            projectContainer.innerHTML = `
                <div class="project-list">
                    ${projects.map(renderProjectCard).join('')}
                </div>
            `;
        })
        .catch((error) => {
            projectContainer.innerHTML = '<p class="project-load-error">Projects could not be loaded right now.</p>';
            console.error('Error fetching project data:', error);
        });
});

function renderProjectCard(project) {
    const links = project.links || {};

    // TODO: Fill missing live/GitHub/case study URLs in assets/data/projects.json when they are available.
    const externalLinks = [
        links.live ? renderExternalLink(links.live, 'Live Demo') : '',
        links.github ? renderExternalLink(links.github, 'GitHub') : '',
        links.caseStudy ? `<a class="text-link" href="${escapeAttribute(links.caseStudy)}">Case Study</a>` : ''
    ].filter(Boolean).join('');

    return `
        <article class="project-list-card">
            ${renderProjectVisual(project)}
            <div class="project-list-content">
                <h3>${escapeHtml(project.title)}</h3>
                <p>${escapeHtml(project.summary || project.description || '')}</p>
                <dl>
                    <div>
                        <dt>Problem</dt>
                        <dd>${escapeHtml(project.problem || '')}</dd>
                    </div>
                    <div>
                        <dt>Role</dt>
                        <dd>${escapeHtml(project.role || '')}</dd>
                    </div>
                    <div>
                        <dt>Impact</dt>
                        <dd>${escapeHtml(project.impact || '')}</dd>
                    </div>
                </dl>
                <div class="project-links">
                    <a class="btn btn-primary" href="project.html?id=${encodeURIComponent(project.id)}">View Details</a>
                    ${externalLinks}
                </div>
            </div>
        </article>
    `;
}

function renderProjectVisual(project) {
    if (project.mainImage) {
        return `<img src="${escapeAttribute(project.mainImage)}" alt="${escapeAttribute(project.title)}" class="project-list-image" loading="lazy">`;
    }

    const title = escapeHtml(project.title);
    const tech = project.technologies ? Object.values(project.technologies).slice(0, 3) : [];

    return `
        <div class="project-visual" aria-label="${escapeAttribute(project.title)} project visual summary">
            <span>${title}</span>
            <div class="visual-lines" aria-hidden="true">
                <i></i><i></i><i></i>
            </div>
            <ul>
                ${tech.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderExternalLink(url, label) {
    return `<a class="text-link" href="${escapeAttribute(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
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
