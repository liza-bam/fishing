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
        <div className="container reveal">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-7)", alignItems: "end", marginBottom: "var(--space-7)" }}>
            <div>
              <p className="eyebrow">The Lodges</p>
              <h2 className="sec-head__title" style={{ marginTop: ".25em" }}>Two we know well</h2>
            </div>
            <p className="muted" style={{ alignSelf: "end" }}>A short run from the harbour, and an early start made easy.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
            <article style={{ background: "var(--c-white)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
              <img src={IMG + "accommodations/Hotel-Miconia.jpeg"} alt="Hotel Miconia, San Cristóbal" style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }} />
              <div style={{ padding: "var(--space-5) var(--space-6) var(--space-6)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", margin: "0 0 .5em" }}>Hotel Miconia</h3>
                <p className="muted" style={{ margin: 0 }}>
                  On the seafront since 2002 — a small collection of 21 rooms built with the islands’ own
                  Matazarnos wood. A pool, jacuzzi, spa and restaurant, sea-view rooms and a quiet location
                  a short run from the harbour.
                </p>
              </div>
            </article>
            <article style={{ background: "var(--c-white)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
              <img src={IMG + "accommodations/Seaside-Hotel.jpeg"} alt="Seaside Hotel, San Cristóbal" style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }} />
              <div style={{ padding: "var(--space-5) var(--space-6) var(--space-6)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", margin: "0 0 .5em" }}>Seaside Hotel</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Ten suites, six with open views of the Galápagos sea. A pool with hydrotherapy and a
                  terrace built for the sunset — quiet luxury, a short run from the boat.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "stretch" }}>
          <img src={IMG + "accommodations/accomodation-gal-img-04.webp"} alt="On San Cristóbal" style={{ width: "100%", height: "100%", minHeight: "520px", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "var(--space-8) var(--space-7)", background: "var(--c-shell, #eef2f6)" }}>
            <p className="eyebrow">Our first choice</p>
            <h2 className="sec-head__title" style={{ marginTop: ".25em" }}>On the water, by the boat</h2>
            <p className="muted" style={{ marginTop: "var(--space-4)" }}>
              Professionally run and directly on the water — a hundred-foot walk to the boat. It’s where
              we put most guests, and it has everything you need for an easy week:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-6) 0 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".6em var(--space-5)" }}>
              {["Restaurant & bar", "A/C & TV", "Internet", "Rooms up to a presidential suite",
                "Pool", "Private bathrooms", "Fitness centre", "Laundry service"].map((f) =>
                <li key={f} style={{ display: "flex", gap: ".55em", alignItems: "center" }}>
                  <span style={{ color: "var(--c-clay, #c66a3a)" }}><Ic n="check" /></span>{f}
                </li>
              )}
            </ul>
            <p className="muted" style={{ marginTop: "var(--space-6)" }}>
              Call <strong>+011 593 5 2520 608</strong> — or let us book it for you; we can often get you a better rate.
            </p>
            <div style={{ marginTop: "var(--space-6)" }}>
              <Button variant="primary" size="lg" onClick={openEnquire}>Book now</Button>
            </div>
          </div>
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
