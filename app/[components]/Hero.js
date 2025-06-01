'use client'
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-center text-white overflow-hidden min-h-[135vh]">
      

      {/* Content */}
      <div className="relative z-10 my-15">
        <div className="mt-4 mb-6 inline-block bg-gray-800 px-4 py-1 rounded-full text-sm">
          Actively Seeking Job Opportunities
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Crafting Beautiful &<br />
          Functional Web Experiences
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Hey, I'm Abhinav Singh, a Full Stack Developer passionate about building
          performant, user-friendly, and scalable applications.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition" 
           onClick={() => window.open("https://www.linkedin.com/in/abhinav3021/", "_blank")}
           >
            <span className="inline-block group-hover:animate-wave origin-bottom-left">👋</span> Let's Connect
          </button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
            My Resume ↓
          </button>
        </div>
      </div>

      {/* Arch Image as Background */}
      <div className="absolute inset-8 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/arch.png"
          alt="Decorative Arch"
          height={500}
          width={500}
          className="object-cover  w-full h-full"
          priority
        />
      </div>
    </section>
  );
}