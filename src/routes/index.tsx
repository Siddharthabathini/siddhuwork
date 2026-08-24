import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_jvflpka";
const EMAILJS_TEMPLATE_ID = "template_4ioxbhg";
const EMAILJS_PUBLIC_KEY = "VnjDnIqC5iVSZRKG3";
import {
  ArrowUp,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Cloud,
  Brain,
  ShieldCheck,
  Cpu,
  Database,
  GraduationCap,
  Award,
  Briefcase,
  Sparkles,
  Menu,
  X,
  ExternalLink,
  Send,
  Zap,
  Layers,
  Rocket,
  Users,
  Target,
  BookOpen,
  Wrench,
} from "lucide-react";
import profileAsset from "@/assets/siddhartha-profile.png.asset.json";
const profileImg = profileAsset.url;

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const RESUME_URL = "https://drive.google.com/file/d/1b1FEB_QzO5720ulRrDAem0UEM-RJcFgp/view?usp=drive_link";
const EMAIL = "siddharthabathini4@gmail.com";
const PHONE = "+91 9030633182";

// ------------ Data ------------
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const STATS = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Certifications" },
  { value: 25, suffix: "+", label: "Technical Skills" },
  { value: 3, suffix: "", label: "Years Learning" },
];

const CERTS = [
  { title: "Salesforce AI Associate", org: "Salesforce", icon: Cloud },
  { title: "Salesforce AI Specialist", org: "Salesforce", icon: Sparkles },
  { title: "Trailhead Superbadges", org: "Salesforce Trailhead", icon: Award },
  { title: "Introduction to Artificial Intelligence", org: "Online", icon: Brain },
  { title: "Introduction to Generative AI", org: "Coursera", icon: Zap },
  { title: "Cyber Security Internship", org: "Supraja Technologies", icon: ShieldCheck },
  { title: "Cloud Computing Fundamentals", org: "Online", icon: Cloud },
  { title: "Secure Coding Practices", org: "Online", icon: ShieldCheck },
  { title: "Data Analytics Job Simulation", org: "Deloitte", icon: Database },
  { title: "AICTE | IBM SkillsBuild Academic Internship - Data Analytics with AI", org: "IBM SkillsBuild", icon: Database },
];

const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    title: "Salesforce",
    icon: Cloud,
    skills: [
      { name: "Apex", level: 80 },
      { name: "Lightning Web Components", level: 75 },
      { name: "Salesforce Flow", level: 80 },
      { name: "SOQL / Administration", level: 78 },
    ],
  },
  {
    title: "Web Development",
    icon: Layers,
    skills: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Responsive Design", level: 85 },
      { name: "JavaScript (Basics)", level: 65 },
    ],
  },
  {
    title: "AI & Cloud",
    icon: Brain,
    skills: [
      { name: "Generative AI", level: 78 },
      { name: "Prompt Engineering", level: 82 },
      { name: "AWS Fundamentals", level: 70 },
      { name: "AI Tools", level: 80 },
    ],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: [
      { name: "Network Security", level: 72 },
      { name: "Secure Coding", level: 75 },
      { name: "Web Security", level: 70 },
      { name: "Digital Forensics", level: 68 },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "SQL / MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "Git & GitHub", level: 85 },
      { name: "Docker / Jenkins", level: 65 },
    ],
  },
];

const SOFT_SKILLS = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Analytical Thinking",
  "Adaptability",
  "Time Management",
  "Continuous Learning",
];

const SERVICES = [
  { title: "Salesforce Development", desc: "Apex, LWC, Flows and Salesforce Administration.", icon: Cloud },
  { title: "Frontend Web Development", desc: "Modern responsive interfaces with HTML, CSS & JS.", icon: Layers },
  { title: "AI-Powered Applications", desc: "Building smart apps using GenAI and prompt engineering.", icon: Brain },
  { title: "Cloud Solutions", desc: "Cloud fundamentals, deployment models & AWS basics.", icon: Cloud },
  { title: "Database Design", desc: "Relational & NoSQL data modeling with SQL & MongoDB.", icon: Database },
  { title: "REST API Integration", desc: "Consuming & building APIs with Postman testing.", icon: Cpu },
  { title: "Secure Coding", desc: "Security-first development & vulnerability analysis.", icon: ShieldCheck },
  { title: "Git & GitHub Workflows", desc: "Collaboration, versioning & code reviews.", icon: Github },
  { title: "Testing & Debugging", desc: "Systematic software testing and bug diagnosis.", icon: Wrench },
];

const PROJECTS = [
  {
    title: "AudioRip — Video to Audio Converter",
    desc: "A Flask-based web app that converts uploaded videos into MP3 audio using MoviePy and FFmpeg with an intuitive UI.",
    tags: ["Python", "Flask", "MoviePy", "FFmpeg", "JavaScript"],
    icon: Rocket,
    accent: "from-[oklch(0.63_0.19_258)] to-[oklch(0.63_0.22_292)]",
  },
  {
    title: "Salesforce Automation & Lightning Suite",
    desc: "Multiple Salesforce apps using Apex, Lightning Web Components, Flow automation, SOQL and Trailhead hands-on projects.",
    tags: ["Apex", "LWC", "Flow Builder", "SOQL", "SF CLI"],
    icon: Cloud,
    accent: "from-[oklch(0.63_0.22_292)] to-[oklch(0.72_0.14_210)]",
  },
  {
    title: "Cybersecurity & Secure Coding Projects",
    desc: "Academic and personal projects focused on secure coding, vulnerability analysis, encryption and digital forensics.",
    tags: ["Python", "SQL", "Networking", "Security Tools"],
    icon: ShieldCheck,
    accent: "from-[oklch(0.72_0.14_210)] to-[oklch(0.63_0.19_258)]",
  },
];

const EDUCATION = [
  {
    year: "2023 – 2027",
    title: "Bachelor of Technology (B.Tech)",
    place: "Guru Nanak Institutions Technical Campus",
    desc: "Focused on Software Development, Salesforce, Cloud Computing, AI, Cybersecurity, DSA and DBMS.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Cyber Security Intern",
    place: "Supraja Technologies",
    desc: "Hands-on with secure coding, cybersecurity fundamentals, digital forensics, network security and vulnerability analysis.",
    icon: Briefcase,
  },
];

// ------------ Hooks ------------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

// ------------ Component ------------
function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState("home");
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 500);
      // active section
      let current = "home";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [sending, setSending] = useState(false);
  const [contactStatus, setContactStatus] = useState<
    { type: "success" | "error"; message: string } | null
  >(null);

  const handleContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setContactStatus(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: "Siddhartha",
          from_name: String(data.get("name") || ""),
          from_email: String(data.get("email") || ""),
          subject: String(data.get("subject") || "Portfolio Inquiry"),
          message: String(data.get("message") || ""),
          to_email: EMAIL,
          reply_to: String(data.get("email") || ""),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setContactStatus({
        type: "success",
        message: "Thanks! Your message has been sent. I'll get back to you soon.",
      });
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setContactStatus({
        type: "error",
        message: "Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      {/* Ambient background blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-success/10 blur-[120px]" />
      </div>

      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-elegant" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg gradient-bg shadow-glow">
              <span className="text-primary-foreground">S</span>
            </span>
            <span className="gradient-text">Siddhartha</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === item.id
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full gradient-bg px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 md:inline-flex"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-lg glass p-2"
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {navOpen && (
          <div className="md:hidden glass border-t border-border">
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setNavOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm hover:bg-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-full gradient-bg px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                Open to internships & entry-level roles
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
                Hi, I'm <span className="gradient-text">Siddhartha</span>
                <br />
                <span className="text-foreground">Bathini</span>
              </h1>
              <p className="mt-6 text-lg font-medium text-muted-foreground md:text-xl">
                Software Developer{" "}
                <span className="text-primary">·</span> Salesforce Developer{" "}
                <span className="text-secondary">·</span> AI Enthusiast{" "}
                <span className="text-success">·</span> Cloud & Cybersecurity
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                A third-year B.Tech student passionate about Software Development, Salesforce, Cloud
                Computing, Artificial Intelligence and Cybersecurity. I enjoy solving real-world
                problems through technology and continuously improving my craft.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Rocket className="h-4 w-4" /> View Projects
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label} className="glass rounded-2xl p-4 text-center">
                    <div className="font-display text-3xl font-bold gradient-text">
                      <Counter end={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait */}
            <div className="relative mx-auto w-full max-w-md animate-fade-up">
              <div className="absolute -inset-4 rounded-[2rem] gradient-bg opacity-30 blur-2xl animate-glow-pulse" />
              <div className="relative animate-float">
                <div className="relative overflow-hidden rounded-[2rem] glass p-3 shadow-glow">
                  <img
                    src={profileImg}
                    alt="Siddhartha Bathini"
                    width={1024}
                    height={1024}
                    className="aspect-square w-full rounded-[1.5rem] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-elegant">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full gradient-bg">
                      <Cloud className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Certified in</div>
                      <div className="text-sm font-semibold">Salesforce AI</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 top-8 glass rounded-2xl px-4 py-3 shadow-elegant">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-success/20">
                      <Brain className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Focus</div>
                      <div className="text-sm font-semibold">AI & Cloud</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="About Me" title="Designing solutions, not just code">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="glass card-hover rounded-3xl p-8 reveal">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm an aspiring software engineer with a deep curiosity for how modern systems come
                together — from Salesforce automation to AI-driven applications and secure cloud
                architectures. I love breaking down real problems and shipping practical solutions.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Currently pursuing my B.Tech, I'm actively looking for internships, training
                programs and entry-level opportunities where I can contribute, learn from great
                mentors and grow into a well-rounded engineer.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: Target, label: "Goal-oriented" },
                  { icon: BookOpen, label: "Continuous learner" },
                  { icon: Users, label: "Team player" },
                  { icon: Zap, label: "Fast adapter" },
                ].map((h) => (
                  <div key={h.label} className="flex items-center gap-3 rounded-xl bg-accent/40 p-3">
                    <h.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Code2,
                  title: "Strong Fundamentals",
                  desc: "Solid grounding in DSA, DBMS, OOP and modern programming languages.",
                },
                {
                  icon: Cloud,
                  title: "Salesforce Specialist",
                  desc: "Building on the Salesforce platform with Apex, LWC and Flows.",
                },
                {
                  icon: Brain,
                  title: "AI-First Mindset",
                  desc: "Exploring generative AI, prompt engineering and AI-powered products.",
                },
                {
                  icon: ShieldCheck,
                  title: "Security-Aware",
                  desc: "Secure coding practices and cybersecurity fundamentals in every project.",
                },
              ].map((f) => (
                <div key={f.title} className="glass card-hover reveal rounded-3xl p-6">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl gradient-bg shadow-glow">
                    <f.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* EDUCATION / EXPERIENCE TIMELINE */}
        <Section
          id="education"
          eyebrow="Education & Experience"
          title="A journey of learning & building"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-success md:left-1/2" />
            <div className="space-y-10">
              {EDUCATION.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal relative flex flex-col gap-6 md:flex-row md:items-center ${
                    i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 md:px-8">
                    <div className="glass card-hover rounded-3xl p-6">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                        {item.year}
                      </div>
                      <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-secondary">{item.place}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full gradient-bg shadow-glow md:left-1/2">
                    <item.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certs" eyebrow="Certifications" title="Credentials that back the craft">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c) => (
              <div key={c.title} className="glass card-hover reveal rounded-2xl p-5">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/15">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="Skills" title="A versatile modern toolkit">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((g) => (
              <div key={g.title} className="glass card-hover reveal rounded-3xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl gradient-bg shadow-glow">
                    <g.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="space-y-4">
                  {g.skills.map((s) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 glass reveal rounded-3xl p-6">
            <h3 className="mb-4 font-display text-lg font-semibold">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-accent/40 px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* SERVICES */}
        <Section id="services" eyebrow="Services" title="What I can help you build">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="glass card-hover reveal group relative overflow-hidden rounded-3xl p-6"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl gradient-bg shadow-glow">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" eyebrow="Featured Projects" title="Selected work & experiments">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="glass card-hover reveal group relative overflow-hidden rounded-3xl p-6"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`}
                />
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl gradient-bg shadow-glow">
                  <p.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1"
                >
                  Request details <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="Contact" title="Let's build something great together">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
                { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/siddharthabathini",
                  href: "https://www.linkedin.com/in/siddharthabathini",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/Siddharthabathini",
                  href: "https://github.com/Siddharthabathini",
                },
                {
                  icon: Code2,
                  label: "LeetCode",
                  value: "leetcode.com/u/Siddharthabathini4",
                  href: "https://leetcode.com/u/Siddharthabathini4/",
                },
              ].map((c) => {
                const Inner = (
                  <div className="glass card-hover flex items-center gap-4 rounded-2xl p-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-bg shadow-glow">
                      <c.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                      <div className="truncate text-sm font-medium">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>

            <form
              onSubmit={handleContact}
              className="glass reveal space-y-4 rounded-3xl p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" placeholder="Your name" required />
                <Field name="email" label="Email" type="email" placeholder="you@email.com" required />
              </div>
              <Field name="subject" label="Subject" placeholder="How can I help?" required />
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                <Send className="h-4 w-4" /> {sending ? "Sending..." : "Send Message"}
              </button>
              {contactStatus && (
                <p
                  role="status"
                  className={`text-sm ${
                    contactStatus.type === "success" ? "text-success" : "text-destructive"
                  }`}
                >
                  {contactStatus.message}
                </p>
              )}
            </form>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 font-display text-xl font-bold">
                <span className="grid h-9 w-9 place-items-center rounded-lg gradient-bg shadow-glow">
                  <span className="text-primary-foreground">S</span>
                </span>
                <span className="gradient-text">Siddhartha Bathini</span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Aspiring software engineer building modern, secure and intelligent solutions with
                Salesforce, AI and the Cloud.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="hover:text-primary">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Github, href: "https://github.com/Siddharthabathini" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/siddharthabathini" },
                  { icon: Mail, href: `mailto:${EMAIL}` },
                  { icon: Code2, href: "https://leetcode.com/u/Siddharthabathini4/" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl glass transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Built with <span className="text-destructive">♥</span> by Siddhartha Bathini
              </p>
            </div>
          </div>
          <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Siddhartha Bathini. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full gradient-bg shadow-glow transition-all duration-300 ${
          showTop ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5 text-primary-foreground" />
      </button>
    </div>
  );
}

// ------------ Reusable pieces ------------
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            <span className="gradient-text">{title}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setW(level);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-accent">
        <div
          className="h-full rounded-full gradient-bg transition-all duration-[1400ms] ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
