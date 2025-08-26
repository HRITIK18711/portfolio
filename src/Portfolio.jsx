import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    ArrowRight,
    Download,
    Code2,
    Rocket,
    Box,
    Wrench,
    Moon,
    Sun,
    MapPin,
    Phone,
} from "lucide-react";
import { Menu, X } from "lucide-react";

// ---------- Configurable Data ----------
const PROFILE = {
    name: "Hritik Upadhyay",
    role: "FrontEnd Developer",
    location: "Lucknow, India",
    phone: "+91-7376950436",
    email: "hritikupadhyay2002@gmail.com",
    summary:
        "I build fast, accessible web apps with React, Node.js, and thoughtful UX. I care about clean code, great DX, and measurable impact.",
    resumeUrl: "/resume.pdf", // put your file in public folder
    social: {
        github: "https://github.com/HRITIK18711",
        linkedin: "https://www.linkedin.com/in/hritikupadhyay18",
        email: "hritikupadhyay2002@gmail.com",
    },
};

// ---------- Add this with other data ----------
const EDUCATION = [
    {
        university: "Dr. A.P.J Abdul Kalam Technical University, Lucknow",
        degree: "College - IISE , Lucknow,(MCA)",
        period: "2023-2025 | Completed",
        logo: "/pg.png", // keep logo in public folder
        status: "Completed"
    },
    {
        university: "University Of Lucknow",
        degree: "College - IISE , Lucknow,(BCA)",
        period: "2020-2023 | Completed",
        logo: "/lu.jpg",
        status: "Completed"
    },
    {
        university: "St. Peter Inter College",
        degree: "Intermediate (ISC Board)",
        period: "2019-2020 | Completed",
        logo: "/10th.png",
        status: "Completed"
    },
    {
        university: "St. Peter Inter College",
        degree: "High School (ISC Board)",
        period: "2017-2018 | Completed",
        logo: "/10th.png",
        status: "Completed"
    },
];



const SKILLS = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vite"],
    },

];

const PROJECTS = [
    {
        title: "SkyHop Professional Dance Institute",
        description:
            "Dance Academy website designed for the customer to visit and see the things related to academy",
        tech: ["React", "Tailwind"],
        link: "https://academyskyhop.netlify.app",
        repo: "https://github.com/HRITIK18711/SkyAcademy",
        image: "/image.png",
    },
    {
        title: "The Insight India (News Portal)",
        description:
            "The News Portal React app to update the news and get aware to public.",
        tech: ["React", "Tailwind"],
        link: "https://theinsightindia.netlify.app",
        repo: "https://github.com/HRITIK18711/the_insight_india",
        image: "/image1.jpg",
    },
    {
        title: "E-Commerce Website",
        description:
            "E-Commerce react app to give facility to user to get product online.",
        tech: ["React", "Tailwind"],
        link: "https://cartifyecomm.netlify.app/",
        repo: "https://github.com/HRITIK18711/ecommerce",
        image: "/image2.jpg",
    },
];

const EXPERIENCE = [
    {
        role: "Associate Analyst",
        company: "Vaco Binary Semantics LLP ",
        period: " Sep 2023 — Jan 2025",
        details: [
            "Used to verfiy the data posted on google shopping site",
            "Used to accept or reject the product of the merchant if it was following the google guideline",
        ],
    },
];

// ---------- Helpers ----------
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const useDarkMode = () => {
    const [dark, setDark] = useState(() => {
        if (typeof window === "undefined") return true;
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
    });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return [dark, setDark];
};


// ---------- Component ----------
export default function Portfolio() {
    const [dark, setDark] = useDarkMode();
    const [menuOpen, setMenuOpen] = useState(false); 

    const navItems = useMemo(
        () => [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" },
        ],
        []
    );

    return (
        <div className="min-h-screen bg-black text-white text-2xl dark:bg-slate-950 dark:text-slate-100">
            {/* Navbar */}
            <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 font-semibold">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 text-white">
                            <Code2 size={18} />
                        </span>
                        <span>{PROFILE.name}</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        {navItems.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                            >
                                {n.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <a
                            href="https://drive.google.com/file/d/1DpYhBdNhcgRgDSPMnNAFoVzVM5HLAWEe/view?usp=drive_link"
                            className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 px-3 py-2 text-sm hover:shadow-sm transition-shadow"
                            download
                        >
                            <Download size={16} /> Resume
                        </a>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Dropdown */}
                {menuOpen && (
                    <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-black dark:bg-slate-950">
                        <nav className="flex flex-col gap-4 p-4 text-sm">
                            {navItems.map((n) => (
                                <a
                                    key={n.href}
                                    href={n.href}
                                    className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                    onClick={() => setMenuOpen(false)} // close menu on click
                                >
                                    {n.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section id="home" className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
                    <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-indigo-600 blur-3xl" />
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid md:grid-cols-2 gap-10 items-center"
                    >
                        <motion.div variants={item}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs">
                                <Rocket size={14} /> Available for freelance
                            </span>
                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                                Building delightful web experiences
                            </h1>
                            <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-2xl">
                                {PROFILE.summary}
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#projects"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 text-sm font-semibold hover:opacity-90"
                                >
                                    View Projects <ArrowRight size={16} />
                                </a>
                                <a
                                    href={PROFILE.social.github}
                                    target="_blank" rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 px-5 py-3 text-sm hover:shadow-sm"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                                <a
                                    href={PROFILE.social.linkedin}
                                    target="_blank" rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 px-5 py-3 text-sm hover:shadow-sm"
                                >
                                    <Linkedin size={16} /> LinkedIn
                                </a>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                                <span className="inline-flex items-center gap-2"><MapPin size={16} /> {PROFILE.location}</span>
                                <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${PROFILE.phone}`}><Phone size={16} /> {PROFILE.phone}</a>
                                <a className="inline-flex items-center gap-2 hover:underline" href={PROFILE.social.email}><Mail size={16} /> {PROFILE.email}</a>
                            </div>
                        </motion.div>
                        <motion.div variants={item} className="relative">
                            <div className="mx-auto aspect-square w-72 sm:w-80 md:w-96 rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-2 shadow-2xl">
                                <div className="h-full w-full rounded-2xl bg-[url('/hritik.jpg')] bg-cover bg-center" />
                            </div>


                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="About Me"
                        subtitle="I’m a passionate Frontend Developer with a strong interest in building
                     modern, user-friendly, and responsive web applications.
As a fresher, I focus on writing clean, efficient code and continuously improving my skills in React.js, 
JavaScript, HTML, CSS, and Tailwind CSS.
I enjoy transforming creative ideas into engaging digital experiences, and I’m eager to learn new 
technologies,
 collaborate with teams, and grow as a developer in the IT industry.
My goal is to contribute to projects where I can apply my knowledge, gain hands-on experience, 
and build solutions that make a real impact."
                    />
                    <div className="mt-10 grid md:grid-cols-3 gap-6">
                        <InfoCard icon={<Box />} title="Craft">
                            I design and develop end‑to‑end features with a focus on performance, accessibility, and maintainability.
                        </InfoCard>
                        <InfoCard icon={<Rocket />} title="Impact">
                            I collaborate closely with design, product, and backend teams to ship measurable outcomes fast.
                        </InfoCard>
                        <InfoCard icon={<Wrench />} title="Culture">
                            I love clean code, good DX, and pragmatic engineering. Tests where they matter, velocity where it counts.
                        </InfoCard>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Skills" subtitle="What I use to build" />
                    <div className="mt-10 grid md:grid-cols-3 gap-6">
                        {SKILLS.map((group) => (
                            <motion.div
                                key={group.title}
                                variants={item}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6"
                            >
                                <h3 className="text-lg font-semibold">{group.title}</h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {group.items.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-xl text-black bg-slate-100 dark:bg-slate-900 px-3 py-1 text-sm"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section
                id="education"
                className="py-16 md:py-24 border-t bg-black border-slate-200/60 dark:border-slate-800/60"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-6xl text-center font-bold text-white">My Education</h2><br />
                    <p className="text-slate-400 text-center">
                        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
                    </p>

                    <div className="mt-10 space-y-8">
                        {EDUCATION.map((edu, i) => (
                            <EducationCard key={i} edu={edu} />
                        ))}
                    </div>
                </div>
            </section>


            {/* Projects */}
            <section id="projects" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Projects" subtitle="Selected work I’m proud of" />
                    <div className="mt-10 grid text-pink-800 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROJECTS.map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Experience" subtitle="Roles & achievements" />
                    <ol className="mt-10 relative border-s border-slate-200 dark:border-slate-800">
                        {EXPERIENCE.map((exp, i) => (
                            <li key={i} className="mb-10 ms-6">
                                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-black">
                                    {i + 1}
                                </span>
                                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                                    <h3 className="text-lg  font-semibold">{exp.role} · {exp.company}</h3>
                                    <p className="text-sm  dark:text-slate-400">{exp.period}</p>
                                    <ul className=" mt-3 list-disc ps-5 space-y-1 text-sm">
                                        {exp.details.map((d, j) => (
                                            <li key={j}>{d}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeader title="Let’s work together" subtitle="Tell me about your project" />
                    <form
                        className="mx-auto mt-10 grid gap-4 text-left"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thanks! I will get back to you soon.");
                        }}
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input label="Name" name="name" placeholder="Your full name" />
                            <Input label="Email" name="email" type="email" placeholder="you@example.com" />
                        </div>
                        <Input label="Subject" name="subject" placeholder="Project or role" />
                        <div>
                            <label className="mb-2 block text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="A few lines about what you need..."
                                className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700"
                        >
                            Send Message <ArrowRight size={16} />
                        </button>
                    </form>

                    <div className="mt-8 flex items-center justify-center gap-4">
                        <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-sm">
                            <Github size={18} />
                        </a>
                        <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-sm">
                            <Linkedin size={18} />
                        </a>
                        <a href={PROFILE.social.email} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-sm">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a className="hover:underline" href="#home">Top</a>
                        <a className="hover:underline" href={PROFILE.resumeUrl} download>Download Resume</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// ---------- Small Components ----------
function SectionHeader({ title, subtitle }) {
    return (
        <div className="text-center">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-extrabold"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-2 text-slate-600 dark:text-slate-300"
            >
                {subtitle}
            </motion.p>
        </div>
    );
}

function EducationCard({ edu }) {
    return (
        <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center gap-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 shadow-md"
        >
            <img
                src={edu.logo}
                alt={edu.university}
                className="w-24 h-24 object-contain rounded-lg border border-slate-200 dark:border-slate-700 bg-white p-2"
            />
            <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {edu.university}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{edu.degree}</p>
                <p className="mt-1 font-semibold text-emerald-600 dark:text-emerald-400">
                    {edu.period}
                </p>
            </div>
        </motion.div>
    );
}


function StatCard({ icon, label, value }) {
    return (
        <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 px-4 py-3 backdrop-blur">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                {icon}
            </span>
            <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
                <div className="text-base font-semibold">{value}</div>
            </div>
        </div>
    );
}

function InfoCard({ icon, title, children }) {
    return (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    {icon}
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">{children}</p>
        </div>
    );
}

function Input({ label, ...props }) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium">{label}</label>
            <input
                {...props}
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                required
            />
        </div>
    );
}

function ProjectCard({ project }) {
    return (
        <motion.article
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="group rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow"
        >
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="rounded-xl bg-slate-100 dark:bg-slate-900 px-3 py-1 text-xs">{t}</span>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                        >
                            <ExternalLink size={16} /> Live
                        </a>
                    )}
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                        >
                            <Github size={16} /> Code
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}
