import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MarketChart } from "@/components/MarketChart";
import { TestimonialCard } from "@/components/TestimonialCard";

const telegram = "https://t.me/Gencou_bot";
const services = [
  {k:"01",title:"Copy Trading",text:"Connect an eligible broker account and mirror systematic strategies while your funds remain under your control.",meta:"Alpha & Core profiles",href:`${telegram}?start=copy_trading`},
  {k:"02",title:"Expert Advisors",text:"Deploy algorithmic trading systems with risk controls, execution logic and configurable strategy settings.",meta:"MT5 automation suite",href:`${telegram}?start=ea`},
  {k:"03",title:"Precision Indicators",text:"Turn market structure, momentum and liquidity conditions into clean decision-support signals.",meta:"TradingView tools",href:`${telegram}?start=indicator`},
  {k:"04",title:"Trading Utilities",text:"Access calculators, journals, dashboards, alerts and supporting tools built for disciplined execution.",meta:"Operator toolset",href:`${telegram}?start=tools`},
];
const testimonials=[
  {name:"Adaeze N.",role:"Investor, Lagos",quote:"The onboarding was clear, the risk profile was explained properly, and I could monitor everything from my own broker account.",avatar:"/avatars/ada.svg",accent:"#2fe6a6"},
  {name:"Marcus T.",role:"Business Owner, London",quote:"Gencouv feels like technology infrastructure rather than another noisy trading offer. That difference matters.",avatar:"/avatars/marcus.svg",accent:"#68a8ff"},
  {name:"Fatima K.",role:"Analyst, Abuja",quote:"The indicator suite helped me simplify my execution process and focus on quality setups instead of chasing every move.",avatar:"/avatars/fatima.svg",accent:"#d9b56f"},
  {name:"Daniel R.",role:"EA Client, Toronto",quote:"Setup was straightforward and the support team actually understood the technical questions I asked.",avatar:"/avatars/daniel.svg",accent:"#bc86ff"}
];
export default function Home(){return <main>
  <nav className="topNav shell"><Logo/><div className="navLinks"><a href="#technology">Technology</a><a href="#services">Products</a><a href="#performance">Performance</a><a href="#proof">Proof</a><a href="#faq">FAQ</a></div><Link className="ghostButton" href="/dashboard">Sales Dashboard</Link></nav>

  <section className="hero shell">
    <div className="eyebrow"><span></span> SYSTEMATIC TRADING INFRASTRUCTURE</div>
    <h1>Take control of your<br/><em>trading technology.</em></h1>
    <p>Copy trading, expert advisors, precision indicators and operator tools engineered for modern markets.</p>
    <div className="heroActions"><a className="primaryButton" href={`${telegram}?start=general`} target="_blank">Begin Evaluation <b>↗</b></a><a className="textLink" href="#services">Explore technology</a></div>
    <div className="trustLine"><div className="faces"><img src="/avatars/ada.svg" alt=""/><img src="/avatars/marcus.svg" alt=""/><img src="/avatars/fatima.svg" alt=""/></div><span>Trusted by traders and investors across multiple markets</span></div>

    <div className="platformFrame">
      <div className="platformBar"><Logo/><div className="live"><i></i> Systems operational</div></div>
      <div className="platformGrid">
        <aside className="miniSidebar"><b>Command</b><span className="active">Overview</span><span>Strategies</span><span>Executions</span><span>Risk engine</span><span>Analytics</span><div className="sideStatus">AI ENGINE<strong>ONLINE</strong></div></aside>
        <div className="chartPanel"><div className="panelTitle"><div><span>Portfolio intelligence</span><strong>₦387,420,000</strong></div><div className="metricUp">+8.42%</div></div><MarketChart/><div className="chartStats"><span>Execution latency <b>42ms</b></span><span>Active strategies <b>06</b></span><span>Risk mode <b>Protected</b></span></div></div>
        <div className="rightStack"><div className="dataCard"><span>Automation uptime</span><strong>99.97%</strong><small>30-day average</small></div><div className="dataCard"><span>Broker connections</span><strong>128</strong><small>Securely synchronized</small></div><div className="dataCard signal"><span>Signal confidence</span><strong>87%</strong><div><i style={{width:"87%"}}></i></div></div></div>
      </div>
    </div>
  </section>

  <section className="statement shell"><p>Precision, transparency and disciplined automation for traders who prefer infrastructure over noise.</p></section>

  <section id="services" className="section shell"><div className="sectionHead"><div><span className="kicker">GENCOUV PRODUCTS</span><h2>A complete trading ecosystem.</h2></div><p>Each product operates independently and connects through one coherent onboarding experience.</p></div><div className="serviceGrid">{services.map(s=><a href={s.href} target="_blank" className="serviceCard" key={s.k}><span className="serviceNumber">{s.k}</span><div className="serviceIcon">⌁</div><h3>{s.title}</h3><p>{s.text}</p><footer><span>{s.meta}</span><b>↗</b></footer></a>)}</div></section>

  <section id="technology" className="techBand"><div className="shell techGrid"><div><span className="kicker">ENGINEERING FIRST</span><h2>Built like a trading system.<br/>Presented like a premium product.</h2><p>Gencouv combines execution automation, risk controls, broker connectivity and intelligent onboarding without taking custody of client funds.</p><div className="checks"><span>✓ Broker-controlled capital</span><span>✓ Configurable risk profiles</span><span>✓ Telegram AI onboarding</span><span>✓ Transparent performance records</span></div></div><div className="networkCard"><div className="orbit o1"></div><div className="orbit o2"></div><div className="core">G</div><span className="node n1">Signals</span><span className="node n2">Risk</span><span className="node n3">Broker</span><span className="node n4">Analytics</span></div></div></section>

  <section id="performance" className="section shell"><div className="sectionHead"><div><span className="kicker">SYSTEM PERFORMANCE</span><h2>Track what matters.</h2></div><p>Use audited dashboard data in production. The figures below are interface placeholders until connected to Supabase.</p></div><div className="performanceGrid"><div><strong>195.2%</strong><span>Featured strategy ROI</span></div><div><strong>38 min</strong><span>Average holding time</span></div><div><strong>37.2</strong><span>Trades per week</span></div><div><strong>24/5</strong><span>Automation monitoring</span></div></div></section>

  <section id="proof" className="section shell"><div className="sectionHead"><div><span className="kicker">CLIENT EXPERIENCES</span><h2>Evidence over promises.</h2></div><p>Replace these sample profiles with approved client photographs and verified statements before launch.</p></div><div className="testimonials">{testimonials.map(t=><TestimonialCard key={t.name} {...t}/>)}</div></section>

  <section id="faq" className="section shell faq"><div><span className="kicker">COMMON QUESTIONS</span><h2>Clarity before access.</h2></div><div className="faqList"><details open><summary>Does Gencouv hold client funds?</summary><p>No. Client capital remains in the client’s broker account. Gencouv provides technology and connectivity, not custody.</p></details><details><summary>How does copy trading onboarding work?</summary><p>The Telegram agent collects your goals, experience, broker information and risk preference, then routes you to the appropriate evaluation path.</p></details><details><summary>Can I buy an EA or indicator separately?</summary><p>Yes. Expert advisors, indicators and other trading utilities can be accessed independently.</p></details><details><summary>Are returns guaranteed?</summary><p>No. Trading involves risk, and historical performance does not guarantee future outcomes.</p></details></div></section>

  <section className="cta shell"><span className="kicker">PRIVATE ACCESS</span><h2>Build a more systematic trading operation.</h2><p>Start with the Gencouv Telegram evaluation assistant.</p><a className="primaryButton" href={`${telegram}?start=general`} target="_blank">Begin Evaluation <b>↗</b></a></section>

  <footer className="footer shell"><Logo/><p>Professional trading technology for modern markets.</p><div><a href="mailto:support@gencouv.com">support@gencouv.com</a><a href={telegram}>Telegram</a><Link href="/dashboard">Dashboard</Link></div><small>© 2026 Gencouv. Trading involves risk. Historical performance does not guarantee future results.</small></footer>
</main>}
