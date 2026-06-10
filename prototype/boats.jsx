/* global React, ReactDOM */
/* Our Boats — the fleet. Uses shared.jsx shell. */
const { Tag } = window.BelugaGalapagosDesignSystem_fd3494;

const FLEET = [
  { src: "fleet/vertigo-i.png", name: "Vertigo I" },
  { src: "fleet/alya.png", name: "Alya" },
  { src: "fleet/yualka-ii.png", name: "Yualka II" },
  { src: "fleet/patricia.png", name: "Patricia" },
  { src: "fleet/vertigo-ii.png", name: "Vertigo II" },
];

function Page() {
  return (
    <Shell>
      <section className="hero hero--short">
        <img className="hero__img" src={IMG + "our-boats/boat-01.jpeg"} alt="A Sportfish Galápagos vessel in the harbour" />
        <div className="hero__scrim"></div>
        <div className="container hero__inner">
          <p className="eyebrow eyebrow--ondark">The Fleet</p>
          <h1 className="hero__title">Six vessels, one standard</h1>
          <p className="hero__lead">
            A named fleet of sportfishers and one sister catamaran — each maintained, rigged and
            captained to the same standard, whether you fish for a day or cruise the islands for a week.
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="lg" onClick={openEnquire}>Book now</Button>
            <Button variant="light" size="lg" href="index.html#fleet" iconRight={<Ic n="arrow-right" />}>Back to home</Button>
          </div>
        </div>
        <div className="hero__scrollcue"><Ic n="chevron-down" /></div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: "var(--space-2)" }}>
            <div>
              <p className="eyebrow">Sportfishers</p>
              <h2 className="sec-head__title">The boats, by name</h2>
            </div>
            <p className="sec-head__intro muted bx-body" style={{ margin: 0 }}>
              Rigged with proven offshore tackle — Shimano Talica 50II reels among it.
            </p>
          </div>
          <div className="fleetgrid reveal">
            {FLEET.map((f, i) => (
              <figure className="wall__cell" key={i}><img src={f.src} alt={f.name} /></figure>
            ))}
          </div>
        </div>
      </section>

      <section id="alya" className="bg-deep on-dark">
        <div className="split reveal">
          <div className="split__media"><img src={IMG + "island-expeditions/alya-catamaran.jpg"} alt="MY Alya, the sister catamaran" /></div>
          <div className="split__body">
            <p className="eyebrow eyebrow--ondark">The sistership</p>
            <h2 className="sec-head__title" style={{ color: "var(--c-white)", marginBottom: ".4em" }}>MY Alya</h2>
            <p className="bx-body" style={{ color: "var(--text-on-dark)" }}>
              Our sister catamaran sleeps up to sixteen — the boat for a family or a group who want to
              travel and fish together, on multi-day expeditions to the outer islands.
            </p>
            <div className="chips">
              <Tag variant="sand">Up to 16 guests</Tag>
              <Tag variant="sand">Catamaran</Tag>
              <Tag variant="coral">Multi-day</Tag>
            </div>
            <div style={{ marginTop: "var(--space-6)" }}>
              <Button variant="light" onClick={openEnquire} iconRight={<Ic n="arrow-right" />}>Enquire about MY Alya</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-shell">
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: "var(--space-6)" }}>
            <div>
              <p className="eyebrow">The Gear</p>
              <h2 className="sec-head__title">Rigged and ready</h2>
            </div>
            <p className="sec-head__intro muted bx-body" style={{ margin: 0 }}>
              Cleaned and rigged before you board. Bring sunscreen and a camera; we handle the rest.
            </p>
          </div>
          <div className="grid-2 reveal">
            <figure className="gearshot"><img src={IMG + "our-gear/Gear-01.webp"} alt="Offshore tackle aboard" /></figure>
            <figure className="gearshot"><img src={IMG + "our-gear/Gear-02.webp"} alt="Rigged rods and reels" /></figure>
          </div>
        </div>
      </section>

      <section className="closer">
        <img className="closer__img" src={IMG + "our-boats/boat-03.jpeg"} alt="A vessel underway" />
        <div className="closer__scrim"></div>
        <div className="container closer__inner reveal">
          <p className="eyebrow eyebrow--ondark">Whenever you’re ready</p>
          <h2 className="closer__title">Let’s go fishing.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.92)", maxWidth: "52ch", margin: "var(--space-4) auto 0" }}>
            Tell us your dates and party size and we’ll match you to the right boat.
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
