import React from 'react';

/**
 * Labelled select control matching the Input treatment.
 */
export function Select({
  label,
  id,
  options = [],
  value,
  onChange,
  required = false,
  onDark = false,
  style,
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const labelColor = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const fg = onDark ? 'var(--text-on-dark)' : 'var(--text-strong)';
  const bg = onDark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)';
  const border = onDark ? 'var(--border-on-dark)' : 'var(--border-default)';

  return (
    <label htmlFor={fieldId} style={{ display: 'block', ...style }}>
      {label && (
        <span style={{
          display: 'block',
          fontSize: 'var(--text-overline)',
          fontWeight: 700,
          letterSpacing: 'var(--tracking-wide)',
          textTransform: 'uppercase',
          color: labelColor,
          marginBottom: 8,
        }}>{label}{required && <span style={{ color: 'var(--c-coral)' }}> *</span>}</span>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={fieldId}
          value={value}
          onChange={onChange}
          required={required}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            appearance: 'none',
            WebkitAppearance: 'none',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-body)',
            color: fg,
            background: bg,
            border: `var(--border-width) solid ${border}`,
            borderRadius: 'var(--radius-md)',
            padding: '13px 40px 13px 15px',
            outline: 'none',
            cursor: 'pointer',
          }}
          {...rest}
        >
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <i data-lucide="chevron-down" style={{
          position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
          width: 17, height: 17, color: onDark ? 'var(--c-surf)' : 'var(--text-muted)', pointerEvents: 'none',
        }}></i>
      </div>
    </label>
  );
}
