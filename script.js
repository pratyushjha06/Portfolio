const texts = ["CSE Student", "Web Developer","Python Developer", "AI Enthusiast", "Image Editor", "Video Editor" ];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            document.getElementById('typewriter').textContent = letter;

            if (letter.length === currentText.length) {
                setTimeout(() => {
                    index = 0;
                    count++;
                    setTimeout(type, 1000);
                }, 1500); 
            } else {
                setTimeout(type, 100);
            }
        }

        type();



document.addEventListener("scroll", () => {
    const skillsSection = document.querySelector(".skills-section");
    const progressBars = document.querySelectorAll(".progress");

    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight) {
        progressBars.forEach(bar => {
            const skillLevel = bar.getAttribute("data-skill-level");
            bar.style.width = skillLevel;
        });
    }
});



document.addEventListener("scroll", () => {
    const achievements = document.querySelectorAll(".achievement-item");
    const screenHeight = window.innerHeight;

    achievements.forEach((item) => {
        const position = item.getBoundingClientRect().top;
        if (position < screenHeight - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
        }
    });
});

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <span class="modal-close">&times;</span>
        <img src="" alt="Certificate">
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector('img');
    const modalClose = modal.querySelector('.modal-close');

    const certificateImages = document.querySelectorAll('.cert-popup');
    certificateImages.forEach(image => {
        image.addEventListener('click', () => {
            const imgSrc = image.dataset.img;
            modalImage.src = imgSrc;
            modal.style.display = 'flex';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });



window.addEventListener('scroll', function() {
    const projectsSection = document.querySelector('.projects-section');
    const projectsContainer = document.querySelector('.projects-container');
    const sectionPosition = projectsSection.getBoundingClientRect().top;


    if (sectionPosition < window.innerHeight * 0.7) {
        if (!projectsSection.classList.contains('visible')) {
            projectsSection.classList.add('visible');
          
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 300);
            });
        }
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.getElementById("contact");
    const sectionPosition = contactSection.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
        if (sectionPosition < window.innerHeight * 0.7) {
            contactSection.style.opacity = "1";
            contactSection.style.transform = "translateY(0)";
        }
    });
});
