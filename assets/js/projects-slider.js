document.addEventListener('DOMContentLoaded', () => {
    const sliderPlaceholder = document.getElementById('slider-placeholder');

    if (!sliderPlaceholder) {
        console.error("Slider placeholder not found! Ensure the ID is correct.");
        return;
    }

    fetch('assets/data/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            return response.json();
        })
        .then(projects => {
            if (!projects.length) {
                console.error("No projects found in JSON data.");
                return;
            }

            sliderPlaceholder.innerHTML = `
                <div class="carousel-container">
                    <button class="carousel-controls prev">&#8249;</button>
                    <div class="carousel" id="project-carousel">
                        ${projects.map((project, index) => `
                            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                <img src="${project.mainImage.startsWith('assets/') ? project.mainImage : `assets/images/${project.mainImage}`}" alt="${project.title}">
                                <h3>${project.title}</h3>
                                <p>${project.description}</p>
                                <div class="project-links">
                                    <a href="${project.id ? `project.html?id=${project.id}` : '#'}" class="btn">View Project</a>
                                    <a href="${project.github || '#'}" class="btn" target="_blank">GitHub Repo</a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <button class="carousel-controls next">&#8250;</button>
                    <div class="carousel-indicators" id="carousel-dots">
                        ${projects.map((_, index) => `
                            <span class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
                        `).join('')}
                    </div>
                </div>
            `;

            initializeCarousel(projects.length);
        })
        .catch(error => console.error("Error fetching project data:", error));
});

function initializeCarousel(totalSlides) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-controls.prev');
    const nextButton = document.querySelector('.carousel-controls.next');
    let currentIndex = 0;

    // Set up carousel width dynamically
    function setCarouselWidth() {
        const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
        items.forEach(item => {
            item.style.width = `${carouselWidth}px`;
        });
    }

    // Run once on load and on resize to prevent layout issues
    setCarouselWidth();
    window.addEventListener('resize', setCarouselWidth);

    // Navigation functions
    prevButton.addEventListener('click', () => navigateSlide(-1));
    nextButton.addEventListener('click', () => navigateSlide(1));

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-slide'));
            showSlide(index);
        });
    });

    function navigateSlide(step) {
        currentIndex = (currentIndex + step + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    function showSlide(index) {
        currentIndex = index;

        // Calculate offset based on slide width
        const itemWidth = document.querySelector('.carousel-item').offsetWidth;
        const offset = -index * itemWidth;

        // Animate the carousel sliding effect
        const carousel = document.querySelector('#project-carousel');
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(${offset}px)`;

        // Update active states for items and dots
        items.forEach((item, i) => item.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    // Initialize by showing the first slide
    showSlide(currentIndex);
}
