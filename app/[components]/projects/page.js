'use client';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI-Powered Interview Prep",
    description: [
  "Built an AI-driven interview prep platform with Gemini API integration",
  "Implemented secure JWT authentication with role-based access control",
  "Developed a modular RESTful backend with MongoDB Atlas",
  "Designed a responsive frontend with React and Tailwind CSS, featuring Q&A pinning"
]
,
    stack: [
      "React.js", "Context API", "Tailwind CSS",
      "Gemini API","JWT", "Node.js", "Express.js", "MongoDB"
    ],
    image: "/projects/InterviewPrep.png",
    github: "https://github.com/Abhinav3021/AI-Powered_Interview_Preperation_Web_Application",
    live: "https://ai-powered-interview-preperation-frontend.onrender.com/"
  },
  {
    title: "CoderRoom",
    description: [
  "Built a real-time collaborative code editor with live typing indicators",
  "Used Socket.IO for low-latency, multi-user communication via socket rooms",
  "Integrated Piston API for live code execution across multiple languages",
  "Leveraged Monaco Editor for an IDE-like experience with syntax highlighting"
]
,
    stack: [
      "React.js", "Tailwind CSS", "Node.js", "Express.js","Socket.IO"
    ],
    image: "/projects/codeRoom.png",
    github: "https://github.com/Abhinav3021/Real-Time-Code-Editor",
    live: "https://real-time-code-editor-ic2v.onrender.com/"
  },
  {
    title: "CryptoVerse",
    description: [
  "Created a real-time crypto dashboard using public APIs",
  "Optimized data fetching with TanStack Query",
  "Managed global state and UI flow using Zustand",
  "Handled large datasets with React Table"
],
    stack: [
      "Nextjs", "TypeScript", "TanStack Query", "Zustand", "ShadCN UI", "React Table"
    ],
    image: "/projects/user.jpg",
    github: "https://github.com/yourname/codeinsight",
    live: "https://codeinsight.example.com"
  },
];

function AnimatedProjectCard({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1, rotateX: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0, rotateX: 90 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16"
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20" id="projects">
      <p className="text-center uppercase text-sm mb-4 tracking-wide">Get to know me</p>
      <h2 className="text-center text-4xl font-bold text-red-400 mb-12">Projects</h2>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {projects.map((project, index) => (
          <AnimatedProjectCard key={index}>
            <ProjectCard {...project} />
          </AnimatedProjectCard>
        ))}
      </div>
    </section>
  );
}
