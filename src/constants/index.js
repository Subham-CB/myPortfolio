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
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 2, suffix: "+", label: "Certification" },
    { value: 10, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Committed to delivering well-structured, maintainable solutions with strong attention to detail and coding standards.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Ensuring clear and consistent communication within teams to align on requirements, progress, and deliverables.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Focused on meeting deadlines by effectively managing tasks while maintaining high quality standards.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
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
        logoPath: "/images/logo1.png",
        title: "Senior Software Engineer",
        date: "June 2022 - February 2026",
        responsibilities: [
            "Developed and maintained backend services using Java and Spring Boot.",
            "Collaborated with teams, participated in sprint planning, and drove Scrum calls.",
            "Mentored junior developers and reviewed code to maintain high code quality.",
        ],
    },
    {
        logoPath: "/images/logo2.png",
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
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];


const socialImgs = [
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/subham-dey-8099a5203/",
        imgPath: "/images/linkedin.png",
    },
    {
        name: "Github",
        url: "https://github.com/Subham-CB",
        imgPath: "/images/github.png",
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