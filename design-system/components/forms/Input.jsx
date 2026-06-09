import React from 'react';

/**
 * Labelled text input with the Sportfish underline-and-fill treatment.
 */
export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  hint,
  onDark = false,
  style,
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [focused, setFocused] = React.useState(false);

  const labelColor = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const fg = onDark ? 'var(--text-on-dark)' : 'var(--text-strong)';
  const border = focused
    ? 'var(--brand-secondary)'
    : (onDark ? 'var(--border-on-dark)' : 'var(--border-default)');
  const bg = onDark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)';

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
      <input
        id={fieldId}
        type={type}
        className={onDark ? 'bx-field bx-field--dark' : 'bx-field'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-body)',
          color: fg,
          background: bg,
          border: `var(--border-width) solid ${border}`,
          borderRadius: 'var(--radius-md)',
          padding: '13px 15px',
          outline: 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out)',
        }}
        {...rest}
      />
      {hint && (
        <span style={{ display: 'block', fontSize: 'var(--text-body-sm)', color: 'rgb(105, 113, 111)', marginTop: 6 }}>{hint}</span>
      )}
    </label>
  );
}
