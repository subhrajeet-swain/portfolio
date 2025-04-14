// Importing necessary components
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Footer />

    </div>
  );
}
