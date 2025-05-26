"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Realtime whiteboard Sharing App",
    description: "Collaborative drawing app using Socket.io and TypeScript.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GhugareSanika/Realtime-WhiteBoard.git",
    previewUrl: "https://realtime-white-board-ub24.vercel.app/",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Dashboard for managing data with Next.js and MongoDB.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GhugareSanika/Admin_Dashboard.git",
    previewUrl: "https://admin-dashboard-ebai.vercel.app/login",
  },
  {
    id: 3,
    title: "CoinSwitch",
    description:
      "A dynamic cryptocurrency tracking app leveraging React and multiple APIs for real-time data",
    image: "/images/projects/4.avif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GhugareSanika/ReduxReactJs_CoinSwitch.git",
    previewUrl: "https://realtime-white-board-zm64.vercel.app/",
  },
  {
    id: 4,
    title: "INotebook",
    description: "Digital notebook app with React, MongoDB and REST APIs.",
    image: "/images/projects/5.avif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GhugareSanika/React_iNotebook.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "NewsApp",
    description:
      "News aggregation app using React and News APIs to deliver real-time news updates.",
    image: "/images/projects/6.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GhugareSanika/News_App_React.git",
    previewUrl: "https://dailynews881.netlify.app/",
  },
  {
    id: 6,
    title: "Next JS Portfolio Website",
    description: "Personal portfolio site using Next.js and Tailwind CSS.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GhugareSanika/portfolio.git",
    previewUrl: "https://myportfolio884.netlify.app/",
  },
  {
    id: 7,
    title: "Quiz App",
    description: "An interactive Quiz app using the HTML, CSS and JS",
    image: "/images/projects/7.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GhugareSanika/Quiz_Competition.git",
    previewUrl: "https://ghugaresanika.github.io/Quiz_Competition/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariant = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 mb:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.6 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
