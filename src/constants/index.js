import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vue,
  tailwind,
  laravel,
  mysql,
  git,
  figma,
  docker,
  wela,
  ninekp,
  pageant,
  revams,
  tally,
  rest,
  python,
  jinja,
  c,
  cplusplus,
  visayas,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "REST API",
    icon: rest,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Jinja",
    icon: jinja,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
];

const education = [
  {
    education: "Bachelor of Science in Computer Science",
    institution: "Visayas State University",
    icon: visayas,
    iconBg: "#383E56",
    date: "September 2021 - July 2025",
  },
];

const experiences = [
  {
    title: "Intern Fullstack Developer",
    company_name: "Wela School Systems",
    icon: wela,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Built and optimized print formats using HTML, CSS, JS, Python, and Jinja.",
      "Worked closely with tech leads, PMs, and devs to deliver quality solutions.",
      "Ensured responsive design and cross-browser functionality.",
      "Joined weekly team syncs and contributed feedback on code improvements.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "9KP Ventures",
    icon: ninekp,
    iconBg: "#E6DEDD",
    date: "September 2021 - Present",
    points: [
      "Developing web applications using Vue.js and other related technologies.",
      "Developing command line applications using C, C++, and Python.",
    ],
  },
  {
    title: "Freelance UI/UX Designer",
    company_name: "9KP Ventures",
    icon: ninekp,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Created user-friendly interface designs and experiences for web applications using Figma.",
      "Collaborating with other designers, project managers, and other developers to ensure compatabilty of designs with the actual frontend code.",
    ],
  },
];

const projects = [
  {
    name: "Pageant Scoring System",
    description:
      "A web platform for Visayas State University that streamlines pageant management—enabling users to easily manage candidates, judges, events, rounds, and categories.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "red-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pageant,
    source_code_link: "https://github.com/rendznicoy/pageant-backend",
  },
  {
    name: "Revenue and Attendance Management System",
    description:
      "A web app for managing revenue, attendance, members, and events—featuring QR-based tracking (with RFID upgrade planned) and an intuitive dashboard for real-time data insights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "red-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: revams,
    source_code_link: "https://re-vams.vercel.app/admin/login",
  },
  {
    name: "Tally Board Application UI/UX Design",
    description:
      "A design for a full-featured tally board system managing candidates, voting areas, and admin roles, with real-time data visualization for voting trends and results.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
    ],
    image: tally,
    source_code_link:
      "https://www.figma.com/design/YvjQPJ5DtXklKpi6in6dL1/Tally-Board?node-id=15-4&t=81ZT3E5J8FU08Lr1-1",
  },
];

export { services, technologies, education, experiences, projects };
