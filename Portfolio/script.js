/**
 * Portfolio JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== MOBILE MENU TOGGLE =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        const isExpanded = navLinks.style.display === 'flex';
        navLinks.style.display = isExpanded ? 'none' : 'flex';
        this.setAttribute('aria-expanded', !isExpanded);
    });

    // ===== TYPEWRITER EFFECT ===== (Fixed Timing)
    const textElement = document.querySelector('.animated-text');
    const phrases = ['Web Developer', 'UI/UX Designer'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster deletion
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal typing
        }

        // Change state at phrase boundaries
        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 1500; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause between phrases
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Start after 1s to allow page load
    setTimeout(typeWriter, 1000);

    // ===== SMOOTH SCROLLING ===== (With offset for navbar)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // ===== RESPONSIVE ADJUSTMENTS =====
    function handleResize() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Initialize and listen for resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // ===== PROJECT CARD HOVER EFFECTS =====
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });


    menuToggle.addEventListener('click', function() {
        document.body.style.overflow = navLinks.classList.contains('active') 
            ? 'hidden' 
            : 'visible';
    });
});
