import React from 'react';

/**
 * A single figure: a large serif number with a label beneath.
 * Used in stat rows — "90% revenue stays local", "40 years", "12 guests".
 */
export function StatBlock({ value, label, align = 'start', onDark = false, style, ...rest }) {
  return (
    <div style={{ textAlign: align === 'center' ? 'center' : 'left', ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
        lineHeight: 1,
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
        letterSpacing: '-0.01em',
      }}>{value}</div>
      <div style={{
        marginTop: 12,
        fontSize: 'var(--text-body-sm)',
        lineHeight: 1.45,
        color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        maxWidth: '22ch',
        marginInline: align === 'center' ? 'auto' : 0,
      }}>{label}</div>
    </div>
  );
}
