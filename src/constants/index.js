const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
    { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
    { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
    { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
    { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
    { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
    { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
    { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
];

const counterItems = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 2, suffix: "+", label: "Certification" },
    { value: 10, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
    {
        imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-1.png`,
    },
    {
        imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-2.png`,
    },
    {
        imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-3.png`,
    },
    {
        imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-4.png`,
    },
    {
        imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-5.png`,
    },
];

const abilities = [
    {
        imgPath: `${import.meta.env.BASE_URL}images/seo.png`,
        title: "Quality Focus",
        desc: "Committed to delivering well-structured, maintainable solutions with strong attention to detail and coding standards.",
    },
    {
        imgPath: `${import.meta.env.BASE_URL}images/chat.png`,
        title: "Reliable Communication",
        desc: "Ensuring clear and consistent communication within teams to align on requirements, progress, and deliverables.",
    },
    {
        imgPath: `${import.meta.env.BASE_URL}images/time.png`,
        title: "On-Time Delivery",
        desc: "Focused on meeting deadlines by effectively managing tasks while maintaining high quality standards.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: `${import.meta.env.BASE_URL}images/logos/react.png`,
    },
    {
        name: "Python Developer",
        imgPath: `${import.meta.env.BASE_URL}images/logos/python.svg`,
    },
    {
        name: "Backend Developer",
        imgPath: `${import.meta.env.BASE_URL}images/logos/node.png`,
    },
    {
        name: "Interactive Developer",
        imgPath: `${import.meta.env.BASE_URL}images/logos/three.png`,
    },
    {
        name: "Project Manager",
        imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg`,
    },
];

const techStackIcons = [
    {
        name: "Java",
        modelPath: `${import.meta.env.BASE_URL}models/java.glb`,
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "React",
        modelPath: `${import.meta.env.BASE_URL}models/react_logo-transformed.glb`,
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "AWS",
        modelPath: `${import.meta.env.BASE_URL}models/aws_logo.glb`,
        scale: 0.2,
        rotation: [0, 0, 0],
    },
    {
        name: "Docker",
        modelPath: `${import.meta.env.BASE_URL}models/docker_logo.glb`,
        scale: 22,
        rotation: [0, 0, 0],
    },
    {
        name: "GIT",
        modelPath: `${import.meta.env.BASE_URL}models/git-svg-transformed.glb`,
        scale: 0.04,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
        title: "Senior Software Engineer",
        date: "June 2022 - February 2026",
        responsibilities: [
            "Developed and maintained backend services using Java and Spring Boot.",
            "Collaborated with teams, participated in sprint planning, and drove Scrum calls.",
            "Mentored junior developers and reviewed code to maintain high code quality.",
        ],
    },
    {
        logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
        title: "Java Developer",
        date: "September 2020 - February 2022",
        responsibilities: [
            "Developed and maintained backend services using Java and Spring Boot for inventory management.",
            "Designed and implemented REST APIs with secure access using JWT authentication and role-based authorization.",
            "Managed database operations with JPA/MySQL and deployed applications using Docker on AWS EC2.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: `${import.meta.env.BASE_URL}images/logo1.png`,
    },
    {
        name: "logo2",
        imgPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    },
    {
        name: "logo3",
        imgPath: `${import.meta.env.BASE_URL}images/logo3.png`,
    },
];


const socialImgs = [
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/subham-dey-8099a5203/",
        imgPath: `${import.meta.env.BASE_URL}images/linkedin.png`,
    },
    {
        name: "Github",
        url: "https://github.com/Subham-CB",
        imgPath: `${import.meta.env.BASE_URL}images/github.png`,
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};