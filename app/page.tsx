const projects = [
  {
    number: "01",
    name: "Operational Analytics",
    type: "DATA · KPI REPORTING",
    status: "MVP · VALIDATION PENDING",
    summary: "An internal analytics project that makes operational performance measurable, consistent, and understandable to stakeholders.",
    receipts: [
      ["Problem", "Reporting is less useful when different dashboards and exports disagree about the numbers."],
      ["Approach", "A shared metric layer feeds interactive dashboards and executive-facing Excel/PDF reporting."],
      ["Quality", "SQL integration, synthetic test inputs, data-validation rules, and automated tests support reproducible reporting."],
      ["Boundary", "This work is described at a high level. Employer-related source code and data are not public portfolio assets."],
    ],
    tags: ["Python", "SQL", "Streamlit", "Data Quality", "Reporting"],
    href: null,
    featured: false,
  },
  {
    number: "02",
    name: "Delphi",
    type: "APPLIED AI · FINANCIAL ANALYTICS",
    status: "PERSONAL BUILD",
    summary: "A personal finance app exploring how trustworthy calculations and a conversational AI assistant can work together.",
    receipts: [
      ["Why", "I wanted to see changes in my finances, understand what drives them, and ask better questions of my own data."],
      ["Approach", "The application computes balances, cash flow, and trends before passing structured context to an LLM."],
      ["Built with", "React Native, Expo, TypeScript, and Supabase/PostgreSQL, with row-level data isolation."],
      ["Status", "Personal, early-stage software under active development—not a commercial product."],
    ],
    tags: ["TypeScript", "PostgreSQL", "Data Analytics", "LLM Integration"],
    href: "https://github.com/KumarG23/delphi",
    featured: true,
  },
  {
    number: "03",
    name: "Jarvis Command",
    type: "AI WORKFLOWS · BUSINESS SYSTEMS",
    status: "ITERATING",
    summary: "A secured personal interface for inspecting AI-agent activity and exploring safe, auditable workflow automation.",
    receipts: [
      ["Why", "AI agents are more useful when their capabilities and operational state are visible and permissioned."],
      ["Approach", "A narrow read-only interface sits behind authentication and limited API access."],
      ["Learning", "I experiment with tool boundaries, access controls, orchestration, testing, and supervised automation."],
      ["Status", "A personal project with read-only capabilities; broader control workflows remain future work."],
    ],
    tags: ["TypeScript", "React", "APIs", "AI Agents", "Access Control"],
    href: "https://github.com/KumarG23/jarvis-command",
    featured: false,
  },
];

const alsoShipping = [
  {
    name: "GainLog",
    type: "DATA · MOBILE APP",
    status: "ACTIVE BUILD",
    summary: "A fitness and nutrition app that brings history, trends, goals, reminders, and Android Health Connect data together.",
    href: "https://github.com/KumarG23/GainLog",
  },
  {
    name: "Nepali Threads",
    type: "BUSINESS SYSTEMS · ECOMMERCE",
    status: "PRE-LAUNCH",
    summary: "A family storefront with customer, payment, order, inventory, and fulfillment workflows.",
    href: "https://github.com/KumarG23/nepali-threads",
  },
];

const proofs = [
  ["Operational analytics", "I work with performance metrics, trends, dashboards, and reporting people can act on."],
  ["SQL and data quality", "I query data, define metrics carefully, and check what the numbers actually represent."],
  ["Applied AI", "I use Claude, Codex, and agent tools to build and explore useful solutions with validation and oversight."],
  ["Business processes", "I like turning a messy workflow into clearer requirements and a repeatable process."],
  ["Integrations", "I work across APIs, enterprise applications, databases, and the gaps between systems."],
  ["Security and privacy", "I consider identity, access boundaries, sensitive information, and failure modes."],
  ["Real-world systems", "My current work involves production software with operational consequences and real users."],
  ["Product judgment", "I make practical decisions about what to build, how to test it, and when it is actually ready."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="nav shell">
        <a className="brand" href="#top">
          NS<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#proof">Experience</a>
          <a href="#about">About</a>
          <a href="https://github.com/KumarG23" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/neal-sharma23" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="availability">
            <span /> OPEN TO THE RIGHT ROLE
          </div>
          <p className="kicker">NEAL SHARMA / LEXINGTON, KY</p>
          <h1>
            I turn complex data and workflows into <span>tools people can use.</span>
          </h1>
          <p className="lede">
            I'm a PACS Analyst & Developer working with SQL, operational analytics, enterprise systems, and integrations. I build with AI tools, too—looking for ways to make data clearer, workflows simpler, and business software more useful.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              See the work ↓
            </a>
            <a
              className="button ghost"
              href="https://www.linkedin.com/in/neal-sharma23"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        <aside className="now-card">
          <div className="terminal-head">
            <span>NEAL / NOW</span>
            <span>● ONLINE</span>
          </div>
          <div className="now-row">
            <span>BUILDING</span>
            <strong>AI + data tools</strong>
            <em>Delphi · Jarvis Command</em>
          </div>
          <div className="now-row">
            <span>ANALYZING</span>
            <strong>Operational metrics</strong>
            <em>SQL · dashboards · reporting</em>
          </div>
          <div className="now-row">
            <span>DAY JOB</span>
            <strong>Enterprise systems</strong>
            <em>PACS · SQL · integrations</em>
          </div>
          <div className="now-row">
            <span>EXPLORING</span>
            <strong>AI business automation</strong>
            <em>Agents · workflows · BI</em>
          </div>
        </aside>
      </section>

      <section className="manifesto shell">
        <p>HOW I THINK</p>
        <h2>The work I enjoy most starts with a messy process, unclear data, or two systems that do not quite agree.</h2>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">FEATURED WORK / 01—03</p>
            <h2>A few things I've built.</h2>
          </div>
          <p>
            These projects best show how I work: what I wanted to solve, how I approached it, and where the work stands today.
          </p>
        </div>
        <div className="project-stack">
          {projects.map((project) => (
            <article className={`story-card ${project.featured ? "featured-story" : ""}`} key={project.name}>
              <div className="project-index">{project.number}</div>
              <div className="project-main">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span className="project-status">● {project.status}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <ul className="receipt-list">
                  {project.receipts.map(([label, text]) => (
                    <li key={label}>
                      <strong>{label}</strong>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.href && (
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                )}
              </div>
              {project.featured && (
                <div className="cfo-panel">
                  <div className="cfo-photo">
                    <img src="/images/delphi.jpg" alt="Delphi, the portfolio's Chief Financial Officer" />
                  </div>
                  <div className="cfo-copy">
                    <span>CHIEF FINANCIAL OFFICER</span>
                    <strong>Delphi</strong>
                    <p>Extremely qualified. Occasionally says “right meow.”</p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="also-grid">
          {alsoShipping.map((item) => (
            <article className="also-card" key={item.name}>
              <div className="project-meta">
                <span>{item.type}</span>
                <span className="project-status">● {item.status}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              <a className="project-link" href={item.href} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="proof">
        <div className="section-heading">
          <div>
            <p className="kicker">EXPERIENCE</p>
            <h2>What I bring to the work.</h2>
          </div>
          <p>
            I'm most interested in AI-enabled analytics, business systems, and automation roles where data, integrations, and practical AI make work better.
          </p>
        </div>
        <div className="lane-grid proof-grid">
          {proofs.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell about" id="about">
        <div>
          <p className="kicker">ABOUT</p>
          <h2>I started where software has to work.</h2>
        </div>
        <div className="about-copy">
          <div className="portrait-wrap">
            <img src="/images/neal.jpg" alt="Neal Sharma" />
          </div>
          <p>
            My work in healthcare technology spans PACS, SQL, operational reporting, integrations, and enterprise systems. It taught me that the best technical solutions start with understanding the data and the people who use it.
          </p>
          <p>
            I completed a 500-hour full-time software development program and continued experimenting with applications, local AI models, and agent tools. I particularly enjoy building with Claude and Codex while checking the logic, results, and limitations myself.
          </p>
          <p>
            Today I'm combining enterprise systems experience with analytics and applied AI through projects such as Delphi and Jarvis Command. I'm interested in teams using data, automation, and AI to improve business processes—not only fintech or traditional software engineering.
          </p>
          <p className="human-note">Lexington, KY. Family, lifting, too many projects, and an unreasonable amount of cat involvement in product naming.</p>
        </div>
      </section>

      <section className="cta shell">
        <p className="kicker">NEAL SHARMA / 2026</p>
        <h2>I'm exploring roles in AI-enabled analytics and business automation.</h2>
        <p>
          I'm especially interested in AI business systems, data/BI analytics, intelligent automation, and teams building useful internal tools with thoughtful, sustainable work practices.
        </p>
        <div className="hero-actions centered">
          <a
            className="button primary"
            href="https://www.linkedin.com/in/neal-sharma23"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn ↗
          </a>
          <a className="button ghost" href="https://github.com/KumarG23" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </section>
      <footer className="footer shell">
        <span>© 2026 Neal Sharma</span>
        <span>neal.sharma-house.com · Built with Next.js</span>
      </footer>
    </main>
  );
}
