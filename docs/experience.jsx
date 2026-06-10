/* global React, ReactDOM */
/* The Experience — stay, dine, islands. Uses shared.jsx shell. */

const WILDLIFE = [
  { src: "island-expeditions/excursion-01.webp", alt: "A Galápagos sea lion pup" },
  { src: "island-expeditions/excursion-04.webp", alt: "A blue-footed booby" },
  { src: "island-expeditions/excursion-03.webp", alt: "A marine iguana on lava" },
  { src: "unsplash/hans-jurgen-iguana.jpg", alt: "A Galápagos land iguana" },
  { src: "unsplash/wyatt-iguana-surf.jpg", alt: "A land iguana above the surf" },
  { src: "island-expeditions/excursion-02.webp", alt: "A sea turtle over the reef" },
];

function Page() {
  return (
    <Shell>
      <section className="hero hero--short">
        <img className="hero__img" src={IMG + "accommodations/accomodation-hero-img.webp"} alt="A lodge on San Cristóbal" />
        <div className="hero__scrim"></div>
        <div className="container hero__inner">
          <p className="eyebrow eyebrow--ondark">The Experience</p>
          <h1 className="hero__title">Everything around the fishing</h1>
          <p className="hero__lead">
            The lodges, the table and the islands themselves — chosen and arranged on your behalf, so
            the only thing you plan is the fishing.
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="lg" onClick={openEnquire}>Book now</Button>
          </div>
        </div>
        <div className="hero__scrollcue"><Ic n="chevron-down" /></div>
      </section>

      <section className="section bg-shell">
        <div className="container">
          <div className="panel split reveal" style={{ background: "var(--c-white)" }}>
            <div className="split__media"><img src={IMG + "accommodations/accomodation-hero-img.webp"} alt="A vetted lodge" /></div>
            <div className="split__body">
              <p className="eyebrow">Where you stay</p>
              <h2 className="sec-head__title" style={{ marginBottom: ".4em" }}>Vetted lodges</h2>
              <p className="bx-body">
                Quietly excellent rooms on San Cristóbal — partners we know and trust, booked and
                arranged for you so everything ashore is taken care of before you arrive.
              </p>
              <div style={{ marginTop: "var(--space-6)" }}>
                <Button variant="secondary" href="accommodations.html" iconRight={<Ic n="arrow-right" />}>View accommodations</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="panel split reveal" style={{ background: "var(--c-white)" }}>
            <div className="split__body">
              <p className="eyebrow">The table</p>
              <h2 className="sec-head__title" style={{ marginBottom: ".4em" }}>The day’s catch, that evening</h2>
              <p className="bx-body">
                Fresh local cooking and the best of the island kitchen — often the very fish you landed
                that morning, handled by people who care about a good table.
              </p>
            </div>
            <div className="split__media"><img src={IMG + "cuisine/Cuisine-hero.webp"} alt="Island cuisine" /></div>
          </div>
        </div>
      </section>

      <section id="islands" className="section--tight bg-deep on-dark">
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: "var(--space-6)" }}>
            <div>
              <p className="eyebrow eyebrow--ondark">The islands</p>
              <h2 className="sec-head__title" style={{ color: "var(--c-white)" }}>Beyond the rod</h2>
            </div>
            <p className="sec-head__intro" style={{ margin: 0, color: "var(--text-on-dark-muted)" }}>
              Snorkelling, wildlife and Kicker Rock on the days you’re off the water — aboard the
              sister catamaran MY&nbsp;Alya when you want to go further.
            </p>
          </div>
        </div>
        <figure className="expd__feature reveal">
          <img src={IMG + "unsplash/nicolas-martin-kicker-rock.jpg"} alt="Kicker Rock, León Dormido" />
        </figure>
        <div className="expd__grid reveal">
          {WILDLIFE.map((w, i) => (
            <figure className="wall__cell" key={i}><img src={IMG + w.src} alt={w.alt} /></figure>
          ))}
        </div>
      </section>

      <section className="closer">
        <img className="closer__img" src={IMG + "cuisine/Cuisine-hero.webp"} alt="The table" />
        <div className="closer__scrim"></div>
        <div className="container closer__inner reveal">
          <p className="eyebrow eyebrow--ondark">Whenever you’re ready</p>
          <h2 className="closer__title">Let’s go fishing.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.92)", maxWidth: "52ch", margin: "var(--space-4) auto 0" }}>
            Tell us what you’d like and we’ll arrange the lodge, the table and the islands around the fishing.
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
