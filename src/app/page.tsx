import Header from "@/components/Header";
import BioCard from "@/components/BioCard";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="layout-container min-h-screen">
      <Header />
      <main>
        <BioCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Left Column */}
           <div className="space-y-8">
              <Education />
              <Skills />
           </div>
           
           {/* Right Column */}
           <div className="space-y-8">
              <Projects />
              <Contact />
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
