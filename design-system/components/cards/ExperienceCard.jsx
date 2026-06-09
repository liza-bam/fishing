import React from 'react';

/**
 * Image-forward content card — the workhorse for itineraries, islands, experiences.
 * Photograph on top with an optional corner badge; serif title; meta row; optional price/CTA footer.
 */
export function ExperienceCard({
  image,
  imageAlt = '',
  badge,
  eyebrow,
  title,
  description,
  meta = [],
  price,
  priceNote = 'per person',
  onClick,
  href,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  const tagProps = href ? { href } : {};

  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      className="bx-nudge"
      style={{
        display: 'block',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        boxShadow: 'var(--shadow-sm)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        cursor: href || onClick ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
      {...rest}
    >
      <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden' }}>
        <img
          src={image}
          alt={imageAlt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {badge && (
          <div style={{ position: 'absolute', top: 14, left: 14 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              fontSize: 'var(--text-overline)', fontWeight: 700,
              letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase',
              color: 'var(--c-deep-sea-900)', background: 'rgba(255,255,255,0.92)',
              padding: '6px 12px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
              backdropFilter: 'var(--blur-panel)',
            }}>{badge}</span>
          </div>
        )}
      </div>

      <div style={{ padding: '20px 20px 22px' }}>
        {eyebrow && (
          <div style={{
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--brand-secondary)', marginBottom: 9, whiteSpace: 'nowrap',
          }}>{eyebrow}</div>
        )}
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: '1.3rem', color: 'var(--text-strong)',
          lineHeight: 1.1, margin: '0 0 12px', textWrap: 'balance',
        }}>{title}</h3>

        {description && (
          <p style={{
            fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)',
            lineHeight: 1.5, margin: '0 0 16px', textWrap: 'pretty',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{description}</p>
        )}

        {meta.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: price ? 18 : 0 }}>
            {meta.map((m, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4em',
                fontSize: 'var(--text-caption)', fontWeight: 600,
                color: 'var(--c-deep-sea)', background: 'var(--surface-sand)',
                padding: '6px 11px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
              }}>{m.icon}{m.label}</span>
            ))}
          </div>
        )}

        {price && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
            paddingTop: 16, borderTop: '1px solid var(--hairline)',
          }}>
            <div style={{ minWidth: 0 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 600, color: 'var(--text-strong)' }}>{price}</span>
              <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-faint)', marginLeft: 7, whiteSpace: 'nowrap' }}>{priceNote}</span>
            </div>
            <i data-lucide="arrow-right" className="bx-nudge__x" style={{ width: 18, height: 18, color: 'var(--c-coral)', flex: 'none' }}></i>
          </div>
        )}
      </div>
    </Tag>
  );
}
