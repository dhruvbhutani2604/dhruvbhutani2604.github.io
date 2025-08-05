# How to Add New Projects

Your portfolio now uses a dynamic project system focused on ML/AI and Data Science! To add new projects, simply edit the `projects.js` file.

## Adding a New Project

1. Open `projects.js`
2. Add a new object to the `projects` array with the following structure:

```javascript
{
    id: "unique-project-id",
    title: "Project Title",
    description: "Project description goes here.",
    image: "imgs/your-image.png",
    imageAlt: "Alt text for image",
    link: "https://your-project-link.com",
    linkText: "View Code",
    buttonClass: "your-button-class",
    color: "blue", // or "white", "black", "orange", etc.
    imageOrder: "order-1 order-lg-2", // Bootstrap order classes
    textOrder: "order-2 order-lg-1", // Bootstrap order classes
    shadowColor: "#your-color",
    shadowPosition: "15px 15px 0rem" // CSS box-shadow position
}
```

## Required Fields

- **id**: Unique identifier for the project (used for CSS targeting)
- **title**: Project name
- **description**: Project description (focus on ML/AI/Data Science aspects)
- **image**: Path to project image (relative to root)
- **imageAlt**: Alt text for accessibility
- **link**: URL to project (GitHub, live demo, etc.)
- **linkText**: Text for the button ("View Code", "Live Demo", "Paper", etc.)
- **buttonClass**: CSS class for button styling (must match existing CSS)
- **color**: Background color theme ("blue", "white", "black", "orange")
- **imageOrder**: Bootstrap order classes for image positioning
- **textOrder**: Bootstrap order classes for text positioning
- **shadowColor**: Color for the image shadow
- **shadowPosition**: CSS box-shadow position

## ML/AI Project Examples

### Machine Learning Project
```javascript
{
    id: "recommendation-system",
    title: "Recommendation System",
    description: "Built a collaborative filtering recommendation system using matrix factorization and deep learning. Achieved 15% improvement in recommendation accuracy compared to baseline models.",
    image: "imgs/recommendation.png",
    imageAlt: "Recommendation System",
    link: "https://github.com/username/recommendation-system",
    linkText: "View Code",
    buttonClass: "yelpcamp",
    color: "blue",
    imageOrder: "order-1 order-lg-2",
    textOrder: "order-2 order-lg-1",
    shadowColor: "#70ef5e",
    shadowPosition: "15px 15px 0rem"
}
```

### Data Science Project
```javascript
{
    id: "data-analysis",
    title: "Customer Segmentation Analysis",
    description: "Performed comprehensive customer segmentation using K-means clustering and PCA. Identified 5 distinct customer segments with actionable business insights.",
    image: "imgs/segmentation.png",
    imageAlt: "Customer Segmentation",
    link: "https://github.com/username/customer-segmentation",
    linkText: "View Analysis",
    buttonClass: "sdai",
    color: "white",
    imageOrder: "order-1 order-lg-1",
    textOrder: "order-2 order-lg-2",
    shadowColor: "#c2a336",
    shadowPosition: "-15px 15px 0rem"
}
```

### Computer Vision Project
```javascript
{
    id: "object-detection",
    title: "Real-time Object Detection",
    description: "Implemented YOLO-based object detection system with 90%+ accuracy. Optimized for real-time performance on edge devices using TensorFlow Lite.",
    image: "imgs/object-detection.png",
    imageAlt: "Object Detection",
    link: "https://github.com/username/object-detection",
    linkText: "View Code",
    buttonClass: "breakout",
    color: "black",
    imageOrder: "order-1 order-lg-2",
    textOrder: "order-2 order-lg-1",
    shadowColor: "grey",
    shadowPosition: "15px 15px 0rem"
}
```

## Button Styles Available

- `yelpcamp` - White button with green underline
- `sdai` - Yellow button with black underline  
- `breakout` - White button with grey underline

## Color Themes Available

- `blue` - Dark blue background
- `white` - White background (black text)
- `black` - Black background
- `orange` - Orange background

## Tips for ML/AI Projects

1. **Focus on technical details**: Mention specific algorithms, frameworks, and performance metrics
2. **Highlight business impact**: Include accuracy improvements, efficiency gains, or cost savings
3. **Use professional language**: Replace "made" with "developed", "built", "implemented"
4. **Include metrics**: Mention accuracy percentages, performance improvements, or scale of data
5. **Link to relevant resources**: GitHub repos, papers, live demos, or documentation

The projects will automatically render in the order they appear in the array! 