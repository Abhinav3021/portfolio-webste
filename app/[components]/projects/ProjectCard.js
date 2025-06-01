import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, stack, image, github, live }) {
  // Check if description is an array or string
  const isDescriptionArray = Array.isArray(description);

  return (
    <div className="flex flex-col md:flex-row bg-[#121212] rounded-2xl p-6 shadow-xl mb-10 border border-gray-400 hover:border-gray-300">
      {/* Left Side: Text and Stack */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        
        {/* Render description as bullet points or regular text */}
        {isDescriptionArray ? (
          <ul className="text-gray-300 mb-4 space-y-1">
            {description.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-white mr-2 mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300 mb-4">{description}</p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech, index) => (
            <Badge key={index} className="bg-[#1f1f1f] border border-gray-700 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 m-2">
          <Button variant="outline" className="border border-orange-500 hover:bg-orange-600">
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
          <Button className="bg-gray-600 border text-orange-500 border-orange-500 hover:bg-orange-600">
            <a href={live} target="_blank" rel="noopener noreferrer">Live Site</a>
          </Button>
        </div>
      </div>
       
      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <motion.div
          whileHover={{ 
            scale: 1.05,
            zIndex: 50,
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
          className="relative cursor-pointer"
        >
          <motion.div
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 165, 0, 0.3)",
              transition: { duration: 0.3 }
            }}
            className="rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`${title} preview`}
              width={500}
              height={100}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}