const telegram = "https://t.me/Gencou_bot";

const profiles = [
  {
    name: "Gencouv Core",
    label: "Conservative profile",
    description: "A lower-volatility copy profile intended for users who prefer tighter risk limits and steadier exposure.",
    items: ["Broker-connected", "USD account support", "Risk controls"],
    start: "core_profile",
  },
  {
    name: "Gencouv Alpha",
    label: "Higher-risk profile",
    description: "A higher-volatility copy profile for experienced users who understand the possibility of larger losses.",
    items: ["Broker-connected", "USD account support", "Higher volatility"],
    start: "alpha_profile",
  },
];

const services = [
  ["Expert Advisors", "MT5 automation tools with configurable execution and risk settings."],
  ["Precision Indicators", "TradingView tools for structure, momentum and liquidity analysis."],
  ["Trading Utilities", "Calculators, journals and execution-support dashboards."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top"><span>G</span><div><b>GENCOUV</b><small>TRADING TECHNOLOGY</small></div></a>
        <div className="links"><a href="#copy">How it works</a><a href="#profiles">Profiles</a><a href="#services">Services</a><a href="#faq">FAQ</a></div>
        <a className="navCta" href={`${telegram}?start=website`} target="_blank" rel="noreferrer">Open Telegram</a>
      </nav>

      <section id="top" className="hero shell">
        <div className="eyebrow">BROKER-CONNECTED COPY TRADING</div>
        <h1>Copy trading infrastructure.<br/><em>Your broker holds your funds.</em></h1>
        <p>Connect an eligible USD broker account, choose a risk profile and monitor copied activity directly from your broker platform.</p>
        <div className="heroActions"><a className="primary" href={`${telegram}?start=copy_trading`} target="_blank" rel="noreferrer">Start evaluation <span>↗</span></a><a className="secondary" href="#copy">How it works</a></div>
        <div className="trust"><span>Funds remain at your broker</span><span>No custody by Gencouv</span><span>Risk-based onboarding</span></div>

        <div className="terminal">
          <div className="terminalTop"><div className="brand mini"><span>G</span><div><b>GENCOUV</b><small>COPY CONTROL</small></div></div><div className="online"><i/>SYSTEM ONLINE</div></div>
          <div className="terminalGrid">
            <aside><b>Workspace</b><span className="active">Portfolio</span><span>Strategies</span><span>Risk Engine</span><span>Executions</span><span>Reports</span></aside>
            <div className="chartArea"><div className="chartHead"><div><small>Illustrative connected account</small><strong>$50,000.00</strong></div><span>USD</span></div><div className="chart"><div className="gridlines"/><svg viewBox="0 0 800 260" role="img" aria-label="Illustrative account line"><path className="area" d="M0 220 C70 210 100 185 155 192 S245 150 300 165 S390 118 455 130 S550 90 610 104 S710 55 800 72 L800 260 L0 260 Z"/><path className="line" d="M0 220 C70 210 100 185 155 192 S245 150 300 165 S390 118 455 130 S550 90 610 104 S710 55 800 72"/></svg></div><div className="chartMeta"><span>Currency <b>USD</b></span><span>Status <b>Connected</b></span><span>Controls <b>Active</b></span></div></div>
            <div className="metrics"><article><small>Broker connection</small><strong>Active</strong><span>Illustrative status</span></article><article><small>Selected profile</small><strong>Core</strong><span>Illustrative status</span></article><article><small>Fund custody</small><strong>Client</strong><span>Capital remains at broker</span></article></div>
          </div>
        </div>
      </section>

      <section id="copy" className="section shell split"><div><div className="eyebrow left">HOW IT WORKS</div><h2>Connect. Select. Monitor.</h2><p className="lead">Gencouv provides the strategy connection. The broker holds the account and processes copied trades.</p></div><div className="steps"><article><span>01</span><div><h3>Complete evaluation</h3><p>Share your experience, objectives and risk tolerance.</p></div></article><article><span>02</span><div><h3>Connect an eligible account</h3><p>Use a compatible USD broker account and retain withdrawal control.</p></div></article><article><span>03</span><div><h3>Select a profile</h3><p>Choose Core or Alpha according to suitability and risk tolerance.</p></div></article></div></section>

      <section id="profiles" className="band"><div className="shell"><div className="sectionHead"><div><div className="eyebrow left">COPY PROFILES</div><h2>Two risk approaches.</h2></div><p>Profile details are informational. Final terms and suitability are provided during onboarding.</p></div><div className="profileGrid">{profiles.map((profile) => <article className="profile" key={profile.name}><small>{profile.label}</small><h3>{profile.name}</h3><p>{profile.description}</p><div>{profile.items.map((item) => <span key={item}>✓ {item}</span>)}</div><a href={`${telegram}?start=${profile.start}`} target="_blank" rel="noreferrer">Review profile <b>↗</b></a></article>)}</div></div></section>

      <section id="services" className="section shell"><div className="sectionHead"><div><div className="eyebrow left">OTHER SERVICES</div><h2>Tools for systematic traders.</h2></div><p>These products are separate from the copy-trading service.</p></div><div className="serviceGrid">{services.map(([title, description], index) => <a className="service" href={`${telegram}?start=service_${index + 1}`} target="_blank" rel="noreferrer" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><b>Learn more ↗</b></a>)}</div></section>

      <section className="risk"><div className="shell riskGrid"><div><div className="eyebrow left">RISK NOTICE</div><h2>Trading can result in losses.</h2></div><p>Copy trading does not guarantee profit. Market conditions, broker execution and account changes can affect outcomes. Historical results do not guarantee future performance.</p></div></section>

      <section id="faq" className="section shell faq"><div><div className="eyebrow left">FAQ</div><h2>Clarity before connection.</h2></div><div>{[["Does Gencouv hold client funds?","No. Funds remain in the user's broker account."],["Are returns guaranteed?","No. Trading involves risk and losses are possible."],["Can users withdraw from their broker?","Yes, subject to broker terms. Withdrawals may affect copied positions or available margin."],["Are other products available separately?","Yes. Expert Advisors, indicators and trading utilities are separate services."]].map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>

      <section className="finalCta shell"><div className="eyebrow">TELEGRAM ONBOARDING</div><h2>Review suitability before connecting.</h2><p>Use the Telegram assistant to learn about account compatibility, profiles and risk.</p><a className="primary" href={`${telegram}?start=website_final`} target="_blank" rel="noreferrer">Open Telegram <span>↗</span></a></section>

      <footer className="footer shell"><div className="brand"><span>G</span><div><b>GENCOUV</b><small>TRADING TECHNOLOGY</small></div></div><p>Broker-connected copy trading and systematic trading tools.</p><div><a href="mailto:support@gencouv.com">support@gencouv.com</a><a href={telegram} target="_blank" rel="noreferrer">Telegram</a></div><small>© 2026 Gencouv. Trading involves risk. Historical performance does not guarantee future results.</small></footer>
    </main>
  );
}
