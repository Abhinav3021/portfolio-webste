// pages/index.js
import About from "./[components]/About.js";
import Contact from "./[components]/Contact.js";
import Footer from "./[components]/Footer.js";
import Header from "./[components]/Header.js";
import Hero from './[components]/Hero.js';
import Projects from "./[components]/projects/page.js";


export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
