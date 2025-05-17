// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-btn'); 
const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
      });
    }

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For demo purposes, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
    // Clear form
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});


// Page navigation
function showPage(pageId) {
    const mainContent = document.getElementById("main-content");
    const educationPage = document.getElementById("education-page");
    const experiencePage = document.getElementById("experience-page");
    const skillsPage = document.getElementById("skills-page");

    // Hide all pages
    mainContent.classList.add("hidden");
    educationPage.classList.add("hidden");
    experiencePage.classList.add("hidden");
    skillsPage.classList.add("hidden");

    // Show selected page
    if (pageId === "main") {
        mainContent.classList.remove("hidden");
    } else if (pageId === "education") {
        educationPage.classList.remove("hidden");
    } else if (pageId === "experience") {
        experiencePage.classList.remove("hidden");
    } else if (pageId === "skills") {
        skillsPage.classList.remove("hidden");
    }

    // Store the selected page in localStorage
    localStorage.setItem("selectedPage", pageId);

    // Scroll to top
    window.scrollTo(0, 0);
}

// 🔹 Restore selected page on load
document.addEventListener("DOMContentLoaded", () => {
    const savedPage = localStorage.getItem("selectedPage") || "main"; // Default to 'main' if no value found
    showPage(savedPage);
});



// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

// Active nav link highlighting on scroll
window.addEventListener('scroll', () => {
    const savedPage = localStorage.getItem("selectedPage") || "main";
    let current = '';

    if (savedPage === 'main') {
        // Handle scroll-based highlight
        sections.forEach(section => {
            if (section.classList.contains('hidden')) return;
            
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id'); // like "about", "projects"
                }
            });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');

            const href = link.getAttribute('href')?.replace('#', '');
            if (href && href === current) {
                link.classList.add('active-nav');
            }
        });
    } else {
        // Handle JS-switched pages
        navLinks.forEach(link => {
            link.classList.remove('active-nav');

            if (link.classList.contains(savedPage)) {
                link.classList.add('active-nav');
            }
        });
    }
    // Update navigation styles
    // navLinks.forEach(link => {
    //     link.classList.remove('active-nav');
    //     if (link.getAttribute('href') === `#${current}`) {
    //         link.classList.add('active-nav');
    //     }
    // });
});
