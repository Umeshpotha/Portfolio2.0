import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground ">
            <Navigation />
            <Profile />
            <div id="about" className="pt-16 pb-0">
                <About />
            </div>
            <div id="skills " className="pt-30 pb-0">
                <Skills />
            </div>
            <div id="projects" className="pt-16 pb-0">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>

            
            <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-muted-foreground">
                        © 2025 Umesh Potha. Built with React, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Index;