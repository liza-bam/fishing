/* global React, ReactDOM */
/* Island Expeditions — wildlife, the islands, MY Alya. Uses shared.jsx shell. */
const { Tag } = window.BelugaGalapagosDesignSystem_fd3494;

const WILD = [
  { src: "island-expeditions/excursion-02.webp", alt: "A sea turtle over the reef" },
  { src: "island-expeditions/excursion-01.webp", alt: "A Galápagos sea lion pup" },
  { src: "island-expeditions/excursion-04.webp", alt: "A blue-footed booby" },
  { src: "island-expeditions/excursion-03.webp", alt: "A marine iguana on lava" },
  { src: "unsplash/hans-jurgen-iguana.jpg", alt: "A Galápagos land iguana" },
  { src: "unsplash/wyatt-iguana-surf.jpg", alt: "A land iguana above the surf" },
  { src: "unsplash/simon-iguana-lava.jpg", alt: "A marine iguana on the rocks" },
  { src: "island-expeditions/travel-01.webp", alt: "A nautical chart and binoculars" },
];
const PLACES = ["Kicker Rock · León Dormido", "Lobería", "Isla de Lobos", "El Junco", "Puerto Chino", "Punta Pitt"];

function Page() {
  return (
    <Shell>
      <section className="hero hero--short">
        <img className="hero__img" src={IMG + "unsplash/nicolas-martin-kicker-rock.jpg"} alt="Kicker Rock, León Dormido" />
        <div className="hero__scrim"></div>
        <div className="container hero__inner">
          <p className="eyebrow eyebrow--ondark">Island Expeditions</p>
          <h1 className="hero__title">The islands, up close</h1>
          <p className="hero__lead">
            Between the fishing, the archipelago itself — snorkelling with turtles and sea lions, and
            the wildlife of San Cristóbal, often aboard our sister catamaran, MY&nbsp;Alya.
          </p>
          <div className="hero__actions"><Button variant="primary" size="lg" onClick={openEnquire}>Book now</Button></div>
        </div>
        <div className="hero__scrollcue"><Ic n="chevron-down" /></div>
      </section>

      <section id="alya" className="bg-deep on-dark">
        <div className="split reveal">
          <div className="split__media"><img src={IMG + "island-expeditions/alya-catamaran.jpg"} alt="MY Alya, the sister catamaran" /></div>
          <div className="split__body">
            <p className="eyebrow eyebrow--ondark">Aboard MY Alya</p>
            <h2 className="sec-head__title" style={{ color: "var(--c-white)", marginBottom: ".4em" }}>Multi-day, up to sixteen</h2>
            <p className="bx-body" style={{ color: "var(--text-on-dark)" }}>
              Our sister catamaran sleeps up to sixteen — the boat for a family or a group who want to
              travel and fish the outer islands across several days, the wildlife and the water on a single trip.
            </p>
            <div className="chips">
              <Tag variant="sand">Up to 16</Tag><Tag variant="sand">Multi-day</Tag><Tag variant="coral">The outer islands</Tag>
            </div>
            <div style={{ marginTop: "var(--space-6)" }}>
              <Button variant="light" onClick={openEnquire} iconRight={<Ic n="arrow-right" />}>Enquire about MY Alya</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight bg-white">
        <div className="container">
          <div className="sec-head" style={{ marginBottom: "var(--space-6)" }}>
            <div>
              <p className="eyebrow">The wildlife</p>
              <h2 className="sec-head__title">What you’ll meet</h2>
            </div>
            <p className="sec-head__intro muted bx-body" style={{ margin: 0 }}>
              Sea turtles, sea lions, marine iguanas and blue-footed boobies — at arm’s length.
            </p>
          </div>
        </div>
        <div className="wall">
          {WILD.map((w, i) => <figure className="wall__cell" key={i}><img src={IMG + w.src} alt={w.alt} /></figure>)}
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container container--text reveal" style={{ textAlign: "center" }}>
          <p className="eyebrow">Where we go</p>
          <h2 className="sec-head__title" style={{ marginBottom: "var(--space-5)" }}>Around San Cristóbal</h2>
          <div className="chips" style={{ justifyContent: "center" }}>
            {PLACES.map((p, i) => <Tag key={i} variant="outline">{p}</Tag>)}
          </div>
        </div>
      </section>

      <section className="closer">
        <img className="closer__img" src={IMG + "island-expeditions/excursion-02.webp"} alt="A sea turtle over the reef" />
        <div className="closer__scrim"></div>
        <div className="container closer__inner reveal">
          <p className="eyebrow eyebrow--ondark">Whenever you’re ready</p>
          <h2 className="closer__title">Let’s go fishing.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.92)", maxWidth: "52ch", margin: "var(--space-4) auto 0" }}>
            Add a day on the islands to your charter — we’ll arrange it.
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
