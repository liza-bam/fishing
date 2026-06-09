Image-forward card — the default way to present a charter, target species or boat. Photo on top with an optional corner badge; uppercase eyebrow; serif title; pill meta chips; optional price footer with a nudging arrow.

```jsx
<ExperienceCard
  image="/marlin.jpg"
  imageAlt="A blue marlin boatside"
  badge="Full day"
  eyebrow="Target species"
  title="Blue & Striped Marlin"
  meta={[
    { icon: <i data-lucide="anchor"></i>, label: "Sportfish" },
    { icon: <i data-lucide="users"></i>, label: "Up to 4" },
  ]}
  price="$1,950"
  priceNote="per person"
  href="/charters/marlin"
/>
```

Props: `image` (required), `imageAlt`, `badge`, `eyebrow`, `title`, `description` (optional — omit for a clean card), `meta` (array of `{ icon, label }`), `price`, `priceNote` (default `"per person"`), `href` or `onClick`.

- The **price footer** (and its arrow) renders only when `price` is set.
- Pass `href` to render an `<a>`; the whole card becomes the click target and lifts on hover.
- Keep titles to ~2 words per line; the card is designed ~300–380px wide.
