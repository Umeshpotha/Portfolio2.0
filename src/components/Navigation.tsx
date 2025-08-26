import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-3xl font-bold bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                    >
                        UP
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-white hover:text-gray-200 transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-bl from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                        <Button
                            
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/umeshpotha1103.pdf";   
                                link.download = "Umesh_Potha_Resume.pdf"; 
                                link.click();
                            }}
                            className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white hover:bg-linear-to-bl hover:from-violet-600 hover:to-fuchsia-600 transition-colors duration-300"
                        >
                            Resume
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/20">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <div className="px-3 py-2">
                                <Button
                                   
                                    className="w-full"
                                    onClick={() => scrollToSection('#contact')}
                                >
                                    Resume
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;