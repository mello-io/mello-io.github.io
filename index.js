// This script handles the mobile menu toggle functionality.

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the button and the menu elements from the DOM
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if both elements exist before adding event listeners
    if (mobileMenuButton && mobileMenu) {
        // Add a click event listener to the menu button
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the menu to show or hide it
            mobileMenu.classList.toggle('hidden');
        });

        // Get all the links inside the mobile menu
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');

        // Loop through each link and add a click event listener
        for (let link of mobileMenuLinks) {
            link.addEventListener('click', () => {
                // When a link is clicked, hide the mobile menu
                mobileMenu.classList.add('hidden');
            });
        }
    }
});

// Universal function for toggling collapsible cards on click/tap
function setupCollapsibleCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const cards = container.querySelectorAll('.collapsible-card');
    
    cards.forEach(card => {
        const header = card.querySelector('.card-header');
        
        // Use the card itself or the header as the click target
        const clickTarget = header || card;

        clickTarget.addEventListener('click', (event) => {
            // Prevent closing the parent card if a link/button inside is clicked
            if (event.target.closest('a') || event.target.closest('button')) {
                    return;
            }
            
            // Toggle the 'active' class on the card
            card.classList.toggle('active');
        });
    });
}

// Initialize the click-to-toggle behavior for both sections
window.onload = function() {
    setupCollapsibleCards('core-competencies-grid');
    setupCollapsibleCards('mobile-experience-list');
};


