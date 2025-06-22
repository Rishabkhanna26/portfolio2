// Data
const skills = [
  { icon: 'fab fa-html5', name: 'HTML5', info: 'Intermediate: Semantic markup, accessibility best practices, and modern HTML5 features.' },
  { icon: 'fab fa-css3-alt', name: 'CSS3', info: 'Intermediate: Flexbox, Grid, animations, and responsive design principles.' },
  { icon: 'fab fa-js', name: 'JavaScript', info: 'Intermediate: ES6+, DOM manipulation, async programming, and modern JS practices.' },
  { icon: 'fab fa-wordpress', name: 'WordPress', info: 'Advanced: Custom themes, plugin development, API integration, and admin panel optimization.' },
  { icon: 'fab fa-react', name: 'React', info: 'Starting Phase: Learning components, hooks, and state management.' },
  { icon: 'fab fa-node-js', name: 'Node.js', info: 'Starting Phase: Building APIs, automation tools, and server-side applications.' },
  { icon: 'fab fa-php', name: 'PHP', info: 'Intermediate: OOP, MVC patterns, and working with databases.' },
  { icon: 'fab fa-git-alt', name: 'Git', info: 'Intermediate: Version control, branching strategies, and collaboration workflows.' },
  { icon: 'fab fa-github', name: 'Github', info: 'Intermediate: Repository management, issues, and project collaboration.' },
  { icon: 'fab fa-js', name: 'jQuery', info: 'Intermediate: DOM manipulation, event handling, and jQuery plugins.' },
  { icon: 'fas fa-exchange-alt', name: 'AJAX', info: 'Intermediate: Asynchronous requests, API integration, and data handling.' }
];

const experiences = [
  {
    date: 'Oct 2023 - Present',
    title: 'Full Stack Developer',
    company: 'Erosteps, Jalandhar',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    details: [
      'Developing and maintaining web applications',
      'Working with modern JavaScript frameworks',
      'Implementing responsive designs'
    ]
  },
  {
    date: 'Nov 2023 - Present',
    title: 'Web Administrator',
    company: 'Saurabh Pandey UPSC',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    details: [
      'Managed technical aspects of saurabhpandeyupsc.com',
      'Handled content updates and performance optimization',
      'Implemented SEO best practices',
      'Successfully migrated hosting with minimal downtime'
    ]
  }
];

const projects = [
  {
    title: 'Admin Leave Management',
    description: 'WordPress plugin for managing employee leaves with jQuery and AJAX integration.',
    images: ['public/adminleave1.png', 'public/adminleave2.png'],
    tech: ['WordPress', 'PHP', 'jQuery', 'AJAX']
  },
  {
    title: 'Expense Management System',
    description: 'Admin dashboard for expense tracking and management using jQuery and AJAX.',
    images: ['public/expenses1.png', 'public/expenses2.png'],
    tech: ['PHP', 'MySQL', 'jQuery', 'AJAX']
  },
  {
    title: 'Image Optimization Plugin',
    description: 'WordPress plugin for automatic image optimization, supporting multiple formats and compression levels.',
    images: ['public/imageoptimize1.png', 'public/imageoptimize2.png', 'public/imageoptimize3.png'],
    tech: ['WordPress', 'PHP', 'JavaScript', 'Image Processing']
  },
  {
    title: 'WhatsApp Automation',
    description: 'Node.js app for automated WhatsApp messaging with Discord integration and QR authentication.',
    images: ['https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    tech: ['Node.js', 'Discord.js', 'WebSocket', 'MySQL']
  },
  {
    title: 'Dynamic PDF Generator',
    description: 'Plugin that fetches data from APIs and generates customized PDFs.',
    images: [
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    tech: ['PHP', 'REST API', 'DOMPDF', 'JavaScript']
  }
];

// Greeting rotation function
function rotateGreeting() {
  const greetings = [
    "HELLO", "नमस्ते", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "হ্যালো", "హలో", "नमस्कार", "வணக்கம்",
    "નમસ્તે", "سلام", "ಹಲೋ", "ഹലോ", "ନମସ୍କାର", "নমস্কাৰ", "नमस्कार", "नमः"
  ];

  let greetIndex = 0;
  const helloEl = document.getElementById('hello');

  function updateGreeting() {
    if (helloEl) {
      helloEl.textContent = greetings[greetIndex];
      greetIndex = (greetIndex + 1) % greetings.length;
    }
  }

  if (helloEl) {
    updateGreeting();
    setInterval(updateGreeting, 1500);
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
  // Handle loader
  const loaderWrapper = document.getElementById('loader-wrapper');
  const minLoaderTime = 1400;
  const startTime = Date.now();

  window.addEventListener('load', () => {
    const timeElapsed = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoaderTime - timeElapsed);

    setTimeout(() => {
      if (loaderWrapper) {
        loaderWrapper.classList.add('hidden');
      }
    }, remainingTime);
  });

  // Start greeting rotation
  rotateGreeting();

  // Populate skills
  const skillsGrid = document.querySelector('.skills-grid');
  if (skillsGrid) {
    skills.forEach(skill => {
      skillsGrid.innerHTML += `
        <div class="skill-card">
          <i class="${skill.icon}"></i>
          <span>${skill.name}</span>
        </div>
      `;
    });
  }

  // Populate experience timeline
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    experiences.forEach(exp => {
      timeline.innerHTML += `
        <div class="timeline-item">
          <div class="timeline-content">
            <div class="experience-header">
              <div class="experience-company">
                <img src="${exp.image}" alt="${exp.company}">
                <div>
                  <h3>${exp.title}</h3>
                  <p>${exp.company}</p>
                </div>
              </div>
              <span class="experience-date">${exp.date}</span>
            </div>
            <div class="experience-body">
              <ul class="experience-details">
                ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    });
  }

  // Create modal element
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <img class="modal-image" src="" alt="Project Image">
      <div class="modal-nav">
        <button class="modal-prev"><i class="fas fa-chevron-left"></i></button>
        <button class="modal-next"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Modal functionality
  let currentProjectIndex = 0;
  let currentImageIndex = 0;

  function updateModalImage() {
    const modalImg = modal.querySelector('.modal-image');
    modalImg.src = projects[currentProjectIndex].images[currentImageIndex];
  }

  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.querySelector('.modal-prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + projects[currentProjectIndex].images.length) % projects[currentProjectIndex].images.length;
    updateModalImage();
  });

  modal.querySelector('.modal-next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % projects[currentProjectIndex].images.length;
    updateModalImage();
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Populate projects with image slider
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    projects.forEach((project, projectIndex) => {
      projectsGrid.innerHTML += `
        <div class="project-card">
          <div class="project-image-slider">
            <div class="slider-container" id="slider-${projectIndex}">
              ${project.images.map((img, imgIndex) => `
                <img src="${img}" alt="${project.title} ${imgIndex + 1}" 
                     class="slider-image ${imgIndex === 0 ? 'active' : ''}"
                     data-project="${projectIndex}"
                     data-image="${imgIndex}" />
              `).join('')}
            </div>
            <div class="slider-dots">
              ${project.images.map((_, imgIndex) => `
                <span class="dot ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}"></span>
              `).join('')}
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    });

    // Initialize image sliders and click handlers
    projects.forEach((_, projectIndex) => {
      const slider = document.querySelector(`#slider-${projectIndex}`);
      const dots = slider.parentElement.querySelector('.slider-dots');

      // Handle image clicks
      slider.querySelectorAll('.slider-image').forEach(img => {
        img.addEventListener('click', (e) => {
          currentProjectIndex = parseInt(e.target.dataset.project);
          currentImageIndex = parseInt(e.target.dataset.image);
          updateModalImage();
          modal.classList.add('active');
        });
      });

      // Handle dot navigation
      dots.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
          const index = parseInt(e.target.dataset.index);
          const images = slider.querySelectorAll('.slider-image');
          const allDots = dots.querySelectorAll('.dot');

          images.forEach(img => img.classList.remove('active'));
          allDots.forEach(dot => dot.classList.remove('active'));

          images[index].classList.add('active');
          e.target.classList.add('active');
        }
      });

      // Auto-rotate images
      let currentIndex = 0;
      setInterval(() => {
        const images = slider.querySelectorAll('.slider-image');
        const allDots = dots.querySelectorAll('.dot');

        if (images.length > 1) {
          images[currentIndex].classList.remove('active');
          allDots[currentIndex].classList.remove('active');

          currentIndex = (currentIndex + 1) % images.length;

          images[currentIndex].classList.add('active');
          allDots[currentIndex].classList.add('active');
        }
      }, 5000);
    });
  }

  // Scroll animations
  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const maxScroll = 300;
    const scrollFraction = Math.min(scrollTop / maxScroll, 1);
    const isMobile = window.innerWidth <= 768;
  
    const profile = document.querySelector('.profile');
    const miniProfile = document.querySelector('.mini-profile');
    const name = document.querySelector('.name');
    const intro = document.querySelector('.intro');
    const buttons = document.querySelector('.buttons');
    const header = document.querySelector('.header');
  
    if (header) {
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  
    if (profile) {
      const scale = 1 - scrollFraction * (isMobile ? 0.4 : 0.6);
      const translateX = scrollFraction * (isMobile ? -30 : -50);
      const translateY = scrollFraction * (isMobile ? -50 : -80);
      profile.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
      profile.style.opacity = `${1 - scrollFraction}`;
    }
  
    if (miniProfile) {
      const size = 40 * scrollFraction;
      miniProfile.style.width = `${size}px`;
      miniProfile.style.height = `${size}px`;
      miniProfile.style.opacity = `${scrollFraction}`;
    }
  
    if (name) {
      const translateX = isMobile ? 20 * scrollFraction : 60 * scrollFraction;
      name.style.transform = `translateX(${translateX}px)`;
    }
  
    if (intro) {
      const translateX = isMobile ? scrollFraction * 50 : scrollFraction * 100;
      intro.style.transform = `translateX(${translateX}%)`;
      intro.style.opacity = `${1 - scrollFraction}`;
    }
  
    if (buttons) {
      buttons.style.transform = `scale(${1 - scrollFraction * 0.3})`;
      buttons.style.opacity = `${1 - scrollFraction}`;
    }
  });
  
  // Intersection Observer for animations
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.section, .timeline-item').forEach(element => {
    sectionObserver.observe(element);
  });

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        subject: document.getElementById('subject')?.value || '',
        message: document.getElementById('message')?.value || '',
        to: 'rishabkhanna26@gmail.com'
      };

      const mailtoLink = `mailto:${formData.to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    });
  }
});
