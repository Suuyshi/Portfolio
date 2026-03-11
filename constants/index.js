import { basePath } from "@/lib/config";

const logo = `${basePath}/logo.svg`;
const backend = `${basePath}/backend.png`;
const creator = `${basePath}/creator.png`;
const mobile = `${basePath}/mobile.png`;
const web = `${basePath}/web.png`;
const github = `${basePath}/github.png`;
const menu = `${basePath}/menu.svg`;
const close = `${basePath}/close.svg`;

const html = `${basePath}/tech/html.png`;
const css = `${basePath}/tech/css.png`;
const javascript = `${basePath}/tech/javascript.png`;
const typescript = `${basePath}/tech/typescript.png`;
const reactjs = `${basePath}/tech/reactjs.png`;
const redux = `${basePath}/tech/redux.png`;
const tailwind = `${basePath}/tech/tailwind.png`;
const nodejs = `${basePath}/tech/nodejs.png`;
const mongodb = `${basePath}/tech/mongodb.png`;
const git = `${basePath}/tech/git.png`;
const figma = `${basePath}/tech/figma.png`;
const docker = `${basePath}/tech/docker.png`;
const threejs = `${basePath}/tech/threejs.svg`;

const meta = `${basePath}/company/meta.png`;
const shopify = `${basePath}/company/shopify.png`;
const starbucks = `${basePath}/company/starbucks.png`;
const tesla = `${basePath}/company/tesla.png`;

const carrent = `${basePath}/carrent.png`;
const jobit = `${basePath}/jobit.png`;
const tripguide = `${basePath}/tripguide.png`;

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "resume", title: "Resume" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
];

const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "Voyance",
    icon: reactjs,
    iconBg: "#383E56",
    date: "June 2022 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FrontEnd Engineer",
    company_name: "4sale International",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "August 2024 - present",
    points: [
      "Developing new features and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but she proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like she does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After she optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  menu,
  close,
};
