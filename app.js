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
            card.style.display = 'flex';
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


// compare price and 
const container = document.querySelector('.Compare-price-and-feature-card-container');
let scrollPosition = 0;
const cardWidth = 400; // Approximate width of one card (you can adjust as per actual size)

/* Function to scroll to the next set of cards */
function nextCard() {
    const containerWidth = container.offsetWidth;
    scrollPosition += cardWidth * 2; // Scroll by the width of two cards (for mobile view)
    
    // If the scroll position exceeds the container width, reset it
    if (scrollPosition >= container.scrollWidth - containerWidth) {
        scrollPosition = 0;
    }
    container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

/* Function to scroll to the previous set of cards */
function prevCard() {
    scrollPosition -= cardWidth * 2; // Scroll back by the width of two cards

    if (scrollPosition < 0) {
        scrollPosition = 0;
    }
    container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}












let currentInd = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Check the screen size to determine how many items should be visible
    const totalVisible = window.innerWidth <= 768 ? 1 : 3; // 1 card for mobile, 3 cards for desktop

    currentInd += direction;

    // Check bounds to prevent out-of-range sliding
    if (currentInd < 0) {
        currentInd = totalItems - totalVisible;
    } else if (currentInd > totalItems - totalVisible) {
        currentInd = 0;
    }

    const offset = -currentInd * (100 / totalVisible); // Adjust offset for visible items
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Optional: Recalculate and reset position when window is resized
window.addEventListener('resize', () => {
    currentInd = 0;
    moveSlide(0); // Recalculate carousel on resize
});
