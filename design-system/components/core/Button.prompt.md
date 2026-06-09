Pill-shaped uppercase CTA — coral fill by default; use for the primary action on a section.

```jsx
<Button variant="primary" size="lg" href="/contact">Enquire now</Button>
<Button variant="secondary">View itineraries</Button>
<Button variant="light" iconRight={<i data-lucide="arrow-right"></i>}>Watch the film</Button>
```

- `variant`: `primary` (coral), `secondary` (deep-sea outline), `ghost` (text), `light` (translucent white, for use over photography).
- `size`: `sm` · `md` · `lg`.
- Pass `href` to render an `<a>`. Supports `iconLeft` / `iconRight` (e.g. a Lucide `<i data-lucide>` node).
