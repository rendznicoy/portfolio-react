import {
  ai,
  uiux,
  web,
  figma,
  instagram,
  facebook,
  linkedin,
  git,
  github,
  goodpage,
  java,
  js,
  laravel,
  mongodb,
  firebase,
  mysql,
  react,
  node,
  php,
  python,
  tailwind,
  vsu,
  vue,
  wela,
  express,
  pss,
  tba,
  vams,
  sim,
  sec,
} from "../assets";

export const AppText = {
  Hero: {
    greeting: "Hi There,",
    intro: "I'm",
    name: "Rene Angelo",
    roles: ["UI/UX Designer", "Full Stack Dev", "Programmer"],
  },
  About: {
    heading: "About Me",
    description:
      "I am a driven Software Developer and Computer Science graduate with a passion for building seamless web applications. With a unique background in both UI/UX design and Full Stack development, I don't just write code—I create intuitive digital experiences that solve real-world problems.",
  },
  SectionTitles: {
    skills: {
      prefix: "Skills &",
      highlight: "Expertise",
    },
    projects: {
      prefix: "& Commissions",
      highlight: "Projects",
    },
    experience: {
      prefix: "Work",
      highlight: "Experience",
    },
    education: {
      prefix: "ation",
      highlight: "Educ",
    },
    contact: {
      prefix: "Let's",
      highlight: "collaborate",
    },
  },
  Footer: {
    copyright: "Copyright © Rene Angelo 2025",
  },
};

export const aboutSection = [
  {
    id: 1,
    image: uiux,
    title: "UI/UX Designer",
    desc: "Designing intuitive and visually appealing user interfaces using industry-standard tools like Figma.",
  },
  {
    id: 2,
    image: web,
    title: "Full Stack Developer",
    desc: "Developing end-to-end web applications with seamless integration between frontend and backend architectures.",
  },
  {
    id: 3,
    image: ai,
    title: "ML Engineer",
    desc: "Leveraging artificial intelligence to build predictive models and smart algorithms using Python.",
  },
];

export const skillsList = [
  {
    id: 1,
    icon: mongodb,
  },
  {
    id: 2,
    icon: express,
  },
  {
    id: 3,
    icon: react,
  },
  {
    id: 4,
    icon: node,
  },
  {
    id: 5,
    icon: vue,
  },
  {
    id: 6,
    icon: laravel,
  },
  {
    id: 7,
    icon: tailwind,
  },
  {
    id: 8,
    icon: mysql,
  },
  {
    id: 9,
    icon: python,
  },
  {
    id: 10,
    icon: java,
  },
  {
    id: 11,
    icon: php,
  },
  {
    id: 12,
    icon: js,
  },
  {
    id: 13,
    icon: figma,
  },
  {
    id: 14,
    icon: git,
  },
  {
    id: 15,
    icon: github,
  },
  {
    id: 16,
    icon: firebase,
  },
];

export const workDetail = [
  {
    id: 1,
    year: "Jun 2024 - Aug 2024",
    companyName: "Wela School Systems",
    position: "Full Stack Developer Intern",
    companyUrl: "https://wela.online/en/",
  },
  {
    id: 2,
    year: "Nov 2020 - Present",
    companyName: "GoodPage Weekly",
    position: "Social Media Manager",
    companyUrl: "https://www.facebook.com/goodpageweeklyofficial",
  },
];

export const portfolios = [
  {
    id: 1,
    title: "Revenue & Attendance Management",
    type: "web",
    desc: "An enterprise web app that correlates employee attendance data with revenue.",
    imageUrl: vams,
    url: "https://re-vams.vercel.app/admin/login",
    github: "https://github.com/9KP-Ventures/re-vams",
  },
  {
    id: 2,
    title: "Pageant Scoring System",
    type: "web",
    desc: "A real-time tabulation web application that automates scoring for judges.",
    imageUrl: pss,
    url: "",
    github: "https://github.com/rendznicoy/pageant-frontend",
  },
  {
    id: 3,
    title: "Tally Board System",
    type: "web",
    desc: "A comprehensive dashboard for tracking organizational metrics with dynamic charts.",
    imageUrl: tba,
    url: "",
    github: "https://github.com/rendznicoy/care-win",
  },
  {
    id: 4,
    title: "Inventory Manager",
    type: "web",
    desc: "A streamlined stock management tool that tracks product levels and alerts.",
    imageUrl: sim,
    url: "https://simple-inventory-manager.vercel.app/",
    github: "https://github.com/rendznicoy/Simple-Inventory-Manager",
  },
  {
    id: 5,
    title: "Ecommerce Website",
    type: "web",
    desc: "A fully functional online store featuring product catalogs and secure checkout.",
    imageUrl: sec,
    url: "https://simple-e-commerce-topaz.vercel.app/",
    github: "https://github.com/rendznicoy/Simple-e-Commerce-Final",
  },
  // Ended here
  {
    id: 6,
    title: "Transaqtic - Bayad System (POS)",
    type: "others",
    desc: "A transaction processing system designed for payment centers.",
    imageUrl: "",
    url: "",
    github: "",
  },
  {
    id: 7,
    title: "GIEASE - GIS Classification System",
    type: "web",
    desc: "A GIS tool that visualizes spatial data and classifies distinct zones.",
    imageUrl: "",
    url: "",
    github: "",
  },
  {
    id: 8,
    title: "Searching Algorithms Visualization",
    type: "others",
    desc: "An educational tool that visually demonstrates algorithms like Binary Search.",
    imageUrl: "",
    url: "",
    github: "",
  },
  {
    id: 9,
    title: "Inventory and Delivery System",
    type: "others",
    desc: "Logistics platform managing warehouse stock and last-mile delivery.",
    imageUrl: "",
    url: "",
    github: "",
  },
  {
    id: 10,
    title: "CS Aid - Hospital Management",
    type: "others",
    desc: "Healthcare administration system managing patient records and scheduling.",
    imageUrl: "",
    url: "",
    github: "",
  },
  {
    id: 11,
    title: "Revenue & Attendance UI/UX",
    type: "ui/ux",
    desc: "High-fidelity prototypes focusing on data readability.",
    imageUrl: "",
    url: "https://www.figma.com/proto/...", // Link to Figma Prototype
    github: "", // Usually empty for UI/UX unless you have CSS snippets
  },
  {
    id: 12,
    title: "Tally Board UI/UX",
    type: "ui/ux",
    desc: "User-centric interface designs emphasizing clear data visualization.",
    imageUrl: "",
    url: "https://www.figma.com/proto/...",
    github: "",
  },
  {
    id: 13,
    title: "Simple Inventory System",
    type: "ui/ux",
    desc: "A minimal mobile-first design approach for inventory management.",
    imageUrl: "",
    url: "https://www.figma.com/proto/...",
    github: "",
  },
];

export const CompanyImage = [
  {
    id: 1,
    imageUrl: wela,
  },
  {
    id: 1,
    imageUrl: goodpage,
  },
];

export const socialNetwork = [
  {
    id: 1,
    logo: instagram,
    url: "https://www.instagram.com/tubeguruji/",
  },
  {
    id: 1,
    logo: github,
    url: "https://www.youtube.com/channel/UC33Tc4FCgd_to314_b2hNTg",
  },
  {
    id: 1,
    logo: linkedin,
    url: "https://www.linkedin.com/in/rahul-sanap-652920108/",
  },
  {
    id: 1,
    logo: facebook,
    url: "https://www.facebook.com/rahul.sanap1",
  },
];
