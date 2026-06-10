/* global React, ReactDOM */
/* Accommodations — vetted lodges, arranged. Uses shared.jsx shell. */

const LODGE = [
  "accommodations/accomodation-gal-img-01.webp",
  "accommodations/accomodation-gal-img-07.webp",
  "accommodations/accomodation-gal-img-02.webp",
  "accommodations/accomodation-gal-img-08.webp",
  "accommodations/accomodation-gal-img-03.webp",
  "accommodations/accomodation-gal-img-09.webp",
  "accommodations/accomodation-gal-img-04.webp",
  "accommodations/san-cristobal-hotels.webp",
];

function Page() {
  return (
    <Shell>
      <section className="hero hero--short">
        <img className="hero__img" src={IMG + "accommodations/accomodation-hero-img.webp"} alt="A lodge on San Cristóbal, Galápagos" />
        <div className="hero__scrim"></div>
        <div className="container hero__inner">
          <p className="eyebrow eyebrow--ondark">Accommodations</p>
          <h1 className="hero__title">Where you stay</h1>
          <p className="hero__lead">
            We don’t run a hotel — we arrange the island’s best rooms for you. Vetted partners we know
            and trust, booked on your behalf, so everything ashore is handled before you arrive.
          </p>
          <div className="hero__actions"><Button variant="primary" size="lg" onClick={openEnquire}>Book now</Button></div>
        </div>
        <div className="hero__scrollcue"><Ic n="chevron-down" /></div>
      </section>

      <section className="section bg-shell">
        <div className="container container--text reveal" style={{ textAlign: "center" }}>
          <p className="eyebrow">On San Cristóbal</p>
          <p className="bx-display-m" style={{ margin: ".4em 0 0" }}>
            Quietly excellent rooms a short run from the harbour — chosen for comfort, calm and a good
            night’s sleep before an early start.
          </p>
        </div>
      </section>

      <section className="section--tight bg-white">
        <div className="wall">
          {LODGE.map((src, i) => <figure className="wall__cell" key={i}><img src={IMG + src} alt="A vetted lodge on San Cristóbal" /></figure>)}
        </div>
      </section>

      <section className="closer">
        <img className="closer__img" src={IMG + "accommodations/accomodation-gal-img-04.webp"} alt="A lodge on San Cristóbal" />
        <div className="closer__scrim"></div>
        <div className="container closer__inner reveal">
          <p className="eyebrow eyebrow--ondark">Whenever you’re ready</p>
          <h2 className="closer__title">Let’s go fishing.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.92)", maxWidth: "52ch", margin: "var(--space-4) auto 0" }}>
            Tell us your dates and we’ll arrange the room along with the boat.
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
