import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Portfolio",
    hash: "#projects",
  },
  {
    name: "Resume/Skills",
    hash: "#skills",
  },
  {
    name: "Blog",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "The Evolution of Web Development",
    location: "Technology Blog",
    description:
        "Explore how web development has transformed over the past decade, from static HTML pages to dynamic, full-stack applications powered by frameworks like React and serverless technologies.",
    icon: React.createElement(FaReact), // Assuming using a React icon for tech blogs
    date: "November 10, 2024",
  },
  {
    title: "Demystifying Machine Learning",
    location: "Technology Blog",
    description:
        "An introductory guide to understanding machine learning principles, common algorithms, and practical applications in everyday technology.",
    icon: React.createElement(FaReact), // Replace FaRobot with actual import if using a robot icon
    date: "November 15, 2024",
  },
  {
    title: "The Future of IoT: Smart Devices and Privacy",
    location: "Technology Blog",
    description:
        "Discuss the rapid expansion of IoT devices in homes and industries, focusing on the benefits and potential privacy concerns associated with interconnected devices.",
    icon: React.createElement(FaReact), // Replace FaNetworkWired with actual import if using a network icon
    date: "November 20, 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Weather Wizard",
    description:
        "A dynamic weather forecasting app allowing users to get real-time weather data and forecasts. Features include daily and hourly forecasts, weather alerts, and climate trends.",
    tags: ["React", "Next.js", "OpenWeatherMap API", "Tailwind CSS"],
    imageUrl: corpcommentImg, // Placeholder image
  },
  {
    title: "Stock Streamer",
    description:
        "Real-time stock market tracking and analytics tool. Users can view stock performance, historical data, and get personalized finance news.",
    tags: ["Vue.js", "Node.js", "Alpha Vantage API", "Bootstrap"],
    imageUrl: rmtdevImg, // Placeholder image
  },
  {
    title: "Recipe Rover",
    description:
        "A recipe discovery app that offers detailed recipes, nutritional information, and ingredient shopping lists based on user preferences.",
    tags: ["Angular", "Spoonacular API", "Material UI", "Firebase"],
    imageUrl: wordanalyticsImg, // Placeholder image
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
