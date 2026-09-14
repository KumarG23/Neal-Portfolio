const projects = [
  {
    number: "01",
    name: "Delphi",
    type: "FINTECH · PERSONAL FINANCE",
    status: "ACTIVE BUILD",
    summary: "A personal finance app that brings accounts, balances, transactions, debt, and progress into one place.",
    receipts: [
      ["Why", "I wanted a clearer view of my own finances and a product I could keep improving as I learn more about financial systems."],
      ["Approach", "I started with the core financial data: accounts, balances, transactions, and historical snapshots."],
      ["Built with", "React Native, Expo, TypeScript, and Supabase/Postgres, with each user's financial data kept separate."],
      ["Status", "The core account, balance, and transaction features are working. I use the app and continue to build on it."],
    ],
    tags: ["TypeScript", "React Native", "Supabase", "PostgreSQL"],
    href: "https://github.com/KumarG23/delphi",
    featured: true,
  },
  {
    number: "02",
    name: "Trading Lab",
    type: "FINANCIAL RESEARCH · PYTHON",
    status: "RESEARCH MODE",
    summary: "A paper-trading research environment for testing market ideas and measuring results over time.",
    receipts: [
      ["Why", "After four years of trading and studying markets, I wanted a more disciplined way to test ideas and learn from the results."],
      ["Approach", "Strategies are written down before testing, tracked with consistent metrics, and reviewed across a larger sample."],
      ["Boundary", "The project stays paper-only, and research results are kept separate from portfolio results."],
      ["Status", "Research is ongoing. Live trading is not enabled."],
    ],
    tags: ["Python", "SQLite", "Backtesting", "Metrics"],
    href: "https://github.com/KumarG23/trading-lab",
  },
  {
    number: "03",
    name: "Nepali Threads",
    type: "COMMERCE · FULL STACK",
    status: "PRE-LAUNCH",
    summary: "A family-built online store for Nepali goods, with the main storefront and checkout experience in place.",
    receipts: [
      ["Why", "My family needed a real storefront for products they plan to sell, not just a portfolio demo."],
      ["Approach", "I built the shopping, account, payment, order, and inventory workflows around how the business will operate."],
      ["Progress", "It began as a React/Django capstone and later became a rebuilt Next.js product."],
      ["Status", "The software is built and being prepared for the business launch."],
    ],
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    href: "https://github.com/KumarG23/nepali-threads",
  },
];

const alsoShipping = [
  {
    name: "GainLog",
    type: "HEALTH · MOBILE",
    status: "ACTIVE BUILD",
    summary: "A fitness and nutrition app for workouts, goals, trends, reminders, and Android Health Connect data.",
    href: "https://github.com/KumarG23/GainLog",
  },
  {
    name: "Jarvis Command",
    type: "AI · SYSTEMS",
    status: "ITERATING",
    summary: "A chat-first workspace for managing projects, tools, approvals, and AI-assisted workflows.",
    href: "https://github.com/KumarG23/jarvis-command",
  },
];

const proofs = [
  ["Production systems", "I support and troubleshoot software that people rely on for daily work."],
  ["SQL and data", "I work with operational data, reporting, databases, and the details behind the numbers."],
  ["Integrations", "I connect systems and work through the vendor, API, and workflow issues between them."],
  ["Financial products", "I build with accounts, balances, transactions, market data, and financial reporting concepts."],
  ["Security mindset", "I consider access, privacy, and least privilege from the beginning."],
  ["Product judgment", "I decide what to build, what to leave out, and how to tell whether it is working."],
  ["AI-assisted development", "I use AI tools heavily while remaining responsible for architecture, testing, and final decisions."],
  ["Market experience", "I spent four years trading, analyzing markets, journaling decisions, and managing risk."],
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
            I build practical software for problems where <span>the details matter.</span>
          </h1>
          <p className="lede">
            My background is in healthcare technology, where I work with SQL, integrations, and systems people rely on every day. I'm bringing that experience into fintech and financial software through products I build and use myself.
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
            <strong>Delphi</strong>
            <em>Personal finance app</em>
          </div>
          <div className="now-row">
            <span>RESEARCHING</span>
            <strong>Trading Lab</strong>
            <em>Paper-trading research</em>
          </div>
          <div className="now-row">
            <span>DAY JOB</span>
            <strong>Healthcare systems</strong>
            <em>PACS · SQL · integrations</em>
          </div>
          <div className="now-row">
            <span>ALSO</span>
            <strong>GainLog + Jarvis</strong>
            <em>Fitness data + AI workflows</em>
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
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
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
            I'm most interested in software and product roles in fintech, especially where data, integrations, and financial knowledge overlap.
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
            My career started in healthcare technology, supporting PACS, databases, integrations, and infrastructure. It taught me how much good software depends on understanding the people, data, and workflows around it.
          </p>
          <p>
            I later completed a 500-hour full-time software development program and kept building from there. I also spent four years trading and studying financial markets, which is a big part of why fintech feels like a natural next step.
          </p>
          <p>
            Today I'm combining those areas through projects such as Delphi and Trading Lab. I'm looking for a role where I can keep building useful software, learn from a strong team, and contribute the experience I already have with production systems and financial analysis.
          </p>
          <p className="human-note">Lexington, KY. Family, lifting, finance, and an unreasonable amount of cat involvement in product naming.</p>
        </div>
      </section>

      <section className="cta shell">
        <p className="kicker">NEAL SHARMA / 2026</p>
        <h2>I'm looking for the right next role in fintech or financial software.</h2>
        <p>
          I'm especially interested in software, product, and data-focused roles where practical experience across systems and finance is useful.
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
