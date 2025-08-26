import { Button } from "./ui/button";
import {  Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/asset2.png";
import { Vortex } from "./ui/vortex";

const Profile = () => {
    // const scrollToAbout = () => {
    //     document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    // };
    const scrollToGetintouch = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden m-0 p-0">
           
            <img
                src={heroBackground}
                alt="Developer workspace"
                className="fixed inset-0 w-full h-full object-cover opacity-20 z-[-2] pointer-events-none"
            />

            
            <Vortex
                backgroundColor="transparent"
                rangeY={800}
                particleCount={500}
                baseHue={200}
                className=" fixed inset-0 w-full h-full object-cover opacity-20 z-[-2] pointer-events-none"
            />

            {/* absolute inset-0 w-full h-full z-0 pointer-events-none */}
            <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-10" />

            
            <div className="absolute z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto h-screen">
                <div className="space-y-8 flex flex-col items-center justify-center h-full w-full">
                   
                    <div className="space-y-1 text-center">
                        <span className="block text-foreground text-lg mx-auto">Hello, I am</span>
                        <span className="block bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent text-4xl md:text-6xl font-extrabold hover:scale-105 transition-transform duration-300">
                            Umesh Potha
                        </span>
                        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
                            Full-Stack Developer crafting exceptional digital experiences with modern technologies
                        </p>
                    </div>

                   
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            variant="default"
                            size="lg"
                            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 hover:scale-105 transition-transform duration-300 "
                        >
                            View My Work
                        </Button>
                        <Button
                            className="bg-transparent border-2 border-violet-500 text-violet-500 hover:opacity-70 hover:border-fuchsia-500 hover:text-fuchsia-500 hover:scale-105 transition-all duration-300"
                            variant="default"
                            size="lg"
                            onClick={scrollToGetintouch}
                        >
                            Get In Touch
                        </Button>


                    </div>

                    
                    <div className="flex justify-center space-x-6">
                            {[
                            { href: "https://github.com/Umeshpotha",  icon: <Github size={24}  /> },
                            { href: "https://www.linkedin.com/in/umeshpotha/", icon: <Linkedin size={24}  /> },
                            { href: "mailto:umeshpotha123@gmail.com", icon: <Mail size={24} /> },
                            ].map((item, idx) => (
                                <a
                                key={idx}
                                href={item.href}
                                    className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-violet-500 text-muted-foreground hover:text-primary hover:border-fuchsia-500 hover:scale-110 transition-all duration-300"
                                    target="_blank"
                                >
                                {item.icon}
                                </a>
                            ))}
                    </div>

                </div>
            </div>

          
            {/* <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-all duration-300 animate-bounce z-20"
            >
                <ArrowDown size={32} />
            </button> */}
        </section>
    );
};

export default Profile;
