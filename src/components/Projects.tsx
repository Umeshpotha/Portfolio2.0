import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import docpointimg from "../assets/docpoint.png";
import stockimg from "../assets/stockanalyzer.png"
import weatherimg from "../assets/weather.png"
import dogpng from "../assets/dog.png"
import aiimg from "../assets/aisummarizer.png"
import Loanimg from "../assets/LoanProcessingApplication.png"
const Projects = () => {
    const projects = [
        {
            title: "Doctor Appointment Booking App",
            description:
                "Docpoint is a clean, user-focused application built to make it easy for people to schedule doctor's appointments. My goal was to create an intuitive platform that saves time and reduces stress, ensuring a hassle-free experience from start to finish.",
            technologies: ["Next Js", "Node.js", "MonogDB", "Mongoose", "Tailwind CSS"],
            image: docpointimg,
            github: "https://github.com/Umeshpotha/docpoint",
            live: "https://docpoint-psi.vercel.app/",
        },
        {
            title: "Stocks Analyzer",
            description:
                "This project is a Streamlit web application that allows users to analyze and predict stock prices. The app fetches stock data, visualizes it, and predicts future trends using the Exponential Smoothing method. Additionally, users can send the analysis report via email.",
            technologies: ["Python", "Pandas", "Scikit-learn", "Web Ui", "streamlit"],
            image: stockimg,
            github: "https://github.com/Umeshpotha/StocksAnalyzer",
            live: "https://stockanaly.streamlit.app/",
        },
        {
            title: "Weather Dashboard",
            description:
                "A beautiful weather application with location-based forecasts using modern APIs.",
            technologies: ["React-app", "Express", "OpenWeather API", "Chart.js"],
            image: weatherimg,
            github: "https://github.com/Umeshpotha/Weather-app",
            live: "https://weatherdashboard-iota.vercel.app/",
        },
        {
            title: "Dog Emotion Detection",
            description:
                "This project aims to detect the emotions of dogs from images using computer vision and deep learning techniques. It utilizes a Convolutional Neural Network (CNN) model, specifically MobileNet, to classify dog facial expressions into predefined emotion categories.",
            technologies: [ "Python", "CNN", "Mobile Net", "Kalman Filter"],
            image: dogpng,
            github: "https://github.com/Umeshpotha/animal-emotion-detection",
            live: "",
        },
        {
            title: "AI Docuement Summarizer",
            description:
                "This project aims to detect the emotions of dogs from images using computer vision and deep learning techniques. It utilizes a Convolutional Neural Network (CNN) model, specifically MobileNet, to classify dog facial expressions into predefined emotion categories.",
            technologies: ["Python", "CNN", "Mobile Net", "Kalman Filter"],
            image: aiimg,
            github: "https://github.com/Umeshpotha/AI-Document-Summarizer",
            live: "",
        },
        {
            title: "Loan Processing Application",
            description:
                "The project 'CreditCruise' was developed for the Angel Hack Global Hackathon Series [Hack Bangalore]. It is a web application that seems to be related to credit or loan approv    al prediction. It is built using a combination of technologies, including Node.js, React, and Python, and it connects to a MongoDB database.",
            technologies: [ "React", "DialogFlow",],
            image: Loanimg,
            github: "https://github.com/Umeshpotha/CreditCruise",
            live: "https://credit-cruise.vercel.app/",
        },

    ];

    const [active, setActive] = useState<(typeof projects)[number] | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null!);

    useOutsideClick(ref, () => setActive(null));

    // Lock scroll when expanded
    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [active]);

    return (
        <>
            <h1 className="text-3xl font-bold m-5 text-center bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent ">Projects</h1>

            {/* Expanded modal */}
            <AnimatePresence>
                {active && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        />

                        <div className="fixed inset-0 flex justify-center items-center z-50 ">
                            <motion.div
                                layoutId={`card-${active.title}-${id}`}
                                ref={ref}
                                className="w-full max-w-2xl  bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-xl relative"
                            >
                              
                                <button
                                    onClick={() => setActive(null)}
                                    className="absolute top-3 right-3 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                <img
                                    src={active.image}
                                    alt={active.title}
                                    className="w-full h-60 object-cover"
                                />

                                <div className="p-6 flex flex-col gap-4">
                                    <motion.h2
                                        layoutId={`title-${active.title}-${id}`}
                                        className="text-xl font-bold text-purple-600 dark:text-purple-400"
                                    >
                                        {active.title}
                                    </motion.h2>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-white dark:text-neutral-400"
                                    >
                                        {active.description}
                                    </motion.p>

                                 
                                    <div className="flex flex-wrap gap-2 ">
                                        {active.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-teal-500 text-black">{tech}</Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-4">
                                       {active.live && active.live.length > 0 && (
                                           <Button asChild variant="default">
                                                <a href={active.live} target="_blank" rel="noopener noreferrer">
                                                   <ExternalLink className="mr-2 h-4 w-4" /> Live
                                               </a>
                                         </Button>
                                      )}

                                       {active.github && active.github.length > 0 && (
                                           <Button asChild variant="outline">
                                               <a href={active.github} target="_blank" rel="noopener noreferrer">
                                                   <Github className="mr-2 h-4 w-4" /> GitHub
                                               </a>
                                           </Button>
                                       )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

            {/* Project Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                {projects.map((project) => (
                    <motion.div
                        layoutId={`card-${project.title}-${id}`}
                        key={project.title}
                        onClick={() => setActive(project)}
                        className="cursor-pointer p-4 bg-white dark:bg-neutral-900 rounded-xl shadow hover:shadow-lg transition flex flex-col gap-4 "
                    >
                        <motion.img
                            layoutId={`image-${project.title}-${id}`}
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <motion.h3
                            layoutId={`title-${project.title}-${id}`}
                            className="text-lg font-semibold text-purple-600 dark:text-purple-600"
                        >
                            {project.title}
                        </motion.h3>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default Projects;
