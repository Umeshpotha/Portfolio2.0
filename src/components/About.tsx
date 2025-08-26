import { Brain, Code, Sparkles } from "lucide-react";
import profileImage from "../assets/profile.jpeg";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Meteors } from "./ui/meteors";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import { GlowingEffect } from "./ui/glowing-effect";

const highlights = [
    {
        icon: Code,
        title: "Full Stack Web Development",
        description: "Building robust, scalable, and dynamic web applications from front-end to back-end",
    },
    {
        icon: Brain,
        title: "Machine Learning",
        description: "Designing intelligent models that learn from data to make accurate predictions and decisions",
    },
    {
        icon: Sparkles,
        title: "Generative AI",
        description: "Creating innovative AI systems that can generate content, ideas, and solutions with creativity",
    },
];

const About = () => {
    return (
        <section id="about" className="py-1 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
                        About{" "}
                        <span className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                </div>

                {/* Text and image */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-0">
                    
                    <div className="relative bg-[#000000] p-5 rounded-lg text-white text-center max-w-2xl mx-auto overflow-hidden">
                        <Meteors number={50}  />
                        <div className="relative z-10">
                            
                            <p className="mb-6 text-base font-medium text-teal-500">
                                I specialize in cutting-edge web technologies, machine learning, and generative AI. My journey began with a curiosity about the web, and today I’m dedicated to creating outstanding digital experiences.
                            </p>
                            <p className="mb-4 text-base font-medium text-teal-500">
                                Beyond coding, I explore new tech, contribute to open source, and support the developer community.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-end m-0 p-0">
                        <HoverBorderGradient
                            containerClassName="w-64 h-64 rounded-lg p-1 shadow-lg m-0"
                            className="flex items-center justify-center m-0 p-0"
                            clockwise={false}
                        >
                            <div className="w-full h-full rounded-xl overflow-hidden">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </HoverBorderGradient>
                    </div>
                </div>
                
                {/* Highlights with each in its own 3D CardContainer */}
                <div className="flex flex-wrap justify-center gap-6 h-85 ">
                    {highlights.map(({ icon: Icon, title, description }, index) => (
                        <CardContainer
                            key={index}
                            className="inter-var w-80 h-64 rounded-xl pb-4 border  m-0
             dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
             dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
             justify-center items-center hover:scale-105 transition-transform duration-300"
                        >
                            <GlowingEffect
                                spread={50}
                                glow={true}
                                disabled={false}
                                proximity={60}
                                inactiveZone={0.01}
                                borderWidth={3}
                                
                            />
                            <CardBody className="flex flex-col items-center h-full justify-center">
                                <CardItem translateZ="100" className="flex justify-center mb-4">
                                    <Icon size={56} className="text-center  " />
                                </CardItem>
                                <CardItem
                                    translateZ="80"
                                    className="text-xl font-bold bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent "
                                >
                                    {title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="80"
                                    className="text-teal-500 text-sm font-bold mt-2  text-center"
                                >
                                    {description}
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
