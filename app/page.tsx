const projects = [
  {
    number: "01",
    name: "Delphi",
    type: "FINTECH · PERSONAL FINANCE",
    status: "ACTIVE BUILD",
    summary: "Personal finance app I actually use. Named after the cat, because of course it is.",
    receipts: [
      ["Problem", "I wanted balances, debt, and spending in one place I would open on a Tuesday — not another dashboard of vibes."],
      ["Constraint", "Real accounts and transactions. User isolation in the database. No live credentials in the repo. No pretending this is a hedge fund."],
      ["Decision", "React Native, Expo, TypeScript, Supabase/Postgres. Build the money objects first; add bank connections without getting cute about security."],
      ["Now", "I use it. Accounts, balances, transactions, RLS. Still an active build."],
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
    summary: "A place to test market ideas without lying to myself about edge.",
    receipts: [
      ["Problem", "Backtests are easy to flatter. I wanted a lab that makes overconfidence expensive."],
      ["Constraint", "Paper only. Research is not a portfolio. A tiny sample is not a strategy."],
      ["Decision", "Explicit strategies, historical tests, deterministic metrics, journaling, and human approval gates before anything looks executable."],
      ["Now", "Still paper. Still research mode. Still no edge claim."],
    ],
    tags: ["Python", "SQLite", "Backtesting", "Metrics"],
    href: "https://github.com/KumarG23/trading-lab",
  },
  {
    number: "03",
    name: "Nepali Threads",
    type: "COMMERCE · FULL STACK",
    status: "PRE-LAUNCH",
    summary: "Family storefront for Nepali goods. The product is built. The shop is not fully launched yet.",
    receipts: [
      ["Problem", "Family wanted to sell real products without duct-taping a spreadsheet to a checkout page."],
      ["Constraint", "Accounts, inventory, Stripe, and a launch that is a business problem — not a coding one."],
      ["Decision", "Full storefront with payments and order flow. Started as a React/Django capstone; the current product lives in the Nepali Threads repo."],
      ["Now", "Pre-launch. Software is real. Store hours are not."],
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
    summary: "Workouts, nutrition, trends, Health Connect. I use it. Off-target for a fintech search, still real.",
    href: "https://github.com/KumarG23/GainLog",
  },
  {
    name: "Jarvis Command",
    type: "AI · SYSTEMS",
    status: "ITERATING",
    summary: "Chat-first command center with tools, artifacts, and approvals. I treat AI like production software, not a model with root.",
    href: "https://github.com/KumarG23/jarvis-command",
  },
];

const proofs = [
  ["SQL in production", "Not course SQL. Queries against systems where a bad join is an operational problem."],
  ["Integrations", "Vendors, APIs, and workflows that have to keep working after the demo."],
  ["Identity and access", "Auth, roles, least privilege. Healthcare made this non-optional."],
  ["Money as data", "Accounts, balances, transactions, isolation. If it does not reconcile, it is not done."],
  ["Paper until proven", "Trading Lab stays research and paper. I will not claim an edge I did not earn."],
  ["Real checkout", "Nepali Threads has Stripe, accounts, and inventory. Built. Not fully launched."],
  ["AI with brakes", "Agents, tools, approvals. I do not give a model production and hope."],
  ["Markets, not a costume", "Four years of charts, journals, and being wrong on the record. Not a CFA. Not a tourist."],
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
          <a href="#proof">Proof</a>
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
            I care whether the <span>numbers are true.</span>
          </h1>
          <p className="lede">
            I build software for fintech-shaped problems: accounts, balances, messy production data, and systems that break if you get sloppy. Day job is healthcare tech — PACS, SQL, integrations — where wrong is not a vibe. After hours I ship products I actually use.
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
            <em>Personal finance I actually use</em>
          </div>
          <div className="now-row">
            <span>RESEARCHING</span>
            <strong>Trading Lab</strong>
            <em>Paper only. No fake edge.</em>
          </div>
          <div className="now-row">
            <span>DAY JOB</span>
            <strong>Healthcare systems</strong>
            <em>PACS · SQL · integrations</em>
          </div>
          <div className="now-row">
            <span>ALSO</span>
            <strong>GainLog + Jarvis</strong>
            <em>Shipping. AI with brakes.</em>
          </div>
        </aside>
      </section>

      <section className="manifesto shell">
        <p>FINTECH · PRODUCTION SYSTEMS · HONEST METRICS</p>
        <h2>Healthcare taught me that software has to work. Finance is where I want to point that.</h2>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">SELECTED WORK / 01—03</p>
            <h2>What I actually built.</h2>
          </div>
          <p>
            Three projects a hiring manager can grill me on: the problem, the constraint, the decision, and what is true now. GitHub is the source. This page is the receipt.
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
            <p className="kicker">PROOF, NOT ADJECTIVES</p>
            <h2>Things I can defend on a call.</h2>
          </div>
          <p>
            I am aiming at AI-assisted software and product engineering in fintech. Analysis is how I think. It is not a second identity.
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
            Day job is healthcare technology: PACS, databases, integrations, infrastructure. Accuracy is not a slogan there. Wrong data breaks operations.
          </p>
          <p>
            That work made me a SQL-and-systems person. I also did a 500-hour full-time software program, and I spent four years looking at markets the unglamorous way — journals, risk, and being wrong on the record to myself.
          </p>
          <p>
            Now I point the same instincts at products of my own. Delphi is the flagship. Trading Lab is where I refuse to invent an edge. I still lift, still follow markets, and still let the cat name things.
          </p>
          <p className="human-note">Lexington, KY. Family, lifting, finance, and an unreasonable amount of cat involvement in product naming.</p>
        </div>
      </section>

      <section className="cta shell">
        <p className="kicker">NEAL SHARMA / 2026</p>
        <h2>Fintech software. Remote or hybrid. The right role, not any role.</h2>
        <p>
          If you need someone who can build, read a ledger, and not decorate a metric — LinkedIn is the fastest way to reach me.
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
