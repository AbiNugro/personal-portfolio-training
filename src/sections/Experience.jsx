const experiences = [
  {
    period: "2022 - Present",
    role: "Senior Frontend Engineer",
    company: "Tech Innovator Inc.",
    description:
      "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of  5 developers.",
    technologies: ["React", "TypeScript", "Redux", "Webpack", "Jest"],
    current: true,
  },
  {
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Web Solutions Ltd.",
    description:
      "Developed and maintained multiple client websites and web applications. Improved performance by 30% through code optimization and introduced CI/CD pipelines.",
    technologies: ["Vue.js", "JavaScript", "Sass", "Git", "Cypress"],
    current: false,
  },
  {
    period: "2018 - 2020",
    role: "Junior Web Developer",
    company: "Creative Apps Co.",
    description:
      "Assisted in the development of web applications and internal tools. Gained experience in full-stack development and collaborated closely with designers and backend developers.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    current: false,
  },
  {
    period: "2017 - 2018",
    role: "Intern Developer",
    company: "Startup Hub",
    description:
      "Contributed to various projects as part of a small startup team. Focused on learning best practices in web development and gaining hands-on experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to senior engineer
            leading teams and building impactful products.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
        <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
            style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-background z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>

              {/* Content */}
              <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                  <span className="text-sm text-secondary-foreground font-medium">{exp.period}</span>
                  <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
