// HotelCompete — homepage components
const { useState, useEffect, useMemo } = React;

/* ------------------------------------------------------------------ */
/* Tiny inline icons (Lucide-flavored, 1.5px stroke)                  */
/* ------------------------------------------------------------------ */
const Icon = ({ name, size = 18, ...rest }) => {
  const paths = {
    arrow: "M5 12h14M13 6l6 6-6 6",
    arrowUp: "M7 17L17 7M9 7h8v8",
    arrowDown: "M17 7L7 17M7 9v8h8",
    chart: "M3 3v18h18M7 13v5M12 8v10M17 4v14",
    target: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 100 4 2 2 0 000-4z",
    bell: "M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9zM10 21a2 2 0 004 0",
    grid: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    map: "M9 4l-6 2v16l6-2 6 2 6-2V4l-6 2-6-2zM9 4v16M15 6v16",
    users: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M17 3.13a4 4 0 010 7.75",
    file: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M9 13h6M9 17h6",
    cog: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z",
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d={paths[name]} />
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* NAV                                                                */
/* ------------------------------------------------------------------ */
const Nav = () => (
  <nav className="nav">
    <div className="wrap nav__inner">
      <a className="nav__brand" href="#">
        <span className="nav__brand-mark">H</span>
        <span className="nav__brand-text">hotel<em>compete</em></span>
      </a>
      <div className="nav__links">
        <a className="nav__link" href="#how">How it works</a>
        <a className="nav__link" href="#product">Product</a>
        <a className="nav__link" href="#customers">Customers</a>
        <a className="nav__link" href="#pricing">Pricing</a>
        <a className="nav__link" href="#blog">Insights</a>
      </div>
      <div className="nav__cta">
        <a className="btn btn--ghost btn--small" href="#">Sign in</a>
        <a className="btn btn--primary btn--small" href="#cta">
          Book a demo <Icon name="arrow" size={14} />
        </a>
      </div>
    </div>
  </nav>
);

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
const compset = [
  { rank: 1, name: "Marriott Downtown",   tag: "FLAGSHIP",     price: 289, delta: -8,  isYou: false },
  { rank: 2, name: "Your Hotel",          tag: "PRIMARY",      price: 274, delta: +6,  isYou: true  },
  { rank: 3, name: "Hilton Garden Inn",   tag: "COMP",         price: 268, delta: 0,   isYou: false },
  { rank: 4, name: "Hyatt Place",         tag: "COMP",         price: 251, delta: +3,  isYou: false },
  { rank: 5, name: "Holiday Inn Express", tag: "COMP",         price: 219, delta: -12, isYou: false },
];

const HeroDashboard = ({ now }) => {
  const tick = Math.floor(now / 800);
  return (
    <div className="hpv">
      <div className="hpv__top">
        <span className="hpv__title">Live compset · Austin, TX</span>
        <span className="hpv__live">live · {String((tick % 60)).padStart(2, "0")}s</span>
      </div>
      <div className="hpv__market">
        <span className="hpv__market-name">Sat · Mar 14</span>
        <span className="hpv__market-tag">ADR · 5 of 14 properties</span>
      </div>
      <div className="hpv__market-sub">Updated <span className="mono">14:32 CT</span> · 142 rate-shops today</div>
      <div className="hpv__rates">
        {compset.map(r => (
          <div key={r.rank}
               className={`hpv__rate-row ${r.isYou ? "hpv__rate-row--you" : ""}`}>
            <span className="hpv__rate-rank">#{r.rank}</span>
            <span className="hpv__rate-name">
              {r.name} <small>{r.tag}</small>
            </span>
            <span className="hpv__rate-price">${r.price}</span>
            <span className={`hpv__rate-delta ${
              r.delta > 0 ? "delta-up" : r.delta < 0 ? "delta-down" : "delta-flat"
            }`}>
              {r.delta > 0 ? "▲" : r.delta < 0 ? "▼" : "·"} {Math.abs(r.delta) || 0}%
            </span>
          </div>
        ))}
      </div>
      <div className="hpv__chart">
        <div className="hpv__chart-top">
          <span className="hpv__chart-label">7-day occupancy forecast</span>
          <span className="hpv__chart-val"><span className="accent">87.4%</span> proj.</span>
        </div>
        <Sparkline />
      </div>
    </div>
  );
};

const Sparkline = () => {
  // Hand-tuned data
  const data = [62, 68, 71, 65, 74, 82, 87, 91, 88, 85, 89, 93, 87];
  const max = 100, min = 50;
  const w = 100, h = 36;
  const step = w / (data.length - 1);
  const pts = data.map((v, i) => [i * step, h - ((v - min) / (max - min)) * h]);
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `${path} L${w} ${h} L0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: 60, display: "block" }}>
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark)" />
      <path d={path} fill="none" stroke="var(--accent)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.8" fill="var(--accent)" />
      ))}
    </svg>
  );
};

const Hero = ({ eyebrow }) => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="wrap hero__grid">
        <div>
          <span className="hero__pill">
            <span className="hero__pill-dot"></span>
            {eyebrow}
          </span>
          <h1 className="h-hero hero__h1">
            Out-price.<br />
            Out-book.<br />
            <span className="serif-it accent">Outperform</span> your set.
          </h1>
          <p className="lead hero__lead">
            HotelCompete pulls live rates, occupancy, and demand signals
            from every property in your compset — then tells your team exactly
            what to do next.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#cta">
              Book a 20-min demo <Icon name="arrow" size={16} />
            </a>
            <a className="btn btn--ghost" href="#product">
              See the dashboard
            </a>
          </div>
          <div className="hero__stats">
            <div>
              <div className="hero__stat-num">+<span className="accent">9.4</span>%</div>
              <div className="hero__stat-label">Avg RevPAR lift</div>
            </div>
            <div>
              <div className="hero__stat-num">1,400<span className="accent">+</span></div>
              <div className="hero__stat-label">Properties tracked</div>
            </div>
            <div>
              <div className="hero__stat-num">14<span className="accent">m</span></div>
              <div className="hero__stat-label">Rate-shops / week</div>
            </div>
          </div>
        </div>
        <HeroDashboard now={now} />
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* TICKER                                                              */
/* ------------------------------------------------------------------ */
const tickerItems = [
  ["AUSTIN-TX",     "ADR $274",  "+6.2%", "up"],
  ["NASHVILLE-TN",  "ADR $231",  "-1.4%", "down"],
  ["DENVER-CO",     "ADR $198",  "+3.8%", "up"],
  ["MIAMI-FL",      "ADR $402",  "+11.1%","up"],
  ["CHICAGO-IL",    "ADR $189",  "+0.3%", "up"],
  ["SEATTLE-WA",    "ADR $245",  "-2.7%", "down"],
  ["BOSTON-MA",     "ADR $312",  "+4.4%", "up"],
  ["PORTLAND-OR",   "ADR $172",  "+1.1%", "up"],
  ["LAS-VEGAS-NV",  "ADR $268",  "-0.8%", "down"],
  ["NEW-YORK-NY",   "ADR $389",  "+5.6%", "up"],
];
const Ticker = () => {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" data-screen-label="02 Ticker">
      <div className="ticker__inner">
        {items.map((it, i) => (
          <span key={i} className="ticker__item">
            <strong>{it[0]}</strong>
            {it[1]}
            <span className={it[3] === "up" ? "delta-up" : "delta-down"}
                  style={{ padding: "2px 6px", borderRadius: 3, fontSize: 11 }}>
              {it[3] === "up" ? "▲" : "▼"} {it[2].replace(/[+-]/, "")}
            </span>
            <span className="ticker__sep"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* TRUST BAR                                                           */
/* ------------------------------------------------------------------ */
const Trust = () => (
  <section className="trust" data-screen-label="03 Trust">
    <div className="wrap">
      <div className="trust__label">
        <span className="eyebrow">Trusted by independents and the global brands</span>
      </div>
      <div className="trust__logos">
        <img className="trust__logo" src="assets/logo-hilton.png"   alt="Hilton" />
        <img className="trust__logo" src="assets/logo-ihg.png"      alt="IHG" />
        <img className="trust__logo" src="assets/logo-wyndham.png"  alt="Wyndham" />
        <img className="trust__logo" src="assets/logo-choice.png"   alt="Choice Hotels" />
        <img className="trust__logo" src="assets/logo-laquinta.png" alt="La Quinta" />
        <img className="trust__logo" src="assets/logo-hccl.png"     alt="HCCL Lodging" />
        <img className="trust__logo" src="assets/logo-ljm.png"      alt="LJM" />
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* PROCESS                                                             */
/* ------------------------------------------------------------------ */
const ProcessGlyphData = () => (
  <svg viewBox="0 0 200 100" style={{ width: "100%", height: "100%" }}>
    <g fontFamily="JetBrains Mono" fontSize="8" fill="var(--accent)">
      <text x="14" y="22">01101101</text>
      <text x="14" y="38">10010110</text>
      <text x="14" y="54">11010011</text>
      <text x="14" y="70">01101001</text>
    </g>
    <g stroke="var(--border-strong)" strokeWidth="1" fill="none">
      <rect x="105" y="14" width="80" height="68" rx="2" />
      <line x1="105" y1="28" x2="185" y2="28" />
      <circle cx="113" cy="21" r="1.5" fill="var(--bone-3)" />
      <circle cx="119" cy="21" r="1.5" fill="var(--bone-3)" />
      <rect x="113" y="36" width="30" height="40" fill="var(--accent-soft)" stroke="none" />
      <rect x="147" y="46" width="30" height="30" fill="var(--teal-soft)" stroke="none" />
      <line x1="113" y1="76" x2="177" y2="76" stroke="var(--bone-3)" />
    </g>
  </svg>
);

const ProcessGlyphInsight = () => (
  <svg viewBox="0 0 200 100" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--accent)" />
        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <g>
      <line x1="20" y1="80" x2="180" y2="80" stroke="var(--border-strong)" strokeWidth="1" />
      {[
        [30, 50], [55, 30], [80, 42], [105, 18], [130, 38], [155, 25]
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="14" height={80 - y} fill="url(#bar1)" />
      ))}
      <text x="20" y="14" fontFamily="JetBrains Mono" fontSize="7" fill="var(--bone-2)" letterSpacing="1">
        REVPAR · 7-DAY
      </text>
      <text x="170" y="14" fontFamily="JetBrains Mono" fontSize="7" fill="var(--up)" textAnchor="end">
        +9.4%
      </text>
    </g>
  </svg>
);

const ProcessGlyphAct = () => (
  <svg viewBox="0 0 200 100" style={{ width: "100%", height: "100%" }}>
    <g stroke="var(--accent)" strokeWidth="1.2" fill="none">
      <circle cx="100" cy="50" r="34" />
      <circle cx="100" cy="50" r="22" />
      <circle cx="100" cy="50" r="10" fill="var(--accent-soft)" />
    </g>
    <line x1="40" y1="50" x2="98" y2="50" stroke="var(--bone)" strokeWidth="1" />
    <polygon points="92,46 102,50 92,54" fill="var(--bone)" />
    <text x="150" y="46" fontFamily="JetBrains Mono" fontSize="8" fill="var(--accent)">
      RATE +$24
    </text>
    <text x="150" y="58" fontFamily="JetBrains Mono" fontSize="8" fill="var(--bone-2)">
      WED 14-21
    </text>
  </svg>
);

const Process = () => (
  <section id="how" className="section proc" data-screen-label="04 Process">
    <div className="wrap">
      <div className="proc__head">
        <div>
          <span className="eyebrow">How it works</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            From <span className="serif-it">raw signal</span> to revenue,<br />
            in three moves.
          </h2>
        </div>
        <p className="lead">
          We replaced the old "weekly STR report" workflow with a continuous loop:
          shop, surface, act. Your revenue manager spends less time wrangling spreadsheets
          and more time making calls.
        </p>
      </div>
      <div className="proc__steps">
        <div className="proc__step">
          <div className="proc__step-num">
            <span>01 — Shop</span>
            <Icon name="grid" size={14} />
          </div>
          <div className="proc__step-glyph"><ProcessGlyphData /></div>
          <h3>Pull every signal that matters.</h3>
          <p>
            We rate-shop your compset across OTAs, direct sites, and GDS every 30
            minutes. Stack it with demand, events, weather, flight data and STR comp data.
          </p>
        </div>
        <div className="proc__step">
          <div className="proc__step-num">
            <span>02 — Surface</span>
            <Icon name="chart" size={14} />
          </div>
          <div className="proc__step-glyph"><ProcessGlyphInsight /></div>
          <h3>Translate it into the one chart you'll open daily.</h3>
          <p>
            One dashboard. Three KPIs your GM cares about. Anomalies surface
            themselves — no more hunting through 14 tabs to find why ADR moved.
          </p>
        </div>
        <div className="proc__step">
          <div className="proc__step-num">
            <span>03 — Act</span>
            <Icon name="target" size={14} />
          </div>
          <div className="proc__step-glyph"><ProcessGlyphAct /></div>
          <h3>Get the move, not the chart.</h3>
          <p>
            Every alert ends with an action: drop the rate, open the LOS,
            email the corporate buyer. Push to your PMS in one click — or schedule it.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* FEATURES                                                            */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: "bell",
    title: "Rate shopping, every 30 minutes",
    body: "Compset rates from Booking, Expedia, brand.com, Hotels.com, GDS — refreshed continuously, surfaced as deltas, not raw numbers.",
  },
  {
    icon: "chart",
    title: "Forecast you can defend to ownership",
    body: "Pickup, pace, and demand modeled against a five-year baseline. Show your asset manager why you held a $310 BAR through Thursday.",
  },
  {
    icon: "map",
    title: "Market intel, in plain English",
    body: "Convention pickup, flight load factors, weather, and short-term-rental supply, all merged into one weekly market brief. No more 14 PDFs.",
  },
  {
    icon: "users",
    title: "Built for revenue teams, not analysts",
    body: "Comments, mentions, and PMS push live next to the data. Your DOSM and your GM are looking at the same screen for the first time.",
  },
];

const Features = () => (
  <section id="product" className="section feat" data-screen-label="05 Features">
    <div className="wrap">
      <div className="feat__head">
        <span className="eyebrow">The product</span>
        <h2 className="h-1" style={{ marginTop: 16 }}>
          A single source of <span className="serif-it">truth</span><br />
          for compset and rate strategy.
        </h2>
      </div>
      <div className="feat__grid">
        {features.map(f => (
          <div className="feat__card" key={f.title}>
            <div className="feat__icon"><Icon name={f.icon} size={28} /></div>
            <div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* DASHBOARD PREVIEW                                                   */
/* ------------------------------------------------------------------ */
const DashChart = () => {
  // Two-series line chart
  const w = 720, h = 220, pad = 24;
  const days = 14;
  const you  = [240, 248, 252, 258, 256, 261, 274, 282, 278, 285, 289, 294, 291, 298];
  const comp = [262, 268, 270, 272, 268, 270, 280, 284, 286, 281, 285, 288, 282, 290];
  const all  = [...you, ...comp];
  const min = Math.min(...all) - 8;
  const max = Math.max(...all) + 8;
  const sx = i => pad + (i / (days - 1)) * (w - pad * 2);
  const sy = v => pad + (1 - (v - min) / (max - min)) * (h - pad * 2);
  const toPath = arr => arr.map((v, i) => `${i === 0 ? "M" : "L"}${sx(i).toFixed(1)} ${sy(v).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="youFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* gridlines */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={pad} x2={w - pad} y1={pad + t * (h - pad * 2)} y2={pad + t * (h - pad * 2)}
              stroke="var(--border)" strokeWidth="1" />
      ))}
      {/* x labels */}
      {[0, 4, 8, 13].map(i => (
        <text key={i} x={sx(i)} y={h - 6} fontFamily="JetBrains Mono"
              fontSize="9" fill="var(--bone-3)" textAnchor="middle">
          {`MAR ${10 + i}`}
        </text>
      ))}
      {/* comp line */}
      <path d={toPath(comp)} fill="none" stroke="var(--bone-2)" strokeWidth="1.4"
            strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
      {/* you line */}
      <path d={`${toPath(you)} L${sx(days - 1)} ${h - pad} L${pad} ${h - pad} Z`} fill="url(#youFill)" />
      <path d={toPath(you)} fill="none" stroke="var(--accent)" strokeWidth="2"
            vectorEffect="non-scaling-stroke" />
      {/* end markers */}
      <circle cx={sx(days - 1)} cy={sy(you[days - 1])} r="4" fill="var(--accent)" />
      <circle cx={sx(days - 1)} cy={sy(comp[days - 1])} r="3" fill="var(--bone-2)" />
      {/* annotation */}
      <g transform={`translate(${sx(days - 1) - 110}, ${sy(you[days - 1]) - 32})`}>
        <rect x="0" y="0" width="100" height="22" rx="3" fill="var(--ink-2)" stroke="var(--border-accent)" />
        <text x="50" y="14" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="var(--accent)">
          ADR $298 · +6%
        </text>
      </g>
    </svg>
  );
};

const Dashboard = () => (
  <section className="section" data-screen-label="06 Dashboard">
    <div className="wrap">
      <div className="dash__head">
        <div>
          <span className="eyebrow">The dashboard</span>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            Built for the <span className="serif-it">9am stand-up</span>.
          </h2>
        </div>
        <p className="lead">
          The HotelCompete dashboard answers the three questions every revenue
          team is asked daily — without a single Excel file. Designed with revenue
          managers from 40+ properties.
        </p>
      </div>
      <div className="dash__frame">
        <div className="dash__chrome">
          <div className="dash__dot" style={{ background: "#ff5e55" }}></div>
          <div className="dash__dot" style={{ background: "#ffbd2e" }}></div>
          <div className="dash__dot" style={{ background: "#28c93e" }}></div>
          <div className="dash__addr">app.hotelcompete.com / portfolio / austin-flagship</div>
          <Icon name="cog" size={14} style={{ color: "var(--bone-3)" }} />
        </div>
        <div className="dash__body">
          <aside className="dash__side">
            <div className="dash__sidebrand">
              <span className="nav__brand-mark" style={{ width: 24, height: 24, fontSize: 12 }}>H</span>
              hotelcompete
            </div>
            <div className="dash__sidesec">Workspace</div>
            <div className="dash__sideitem dash__sideitem--active">
              <Icon name="chart" size={16} /> Overview
            </div>
            <div className="dash__sideitem">
              <Icon name="grid" size={16} /> Compset
            </div>
            <div className="dash__sideitem">
              <Icon name="map" size={16} /> Market
            </div>
            <div className="dash__sideitem">
              <Icon name="target" size={16} /> Forecast
            </div>
            <div className="dash__sidesec">Reports</div>
            <div className="dash__sideitem">
              <Icon name="file" size={16} /> Weekly brief
            </div>
            <div className="dash__sideitem">
              <Icon name="file" size={16} /> Pickup pace
            </div>
            <div className="dash__sideitem">
              <Icon name="bell" size={16} /> Alerts <span style={{ marginLeft: "auto", background: "var(--accent)", color: "var(--teal-deep)", borderRadius: 999, padding: "1px 7px", fontSize: 10, fontWeight: 600 }}>4</span>
            </div>
          </aside>
          <div className="dash__main">
            <div className="dash__mainhead">
              <div>
                <div className="dash__crumb">Portfolio · Austin Flagship</div>
                <div className="dash__title">RevPAR vs compset — 14 days</div>
              </div>
              <div className="dash__dates">
                <span className="dash__pill">7D</span>
                <span className="dash__pill dash__pill--on">14D</span>
                <span className="dash__pill">30D</span>
                <span className="dash__pill">90D</span>
              </div>
            </div>
            <div className="dash__kpis">
              {[
                { l: "ADR", v: "$274", d: "+6.2%", up: true },
                { l: "Occupancy", v: "87.4%", d: "+3.1pp", up: true },
                { l: "RevPAR", v: "$239", d: "+9.4%", up: true },
                { l: "Index vs comp", v: "108.6", d: "-1.2", up: false },
              ].map(k => (
                <div className="dash__kpi" key={k.l}>
                  <div className="dash__kpi-label">{k.l}</div>
                  <div className="dash__kpi-val">{k.v}</div>
                  <div className={`dash__kpi-delta ${k.up ? "up" : "down"}`}>
                    {k.up ? "▲" : "▼"} {k.d}
                  </div>
                </div>
              ))}
            </div>
            <div className="dash__chartbox">
              <div className="dash__chartbox-top">
                <span className="dash__chart-label" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--bone-2)" }}>
                  ADR · you vs compset median
                </span>
                <div className="dash__legend">
                  <span className="dash__legend-item">
                    <span className="dash__legend-dot" style={{ background: "var(--accent)" }}></span>
                    Your hotel
                  </span>
                  <span className="dash__legend-item">
                    <span className="dash__legend-dot" style={{ background: "var(--bone-2)" }}></span>
                    Compset
                  </span>
                </div>
              </div>
              <DashChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* INSIGHT / TESTIMONIAL                                               */
/* ------------------------------------------------------------------ */
const Insight = () => (
  <section id="customers" className="section" data-screen-label="07 Customer">
    <div className="wrap insight">
      <div>
        <span className="eyebrow">Customer story</span>
        <p className="insight__quote" style={{ marginTop: 20 }}>
          We used to rate-shop our compset by hand every Monday.
          Now HotelCompete tells us what to do before the GM finishes
          his coffee. <span className="accent">RevPAR up 11%</span> in two quarters.
        </p>
        <div className="insight__by">
          <div className="insight__avatar"></div>
          <div>
            <div className="insight__byname">Priya Anand</div>
            <div className="insight__byrole">Director of Revenue · Crestline Hotels</div>
          </div>
        </div>
      </div>
      <div className="insight__card">
        <div className="insight__card-label">Q3 → Q1 results · 14 properties</div>
        <h3 className="h-3" style={{ marginBottom: 4 }}>
          Crestline Lodging portfolio
        </h3>
        <p className="dim" style={{ fontSize: 14, marginBottom: 12 }}>
          Independent select-service group, 14 hotels across the Southeast US.
        </p>
        <div className="insight__statgrid">
          <div className="insight__stat">
            <div className="insight__stat-num"><span className="accent">+11</span>%</div>
            <div className="insight__stat-label">RevPAR</div>
          </div>
          <div className="insight__stat">
            <div className="insight__stat-num"><span className="accent">-62</span>%</div>
            <div className="insight__stat-label">Time on report-prep</div>
          </div>
          <div className="insight__stat">
            <div className="insight__stat-num"><span className="accent">+4.3</span>pp</div>
            <div className="insight__stat-label">Occupancy</div>
          </div>
          <div className="insight__stat">
            <div className="insight__stat-num"><span className="accent">7</span>×</div>
            <div className="insight__stat-label">Rate decisions / week</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* PRICING                                                             */
/* ------------------------------------------------------------------ */
const tiers = [
  {
    name: "Independent",
    desc: "Single-property revenue teams.",
    price: "$390",
    suffix: "/ property / mo",
    feats: [
      "Hourly rate shop · 8 comp properties",
      "ADR · Occupancy · RevPAR dashboard",
      "Weekly market brief",
      "Email & Slack alerts",
    ],
  },
  {
    name: "Portfolio",
    desc: "Multi-property groups, 5–50 hotels.",
    price: "$290",
    suffix: "/ property / mo",
    featured: true,
    feats: [
      "Everything in Independent",
      "Portfolio rollup & cross-property compset",
      "Demand & event ingestion · short-term-rental supply",
      "PMS push: Opera, Mews, Cloudbeds, StayNTouch",
      "Dedicated revenue strategist (2 hrs/mo)",
    ],
  },
  {
    name: "Enterprise",
    desc: "Brands, REITs, and management cos.",
    price: "Custom",
    suffix: "annual contract",
    feats: [
      "Everything in Portfolio",
      "SSO, audit log, role-based permissions",
      "White-label dashboards for owners",
      "Custom data sources & API access",
      "On-site quarterly business reviews",
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="section pricing" data-screen-label="08 Pricing">
    <div className="wrap">
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <span className="eyebrow">Pricing</span>
      </div>
      <h2 className="h-1" style={{ textAlign: "center", margin: "16px auto 16px", maxWidth: "16ch" }}>
        Priced per property.<br />
        <span className="serif-it">No</span> per-seat fees.
      </h2>
      <p className="lead" style={{ margin: "0 auto", textAlign: "center" }}>
        Every plan includes unlimited users, all integrations, and our standard
        compset of up to 8 properties. Annual billing saves 12%.
      </p>
      <div className="pricing__grid">
        {tiers.map(t => (
          <div key={t.name} className={`pricing__card ${t.featured ? "pricing__card--featured" : ""}`}>
            {t.featured && <span className="pricing__tag">Most popular</span>}
            <div className="pricing__name">{t.name}</div>
            <div className="pricing__desc">{t.desc}</div>
            <div className="pricing__price">
              <span className="pricing__price-num">{t.price}</span>
              <span className="pricing__price-suffix">{t.suffix}</span>
            </div>
            <ul className="pricing__feats">
              {t.feats.map(f => <li className="pricing__feat" key={f}>{f}</li>)}
            </ul>
            <a className={t.featured ? "btn btn--primary" : "btn btn--ghost"} href="#cta">
              {t.featured ? "Start a pilot" : "Talk to sales"} <Icon name="arrow" size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* CTA                                                                 */
/* ------------------------------------------------------------------ */
const CTA = () => (
  <section id="cta" className="cta" data-screen-label="09 CTA">
    <div className="wrap cta__inner">
      <span className="eyebrow" style={{ marginBottom: 24 }}>Book a demo</span>
      <h2 className="h-1" style={{ marginTop: 24 }}>
        See your <span className="serif-it accent">compset</span> in 20 minutes.
      </h2>
      <p className="lead">
        We'll pull live rate data for your real properties and walk you through
        the moves we'd make this week. No slide deck.
      </p>
      <div className="cta__buttons">
        <a className="btn btn--primary" href="#">
          Book a demo <Icon name="arrow" size={16} />
        </a>
        <a className="btn btn--ghost" href="#">
          Email a sales engineer
        </a>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */
const Footer = () => (
  <footer className="footer" data-screen-label="10 Footer">
    <div className="wrap">
      <div className="footer__grid">
        <div>
          <div className="footer__brand">
            <span className="nav__brand-mark">H</span>
            <span>hotel<em style={{ fontStyle: "normal", color: "var(--accent)" }}>compete</em></span>
          </div>
          <p className="footer__about">
            Compset intelligence & revenue strategy software for independent hotels
            and global brands. Built in Austin since 2017.
          </p>
        </div>
        <div className="footer__col">
          <div className="footer__colhead">Product</div>
          <ul>
            <li><a href="#">Rate shop</a></li>
            <li><a href="#">Market intel</a></li>
            <li><a href="#">Forecast</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__colhead">Company</div>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__colhead">Resources</div>
          <ul>
            <li><a href="#">Revenue blog</a></li>
            <li><a href="#">2026 ADR report</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Trust & security</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div>© 2026 HotelCompete, Inc. · SOC 2 Type II · made in Austin TX</div>
        <div className="footer__bottom-right">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">DPA</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */
/* TWEAKS                                                              */
/* ------------------------------------------------------------------ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "champagne",
  "showTicker": true,
  "heroEyebrow": "Spring '26 · Compset Engine 2.0 — out now"
}/*EDITMODE-END*/;

const Tweaks = ({ t, setTweak }) => (
  <window.TweaksPanel title="Tweaks">
    <window.TweakSection title="Theme">
      <window.TweakRadio
        label="Mode"
        value={t.theme}
        onChange={v => setTweak("theme", v)}
        options={[
          { value: "dark",  label: "Dark teal" },
          { value: "paper", label: "Paper" },
        ]}
      />
      <window.TweakRadio
        label="Accent"
        value={t.accent}
        onChange={v => setTweak("accent", v)}
        options={[
          { value: "champagne", label: "Champagne" },
          { value: "lime",      label: "Lime" },
          { value: "coral",     label: "Coral" },
        ]}
      />
    </window.TweakSection>
    <window.TweakSection title="Sections">
      <window.TweakToggle
        label="Live market ticker"
        value={t.showTicker}
        onChange={v => setTweak("showTicker", v)}
      />
      <window.TweakText
        label="Hero eyebrow"
        value={t.heroEyebrow}
        onChange={v => setTweak("heroEyebrow", v)}
      />
    </window.TweakSection>
  </window.TweaksPanel>
);

/* ------------------------------------------------------------------ */
/* APP                                                                 */
/* ------------------------------------------------------------------ */
const App = () => {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
    document.documentElement.setAttribute("data-accent", t.accent);
  }, [t.theme, t.accent]);

  return (
    <>
      <Nav />
      <Hero eyebrow={t.heroEyebrow} />
      {t.showTicker && <Ticker />}
      <Trust />
      <Process />
      <Features />
      <Dashboard />
      <Insight />
      <Pricing />
      <CTA />
      <Footer />
      <Tweaks t={t} setTweak={setTweak} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
