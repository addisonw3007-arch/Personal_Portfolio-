import { useEffect, useState } from "react";

type Page = "home" | "portfolio" | "policy";

const pageNames: Record<Page, string> = {
  home: "Home",
  portfolio: "Portfolio",
  policy: "Policy",
};

const socials = [
  {
    label: "GitHub",
    detail: "Code & experiments",
    href: "https://github.com/addisonw3007-arch?tab=repositories",
  },
  {
    label: "LinkedIn",
    detail: "Experience & updates",
    href: "https://www.linkedin.com/in/addison-williams-88b572390/",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function PlaceholderLines({ count = 3 }: { count?: number }) {
  return (
    <div className="placeholder-lines" aria-label="Placeholder text">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} style={{ width: `${100 - index * 13}%` }} />
      ))}
    </div>
  );
}

function Header({ page, navigate }: { page: Page; navigate: (page: Page) => void }) {
  return (
    <header className="site-header">
      <button className="wordmark" onClick={() => navigate("home")} aria-label="Go to homepage">
        AW<span>°</span>
      </button>
      <nav aria-label="Primary navigation">
        {(Object.keys(pageNames) as Page[]).map((item, index) => (
          <button
            key={item}
            className={page === item ? "active" : ""}
            onClick={() => navigate(item)}
            aria-current={page === item ? "page" : undefined}
          >
            <span>0{index + 1}</span>
            {pageNames[item]}
          </button>
        ))}
      </nav>
      <a className="availability" href="mailto:hello@example.com">
        <span />
        Available
      </a>
    </header>
  );
}

function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <footer>
      <div>
        <span className="eyebrow">Next stop</span>
        <button className="footer-cta" onClick={() => navigate("portfolio")}>
          Explore the work <Arrow />
        </button>
      </div>
      <p>Portfolio wireframe · 2025</p>
    </footer>
  );
}

function Home({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-kicker">
          <span>Student / Developer</span>
          <span>Based in [City]</span>
        </div>
        <h1>
          Addison
          <span className="outline-word">Williams</span>
        </h1>
        <div className="hero-bottom">
          <p>
            [A concise one-sentence introduction about who you are, what you build, and what keeps
            you curious.]
          </p>
          <button
            className="circle-link"
            onClick={() => navigate("portfolio")}
            aria-label="View portfolio"
          >
            <Arrow diagonal />
          </button>
        </div>
        <div className="orbit-mark" aria-hidden="true">
          <span>AW</span>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-number">01 / INTRO</div>
        <div className="intro-copy">
          <h2>
            I turn <em>curiosity</em> into useful digital experiences.
          </h2>
          <p>
            [Short bio placeholder. Add your program, interests, strengths, and the kind of
            opportunities you are seeking.]
          </p>
          <button className="text-link" onClick={() => navigate("portfolio")}>
            See selected work <Arrow />
          </button>
        </div>
      </section>

      <section className="connect-section">
        <div>
          <span className="eyebrow">Find me online</span>
          <h2>Let’s connect.</h2>
        </div>
        <div className="social-list">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              <span>{social.label}</span>
              <small>{social.detail}</small>
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

const projects = [
  { number: "01", title: "[Project title]", type: "[Web application]", tone: "lime" },
  { number: "02", title: "[Project title]", type: "[Design experiment]", tone: "lavender" },
  { number: "03", title: "[Future project]", type: "[Coming during program]", tone: "cream" },
  { number: "04", title: "[Future project]", type: "[Coming during program]", tone: "blue" },
];

function Portfolio() {
  return (
    <main>
      <section className="page-hero portfolio-hero">
        <div>
          <span className="eyebrow">Selected archive / 2025</span>
          <h1>
            Work<span className="accent-dot">.</span>
          </h1>
        </div>
        <p>
          [A short introduction to your practice, the problems you enjoy solving, and the tools you
          use.]
        </p>
      </section>

      <section className="project-grid" aria-label="Project placeholders">
        {projects.map((project, index) => (
          <article className={`project-card ${project.tone}`} key={project.number}>
            <div className="project-meta">
              <span>{project.number}</span>
              <span>{project.type}</span>
            </div>
            <div className="visual-placeholder">
              <span>IMAGE / PROJECT VISUAL</span>
              <div className={`shape shape-${index + 1}`} />
            </div>
            <div className="project-title">
              <h2>{project.title}</h2>
              <button aria-label={`Open ${project.title}`}>
                <Arrow diagonal />
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="process-strip">
        <span>Research</span>
        <i />
        <span>Design</span>
        <i />
        <span>Build</span>
        <i />
        <span>Iterate</span>
      </section>
    </main>
  );
}

function Policy() {
  return (
    <main>
      <section className="page-hero policy-hero">
        <div className="policy-label">
          <span>POLICY NOTE</span>
          <span>ISSUE 001</span>
        </div>
        <h1>
          Who gets to
          <br />
          shape <span>AI?</span>
        </h1>
        <div className="policy-summary">
          <span className="eyebrow">Position in brief</span>
          <p>[One clear sentence stating your opinion on responsible artificial intelligence.]</p>
        </div>
      </section>

      <section className="article-layout">
        <aside>
          <span className="eyebrow">On this page</span>
          {["The question", "My position", "Why it matters", "A path forward"].map(
            (item, index) => (
              <a href={`#section-${index + 1}`} key={item}>
                0{index + 1} {item}
              </a>
            ),
          )}
        </aside>
        <article>
          <section id="section-1">
            <span className="article-number">01</span>
            <h2>The question</h2>
            <PlaceholderLines count={4} />
          </section>
          <blockquote>
            “[A strong pull quote that captures the central tension of your argument.]”
          </blockquote>
          <section id="section-2">
            <span className="article-number">02</span>
            <h2>My position</h2>
            <PlaceholderLines count={5} />
          </section>
          <div className="stat-placeholder">
            <span>KEY STAT</span>
            <strong>XX%</strong>
            <p>[Supporting data point and source placeholder]</p>
          </div>
          <section id="section-3">
            <span className="article-number">03</span>
            <h2>Why it matters</h2>
            <PlaceholderLines count={4} />
          </section>
          <section id="section-4">
            <span className="article-number">04</span>
            <h2>A path forward</h2>
            <PlaceholderLines count={3} />
          </section>
        </article>
      </section>
    </main>
  );
}

export default function App() {
  const getPage = (): Page => {
    const hash = window.location.hash.replace("#/", "");
    return hash === "portfolio" || hash === "policy" ? hash : "home";
  };

  const [page, setPage] = useState<Page>(getPage);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (nextPage: Page) => {
    window.location.hash = nextPage === "home" ? "/" : `/${nextPage}`;
    if (page === nextPage) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <Header page={page} navigate={navigate} />
      {page === "home" && <Home navigate={navigate} />}
      {page === "portfolio" && <Portfolio />}
      {page === "policy" && <Policy />}
      <Footer navigate={navigate} />
    </div>
  );
}
