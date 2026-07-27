import Link from "next/link";
import { Logo } from "@/components/Logo";

const accounts = [
  { name: "A. Nwosu", source: "Telegram", interest: "Core Profile", stage: "Qualified", value: "$5,000" },
  { name: "M. Thompson", source: "Website", interest: "Alpha Profile", stage: "Evaluation", value: "$12,500" },
  { name: "F. Kareem", source: "Referral", interest: "Copy Trading", stage: "Connected", value: "$8,000" },
  { name: "D. Ross", source: "Telegram", interest: "Expert Advisor", stage: "Follow-up", value: "$2,500" },
];

export default function Dashboard() {
  return (
    <main className="dashboardPage">
      <aside className="dashSide">
        <Logo />
        <nav>
          <span className="active">Overview</span>
          <span>Copy Accounts</span>
          <span>Evaluations</span>
          <span>Connections</span>
          <span>Executions</span>
          <span>Risk Profiles</span>
          <span>Products</span>
          <span>Settings</span>
        </nav>
        <Link href="/">← Website</Link>
      </aside>

      <section className="dashMain">
        <header>
          <div><span className="kicker">COPY-TRADING OPERATIONS</span><h1>Gencouv Command Center</h1></div>
          <button type="button">+ New evaluation</button>
        </header>

        <div className="dashMetrics">
          <article><span>Connected capital</span><strong>$428,500</strong><small>Illustrative dashboard data</small></article>
          <article><span>Qualified accounts</span><strong>84</strong><small>12 added this month</small></article>
          <article><span>Active connections</span><strong>61</strong><small>72.6% qualification rate</small></article>
          <article><span>Client funds held</span><strong>$0</strong><small>Capital remains with brokers</small></article>
        </div>

        <div className="dashLayout">
          <article className="dashPanel wide">
            <div className="dashPanelHead"><h2>Connected capital</h2><span>Last 12 months · USD</span></div>
            <div className="bars">{[42, 64, 48, 78, 58, 88, 72, 96, 82, 110, 94, 128].map((height, index) => <i key={index} style={{ height: `${height}px` }} />)}</div>
            <div className="axis"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
          </article>

          <article className="dashPanel">
            <div className="dashPanelHead"><h2>System status</h2><span className="greenText">Operational</span></div>
            <div className="agentList">
              <div><i /><span>Copy engine</span><b>Online</b></div>
              <div><i /><span>Broker sync</span><b>Healthy</b></div>
              <div><i /><span>Risk monitoring</span><b>Enabled</b></div>
              <div><i /><span>Telegram onboarding</span><b>Active</b></div>
            </div>
          </article>

          <article className="dashPanel full">
            <div className="dashPanelHead"><h2>Recent evaluations</h2><button type="button">View all</button></div>
            <div className="leadTable">
              <div className="tr head"><span>Client</span><span>Source</span><span>Interest</span><span>Stage</span><span>Capital</span></div>
              {accounts.map((account) => (
                <div className="tr" key={account.name}>
                  <span><b>{account.name}</b><small>Suitability record</small></span>
                  <span>{account.source}</span>
                  <span>{account.interest}</span>
                  <span><em>{account.stage}</em></span>
                  <span>{account.value}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
