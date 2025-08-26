import { Database, Server, Layout, Terminal, GitBranch, Cloud } from "lucide-react";

const skills = [
    {
        title: "Frontend Technologies",
        icon: <Layout className="w-10 h-10 text-violet-500" />,
        items: ["React","Vite","Angular","Next.js", "Tailwind", "Material UI"],
    },
    {
        title: "Backend Technologies",
        icon: <Server className="w-10 h-10 text-fuchsia-500" />,
        items: ["Node.js", "Python", "Java Spring","Express.js","Django"],
    },
    {
        title: "Databases",
        icon: <Database className="w-10 h-10 text-emerald-500" />,
        items: ["MongoDB", "PostgreSQL", "MS SQL","MySQL","Firebase" ],
    },
    {
        title: "Programming Languages",
        icon: <Terminal className="w-10 h-10 text-blue-500" />,
        items: ["Java", "Python", "JavaScript", "PHP", "TypeScript", "SQL"],
    },
    {
        title: "DevOps & Testing Tools",
        icon: <GitBranch className="w-10 h-10 text-orange-500" />,
        items: ["Git", "Jira", "Jenkins", "Docker","Katalon","Postman"],
    },
    {
        title: "Cloud Platforms",
        icon: <Cloud className="w-10 h-10 text-cyan-500" />,
        items: ["GCP", "Azure"],
    },
];

const Skills = () => {
    return (
        <section className="  min-h-[10vh] flex flex-col items-center justify-center px-6" id="skills">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent m-20">
                Skills
            </h1>

            <div className="grid md:grid-cols-2 gap-6 w-full max-w-6xl">
                {skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-6 p-6 rounded-2xl bg-black/50 border border-black/10 shadow-lg hover:shadow-violet-500/20 transition w-full"
                    >
                        {skill.icon}
                        <div >
                            <h3 className="text-lg mb-2 text-teal-500 font-bold px-25">{skill.title}</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-lg bg-white/5 border border-white/10"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
