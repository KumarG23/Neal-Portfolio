const projects = [
  {
    name: "Delphi",
    eyebrow: "Fintech · Featured",
    description:
      "A personal finance platform focused on secure financial-data integrations, modern product engineering, and clear decision-making.",
    tags: ["Fintech", ".NET", "PostgreSQL", "Plaid", "APIs"],
  },
  {
    name: "Jarvis Command",
    eyebrow: "AI Product Engineering",
    description:
      "A chat-first command center for projects, tools, and AI-assisted workflows — designed to make complex systems feel simple.",
    tags: ["AI", "Agents", "MCP", "Product", "Integrations"],
  },
  {
    name: "Financial Analysis Lab",
    eyebrow: "Analysis · In progress",
    description:
      "A growing collection of company, KPI, market, and financial-statement analyses built to turn raw data into useful business insight.",
    tags: ["Financial Analysis", "SQL", "Excel", "Python", "Dashboards"],
  },
];

const disciplines = [
  {
    title: "Software Engineering",
    text: "Modern product development, APIs, integrations, backend systems, databases, and production-minded engineering.",
  },
  {
    title: "Financial Analysis",
    text: "Financial statements, KPI analysis, trend interpretation, business performance, modeling, and decision support.",
  },
  {
    title: "Data & Systems",
    text: "SQL, operational data, healthcare systems, troubleshooting, automation, infrastructure, and system integration.",
  },
  {
    title: "AI-Assisted Development",
    text: "Practical use of modern AI tools to accelerate implementation, review, research, and product iteration.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Neal Sharma home">
          NS<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
          <a href="https://github.com/KumarG23" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="kicker">SOFTWARE · DATA · FINANCE</p>
          <h1>
            I build at the intersection of <span>software, data, and finance.</span>
          </h1>
          <p className="lede">
            I’m Neal Sharma — a technical professional moving deeper into fintech,
            product engineering, and financial analysis. I like solving practical
            problems, connecting systems, and turning messy information into useful
            decisions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work</a>
            <a className="button ghost" href="#about">My background</a>
          </div>
        </div>

        <aside className="signal-card" aria-label="Current focus">
          <div className="status"><span /> CURRENT FOCUS</div>
          <h2>Fintech + financial intelligence</h2>
          <p>
            Building Delphi while sharpening modern software engineering and financial
            analysis skills.
          </p>
          <div className="metric-grid">
            <div><strong>01</strong><span>Product engineering</span></div>
            <div><strong>02</strong><span>Financial analysis</span></div>
            <div><strong>03</strong><span>Data & integrations</span></div>
            <div><strong>04</strong><span>AI workflows</span></div>
          </div>
        </aside>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">SELECTED WORK</p>
            <h2>Projects with a point of view.</h2>
          </div>
          <p>
            I’m most interested in work where software, data, and real business
            decisions meet.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${index === 0 ? "featured" : ""}`} key={project.name}>
              <div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="capabilities">
        <div className="section-heading">
          <div>
            <p className="kicker">CAPABILITIES</p>
            <h2>One profile, two strong career lanes.</h2>
          </div>
          <p>
            Fintech engineering and financial analysis are different roles, but they
            reward many of the same strengths: systems thinking, data fluency, and
            clear judgment.
          </p>
        </div>
        <div className="discipline-grid">
          {disciplines.map((item, index) => (
            <article className="discipline" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell about" id="about">
        <div>
          <p className="kicker">ABOUT</p>
          <h2>Production experience before the portfolio.</h2>
        </div>
        <div className="about-copy">
          <p>
            My background is in healthcare IT, PACS, databases, integrations, and
            development — supporting real production systems where reliability and
            accuracy matter.
          </p>
          <p>
            I’m now deliberately expanding that foundation into modern software
            product engineering and finance. That means building real products,
            studying financial analysis, and using data to understand how businesses
            actually perform.
          </p>
          <p>
            I’m especially interested in fintech, financial technology, software
            engineering, data-heavy product roles, and financial analyst opportunities
            where technical depth is an advantage.
          </p>
        </div>
      </section>

      <section className="cta shell">
        <p className="kicker">LET’S CONNECT</p>
        <h2>Interested in what I’m building?</h2>
        <p>
          Explore the code today. Full case studies, analysis projects, and resume are
          coming next.
        </p>
        <a className="button primary" href="https://github.com/KumarG23" target="_blank" rel="noreferrer">
          View GitHub
        </a>
      </section>

      <footer className="footer shell">
        <span>© 2026 Neal Sharma</span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  );
}
