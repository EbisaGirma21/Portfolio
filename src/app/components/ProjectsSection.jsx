"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Portfolio Website with Next.js",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EbisaGirma21/Portfolio",
    previewUrl: "https://ebisagirma.netlify.app/",
  },
  {
    id: 2,
    title: "Marketplace Webapp",
    description:
      "Online Marketplace Platform with Next.js 14 and MongoDB by using Chapa payement processor",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Isayas7/market-place",
    previewUrl: "https://market-place-wku.vercel.app",
  },
  {
    id: 3,
    title: "Omnistock Application",
    description:
      "Multi-Store management for INSA with Node.js, Express.js and MongoDB",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EbisaGirma21/OmniStock",
    previewUrl: "https://github.com/EbisaGirma21/OmniStock",
  },
  {
    id: 4,
    title: "Marketplace Mobile Application",
    description:
      "Marketplace Mobile Application with React Native and Node.js, Express.js and MongoDB",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://github.com/EbisaGirma21/Online_Marketplce_Platform_React_Native",
    previewUrl:
      "https://github.com/EbisaGirma21/Online_Marketplce_Platform_React_Native",
  },
  {
    id: 4,
    title: "Movie Sreaming App for Arkwood ",
    description:
      "Arkwood Mobile Application with React Native and Pyhton Django",
    image: "/images/projects/ark.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "Music Sreaming App for Weedduu ",
    description: "Weedduu Mobile Application with Flutter and Pyhton Django",
    image: "/images/projects/wedd.png",
    tag: ["All", "Mobile"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 5,
    title: "School Management for Wolkite University Community School",
    description: "Full of school operations WKU-CSMS-with Material-UI",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Bus Reservation and Control System",
    description: "Bus Reservation and Control System with PHP",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/EbisaGirma21/IP-Project-Bus-Station-Management-System",
    previewUrl:
      "https://github.com/EbisaGirma21/IP-Project-Bus-Station-Management-System",
  },
  {
    id: 6,
    title: "Web Application for Development for Peace Organization",
    description:
      "Web Application for Development for Peace Organization with Vite.js using React.js and Node.js",
    image: "/images/projects/dpo.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "https://devforpeace.org/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
