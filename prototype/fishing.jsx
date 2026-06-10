/* global React, ReactDOM */
/* The Fishing — species detail page. Uses shared.jsx shell. */
const { Tag, StatBlock } = window.BelugaGalapagosDesignSystem_fd3494;

const SPECIES = [
  {
    id: "marlin",
    img: "galapagos-marlin-fishing/marlin-fish-01.webp",
    eyebrow: "Billfish",
    title: "Striped Marlin",
    body: "Striped marlin run San Cristóbal through much of the year — most between a hundred and fifty and two hundred and fifty pounds, with the occasional fish in the four-hundred-pound class. The fishery is one hundred percent release and carefully protected by the Ecuadorian government. Anglers need only bring sunscreen and a camera.",
    tags: ["150–250 lb", "Some past 400", "100% release", "Fly & conventional"],
  },
  {
    id: "tuna",
    img: "galapagos-tuna-fishing/tuna-img-09.webp",
    eyebrow: "Bluewater",
    title: "Yellowfin Tuna",
    body: "Yellowfin run heavy through much of the year, taken on bait and on the troll. They are powerful, deliberate fish that test tackle and angler alike — and they make for the finest table you will find on the island that night.",
    tags: ["Bluewater", "Bait & troll", "Much of the year"],
  },
  {
    id: "wahoo",
    img: "galapagos-wahoo-fishing/wahoo-05.jpg",
    eyebrow: "Speedster",
    title: "Wahoo",
    body: "Fast and unmistakable on the strike, wahoo hold along the drop-offs and come willingly to a trolled lure. A short, sharp fight and a clean, prized fillet — a welcome change of pace between billfish.",
    tags: ["Speed troll", "The drop-offs"],
  },
];

const GAL = [
  "home/gallery-image-05.jpg", "gallery/other-species-01.jpg", "home/gallery-image-08.jpeg",
  "gallery/other-species-14.jpg", "home/gallery-image-04.jpg", "gallery/other-species-05.jpg",
  "home/gallery-image-16.jpg", "gallery/other-species-17.jpg", "home/gallery-image-23.jpg",
  "gallery/other-species-06.jpg", "home/gallery-image-09.jpeg", "gallery/other-species-07.jpg",
  "home/gallery-image-06.jpg", "gallery/other-species-16.jpg", "home/gallery-image-12.jpg",
  "gallery/other-species-08.jpg", "home/gallery-image-20.jpg", "gallery/other-species-15.jpg",
  "home/gallery-image-13.jpeg", "gallery/other-species-09.jpg", "home/gallery-image-07.jpg",
  "gallery/other-species-13.jpg", "home/gallery-image-24.jpg", "gallery/other-species-10.jpg",
  "gallery/other-species-02.jpg", "gallery/other-species-11.jpg", "gallery/other-species-04.jpg",
];

const PROOF = [
  { value: "20+", label: "Years off San Cristóbal" },
  { value: "150–250", label: "lb striped marlin — some past 400" },
  { value: "100%", label: "Catch & release billfishery" },
  { value: "3", label: "Headline species" },
];

function SpeciesSplit({ s, reverse }) {
  const media = (
    <div className="split__media" key="m"><img src={IMG + s.img} alt={s.title} /></div>
  );
  const body = (
    <div className="split__body" key="b">
      <p className="eyebrow">{s.eyebrow}</p>
      <h2 className="sec-head__title" style={{ marginBottom: ".4em" }}>{s.title}</h2>
      <p className="bx-body">{s.body}</p>
      <div className="chips">{s.tags.map((t, i) => <Tag key={i} variant={i === 2 ? "coral" : "sand"}>{t}</Tag>)}</div>
      <div style={{ marginTop: "var(--space-6)" }}>
        <Button variant="secondary" onClick={openEnquire} iconRight={<Ic n="arrow-right" />}>Enquire about a charter</Button>
      </div>
    </div>
  );
  return (
    <section id={s.id} className="section bg-shell">
      <div className="container">
        <div className="panel split reveal" style={{ background: "var(--c-white)" }}>
          {reverse ? [body, media] : [media, body]}
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <Shell>
      <section className="hero hero--short">
        <img className="hero__img" src={IMG + "galapagos-marlin-fishing/marlin-fish-04.webp"} alt="A striped marlin alongside the boat" />
        <div className="hero__scrim"></div>
        <div className="container hero__inner">
          <p className="eyebrow eyebrow--ondark">The Fishing</p>
          <h1 className="hero__title">Marlin, tuna &amp; wahoo</h1>
          <p className="hero__lead">
            San Cristóbal is one of the great striped-marlin fisheries on earth — and the tuna and
            wahoo that share the water are no consolation prize. Here is what you have come for.
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="lg" onClick={openEnquire}>Book now</Button>
            <Button variant="light" size="lg" href="#gallery" iconRight={<Ic n="arrow-down" />}>The catch</Button>
          </div>
        </div>
        <div className="hero__scrollcue"><Ic n="chevron-down" /></div>
      </section>

      <section className="section--tight bg-deep on-dark">
        <div className="container">
          <div className="proof reveal">
            {PROOF.map((p) => <StatBlock key={p.label} value={p.value} label={p.label} onDark />)}
          </div>
        </div>
      </section>

      {SPECIES.map((s, i) => <SpeciesSplit key={s.id} s={s} reverse={i % 2 === 1} />)}

      <section id="gallery" className="section--tight bg-white">
        <div className="container">
          <div className="sec-head" style={{ marginBottom: "var(--space-6)" }}>
            <div>
              <p className="eyebrow">The catch</p>
              <h2 className="sec-head__title">Gallery</h2>
            </div>
            <p className="sec-head__intro muted bx-body" style={{ margin: 0 }}>Real clients, real fish — every billfish released.</p>
          </div>
        </div>
        <div className="wall">
          {GAL.map((src, i) => (
            <figure className="wall__cell" key={i}><img src={IMG + src} alt="A Sportfish Galápagos catch" /></figure>
          ))}
        </div>
      </section>

      <section className="closer">
        <img className="closer__img" src={IMG + "home/gallery-image-08.jpeg"} alt="The day on the water" />
        <div className="closer__scrim"></div>
        <div className="container closer__inner reveal">
          <p className="eyebrow eyebrow--ondark">Whenever you’re ready</p>
          <h2 className="closer__title">Let’s go fishing.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.92)", maxWidth: "52ch", margin: "var(--space-4) auto 0" }}>
            Tell us the season you have in mind and we’ll build the rest of the trip around the fishing.
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
