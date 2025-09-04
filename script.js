// Navigation and Mobile Menu
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Function to show a specific section
    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Handle initial page load - show home section
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection('home');
    }

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            showSection(hash);
        } else {
            showSection('home');
        }
    });
});

// Gallery item click handlers for travel section
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a subtle animation effect when clicking gallery items
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
            
            // You can add more interactive features here later
            // For example, opening a modal with more details
        });
    });
});

// Smooth reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fact-card, .experience-item, .project-item, .gallery-item, .timeline-item, .future-item, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for background elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.stars, .twinkling');
    
    parallaxElements.forEach(element => {
        const speed = element.classList.contains('stars') ? 0.5 : 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll-based animations and updates
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Add some interactive effects to timeline items
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add hover effects to stat items
document.addEventListener('DOMContentLoaded', function() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const number = this.querySelector('.stat-number');
            number.style.transform = 'scale(1.1)';
            number.style.textShadow = 'var(--glow-strong)';
        });
        
        item.addEventListener('mouseleave', function() {
            const number = this.querySelector('.stat-number');
            number.style.transform = 'scale(1)';
            number.style.textShadow = 'var(--glow)';
        });
    });
});

// View Counter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const viewCountElement = document.getElementById('view-count');
    
    async function fetchViewCount() {
        try {
            const response = await fetch('https://oxfxnvyh4uujfnxrf2rl3kon6i0bzbro.lambda-url.us-east-1.on.aws/');
            const data = await response.json();
            
            if (data.views !== undefined) {
                // Animate the count
                const targetCount = data.views;
                const duration = 2000; // 2 seconds
                const startTime = performance.now();
                
                function animateCount(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const currentCount = Math.floor(progress * targetCount);
                    viewCountElement.textContent = currentCount.toLocaleString();
                    
                    if (progress < 1) {
                        requestAnimationFrame(animateCount);
                    } else {
                        viewCountElement.textContent = targetCount.toLocaleString();
                    }
                }
                
                requestAnimationFrame(animateCount);
            } else {
                viewCountElement.textContent = 'Error';
            }
        } catch (error) {
            console.error('Error fetching view count:', error);
            viewCountElement.textContent = 'Error';
        }
    }
    
    fetchViewCount();
    
    // Add click handler to refresh count
    const viewCounter = document.querySelector('.view-counter');
    if (viewCounter) {
        viewCounter.addEventListener('click', function() {
            viewCountElement.textContent = 'Loading...';
            fetchViewCount();
        });
    }
});
