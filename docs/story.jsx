/* global React, ReactDOM */
/* Our Story — Peter & Al + the crew. Uses shared.jsx shell. */
const { StatBlock } = window.BelugaGalapagosDesignSystem_fd3494;

const YEARS = [
  { value: "20+", label: "Years off San Cristóbal" },
  { value: "2004", label: "Owner-operated since" },
  { value: "Private", label: "Charters only" },
  { value: "6", label: "Vessels in the fleet" },
];

function Page() {
  return (
    <Shell>
      <section className="hero hero--short">
        <img className="hero__img" src={IMG + "our-story/story-02.webp"} alt="Peter and Al, the founders of Sportfish Galápagos" />
        <div className="hero__scrim"></div>
        <div className="container hero__inner">
          <p className="eyebrow eyebrow--ondark">Our Story</p>
          <h1 className="hero__title">Peter &amp; Al</h1>
          <p className="hero__lead">
            Two friends, two decades, and one stretch of ocean they have come to know better than anyone.
          </p>
          <div className="hero__actions"><Button variant="primary" size="lg" onClick={openEnquire}>Book now</Button></div>
        </div>
        <div className="hero__scrollcue"><Ic n="chevron-down" /></div>
      </section>

      <section className="section bg-shell">
        <div className="container container--text reveal" style={{ textAlign: "center" }}>
          <p className="eyebrow">Owner-operated</p>
          <p className="bx-display-m" style={{ margin: ".4em 0 0" }}>
            Peter and Al came for the fishing and never quite left. Twenty years on, they run the
            boats, know the captains, and look after every guest by name.
          </p>
        </div>
      </section>

      <section className="section--tight bg-deep on-dark">
        <div className="container">
          <div className="proof reveal">
            {YEARS.map((y) => <StatBlock key={y.label} value={y.value} label={y.label} onDark />)}
          </div>
        </div>
      </section>

      <section className="section bg-shell">
        <div className="container">
          <div className="panel split reveal" style={{ background: "var(--c-white)" }}>
            <div className="split__media"><img src={IMG + "our-boats/boat-02.jpeg"} alt="A captain at the helm" /></div>
            <div className="split__body">
              <p className="eyebrow">The crew</p>
              <h2 className="sec-head__title" style={{ marginBottom: ".4em" }}>Local captains</h2>
              <p className="bx-body">
                Our captains are San Cristóbal men who have fished these waters their whole lives. They
                know where the marlin hold, how the season turns, and how to put you on fish.
              </p>
              <div style={{ marginTop: "var(--space-6)" }}>
                <Button variant="secondary" href="our-boats.html" iconRight={<Ic n="arrow-right" />}>Meet the fleet</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closer">
        <img className="closer__img" src={IMG + "our-story/story-02.webp"} alt="Peter and Al" />
        <div className="closer__scrim"></div>
        <div className="container closer__inner reveal">
          <p className="eyebrow eyebrow--ondark">Whenever you’re ready</p>
          <h2 className="closer__title">Let’s go fishing.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.92)", maxWidth: "52ch", margin: "var(--space-4) auto 0" }}>
            Come fish with the people who know these islands best.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap", marginTop: "var(--space-7)" }}>
            <Button variant="primary" size="lg" onClick={openEnquire}>Book now</Button>
            <Button variant="light" size="lg" href="https://wa.me/593000000000" iconLeft={<Ic n="message-circle" />}>WhatsApp a captain</Button>
          </div>
        </div>
      </section>
    </Shell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
