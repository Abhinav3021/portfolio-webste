import React from "react";
import StackIcon from "tech-stack-icons"; 

import { Badge } from "./ui/Badge";

const About = () => {

  const techStacks = [
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "reactjs" },
  { name: "Redux", icon: "redux" },
  { name: "Nodejs", icon: "nodejs" },
  { name: "Nextjs", icon: "nextjs2" },
  { name: "Django", icon: "django" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Prisma", icon: "prisma" },
  { name: "Redis", icon: "redis" },
  { name: "Postman", icon: "postman" },
  { name: "Zod", icon: "zod" },
  { name: "Python", icon: "python" },
  { name: "C++", icon: "c++" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20" id="about">
      <h2 className="text-center text-4xl font-bold text-red-400 mb-4">About Me</h2>
      <p className="text-center uppercase text-sm mb-12 tracking-wide">Get to know me</p>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Side - Image and Bio */}
        <div className="flex flex-col items-center text-center md:w-1/2 border-r border-gray-400  ">
          <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-gray-600 mb-4 -mt-20 transform hover:scale-105 transition-transform duration-300">
            <img
              src="/images/User.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg leading-relaxed max-w-md">
            I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly and scalable applications.
            I thrive on solving problems, creating seamless experiences, and continuously expanding my skills.
            Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate.
          </p>
        </div>

        {/* Right Side - Details */}
        <div className="md:w-1/2 space-y-8">
          {/* Education */}
          <div className="border-b border-gray-400 pb-4">
            <h3 className="text-xl font-semibold">Education</h3>
           
            <div className="mt-2">
              <p className="font-bold">Indian Institute of Information Technology Ranchi</p>
              <p>Bachelor of Technology in Computer Science and Engineering</p>
              <p className="text-sm text-gray-400">2022 - 2026 | CGPA: 8.4</p>
            </div>

          </div>

          {/* Experience */}
          <div className="border-b border-gray-400 pb-4">
            <h3 className="text-xl font-semibold">Experience</h3>
            <div className="mt-2">
              <p className="font-bold">House of Geeks </p>
              <p className="text-sm text-gray-400">Technical Coordinator at IIIT Ranchi | Apr 2023 - Mar 2024 </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Delivered technical talks and presentations at department-led events</li>
                <li>Organized and managed technical events and hackathons on campus</li>
                <li>Conducted online competitive programming contests for students</li>
              </ul>
            </div>

            {/* <div className="mt-2">
              <p className="font-bold">Technical Coordinator</p>
              <p className="text-sm text-gray-400">Front-End Developer Intern | Apr 2024 - Oct 2024 | Remote</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Improved website performance, increasing mobile traffic by 10%</li>
                <li>Developed a mental health tracking platform, adopted by 700+ students</li>
                <li>Fixed UI bugs, reducing complaints by 50%</li>
              </ul>
            </div> */}
          </div>

          {/* Tech Stack */}
          <div className="border-b border-gray-400 pb-4">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-3 mt-3 text-xl">
  {techStacks.map((tech, index) => (
    <Badge
      key={index}
      className="border border-gray-500 gap-1 p-3 font-mono text-lg hover:rotate-25 transition-transform duration-300 ease-in-out m-0.25"
    >
      <StackIcon name={tech.icon} className="h-6 w-6 p-0.5" />
      {tech.name}
    </Badge>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
