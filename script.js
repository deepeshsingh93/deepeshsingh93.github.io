// ==================== TYPING ANIMATION ====================
const typingText = document.querySelector(".typing-text");
const phrases = [
  "Senior Manager - Data Science & Product @ AB InBev",
  "Product Management Expert",
  "Data Science Leader",
  "AI/ML Product Architect",
  "Team Builder & Mentor",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeText() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingDelay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingDelay = 500;
  }

  setTimeout(typeText, typingDelay);
}

// Start typing animation
setTimeout(typeText, 1000);

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ==================== MOBILE MENU TOGGLE ====================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active");
    navMenu?.classList.remove("active");
  });
});

// ==================== SCROLL REVEAL ANIMATION ====================
const revealElements = document.querySelectorAll(
  ".skill-card, .project-card, .experience-card, .publication-card, .stat-item"
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("reveal", "active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Initial check

// ==================== ACTIVE NAV LINK ====================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Create mailto link
  const mailtoLink = `mailto:deepeshsingh93@outlook.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  // Open mail client
  window.location.href = mailtoLink;

  // Optional: Show success message
  alert("Thank you for your message! Your email client should open now.");

  // Reset form
  contactForm.reset();
});

// ==================== PARTICLE BACKGROUND ====================
function createParticles() {
  const heroParticles = document.querySelector(".hero-particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(79, 70, 229, ${Math.random() * 0.5});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
    heroParticles?.appendChild(particle);
  }
}

createParticles();

// ==================== STATS COUNTER ANIMATION ====================
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const animateCounter = (element, target, duration = 2000) => {
  let current = 0;
  const increment = target / (duration / 16);
  const isDecimal = target % 1 !== 0;

  // Check if element has child spans (currency/suffix)
  const currencySpan = element.querySelector(".currency");
  const suffixSpan = element.querySelector(".suffix");

  if (currencySpan || suffixSpan) {
    // Handle elements with separate currency/suffix spans
    // Find the main text node that contains the number
    let numberTextNode = null;
    for (let node of element.childNodes) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
        numberTextNode = node;
        break;
      }
    }

    const updateCounter = () => {
      current += increment;
      const displayValue = isDecimal ? current.toFixed(1) : Math.floor(current);

      if (current < target) {
        if (numberTextNode) {
          numberTextNode.textContent = displayValue;
        }
        requestAnimationFrame(updateCounter);
      } else {
        if (numberTextNode) {
          numberTextNode.textContent = target;
        }
      }
    };
    updateCounter();
  } else {
    // Handle simple text elements with suffix
    const suffix = element.textContent.replace(/[0-9.]/g, "");
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent =
          (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + suffix;
      }
    };
    updateCounter();
  }
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
      entry.target.classList.add("counted");
      const statNumber = entry.target.querySelector(".stat-number");
      if (statNumber) {
        // Get text content or just the number from text nodes
        let numberText = "";
        statNumber.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            numberText += node.textContent;
          }
        });

        // If no text nodes found (simple case), use full text content
        if (!numberText.trim()) {
          numberText = statNumber.textContent;
        }

        const number = parseFloat(numberText.replace(/[^0-9.]/g, ""));
        animateCounter(statNumber, number);
      }
    }
  });
}, observerOptions);

document.querySelectorAll(".stat-item").forEach((stat) => {
  statsObserver.observe(stat);
});

// ==================== ENHANCED MOBILE MENU ====================
// Add styles for mobile menu
const style = document.createElement("style");
style.textContent = `
    @media (max-width: 968px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.1);
            padding: 2rem 0;
            backdrop-filter: blur(10px);
            border-bottom: 1px solid #e2e8f0;
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-link {
            padding: 1rem 0;
            display: block;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);

// ==================== LAZY LOAD IMAGES ====================
const images = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add("loaded");
      observer.unobserve(img);
    }
  });
});

images.forEach((img) => imageObserver.observe(img));

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = "scroll-top-btn";
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #2563eb 0%, #10b981 100%);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollTopBtn.addEventListener("mouseenter", () => {
  scrollTopBtn.style.transform = "translateY(-5px) scale(1.1)";
  scrollTopBtn.style.boxShadow = "0 6px 20px rgba(37, 99, 235, 0.6)";
});

scrollTopBtn.addEventListener("mouseleave", () => {
  scrollTopBtn.style.transform = "translateY(0) scale(1)";
  scrollTopBtn.style.boxShadow = "0 4px 15px rgba(37, 99, 235, 0.4)";
});

// ==================== CURSOR TRAIL EFFECT ====================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const cursor = document.createElement("div");
cursor.className = "custom-cursor";
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #2563eb;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    display: none;
`;

document.body.appendChild(cursor);

function animateCursor() {
  const distX = mouseX - cursorX;
  const distY = mouseY - cursorY;

  cursorX += distX * 0.1;
  cursorY += distY * 0.1;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animateCursor);
}

// Only show cursor on desktop
if (window.innerWidth > 968) {
  cursor.style.display = "block";
  animateCursor();
}

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait = 10) {
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

// Apply debounce to scroll events
const debouncedReveal = debounce(revealOnScroll, 10);
window.removeEventListener("scroll", revealOnScroll);
window.addEventListener("scroll", debouncedReveal);

// ==================== CONSOLE MESSAGE ====================
console.log(
  "%c👋 Hi there!",
  "font-size: 2rem; color: #2563eb; font-weight: bold;"
);
console.log(
  "%cWelcome to my portfolio! Interested in the code? Check out the source!",
  "font-size: 1rem; color: #10b981;"
);
console.log(
  "%c💼 Looking to collaborate? Let's connect!",
  "font-size: 1rem; color: #f59e0b;"
);

// ==================== EASTER EGG ====================
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    document.body.style.animation = "rainbow 2s linear infinite";
    const style = document.createElement("style");
    style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
    document.head.appendChild(style);

    setTimeout(() => {
      document.body.style.animation = "";
    }, 5000);

    console.log(
      "%c🎉 Easter egg found! You are awesome!",
      "font-size: 2rem; color: #10B981;"
    );
  }
});
