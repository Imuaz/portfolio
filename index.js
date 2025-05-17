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
      });
    }
  });


 // Active nav links highlighting
document.addEventListener("DOMContentLoaded", () => {
    let headerContainer = document.querySelector("#header");

    if (headerContainer) {
        // Observer to detect when header content is loaded
        const observer = new MutationObserver(() => {
            let headerElement = document.querySelector(".header-class");
            console.log("Header detected:", headerElement);

            if (headerElement) {
                observer.disconnect(); // Stop observing once header is found

                window.addEventListener("scroll", () => {
                    let current = "";
                    document.querySelectorAll("section[id]").forEach((section) => {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.clientHeight;
                        if (window.pageYOffset >= sectionTop - 200) {
                            current = section.getAttribute("id");
                        }
                    });

                    document.querySelectorAll(".nav-link").forEach((link) => {
                        link.classList.remove("active-nav");
                        if (link.getAttribute("href") === `#${current}`) {
                            link.classList.add("active-nav");
                        }
                    });
                });

                console.log("Scroll listener attached after header loaded!");
            }
        });

        // Start observing for changes inside header container
        observer.observe(headerContainer, { childList: true });
    } else {
        console.error("🚨 #header-container not found! Make sure it exists before running this script.");
    }
});
