
import React from "react";
//import { Code2 } from "lucide-react"; // Optional: using lucide-react icons

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-center items-center text-sm">
        <p className="text-center">
          © 2025 <span className="font-semibold">Abhinav Singh</span>. All rights reserved.
        </p>
        {/* <a
          href="/path-to-your-code.zip"
          download
          className="flex items-center gap-1 mt-2 md:mt-0 hover:text-pink-500 transition"
        >
          <Code2 size={16} />
          Download Code
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
