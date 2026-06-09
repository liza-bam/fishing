import React from 'react';

/**
 * Small uppercase overline marker — pinned to image corners or above titles.
 * Use `floating` over photography (adds a translucent backdrop).
 */
export function Badge({ children, tone = 'default', floating = false, style, ...rest }) {
  const tones = {
    default: { color: 'var(--brand-secondary)' },
    coral:   { color: 'var(--c-coral)' },
    light:   { color: '#fff' },
  };

  const floatStyle = floating
    ? {
        background: 'rgba(255,255,255,0.92)',
        color: 'var(--c-deep-sea-900)',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        backdropFilter: 'var(--blur-panel)',
      }
    : {};

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-overline)',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        lineHeight: 1,
        ...tones[tone],
        ...floatStyle,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
