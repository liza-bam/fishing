import React from 'react';

/**
 * Circular icon-only button. Wrap a Lucide <i data-lucide> node or any glyph.
 */
export function IconButton({
  icon,
  label,
  variant = 'solid',
  size = 'md',
  href,
  onClick,
  style,
  ...rest
}) {
  const dim = { sm: 36, md: 44, lg: 52 }[size];

  const variants = {
    solid:   { background: 'var(--brand-primary)', color: '#fff', border: 'var(--border-width) solid transparent' },
    outline: { background: 'transparent', color: 'var(--brand-primary)', border: 'var(--border-width) solid var(--border-strong)' },
    glass:   { background: 'rgba(255,255,255,0.16)', color: '#fff', border: 'var(--border-width) solid rgba(255,255,255,0.32)', backdropFilter: 'var(--blur-panel)' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
    ...variants[variant],
    ...style,
  };

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type: 'button' };

  return (
    <Tag
      {...tagProps}
      aria-label={label}
      title={label}
      onClick={onClick}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.94)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
      style={base}
      {...rest}
    >
      {icon}
    </Tag>
  );
}
