document.addEventListener('DOMContentLoaded', () => {
    const sliderPlaceholder = document.getElementById('slider-placeholder');

    if (!sliderPlaceholder) {
        console.error("Slider placeholder not found! Ensure the ID is correct.");
        return;
    }

    fetch('assets/data/projects.json')
        .then(response => response.json())
        .then(projects => {
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
                                    <a href="project.html?id=${project.id}" class="btn">View Project</a>
                                    <a href="${project.github}" class="btn" target="_blank">GitHub Repo</a>
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
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    // Ensure that each item has the same width
    function setCarouselWidth() {
        const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
        items.forEach(item => {
            item.style.width = `${carouselWidth}px`; // Force all items to have the same width
        });
    }

    // Run once on load and on resize to prevent drifting
    setCarouselWidth();
    window.addEventListener('resize', setCarouselWidth);

    document.querySelector('.carousel-controls.prev').addEventListener('click', () => navigateSlide(-1));
    document.querySelector('.carousel-controls.next').addEventListener('click', () => navigateSlide(1));

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
        
        // Calculate width based on the container
        const itemWidth = document.querySelector('.carousel-item').offsetWidth;
        const offset = -index * itemWidth;
        
        carousel.style.transition = 'transform 0.5s ease'; // Smooth transition
        carousel.style.transform = `translateX(${offset}px)`; // Use pixel-based offset for precision

        // Update active states
        items.forEach((item, i) => item.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    // Initialize on load
    showSlide(currentIndex);
}
