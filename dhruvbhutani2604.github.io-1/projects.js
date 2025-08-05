// Projects data - add new projects by adding objects to this array
const projects = [
    {
        id: "yelpcamp",
        title: "YelpCamp",
        description: "A full-stack web application built with Node.js and MongoDB. Features user authentication, CRUD operations, and RESTful API design. Demonstrates backend development skills and database management.",
        image: "imgs/yelpcamp.png",
        imageAlt: "YelpCamp Project",
        link: "https://dhruvsyelpcamp.herokuapp.com/",
        linkText: "Live Demo",
        buttonClass: "yelpcamp",
        color: "blue",
        imageOrder: "order-1 order-lg-2",
        textOrder: "order-2 order-lg-1",
        shadowColor: "#70ef5e",
        shadowPosition: "15px 15px 0rem"
    },
    {
        id: "sdai",
        title: "Self-Driving AI",
        description: "Implemented a reinforcement learning agent using PyTorch and Q-learning to navigate a virtual environment. Features neural network architecture optimization and real-time decision making algorithms.",
        image: "imgs/aif.gif",
        imageAlt: "Self Driving AI Project",
        link: "https://github.com/dhruvbhutani2604/selfdrivingAI",
        linkText: "View Code",
        buttonClass: "sdai",
        color: "white",
        imageOrder: "order-1 order-lg-1",
        textOrder: "order-2 order-lg-2",
        shadowColor: "#c2a336",
        shadowPosition: "-15px 15px 0rem"
    },
    {
        id: "breakout",
        title: "Atari Breakout AI",
        description: "Developed an AI agent using PyTorch and the A3C (Asynchronous Advantage Actor-Critic) algorithm to master Atari Breakout. Achieved superhuman performance through deep reinforcement learning techniques.",
        image: "imgs/breakout.jpg",
        imageAlt: "Atari Breakout AI Project",
        link: "https://github.com/dhruvbhutani2604/ataribreakout",
        linkText: "View Code",
        buttonClass: "breakout",
        color: "black",
        imageOrder: "order-1 order-lg-2",
        textOrder: "order-2 order-lg-1",
        shadowColor: "grey",
        shadowPosition: "15px 15px 0rem"
    },
    {
        id: "ml-pipeline",
        title: "ML Pipeline Framework",
        description: "Built an end-to-end machine learning pipeline for automated model training, evaluation, and deployment. Includes data preprocessing, feature engineering, model selection, and MLOps best practices.",
        image: "imgs/aif.gif", // Placeholder - you can replace with actual image
        imageAlt: "ML Pipeline Framework",
        link: "https://github.com/dhruv2604-create/ml-pipeline",
        linkText: "View Code",
        buttonClass: "yelpcamp",
        color: "blue",
        imageOrder: "order-1 order-lg-1",
        textOrder: "order-2 order-lg-2",
        shadowColor: "#70ef5e",
        shadowPosition: "-15px 15px 0rem"
    },
    {
        id: "nlp-classifier",
        title: "NLP Text Classifier",
        description: "Developed a transformer-based text classification system using BERT and fine-tuning techniques. Achieved 95%+ accuracy on sentiment analysis and topic classification tasks with real-world datasets.",
        image: "imgs/breakout.jpg", // Placeholder - you can replace with actual image
        imageAlt: "NLP Text Classifier",
        link: "https://github.com/dhruv2604-create/nlp-classifier",
        linkText: "View Code",
        buttonClass: "sdai",
        color: "white",
        imageOrder: "order-1 order-lg-2",
        textOrder: "order-2 order-lg-1",
        shadowColor: "#c2a336",
        shadowPosition: "15px 15px 0rem"
    },
    {
        id: "recommendation-system",
        title: "Recommendation System",
        description: "Built a collaborative filtering recommendation system using matrix factorization and deep learning. Achieved 15% improvement in recommendation accuracy compared to baseline models.",
        image: "imgs/yelpcamp.png", // Placeholder - you can replace with actual image
        imageAlt: "Recommendation System",
        link: "https://github.com/dhruv2604-create/recommendation-system",
        linkText: "View Code",
        buttonClass: "breakout",
        color: "black",
        imageOrder: "order-1 order-lg-1",
        textOrder: "order-2 order-lg-2",
        shadowColor: "grey",
        shadowPosition: "-15px 15px 0rem"
    }
];

// Function to render projects for the new modern design
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');

    if (!projectsContainer) {
        console.error('Projects container not found');
        return;
    }

    // Clear existing content
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.imageAlt}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                    ${project.linkText}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                    </svg>
                </a>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
}); 