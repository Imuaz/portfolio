fetch("footer.html").then(res => res.text()).then(data => document.getElementById("footer").innerHTML = data);

// Load Header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const mobileMenuButton = document.querySelector('.mobile-menu-btn'); 
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
        console.log("clicked");
      });
    }
  });



// Page navigation
function showPage(pageId) {
    const mainContent = document.getElementById('main-content');
    const educationPage = document.getElementById('education-page');
    const experiencePage = document.getElementById('experience-page');
    const skillsPage = document.getElementById('skills-page');
    
    // Hide all pages
    mainContent.classList.add('hidden');
    educationPage.classList.add('hidden');
    experiencePage.classList.add('hidden');
    skillsPage.classList.add('hidden');
    
    // Show selected page
    if (pageId === 'main') {
        mainContent.classList.remove('hidden');
    } else if (pageId === 'education') {
        educationPage.classList.remove('hidden');
    } else if (pageId === 'experience') {
        experiencePage.classList.remove('hidden');
    } else if (pageId === 'skills') {
        skillsPage.classList.remove('hidden');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Todo: implement sending to server functionality
    // For now, I'll just show an alert
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

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-nav');
        }
    });
});
