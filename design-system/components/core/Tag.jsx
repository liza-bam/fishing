import React from 'react';

/**
 * Pill chip — itinerary categories, filters, amenities.
 */
export function Tag({ children, variant = 'sand', iconLeft, style, ...rest }) {
  const variants = {
    sand:    { background: 'var(--surface-sand)', color: 'var(--c-deep-sea)', border: 'var(--border-width) solid transparent' },
    outline: { background: 'transparent', color: 'var(--text-body)', border: 'var(--border-width) solid var(--border-default)' },
    coral:   { background: 'var(--c-coral-100)', color: 'var(--c-coral-600)', border: 'var(--border-width) solid transparent' },
    deep:    { background: 'var(--c-deep-sea)', color: '#fff', border: 'var(--border-width) solid transparent' },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45em',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-caption)',
        fontWeight: 600,
        lineHeight: 1,
        padding: '7px 13px',
        borderRadius: 'var(--radius-pill)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
    </span>
  );
}
