# README

## Portfolio Optimization - 2.5.2025

This project demonstrates the transformation of my portfolio site through an optimized and dynamic design approach using reusable components and JSON-driven data rendering.

## Changes I Made

1. **Modular Components:**
   - Created reusable components for the navbar, footer, and project slider.
   - Integrated these components across multiple pages, ensuring consistent structure and appearance.

2. **Dynamic Project Loading:**
   - Used a JSON file (`projects.json`) to store project information such as titles, descriptions, and images.
   - Dynamically rendered the projects on the homepage and projects page using JavaScript.

3. **Carousel Optimization:**
   - Optimized the project slider carousel to be fully functional, with navigation arrows and indicator dots.
   - Ensured smooth transitions between slides and fixed layout issues (e.g., button positioning and layout consistency).

4. **Responsive Design Enhancements:**
   - Ensured the carousel, project cards, and components are mobile-friendly.
   - Adjusted image sizing and card layouts for better consistency.

## Struggles I Faced and How I Overcame Them

1. **Carousel Navigation Issues:**
   - **Problem:** The carousel was skipping or not showing the correct project on navigation.
   - **Solution:** Corrected the logic in the JavaScript to calculate and apply proper slide positions.

2. **Inconsistent Layout Between Slides:**
   - **Problem:** Text and buttons moved slightly between projects.
   - **Solution:** Set consistent height constraints for the carousel items and standardized the padding and margins.

3. **Broken Image Links:**
   - **Problem:** Images were not displaying correctly due to incorrect paths.
   - **Solution:** Adjusted the image path logic in the JavaScript to correctly resolve paths dynamically.

## Future Plans

1. **Improved Accessibility:**
   - Add ARIA roles and semantic elements to improve accessibility for screen readers.

2. **Animation Enhancements:**
   - Introduce smooth fading transitions between carousel items.

3. **SEO Optimization:**
   - Improve meta tags and descriptions for better search engine visibility.

4. **Performance Optimizations:**
   - Minify CSS and JavaScript files.
   - Implement lazy loading for images.

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. Open the `index.html` file in your browser or use a live server extension in your code editor.

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **JSON for data-driven components**
- **Git/GitHub for version control**

I am proud of how this project evolved and the learnings gained along the way. With future improvements, I aim to create a fully polished and recruiter-ready portfolio.