const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuToggle.textContent = navLinks.classList.contains('show') ? '✕' : '☰';
    });
}


const offerBar = document.querySelector('.offer-bar');
const closeBtn = document.querySelector('.close-btn');

if (closeBtn && offerBar) {
    closeBtn.addEventListener('click', () => {
        offerBar.style.display = 'none';
    });
}


const wishlistIcons = document.querySelectorAll('.wishlist');

wishlistIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
        icon.textContent = icon.classList.contains('active') ? '💖' : '❤️';
    });
});


const shopButtons = document.querySelectorAll(
    '.hero-content button, .product-card button, .wanted-card button, .offer-content button, .collection-overlay button'
);

shopButtons.forEach((button) => {
    button.addEventListener('click', () => {

        alert('Redirecting to shop... (connect this to your product listing page)');
    });
});


const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (email) {
            alert(`Thanks for subscribing, ${email}!`);
            newsletterForm.reset();
        }
    });
}


const filterButtons = document.querySelectorAll('.filter-btn');
const collectionCards = document.querySelectorAll('.collection-card');
const searchInput = document.querySelector('.search-input');

let activeFilter = 'all';

function applyCollectionFilters() {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

    collectionCards.forEach((card) => {
        const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;

        const brandName = card.querySelector('h3').textContent.toLowerCase();
        const matchesSearch = searchTerm === '' || brandName.includes(searchTerm);

        card.style.display = (matchesFilter && matchesSearch) ? '' : 'none';
    });
}

filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {

        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        activeFilter = btn.dataset.filter;

        applyCollectionFilters();
    });
});

if (searchInput) {
    searchInput.addEventListener('input', () => {
        applyCollectionFilters();
    });
}


const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get('category');

if (categoryParam) {
    const matchingBtn = document.querySelector(`.filter-btn[data-filter="${categoryParam}"]`);
    if (matchingBtn) {
        matchingBtn.click();
    }
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = contactForm.querySelector('#name');
        const name = nameInput.value.trim();

        if (name) {
            alert(`Thanks, ${name}! Your message has been sent. We'll get back to you soon.`);
            contactForm.reset();
        }
    });
}
