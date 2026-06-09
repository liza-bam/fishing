import React from 'react';

/**
 * Sportfish Galápagos primary action button.
 * Variants: primary (coral), secondary (deep-sea outline), ghost, light (on dark imagery).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '9px 16px', fontSize: '12px', letterSpacing: '0.14em' },
    md: { padding: '13px 26px', fontSize: '13px', letterSpacing: '0.16em' },
    lg: { padding: '17px 38px', fontSize: '14px', letterSpacing: '0.16em' },
  };

  const variants = {
    primary: {
      background: 'var(--action-bg)',
      color: 'var(--action-fg)',
      border: 'var(--border-width) solid transparent',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: 'var(--border-width) solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: 'var(--border-width) solid transparent',
    },
    light: {
      background: 'rgba(255,255,255,0.92)',
      color: 'var(--c-deep-sea-900)',
      border: 'var(--border-width) solid transparent',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6em',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const onEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--action-bg-hover)';
    if (variant === 'secondary') { e.currentTarget.style.background = 'var(--brand-primary)'; e.currentTarget.style.color = '#fff'; }
    if (variant === 'ghost') e.currentTarget.style.background = 'rgba(22,32,30,0.06)';
    if (variant === 'light') e.currentTarget.style.background = '#fff';
  };
  const onLeave = (e) => {
    if (disabled) return;
    Object.assign(e.currentTarget.style, {
      background: variants[variant].background,
      color: variants[variant].color,
    });
  };

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type, disabled };
  const cls = ['bx-nudge', 'bx-press', rest.className].filter(Boolean).join(' ');
  delete rest.className;

  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={cls}
      style={base}
      {...rest}
    >
      {iconLeft && <span className="bx-nudge__x bx-nudge__x--back">{iconLeft}</span>}
      {children}
      {iconRight && <span className="bx-nudge__x">{iconRight}</span>}
    </Tag>
  );
}
