/* global React, ReactDOM, lucide */
const DS = window.BelugaGalapagosDesignSystem_fd3494;
const { Button, StatBlock, ExperienceCard, Tag, Badge, Input, Select } = DS;
const { useState, useEffect, useRef } = React;

const IMG = "sportfish-images/";
const LOGO_WHITE = "assets/sportfish-logo-white.png";
const Ic = ({ n }) => <i data-lucide={n}></i>;

/* ---------------- shared data ---------------- */
const NAV = [
{ label: "The Fishing", href: "the-fishing.html" },
{ label: "Gallery", href: "the-fishing.html#gallery" },
{ label: "The Fleet", href: "our-boats.html" },
{ label: "Expeditions", href: "expeditions.html" },
{ label: "The Experience", href: "the-experience.html" },
{ label: "Accommodations", href: "accommodations.html" },
{ label: "Our Story", href: "our-story.html" }];


const PROOF = [
{ value: "20+", label: "Years off San Cristóbal" },
{ value: "150–250", label: "lb striped marlin — some past 400" },
{ value: "100%", label: "Catch & release billfishery" },
{ value: "3", label: "Vessels — up to 16 guests" }];


/* ---------------- helpers ---------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {els.forEach((e) => e.classList.add("is-in"));return;}
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {e.target.classList.add("is-in");io.unobserve(e.target);}});
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}
function drawIcons() {try {lucide.createIcons();} catch (e) {}}

/* ============================================================
   NAV
   ============================================================ */
function Nav({ onEnquire, onMenu }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"nav" + (solid ? " is-solid" : "")}>
      <div className="container nav__row">
        <a href="index.html" aria-label="Sportfish Galápagos — home">
          <img className="nav__logo" src={LOGO_WHITE} alt="Sportfish Galápagos" />
        </a>
        <div className="nav__spacer"></div>
        <nav className="nav__links" aria-label="Primary">
          {NAV.map((n) => <a key={n.label} className="nav__link" href={n.href}>{n.label}</a>)}
        </nav>
        <div className="nav__cta-desktop">
          <Button variant="primary" size="sm" onClick={onEnquire}>Book now</Button>
        </div>
        <button className="nav__burger" aria-label="Open menu" onClick={onMenu}><Ic n="menu" /></button>
      </div>
    </header>);

}

function MobileMenu({ open, onClose, onEnquire }) {
  useEffect(() => {drawIcons();}, [open]);
  return (
    <div className={"mobilemenu" + (open ? " is-open" : "")} aria-hidden={!open}>
      <div className="mobilemenu__top">
        <a href="index.html" aria-label="Sportfish Galápagos — home" onClick={onClose}>
          <img className="nav__logo" src={LOGO_WHITE} alt="Sportfish Galápagos" />
        </a>
        <button className="iconbtn-plain" aria-label="Close menu" onClick={onClose}><Ic n="x" /></button>
      </div>
      <nav className="mobilemenu__links">
        {NAV.map((n) => <a key={n.label} className="mobilemenu__link" href={n.href} onClick={onClose}>{n.label}</a>)}
      </nav>
      <div style={{ marginTop: "var(--space-7)" }}>
        <Button variant="primary" size="lg" onClick={() => {onClose();onEnquire();}} style={{ width: "100%" }}>Let’s go fishing</Button>
      </div>
    </div>);

}

/* ============================================================
   HERO
   ============================================================ */
function Hero({ onEnquire }) {
  return (
    <section className="hero">
      <img className="hero__img" src="uploads/test.jpg" alt="Clear water over a coral reef beneath a palm-fringed Galápagos shoreline" />
      <div className="hero__scrim"></div>
      <div className="container hero__inner">
        <p className="eyebrow eyebrow--ondark">Galápagos · San Cristóbal · Est. 2004</p>
        <h1 className="hero__title" style={{ fontWeight: "900", fontSize: "82px" }}>Galápagos offshore fishing charters</h1>
        <p className="hero__lead">
          Catch some of the world’s largest fish on your private charter with Sportfish Galápagos.
          Our experienced captains and crews bring the highest level of service and deep local
          knowledge — whether it’s your first sportfishing adventure or you’re a seasoned pro,
          you’ve come to the right place.
        </p>
        <div className="hero__actions">
          <Button variant="primary" size="lg" onClick={onEnquire}>Let’s go fishing</Button>
          <Button variant="light" size="lg" href="the-fishing.html" iconRight={<Ic n="arrow-right" />}>Explore the charters</Button>
        </div>
      </div>
      <div className="hero__scrollcue"><Ic n="chevron-down" /></div>
    </section>);

}

/* ============================================================
   PROOF BAND
   ============================================================ */
function Proof() {
  return (
    <section className="section--tight bg-deep on-dark">
      <div className="container">
        <div className="proof reveal">
          {PROOF.map((p) => <StatBlock key={p.label} value={p.value} label={p.label} onDark />)}
        </div>
      </div>
    </section>);

}

/* ============================================================
   INTRO VOICE
   ============================================================ */
function Intro() {
  return (
    <section className="section bg-shell">
      <div className="container container--text reveal" style={{ textAlign: "center" }}>
        <p className="eyebrow">Owner-operated · Captains Peter &amp; Al</p>
        <p className="bx-display-m" style={{ margin: "0.4em 0 0" }}>
          For nearly twenty years the same small crew has fished these waters, long enough to know
          the islands, the seasons and the fish the way only those who are out on them every day can.
        </p>
      </div>
    </section>);

}

/* ============================================================
   MARLIN FEATURE (split)
   ============================================================ */
function MarlinFeature() {
  return (
    <section className="section bg-shell">
      <div className="container">
        <div className="panel split split--stack-media-first reveal" style={{ background: "var(--c-white)" }}>
        <div className="split__media">
          <img src={IMG + "galapagos-marlin-fishing/marlin-fish-01.webp"} alt="A striped marlin held boatside before release" />
        </div>
        <div className="split__body">
          <p className="eyebrow">The Fishing</p>
          <h2 className="sec-head__title" style={{ marginBottom: ".4em" }}>Striped marlin</h2>
          <p className="bx-body">
            Striped marlin run these waters through much of the year, most of them between a hundred
            and fifty and two hundred and fifty pounds, with the occasional fish in the four-hundred-pound
            class — and every one of them returned to the water.
          </p>
          <div className="chips">
            <Tag variant="sand">150–250 lb</Tag>
            <Tag variant="sand">Some past 400</Tag>
            <Tag variant="coral">100% release</Tag>
            <Tag variant="outline">Fly &amp; conventional</Tag>
          </div>
          <div style={{ marginTop: "var(--space-6)" }}>
            <Button variant="secondary" href="the-fishing.html" iconRight={<Ic n="arrow-right" />}>Read the species guide</Button>
          </div>
        </div>
      </div>
      </div>
    </section>);

}

/* ============================================================
   SPECIES DUO (tuna + wahoo)
   ============================================================ */
function SpeciesDuo() {
  return (
    <section className="section bg-shell">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <p className="eyebrow">The wider fishery</p>
            <h2 className="sec-head__title">Tuna &amp; wahoo</h2>
          </div>
          <Button variant="ghost" href="the-fishing.html" iconRight={<Ic n="arrow-right" />}>All species</Button>
        </div>
        <div className="grid-2 reveal" style={{ marginTop: "var(--space-7)" }}>
          <ExperienceCard
            image={IMG + "galapagos-tuna-fishing/tuna-img-09.webp"}
            imageAlt="A yellowfin tuna boatside"
            eyebrow="Target species"
            title="Yellowfin Tuna"
            description="Yellowfin run heavy through much of the year, taken on bait and on the troll — powerful, deliberate fish that test tackle and angler alike."
            meta={[{ icon: <Ic n="waves" />, label: "Bluewater" }, { icon: <Ic n="anchor" />, label: "Bait & troll" }]}
            href="the-fishing.html" />
          
          <ExperienceCard
            image={IMG + "galapagos-wahoo-fishing/wahoo-05.jpg"}
            imageAlt="A wahoo on the deck"
            eyebrow="Target species"
            title="Wahoo"
            description="Fast and unmistakable on the strike, wahoo hold along the drop-offs and come willingly to a trolled lure."
            meta={[{ icon: <Ic n="zap" />, label: "Speed troll" }, { icon: <Ic n="map-pin" />, label: "The drop-offs" }]}
            href="the-fishing.html" />
          
        </div>
      </div>
    </section>);

}

/* ============================================================
   FLEET
   ============================================================ */
const FLEET = [
{ src: "fleet/vertigo-i.png", name: "Vertigo I" },
{ src: "fleet/alya.png", name: "Alya" },
{ src: "fleet/yualka-ii.png", name: "Yualka II" },
{ src: "fleet/patricia.png", name: "Patricia" },
{ src: "fleet/vertigo-ii.png", name: "Vertigo II" }];

function Fleet() {
  return (
    <section id="fleet" className="section bg-mist">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <p className="eyebrow">The Fleet</p>
            <h2 className="sec-head__title">Six vessels, one standard</h2>
          </div>
          <Button variant="secondary" href="our-boats.html" iconRight={<Ic n="arrow-right" />}>Our boats</Button>
        </div>
        <div className="fleetgrid reveal">
          {FLEET.map((f, i) =>
          <figure className="wall__cell" key={i}>
            <img src={f.src} alt={f.name} />
          </figure>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   OUR STORY (founders)
   ============================================================ */
function Gear() {
  return (
    <section id="gear" className="section bg-shell">
      <div className="container">
        <div className="sec-head reveal" style={{ marginBottom: "var(--space-6)" }}>
          <div>
            <p className="eyebrow">The Gear</p>
            <h2 className="sec-head__title">Rigged and ready</h2>
          </div>
          <p className="sec-head__intro muted bx-body" style={{ margin: 0 }}>
            Every boat runs proven offshore tackle — Shimano Talica 50II reels among it — cleaned and
            rigged before you board. Bring sunscreen and a camera; we handle the rest.
          </p>
        </div>
        <div className="grid-2 reveal">
          <figure className="gearshot"><img src={IMG + "our-gear/Gear-01.webp"} alt="Offshore tackle aboard a Sportfish Galápagos vessel" /></figure>
          <figure className="gearshot"><img src={IMG + "our-gear/Gear-02.webp"} alt="Rigged rods and reels" /></figure>
        </div>
      </div>
    </section>);

}

function Story() {
  return (
    <section id="story" className="section bg-shell">
      <div className="container">
        <div className="panel split reveal" style={{ background: "var(--surface-card)" }}>
        <div className="split__body">
          <p className="eyebrow">Our Story</p>
          <h2 className="sec-head__title" style={{ marginBottom: ".4em" }}>Peter &amp; Al</h2>
          <p className="bx-body">
            Peter and Al have run these waters for the better part of twenty years. They know the
            captains, the seasons and every guest by name — and they look after the rest, so nothing
            comes between you and the fishing.
          </p>
          <div style={{ marginTop: "var(--space-6)" }}>
            <Button variant="secondary" href="our-story.html" iconRight={<Ic n="arrow-right" />}>Meet the crew</Button>
          </div>
        </div>
        <div className="split__media">
          <img src={IMG + "our-story/story-02.webp"} alt="Peter and Al, the founders of Sportfish Galápagos, at dinner" />
        </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   THE EXPERIENCE
   ============================================================ */
const EXPERIENCE = [
{ img: "accommodations/accomodation-hero-img.webp", title: "Where you stay", desc: "Quietly excellent rooms on San Cristóbal, chosen and arranged for you.", href: "accommodations.html" },
{ img: "cuisine/Cuisine-hero.webp", title: "The table", desc: "The day’s catch and the best of the island kitchen, at a table set for you.", href: "the-experience.html" }];

function Experience() {
  return (
    <section id="experience" className="section bg-sand">
      <div className="container">
        <div className="container--text reveal" style={{ textAlign: "center", marginInline: "auto" }}>
          <p className="eyebrow">On San Cristóbal</p>
          <h2 className="sec-head__title">Stay &amp; dine</h2>
          <p className="bx-body muted" style={{ marginTop: ".6em" }}>
            Quietly excellent lodging and the best of the island kitchen — both arranged on your behalf.
          </p>
        </div>
        <div className="grid-2 reveal" style={{ marginTop: "var(--space-8)" }}>
          {EXPERIENCE.map((e) =>
          <ExperienceCard
            key={e.title}
            image={IMG + e.img}
            imageAlt={e.title}
            title={e.title}
            description={e.desc}
            href={e.href} />

          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   GALLERY
   ============================================================ */
/* ratio = height / width — used to balance the masonry columns */
const GAL = [
{ src: "home/gallery-image-05.jpg" },
{ src: "gallery/other-species-01.jpg" },
{ src: "home/gallery-image-08.jpeg" },
{ src: "gallery/other-species-14.jpg" },
{ src: "home/gallery-image-04.jpg" },
{ src: "gallery/other-species-05.jpg" },
{ src: "home/gallery-image-16.jpg" },
{ src: "gallery/other-species-17.jpg" },
{ src: "home/gallery-image-23.jpg" },
{ src: "gallery/other-species-06.jpg" },
{ src: "home/gallery-image-09.jpeg" },
{ src: "gallery/other-species-07.jpg" },
{ src: "home/gallery-image-06.jpg" },
{ src: "gallery/other-species-16.jpg" },
{ src: "home/gallery-image-12.jpg" },
{ src: "gallery/other-species-08.jpg" },
{ src: "home/gallery-image-20.jpg" },
{ src: "gallery/other-species-15.jpg" },
{ src: "home/gallery-image-13.jpeg" },
{ src: "gallery/other-species-09.jpg" },
{ src: "home/gallery-image-07.jpg" },
{ src: "gallery/other-species-13.jpg" },
{ src: "home/gallery-image-24.jpg" },
{ src: "gallery/other-species-10.jpg" },
{ src: "gallery/other-species-02.jpg" },
{ src: "gallery/other-species-11.jpg" },
{ src: "gallery/other-species-04.jpg" }];

function Gallery() {
  return (
    <section id="gallery" className="section--tight bg-white">
      <div className="container">
        <div className="sec-head" style={{ marginBottom: "var(--space-6)" }}>
          <div>
            <p className="eyebrow">The catch</p>
            <h2 className="sec-head__title">Gallery</h2>
          </div>
          <Button variant="ghost" href="the-fishing.html#gallery" iconRight={<Ic n="arrow-right" />}>View the gallery</Button>
        </div>
      </div>
      <div className="wall">
        {GAL.map((g, i) =>
        <figure className="wall__cell" key={i}>
            <img src={IMG + g.src} alt="A Sportfish Galápagos catch" />
          </figure>
        )}
      </div>
    </section>);

}

/* ============================================================
   CLOSING CTA
   ============================================================ */
function Closer({ onEnquire }) {
  return (
    <section className="closer">
      <img className="closer__img" src={IMG + "galapagos-marlin-fishing/marlin-fish-04.webp"} alt="A striped marlin alongside the boat at the end of the day" />
      <div className="closer__scrim"></div>
      <div className="container closer__inner reveal">
        <p className="eyebrow eyebrow--ondark">Whenever you’re ready</p>
        <h2 className="closer__title">Let’s go fishing.</h2>
        <p className="lead" style={{ color: "rgba(255,255,255,.92)", maxWidth: "52ch", margin: "var(--space-4) auto 0" }}>
          Whenever the season suits you, a short note is all we ask for to begin. We’ll talk through the
          fishing you have in mind, the boats and the days on the water, and then quietly arrange
          everything else around you.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap", marginTop: "var(--space-7)" }}>
          <Button variant="primary" size="lg" onClick={onEnquire}>Book now</Button>
          <Button variant="light" size="lg" href="https://wa.me/593000000000" iconLeft={<Ic n="message-circle" />}>WhatsApp a captain</Button>
        </div>
      </div>
    </section>);

}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col">
            <img className="footer__logo" src={LOGO_WHITE} alt="Sportfish Galápagos" />
            <p className="muted--ondark bx-small" style={{ maxWidth: "34ch" }}>
              Private offshore sportfishing charters from San Cristóbal, Galápagos. Owner-operated since 2004.
            </p>
          </div>
          <div className="footer__col">
            <h4>Fishing</h4>
            <a href="the-fishing.html">Striped Marlin</a>
            <a href="the-fishing.html">Yellowfin Tuna</a>
            <a href="the-fishing.html">Wahoo</a>
            <a href="the-fishing.html#gallery">Gallery</a>
          </div>
          <div className="footer__col">
            <h4>The Trip</h4>
            <a href="our-boats.html">The Fleet</a>
            <a href="expeditions.html">Expeditions</a>
            <a href="accommodations.html">Accommodations</a>
            <a href="the-experience.html">The Experience</a>
            <a href="our-story.html">Our Story</a>
          </div>
          <div className="footer__col">
            <h4>Get in touch</h4>
            <a href="https://wa.me/593000000000">WhatsApp</a>
            <a href="mailto:hello@sportfishgalapagos.com">Email us</a>
            <a href="the-fishing.html">San Cristóbal, Galápagos</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Sportfish Galápagos · San Cristóbal · Ecuador</span>
          <span>Catch &amp; release · Galápagos National Park</span>
        </div>
      </div>
    </footer>);

}

/* ============================================================
   ENQUIRE SLIDE-OVER
   ============================================================ */
function Enquire({ open, onClose }) {
  const firstRef = useRef(null);
  useEffect(() => {drawIcons();}, [open]);
  return (
    <React.Fragment>
      <div className={"enquire-scrim" + (open ? " is-open" : "")} onClick={onClose}></div>
      <aside className={"enquire" + (open ? " is-open" : "")} aria-hidden={!open} aria-label="Plan your charter">
        <div className="enquire__head">
          <div>
            <p className="eyebrow eyebrow--ondark">Let’s go fishing</p>
            <h2 className="enquire__title">Plan your charter</h2>
          </div>
          <button className="iconbtn-plain" aria-label="Close" onClick={onClose}><Ic n="x" /></button>
        </div>
        <form className="enquire__body" onSubmit={(e) => {e.preventDefault();onClose();}}>
          <p className="bx-small" style={{ color: "var(--text-on-dark-muted)", margin: 0 }}>
            Tell us a little and we’ll reply personally — usually within a day.
          </p>
          <Input label="Full name" placeholder="Jane Darwin" onDark required />
          <Input label="Email" type="email" placeholder="jane@email.com" onDark required />
          <Select label="When would you like to fish?" onDark
          options={["I’m flexible", "Next 1–3 months", "3–6 months out", "Just exploring"]} />
          <Select label="Party size" onDark options={["1–2 anglers", "3–4 anglers", "5+ / a group"]} />
          <Button type="submit" variant="primary" size="lg" style={{ width: "100%", marginTop: "var(--space-2)" }}>Send enquiry</Button>
          <div className="enquire__wa">
            <Ic n="message-circle" />
            <span className="bx-small" style={{ color: "var(--text-on-dark)" }}>Prefer to talk? <b>WhatsApp a captain →</b></span>
          </div>
        </form>
      </aside>
    </React.Fragment>);

}

function Expeditions({ onEnquire }) {
  return (
    <section id="expeditions" className="section--tight bg-deep on-dark">
      <div className="container">
        <div className="sec-head reveal" style={{ marginBottom: "var(--space-6)" }}>
          <div>
            <p className="eyebrow eyebrow--ondark">Island Expeditions</p>
            <h2 className="sec-head__title" style={{ color: "var(--c-white)" }}>The islands, up close</h2>
          </div>
          <Button variant="light" href="expeditions.html" iconRight={<Ic n="arrow-right" />}>See the expeditions</Button>
        </div>
      </div>
      <figure className="expd__feature reveal">
        <img src={IMG + "island-expeditions/excursion-02.webp"} alt="A sea turtle over the reef, Galápagos" />
        <figcaption className="expd__cap">
          <p>Between the fishing, the archipelago itself — snorkelling with turtles and sea lions, and the wildlife of San Cristóbal, often aboard our sister catamaran, MY&nbsp;Alya.</p>
        </figcaption>
      </figure>
      <div className="expd__grid reveal">
        <figure className="wall__cell"><img src={IMG + "island-expeditions/excursion-01.webp"} alt="A Galápagos sea lion pup" /></figure>
        <figure className="wall__cell"><img src={IMG + "island-expeditions/excursion-04.webp"} alt="A blue-footed booby" /></figure>
        <figure className="wall__cell"><img src={IMG + "island-expeditions/excursion-03.webp"} alt="A marine iguana on lava rock" /></figure>
        <figure className="wall__cell"><img src={IMG + "unsplash/hans-jurgen-iguana.jpg"} alt="A Galápagos land iguana" /></figure>
        <figure className="wall__cell"><img src={IMG + "unsplash/wyatt-iguana-surf.jpg"} alt="A land iguana above the surf" /></figure>
        <figure className="wall__cell"><img src={IMG + "unsplash/nicolas-martin-kicker-rock.jpg"} alt="Kicker Rock, León Dormido" /></figure>
      </div>
    </section>);

}

function Fishing() {
  return (
    <section id="fishing" className="section bg-shell">
      <div className="container">
        <div className="sec-head reveal" style={{ marginBottom: "var(--space-7)" }}>
          <div>
            <p className="eyebrow">The Fishing</p>
            <h2 className="sec-head__title">Three fish worth the trip</h2>
          </div>
          <Button variant="ghost" href="the-fishing.html" iconRight={<Ic n="arrow-right" />}>All species</Button>
        </div>
        <div className="grid-3 reveal">
          <ExperienceCard
            image={IMG + "galapagos-marlin-fishing/marlin-fish-01.webp"}
            imageAlt="A striped marlin held boatside before release"
            title="Striped Marlin"
            description="Most run 150–250 lb, some past 400 — and every one released."
            meta={[{ icon: <Ic n="anchor" />, label: "150–250 lb" }, { icon: <Ic n="repeat" />, label: "100% release" }]}
            href="the-fishing.html" />
          
          <ExperienceCard
            image={IMG + "galapagos-tuna-fishing/tuna-img-09.webp"}
            imageAlt="A yellowfin tuna boatside"
            title="Yellowfin Tuna"
            description="Heavy bluewater tuna on bait and on the troll, much of the year."
            meta={[{ icon: <Ic n="waves" />, label: "Bluewater" }, { icon: <Ic n="anchor" />, label: "Bait & troll" }]}
            href="the-fishing.html" />
          
          <ExperienceCard
            image={IMG + "galapagos-wahoo-fishing/wahoo-05.jpg"}
            imageAlt="A wahoo on the deck"
            title="Wahoo"
            description="Fast and unmistakable on the strike, along the drop-offs."
            meta={[{ icon: <Ic n="zap" />, label: "Speed troll" }, { icon: <Ic n="map-pin" />, label: "The drop-offs" }]}
            href="the-fishing.html" />
          
        </div>
      </div>
    </section>);

}

function QuoteOffer({ onEnquire }) {
  return (
    <section className="section bg-shell">
      <div className="container">
        <div className="quoteoffer reveal">
          <figure className="pullquote">
            <span className="pullquote__mark" aria-hidden="true">“</span>
            <blockquote className="bx-quote">The charm of fishing is that it is the pursuit of what is elusive but attainable, a perpetual series of occasions for hope.</blockquote>
            <figcaption>John Buchan</figcaption>
          </figure>
          <aside className="offercard">
            <img className="offercard__bg" src={IMG + "unsplash/nicolas-martin-kicker-rock.jpg"} alt="" />
            <div className="offercard__inner">
              <img className="offercard__badge" src={LOGO_WHITE} alt="Sportfish Galápagos" />
              <p className="eyebrow eyebrow--ondark">All-inclusive packages</p>
              <h3 className="offercard__title">One trip, arranged end to end</h3>
              <p className="offercard__text">The fishing, the boat, the lodge and the table — handled by one team, from your first message to the last cast.</p>
              <Button variant="primary" size="lg" onClick={onEnquire}>Book now</Button>
            </div>
          </aside>
        </div>
      </div>
    </section>);

}

/* ============================================================
   APP
   ============================================================ */
function App() {
  const [menu, setMenu] = useState(false);
  const [enquire, setEnquire] = useState(false);
  useReveal();
  useEffect(() => {drawIcons();});
  useEffect(() => {
    const onKey = (e) => {if (e.key === "Escape") {setMenu(false);setEnquire(false);}};
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menu || enquire ? "hidden" : "";
  }, [menu, enquire]);

  const openEnquire = () => {setMenu(false);setEnquire(true);};

  return (
    <React.Fragment>
      <Nav onEnquire={openEnquire} onMenu={() => setMenu(true)} />
      <MobileMenu open={menu} onClose={() => setMenu(false)} onEnquire={openEnquire} />
      <main>
        <Hero onEnquire={openEnquire} />
        <Proof />
        <QuoteOffer onEnquire={openEnquire} />
        <Fishing />
        <Fleet />
        <Gear />
        <Story />
        <Expeditions onEnquire={openEnquire} />
        <Experience />
        <Gallery />
        <Closer onEnquire={openEnquire} />
      </main>
      <Footer />
      <Enquire open={enquire} onClose={() => setEnquire(false)} />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
setTimeout(drawIcons, 200);