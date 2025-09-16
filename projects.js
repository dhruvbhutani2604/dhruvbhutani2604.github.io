// Projects data - add new projects by adding objects to this array
const projects = [
    {
        id: "f1_data_platform",
        title: "F1 Data Platform",
        description: "A focused F1 data platform implementing Phase 1 (Historical Data Ingestion) and Phase 2 (Data Warehouse) with a clean star schema design. Phase 3 extends the F1 data platform with Apache Airflow orchestration and AWS S3 integration",
        image: "imgs/f1.jpg", // Placeholder - you can replace with actual image
        imageAlt: "f1",
        link: "https://github.com/dhruvbhutani2604/f1-data-platform",
        linkText: "View Code",
        buttonClass: "yelpcamp",
        color: "blue",
        imageOrder: "order-1 order-lg-1",
        textOrder: "order-2 order-lg-2",
        shadowColor: "#70ef5e",
        shadowPosition: "-15px 15px 0rem"
    },
    {
        id: "stock-market",
        title: "Stock Market Real-Time Data Streaming with Apache Kafka",
        description: "This project demonstrates a real-time data engineering pipeline for streaming stock market data using Apache Kafka.",
        image: "imgs/stockprice.jpg", // Placeholder - you can replace with actual image
        imageAlt: "ML Pipeline Framework",
        link: "https://github.com/dhruvbhutani2604/stock-market-kafka",
        linkText: "View Code",
        buttonClass: "yelpcamp",
        color: "blue",
        imageOrder: "order-1 order-lg-1",
        textOrder: "order-2 order-lg-2",
        shadowColor: "#70ef5e",
        shadowPosition: "-15px 15px 0rem"
    },
    {
        id: "bike-share",
        title: "London Bike Rides Analysis",
        description: "A comprehensive data analysis project exploring London's bike-sharing dataset with moving averages and heatmap visualizations using Tableau.",
        image: "imgs/bikeshare.jpg", // Placeholder - you can replace with actual image
        imageAlt: "ML Pipeline Framework",
        link: "https://github.com/dhruvbhutani2604/bike-analysis",
        linkText: "View Code",
        buttonClass: "yelpcamp",
        color: "blue",
        imageOrder: "order-1 order-lg-1",
        textOrder: "order-2 order-lg-2",
        shadowColor: "#70ef5e",
        shadowPosition: "-15px 15px 0rem"
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
