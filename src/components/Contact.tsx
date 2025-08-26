import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import emailjs from "emailjs-com"; // ✅ install with: npm install emailjs-com
import { toast } from "sonner";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            { name, email, message },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
       // replace with your public key
        )
            .then(() => {
                toast.success("Message sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to send message. Try again.");
            })
            .finally(() => setLoading(false));
    };

    return (
        <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                    Get in <span className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Touch</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* Form Card */}
                    <Card className="p-0">
                        <CardContent className="p-6">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="text-left">
                                    <label className="text-sm font-medium text-neutral-600 dark:text-neutral-300 ">Name</label>
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div className="text-left">
                                    <label className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Email</label>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                <div className="text-left">
                                    <label className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Message</label>
                                    <Textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell me about your project or question..."
                                        required
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <Button
                                        type="submit"
                                        className="bg-teal-500 hover:bg-teal-600"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact info */}
                    <div className="flex flex-col gap-4">
                        <Card className="p-0">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-teal-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Tirupati, India</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="p-0">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-teal-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-300">umeshpotha123@gmail.com</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="p-0">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-teal-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-300">+91 9154019776</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
