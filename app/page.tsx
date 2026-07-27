import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MarketChart } from "@/components/MarketChart";
import { TestimonialCard } from "@/components/TestimonialCard";

const telegram = "https://t.me/Gencou_bot";

const services = [
  {
    k: "01",
    title: "Copy Trading",
    text: "Connect an eligible MT5 broker account and automatically mirror a selected Gencouv strategy while your funds remain in your own account.",
    meta: "Primary service",
    href: `${telegram}?start=copy_trading`,
  },
  {
    k: "02",
    title: "Expert Advisors",
    text: "Deploy algorithmic trading systems with configurable risk limits, execution rules and strategy-specific controls.",
    meta: "MT5 automation",
    href: `${telegram}?start=ea`,
  },
  {
    k: "03",
    title: "Precision Indicators",
    text: "Use structured market-analysis tools designed to identify liquidity, momentum and execution conditions without unnecessary chart noise.",
    meta: "TradingView tools",
    href: `${telegram}?start=indicator`,
  },
  {
    k: "04",
    title: "Trading Utilities",
    text: "Access risk calculators, journals, performance dashboards, alerts and supporting tools for disciplined trading operations.",
    meta: "Operator suite",
    href: `${telegram}?start=tools`,
  },
];

const testimonials = [
  {
    name: "A. Nwosu",
    role: "Copy-trading client",
    quote: "The onboarding process explained the strategy, risk profile and broker connection clearly. I retained control of my account throughout.",
    avatar: "/avatars/ada.svg",
    accent: "#2fe6a6",
  },
  {
    name: "M. Thompson",
    role: "Business owner",
    quote: "The product feels structured and transparent. It is presented as trading technology, not as a promise of effortless returns.",
    avatar: "/avatars/marcus.svg",
    accent: "#68a8ff",
  },
  {
    name: "F. Kareem",
    role: "Independent trader",
    quote: "The risk-profile comparison made it easier to understand which strategy matched my tolerance before connecting an account.",
    avatar: "/avatars/fatima.svg",
    accent: "#d9b56f",
  },
  {
    name: "D. Ross",
    role: "EA customer",
    quote: "Setup was straightforward, and the support process focused on configuration, risk limits and technical questions rather than hype.",
    avatar: "/avatars/daniel.svg",
    accent: "#bc86ff",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="topNav shell">
        <Logo />
        <div className="navLinks">
          <a href="#copy-trading">Copy Trading</a>
          <a href="#profiles">Profiles</a>
          <a href="#services">Other Services</a>
          <a href="#proof">Client Experience</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="ghostButton" href={`${telegram}?start=copy_trading`} target="_blank" rel="noreferrer">
          Check Eligibility
        </a>
      </nav>

      <section className="hero shell" id="copy-trading">
        <div className="eyebrow"><span /> BROKER-CONNECTED COPY TRADING</div>
        <h1>Systematic strategies.<br /><em>Your broker account.</em></h1>
        <p>
          Access Gencouv copy-trading profiles built around disciplined execution, defined risk parameters and transparent onboarding. Your capital remains with your broker.
        </p>
        <div className="heroActions">
          <a className="primaryButton" href={`${telegram}?start=copy_trading`} target="_blank" rel="noreferrer">Start Evaluation <b>↗</b></a>
          <a className="textLink" href="#profiles">Compare profiles</a>
        </div>
        <div className="trustLine">
          <div className="faces">
            <img src="/avatars/ada.svg" alt="Client avatar" />
            <img src="/avatars/marcus.svg" alt="Client avatar" />
            <img src="/avatars/fatima.svg" alt="Client avatar" />
          </div>
          <span>No custody. No guaranteed returns. Broker-connected execution.</span>
        </div>

        <div className="platformFrame">
          <div className="platformBar"><Logo /><div className="live"><i /> Copy engine operational</div></div>
          <div className="platformGrid">
            <aside className="miniSidebar">
              <b>Copy Console</b>
              <span className="active">Portfolio</span>
              <span>Strategies</span>
              <span>Executions</span>
              <span>Risk controls</span>
              <span>Reports</span>
              <div className="sideStatus">CONNECTION STATUS<strong>SYNCHRONIZED</strong></div>
            </aside>
            <div className="chartPanel">
              <div className="panelTitle">
                <div><span>Illustrative connected balance</span><strong>$248,600</strong></div>
                <div className="metricUp">+8.42%</div>
              </div>
              <MarketChart />
              <div className="chartStats">
                <span>Execution latency <b>42ms</b></span>
                <span>Active profiles <b>02</b></span>
                <span>Risk controls <b>Enabled</b></span>
              </div>
            </div>
            <div className="rightStack">
              <div className="dataCard"><span>Strategy monitoring</span><strong>24/5</strong><small>Market-session coverage</small></div>
              <div className="dataCard"><span>Client funds held</span><strong>$0</strong><small>Funds remain with broker</small></div>
              <div className="dataCard signal"><span>Connection health</span><strong>99.9%</strong><div><i style={{ width: "99.9%" }} /></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="statement shell">
        <p>Copy trading should provide structured access to a strategy, not remove the reality of market risk.</p>
      </section>

      <section id="profiles" className="section shell">
        <div className="sectionHead">
          <div><span className="kicker">COPY-TRADING PROFILES</span><h2>Choose risk deliberately.</h2></div>
          <p>Profile figures shown below are interface examples until verified live performance data is connected. They are not forecasts or guarantees.</p>
        </div>
        <div className="serviceGrid">
          <article className="serviceCard">
            <span className="serviceNumber">CORE</span>
            <div className="serviceIcon">C</div>
            <h3>Core Profile</h3>
            <p>A more conservative strategy profile designed for clients who prioritize controlled exposure and a lower maximum-risk framework.</p>
            <footer><span>Illustrative minimum: $500</span><b>15% risk ceiling*</b></footer>
          </article>
          <article className="serviceCard">
            <span className="serviceNumber">ALPHA</span>
            <div className="serviceIcon">A</div>
            <h3>Alpha Profile</h3>
            <p>A higher-volatility profile intended for experienced clients who understand that greater return targets can involve materially larger drawdowns.</p>
            <footer><span>Illustrative minimum: $1,000</span><b>30% risk ceiling*</b></footer>
          </article>
          <article className="serviceCard">
            <span className="serviceNumber">CONTROL</span>
            <div className="serviceIcon">R</div>
            <h3>Risk Controls</h3>
            <p>Defined exposure limits, account-equity monitoring, execution rules and profile-specific controls support consistent operation.</p>
            <footer><span>Configured per profile</span><b>No guarantee</b></footer>
          </article>
          <article className="serviceCard">
            <span className="serviceNumber">ACCESS</span>
            <div className="serviceIcon">↗</div>
            <h3>Broker Connection</h3>
            <p>Your trading capital remains in your eligible broker account. Gencouv does not receive deposits or hold client funds.</p>
            <footer><span>MT5 connection</span><b>$0 held by Gencouv</b></footer>
          </article>
        </div>
      </section>

      <section id="technology" className="techBand">
        <div className="shell techGrid">
          <div>
            <span className="kicker">HOW ACCESS WORKS</span>
            <h2>Evaluate. Connect.<br />Monitor.</h2>
            <p>The Telegram onboarding assistant collects your objectives, experience, funding range and risk preference before directing you toward a suitable next step.</p>
            <div className="checks">
              <span>✓ Complete suitability evaluation</span>
              <span>✓ Select an eligible profile</span>
              <span>✓ Connect an MT5 broker account</span>
              <span>✓ Monitor activity and risk</span>
            </div>
          </div>
          <div className="networkCard">
            <div className="orbit o1" />
            <div className="orbit o2" />
            <div className="core">G</div>
            <span className="node n1">Strategy</span>
            <span className="node n2">Risk</span>
            <span className="node n3">Broker</span>
            <span className="node n4">Client</span>
          </div>
        </div>
      </section>

      <section id="services" className="section shell">
        <div className="sectionHead">
          <div><span className="kicker">ADDITIONAL SERVICES</span><h2>More than copy trading.</h2></div>
          <p>Other Gencouv products remain available independently, while copy trading stays the central service.</p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <a href={service.href} target="_blank" rel="noreferrer" className="serviceCard" key={service.k}>
              <span className="serviceNumber">{service.k}</span>
              <div className="serviceIcon">⌁</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <footer><span>{service.meta}</span><b>↗</b></footer>
            </a>
          ))}
        </div>
      </section>

      <section id="performance" className="section shell">
        <div className="sectionHead">
          <div><span className="kicker">OPERATING PRINCIPLES</span><h2>What the system prioritizes.</h2></div>
          <p>Live and audited records should replace all interface examples before performance is publicly represented as factual.</p>
        </div>
        <div className="performanceGrid">
          <div><strong>$0</strong><span>Client capital held by Gencouv</span></div>
          <div><strong>24/5</strong><span>Trading-session monitoring</span></div>
          <div><strong>2</strong><span>Copy-trading risk profiles</span></div>
          <div><strong>100%</strong><span>Risk disclosure before access</span></div>
        </div>
      </section>

      <section id="proof" className="section shell">
        <div className="sectionHead">
          <div><span className="kicker">CLIENT EXPERIENCE</span><h2>Clarity before connection.</h2></div>
          <p>These remain sample profiles and statements. Replace them with approved, verifiable client material before public launch.</p>
        </div>
        <div className="testimonials">{testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}</div>
      </section>

      <section id="faq" className="section shell faq">
        <div><span className="kicker">COMMON QUESTIONS</span><h2>Understand the structure.</h2></div>
        <div className="faqList">
          <details open><summary>Does Gencouv hold my funds?</summary><p>No. Client capital remains in the client&apos;s eligible broker account. Gencouv provides strategy connectivity and trading technology, not custody.</p></details>
          <details><summary>How does copy trading work?</summary><p>After evaluation, an eligible broker account is connected to a selected profile. Strategy trades can then be mirrored automatically according to the connection and risk configuration.</p></details>
          <details><summary>What is the minimum account size?</summary><p>Minimums depend on the selected profile, broker account type and current access terms. The onboarding assistant will provide the applicable USD amount.</p></details>
          <details><summary>Are returns guaranteed?</summary><p>No. Trading involves substantial risk. Performance can vary, losses can occur and historical results do not guarantee future outcomes.</p></details>
          <details><summary>Can I access an EA or indicator without copy trading?</summary><p>Yes. Expert advisors, indicators and trading utilities can be evaluated and accessed independently.</p></details>
        </div>
      </section>

      <section className="cta shell">
        <span className="kicker">COPY-TRADING ACCESS</span>
        <h2>Start with suitability, not promises.</h2>
        <p>Complete the Gencouv Telegram evaluation before choosing a copy-trading profile.</p>
        <a className="primaryButton" href={`${telegram}?start=copy_trading`} target="_blank" rel="noreferrer">Start Evaluation <b>↗</b></a>
      </section>

      <footer className="footer shell">
        <Logo />
        <p>Broker-connected copy trading and systematic trading technology.</p>
        <div><a href="mailto:support@gencouv.com">support@gencouv.com</a><a href={telegram} target="_blank" rel="noreferrer">Telegram</a><Link href="/dashboard">Dashboard</Link></div>
        <small>© 2026 Gencouv. Trading involves risk. Losses can occur. Historical performance does not guarantee future results. Gencouv does not hold client funds.</small>
      </footer>
    </main>
  );
}
