/* global React, ReactDOM, lucide */
/* Shared shell for all Sportfish Galápagos pages: nav, mobile menu, footer, enquiry slide-over. */
const DS = window.BelugaGalapagosDesignSystem_fd3494;
const { Button, Input, Select } = DS;
const { useState, useEffect } = React;

const IMG = "sportfish-images/";
const LOGO_WHITE = "assets/sportfish-logo-white.png";
const Ic = ({ n }) => <i data-lucide={n}></i>;
function drawIcons() { try { lucide.createIcons(); } catch (e) {} }

const NAV = [
  { label: "The Fishing", href: "the-fishing.html" },
  { label: "Gallery", href: "the-fishing.html#gallery" },
  { label: "The Fleet", href: "our-boats.html" },
  { label: "Expeditions", href: "expeditions.html" },
  { label: "The Experience", href: "the-experience.html" },
  { label: "Accommodations", href: "accommodations.html" },
  { label: "Our Story", href: "our-story.html" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const openEnquire = () => window.dispatchEvent(new Event("sf-open-enquire"));

function Nav({ onEnquire, onMenu }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > window.innerHeight * 0.55);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={"nav" + (solid ? " is-solid" : "")}>
      <div className="container nav__row">
        <a href="index.html" aria-label="Sportfish Galápagos — home"><img className="nav__logo" src={LOGO_WHITE} alt="Sportfish Galápagos" /></a>
        <div className="nav__spacer"></div>
        <nav className="nav__links" aria-label="Primary">
          {NAV.map((n) => <a key={n.label} className="nav__link" href={n.href}>{n.label}</a>)}
        </nav>
        <div className="nav__cta-desktop"><Button variant="primary" size="sm" onClick={onEnquire}>Book now</Button></div>
        <button className="nav__burger" aria-label="Open menu" onClick={onMenu}><Ic n="menu" /></button>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose, onEnquire }) {
  useEffect(() => { drawIcons(); }, [open]);
  return (
    <div className={"mobilemenu" + (open ? " is-open" : "")} aria-hidden={!open}>
      <div className="mobilemenu__top">
        <img className="nav__logo" src={LOGO_WHITE} alt="Sportfish Galápagos" />
        <button className="iconbtn-plain" aria-label="Close menu" onClick={onClose}><Ic n="x" /></button>
      </div>
      <nav className="mobilemenu__links">
        {NAV.map((n) => <a key={n.label} className="mobilemenu__link" href={n.href} onClick={onClose}>{n.label}</a>)}
      </nav>
      <div style={{ marginTop: "var(--space-7)" }}>
        <Button variant="primary" size="lg" onClick={() => { onClose(); onEnquire(); }} style={{ width: "100%" }}>Book now</Button>
      </div>
    </div>
  );
}

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
            <a href="our-boats.html">San Cristóbal, Galápagos</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Sportfish Galápagos · San Cristóbal · Ecuador</span>
          <span>Catch &amp; release · Galápagos National Park</span>
        </div>
      </div>
    </footer>
  );
}

function Enquire({ open, onClose }) {
  useEffect(() => { drawIcons(); }, [open]);
  return (
    <React.Fragment>
      <div className={"enquire-scrim" + (open ? " is-open" : "")} onClick={onClose}></div>
      <aside className={"enquire" + (open ? " is-open" : "")} aria-hidden={!open} aria-label="Plan your charter">
        <div className="enquire__head">
          <div>
            <p className="eyebrow eyebrow--ondark">Get in touch</p>
            <h2 className="enquire__title">Plan your charter</h2>
          </div>
          <button className="iconbtn-plain" aria-label="Close" onClick={onClose}><Ic n="x" /></button>
        </div>
        <form className="enquire__body" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
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
    </React.Fragment>
  );
}

function Shell({ children }) {
  const [menu, setMenu] = useState(false);
  const [enquire, setEnquire] = useState(false);
  useReveal();
  useEffect(() => { drawIcons(); });
  useEffect(() => {
    const open = () => { setMenu(false); setEnquire(true); };
    window.addEventListener("sf-open-enquire", open);
    const key = (e) => { if (e.key === "Escape") { setMenu(false); setEnquire(false); } };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("sf-open-enquire", open); window.removeEventListener("keydown", key); };
  }, []);
  useEffect(() => { document.body.style.overflow = (menu || enquire) ? "hidden" : ""; }, [menu, enquire]);
  return (
    <React.Fragment>
      <Nav onEnquire={() => setEnquire(true)} onMenu={() => setMenu(true)} />
      <MobileMenu open={menu} onClose={() => setMenu(false)} onEnquire={() => { setMenu(false); setEnquire(true); }} />
      <main>{children}</main>
      <Footer />
      <Enquire open={enquire} onClose={() => setEnquire(false)} />
    </React.Fragment>
  );
}

Object.assign(window, { Shell, Nav, MobileMenu, Footer, Enquire, Ic, drawIcons, useReveal, openEnquire, NAV, IMG, LOGO_WHITE });
setTimeout(drawIcons, 200);
