document.addEventListener('DOMContentLoaded', () => {
    const workGrid = document.getElementById('work-grid');

    // Render Portfolio Items
    if (workGrid && portfolioData) {
        portfolioData.forEach(item => {
            const workItem = document.createElement('a');
            workItem.href = item.link;
            workItem.className = 'work-item';

            const imgStyle = item.imagePosition ? `style="object-position: ${item.imagePosition};"` : '';

            // Set custom hover color as CSS variable
            workItem.style.setProperty('--hover-text-color', item.textColor || '#ffffff');

            workItem.innerHTML = `
                <div class="work-info">
                    <h3>${item.title}</h3>
                    <p style="opacity: 0.8;">${item.category}</p>
                </div>
                <div class="work-thumbnail">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" ${imgStyle}>
                </div>
            `;

            workGrid.appendChild(workItem);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
