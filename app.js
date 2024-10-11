const items = document.querySelectorAll('.comparison-item');

// Function to clear active states and set the clicked one as active
const handleClick = (item) => {
    items.forEach(i => {
        i.classList.remove('active'); // Remove active state from all items
    });
    item.classList.add('active'); // Add active state to the clicked item
};

// Add click event listener to each item
items.forEach(item => {
    item.addEventListener('click', function() {
        handleClick(this);
    });
});

// Set the default active state on page load
document.addEventListener('DOMContentLoaded', () => {
    const defaultItem = document.querySelector('.comparison-item.active');
    if (defaultItem) {
        handleClick(defaultItem);
    }
});








const nextArrow = document.getElementById('next-arrow');
const prevArrow = document.getElementById('prev-arrow');
const cardContainer = document.getElementById('mobileCardContainer');
const cards = Array.from(cardContainer.children);

// Function to get cardsPerPage based on screen size
function getCardsPerPage() {
    if (window.innerWidth <= 600) {
        return 1;  // 1 card on mobile
    } else if (window.innerWidth <= 1024) {
        return 2;  // 2 cards on tablet
    } else {
        return 4;  // 4 cards on desktop
    }
}

let cardsPerPage = getCardsPerPage();
let currentIndex = 0;

prevArrow.style.display = 'none';

// Function to update the visible cards
function updateVisibleCards() {
    cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + cardsPerPage) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    prevArrow.style.display = currentIndex === 0 ? 'none' : 'inline-block';
    nextArrow.style.display = currentIndex + cardsPerPage >= cards.length ? 'none' : 'inline-block';
}

// Update visible cards when window is resized
window.addEventListener('resize', () => {
    cardsPerPage = getCardsPerPage();  // Update the number of visible cards
    updateVisibleCards();  // Refresh the visible cards
});

// Initialize by showing the first set of cards
updateVisibleCards();

nextArrow.addEventListener('click', () => {
    if (currentIndex + cardsPerPage < cards.length) {
        currentIndex += cardsPerPage;
        updateVisibleCards();
    }
});

prevArrow.addEventListener('click', () => {
    if (currentIndex - cardsPerPage >= 0) {
        currentIndex -= cardsPerPage;
        updateVisibleCards();
    }
});
