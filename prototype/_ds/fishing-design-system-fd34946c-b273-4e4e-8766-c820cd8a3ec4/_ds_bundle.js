/* @ds-bundle: {"format":3,"namespace":"BelugaGalapagosDesignSystem_fd3494","components":[{"name":"ExperienceCard","sourcePath":"sportfish-galapagos-design/components/cards/ExperienceCard.jsx"},{"name":"StatBlock","sourcePath":"sportfish-galapagos-design/components/cards/StatBlock.jsx"},{"name":"Badge","sourcePath":"sportfish-galapagos-design/components/core/Badge.jsx"},{"name":"Button","sourcePath":"sportfish-galapagos-design/components/core/Button.jsx"},{"name":"IconButton","sourcePath":"sportfish-galapagos-design/components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"sportfish-galapagos-design/components/core/Tag.jsx"},{"name":"Input","sourcePath":"sportfish-galapagos-design/components/forms/Input.jsx"},{"name":"Select","sourcePath":"sportfish-galapagos-design/components/forms/Select.jsx"}],"sourceHashes":{"components/cards/ExperienceCard.jsx":"c05b9d56ef5b","components/cards/StatBlock.jsx":"dd42ae4e3834","components/core/Badge.jsx":"825435487922","components/core/Button.jsx":"3ffa47dda8d8","components/core/IconButton.jsx":"f730575f65fc","components/core/Tag.jsx":"e5fbb20e4ad4","components/forms/Input.jsx":"8740d31af2d9","components/forms/Select.jsx":"7b01c315b91d","sportfish-galapagos-design/components/cards/ExperienceCard.jsx":"c05b9d56ef5b","sportfish-galapagos-design/components/cards/StatBlock.jsx":"dd42ae4e3834","sportfish-galapagos-design/components/core/Badge.jsx":"825435487922","sportfish-galapagos-design/components/core/Button.jsx":"3ffa47dda8d8","sportfish-galapagos-design/components/core/IconButton.jsx":"f730575f65fc","sportfish-galapagos-design/components/core/Tag.jsx":"e5fbb20e4ad4","sportfish-galapagos-design/components/forms/Input.jsx":"8740d31af2d9","sportfish-galapagos-design/components/forms/Select.jsx":"7b01c315b91d"},"inlinedExternals":[],"duplicateExports":[{"name":"ExperienceCard","paths":["components/cards/ExperienceCard.jsx","sportfish-galapagos-design/components/cards/ExperienceCard.jsx"]},{"name":"StatBlock","paths":["components/cards/StatBlock.jsx","sportfish-galapagos-design/components/cards/StatBlock.jsx"]},{"name":"Badge","paths":["components/core/Badge.jsx","sportfish-galapagos-design/components/core/Badge.jsx"]},{"name":"Button","paths":["components/core/Button.jsx","sportfish-galapagos-design/components/core/Button.jsx"]},{"name":"IconButton","paths":["components/core/IconButton.jsx","sportfish-galapagos-design/components/core/IconButton.jsx"]},{"name":"Tag","paths":["components/core/Tag.jsx","sportfish-galapagos-design/components/core/Tag.jsx"]},{"name":"Input","paths":["components/forms/Input.jsx","sportfish-galapagos-design/components/forms/Input.jsx"]},{"name":"Select","paths":["components/forms/Select.jsx","sportfish-galapagos-design/components/forms/Select.jsx"]}],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BelugaGalapagosDesignSystem_fd3494 = window.BelugaGalapagosDesignSystem_fd3494 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ExperienceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Image-forward content card — the workhorse for itineraries, islands, experiences.
 * Photograph on top with an optional corner badge; serif title; meta row; optional price/CTA footer.
 */
function ExperienceCard({
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
  const tagProps = href ? {
    href
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    className: "bx-nudge",
    style: {
      display: 'block',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: href || onClick ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--c-deep-sea-900)',
      background: 'rgba(255,255,255,0.92)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      backdropFilter: 'var(--blur-panel)'
    }
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 22px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--brand-secondary)',
      marginBottom: 9,
      whiteSpace: 'nowrap'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.3rem',
      color: 'var(--text-strong)',
      lineHeight: 1.1,
      margin: '0 0 12px',
      textWrap: 'balance'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.5,
      margin: '0 0 16px',
      textWrap: 'pretty',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, description), meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: price ? 18 : 0
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      color: 'var(--c-deep-sea)',
      background: 'var(--surface-sand)',
      padding: '6px 11px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap'
    }
  }, m.icon, m.label))), price && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      paddingTop: 16,
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-faint)',
      marginLeft: 7,
      whiteSpace: 'nowrap'
    }
  }, priceNote)), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    className: "bx-nudge__x",
    style: {
      width: 18,
      height: 18,
      color: 'var(--c-coral)',
      flex: 'none'
    }
  }))));
}
Object.assign(__ds_scope, { ExperienceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ExperienceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A single figure: a large serif number with a label beneath.
 * Used in stat rows — "90% revenue stays local", "40 years", "12 guests".
 */
function StatBlock({
  value,
  label,
  align = 'start',
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align === 'center' ? 'center' : 'left',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      lineHeight: 1,
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 1.45,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      maxWidth: '22ch',
      marginInline: align === 'center' ? 'auto' : 0
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small uppercase overline marker — pinned to image corners or above titles.
 * Use `floating` over photography (adds a translucent backdrop).
 */
function Badge({
  children,
  tone = 'default',
  floating = false,
  style,
  ...rest
}) {
  const tones = {
    default: {
      color: 'var(--brand-secondary)'
    },
    coral: {
      color: 'var(--c-coral)'
    },
    light: {
      color: '#fff'
    }
  };
  const floatStyle = floating ? {
    background: 'rgba(255,255,255,0.92)',
    color: 'var(--c-deep-sea-900)',
    padding: '6px 12px',
    borderRadius: 'var(--radius-pill)',
    backdropFilter: 'var(--blur-panel)'
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sportfish Galápagos primary action button.
 * Variants: primary (coral), secondary (deep-sea outline), ghost, light (on dark imagery).
 */
function Button({
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
    sm: {
      padding: '9px 16px',
      fontSize: '12px',
      letterSpacing: '0.14em'
    },
    md: {
      padding: '13px 26px',
      fontSize: '13px',
      letterSpacing: '0.16em'
    },
    lg: {
      padding: '17px 38px',
      fontSize: '14px',
      letterSpacing: '0.16em'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action-bg)',
      color: 'var(--action-fg)',
      border: 'var(--border-width) solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: 'var(--border-width) solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: 'var(--border-width) solid transparent'
    },
    light: {
      background: 'rgba(255,255,255,0.92)',
      color: 'var(--c-deep-sea-900)',
      border: 'var(--border-width) solid transparent'
    }
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
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--action-bg-hover)';
    if (variant === 'secondary') {
      e.currentTarget.style.background = 'var(--brand-primary)';
      e.currentTarget.style.color = '#fff';
    }
    if (variant === 'ghost') e.currentTarget.style.background = 'rgba(22,32,30,0.06)';
    if (variant === 'light') e.currentTarget.style.background = '#fff';
  };
  const onLeave = e => {
    if (disabled) return;
    Object.assign(e.currentTarget.style, {
      background: variants[variant].background,
      color: variants[variant].color
    });
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  const cls = ['bx-nudge', 'bx-press', rest.className].filter(Boolean).join(' ');
  delete rest.className;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    className: cls,
    style: base
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "bx-nudge__x bx-nudge__x--back"
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "bx-nudge__x"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon-only button. Wrap a Lucide <i data-lucide> node or any glyph.
 */
function IconButton({
  icon,
  label,
  variant = 'solid',
  size = 'md',
  href,
  onClick,
  style,
  ...rest
}) {
  const dim = {
    sm: 36,
    md: 44,
    lg: 52
  }[size];
  const variants = {
    solid: {
      background: 'var(--brand-primary)',
      color: '#fff',
      border: 'var(--border-width) solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: 'var(--border-width) solid var(--border-strong)'
    },
    glass: {
      background: 'rgba(255,255,255,0.16)',
      color: '#fff',
      border: 'var(--border-width) solid rgba(255,255,255,0.32)',
      backdropFilter: 'var(--blur-panel)'
    }
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
    ...style
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type: 'button'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.06)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1.06)';
    },
    style: base
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill chip — itinerary categories, filters, amenities.
 */
function Tag({
  children,
  variant = 'sand',
  iconLeft,
  style,
  ...rest
}) {
  const variants = {
    sand: {
      background: 'var(--surface-sand)',
      color: 'var(--c-deep-sea)',
      border: 'var(--border-width) solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: 'var(--border-width) solid var(--border-default)'
    },
    coral: {
      background: 'var(--c-coral-100)',
      color: 'var(--c-coral-600)',
      border: 'var(--border-width) solid transparent'
    },
    deep: {
      background: 'var(--c-deep-sea)',
      color: '#fff',
      border: 'var(--border-width) solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled text input with the Sportfish underline-and-fill treatment.
 */
function Input({
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
  const border = focused ? 'var(--brand-secondary)' : onDark ? 'var(--border-on-dark)' : 'var(--border-default)';
  const bg = onDark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: labelColor,
      marginBottom: 8
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-coral)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    className: onDark ? 'bx-field bx-field--dark' : 'bx-field',
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body-sm)',
      color: 'rgb(105, 113, 111)',
      marginTop: 6
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled select control matching the Input treatment.
 */
function Select({
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
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: labelColor,
      marginBottom: 8
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-coral)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    onChange: onChange,
    required: required,
    style: {
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
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 17,
      height: 17,
      color: onDark ? 'var(--c-surf)' : 'var(--text-muted)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// sportfish-galapagos-design/components/cards/ExperienceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Image-forward content card — the workhorse for itineraries, islands, experiences.
 * Photograph on top with an optional corner badge; serif title; meta row; optional price/CTA footer.
 */
function ExperienceCard({
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
  const tagProps = href ? {
    href
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    className: "bx-nudge",
    style: {
      display: 'block',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: href || onClick ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--c-deep-sea-900)',
      background: 'rgba(255,255,255,0.92)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      backdropFilter: 'var(--blur-panel)'
    }
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 22px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--brand-secondary)',
      marginBottom: 9,
      whiteSpace: 'nowrap'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.3rem',
      color: 'var(--text-strong)',
      lineHeight: 1.1,
      margin: '0 0 12px',
      textWrap: 'balance'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.5,
      margin: '0 0 16px',
      textWrap: 'pretty',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, description), meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: price ? 18 : 0
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      color: 'var(--c-deep-sea)',
      background: 'var(--surface-sand)',
      padding: '6px 11px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap'
    }
  }, m.icon, m.label))), price && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      paddingTop: 16,
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-faint)',
      marginLeft: 7,
      whiteSpace: 'nowrap'
    }
  }, priceNote)), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    className: "bx-nudge__x",
    style: {
      width: 18,
      height: 18,
      color: 'var(--c-coral)',
      flex: 'none'
    }
  }))));
}
Object.assign(__ds_scope, { ExperienceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sportfish-galapagos-design/components/cards/ExperienceCard.jsx", error: String((e && e.message) || e) }); }

// sportfish-galapagos-design/components/cards/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A single figure: a large serif number with a label beneath.
 * Used in stat rows — "90% revenue stays local", "40 years", "12 guests".
 */
function StatBlock({
  value,
  label,
  align = 'start',
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align === 'center' ? 'center' : 'left',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      lineHeight: 1,
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 1.45,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      maxWidth: '22ch',
      marginInline: align === 'center' ? 'auto' : 0
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sportfish-galapagos-design/components/cards/StatBlock.jsx", error: String((e && e.message) || e) }); }

// sportfish-galapagos-design/components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small uppercase overline marker — pinned to image corners or above titles.
 * Use `floating` over photography (adds a translucent backdrop).
 */
function Badge({
  children,
  tone = 'default',
  floating = false,
  style,
  ...rest
}) {
  const tones = {
    default: {
      color: 'var(--brand-secondary)'
    },
    coral: {
      color: 'var(--c-coral)'
    },
    light: {
      color: '#fff'
    }
  };
  const floatStyle = floating ? {
    background: 'rgba(255,255,255,0.92)',
    color: 'var(--c-deep-sea-900)',
    padding: '6px 12px',
    borderRadius: 'var(--radius-pill)',
    backdropFilter: 'var(--blur-panel)'
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sportfish-galapagos-design/components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// sportfish-galapagos-design/components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sportfish Galápagos primary action button.
 * Variants: primary (coral), secondary (deep-sea outline), ghost, light (on dark imagery).
 */
function Button({
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
    sm: {
      padding: '9px 16px',
      fontSize: '12px',
      letterSpacing: '0.14em'
    },
    md: {
      padding: '13px 26px',
      fontSize: '13px',
      letterSpacing: '0.16em'
    },
    lg: {
      padding: '17px 38px',
      fontSize: '14px',
      letterSpacing: '0.16em'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action-bg)',
      color: 'var(--action-fg)',
      border: 'var(--border-width) solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: 'var(--border-width) solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: 'var(--border-width) solid transparent'
    },
    light: {
      background: 'rgba(255,255,255,0.92)',
      color: 'var(--c-deep-sea-900)',
      border: 'var(--border-width) solid transparent'
    }
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
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--action-bg-hover)';
    if (variant === 'secondary') {
      e.currentTarget.style.background = 'var(--brand-primary)';
      e.currentTarget.style.color = '#fff';
    }
    if (variant === 'ghost') e.currentTarget.style.background = 'rgba(22,32,30,0.06)';
    if (variant === 'light') e.currentTarget.style.background = '#fff';
  };
  const onLeave = e => {
    if (disabled) return;
    Object.assign(e.currentTarget.style, {
      background: variants[variant].background,
      color: variants[variant].color
    });
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  const cls = ['bx-nudge', 'bx-press', rest.className].filter(Boolean).join(' ');
  delete rest.className;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    className: cls,
    style: base
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "bx-nudge__x bx-nudge__x--back"
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "bx-nudge__x"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sportfish-galapagos-design/components/core/Button.jsx", error: String((e && e.message) || e) }); }

// sportfish-galapagos-design/components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon-only button. Wrap a Lucide <i data-lucide> node or any glyph.
 */
function IconButton({
  icon,
  label,
  variant = 'solid',
  size = 'md',
  href,
  onClick,
  style,
  ...rest
}) {
  const dim = {
    sm: 36,
    md: 44,
    lg: 52
  }[size];
  const variants = {
    solid: {
      background: 'var(--brand-primary)',
      color: '#fff',
      border: 'var(--border-width) solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: 'var(--border-width) solid var(--border-strong)'
    },
    glass: {
      background: 'rgba(255,255,255,0.16)',
      color: '#fff',
      border: 'var(--border-width) solid rgba(255,255,255,0.32)',
      backdropFilter: 'var(--blur-panel)'
    }
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
    ...style
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type: 'button'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.06)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1.06)';
    },
    style: base
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sportfish-galapagos-design/components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// sportfish-galapagos-design/components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill chip — itinerary categories, filters, amenities.
 */
function Tag({
  children,
  variant = 'sand',
  iconLeft,
  style,
  ...rest
}) {
  const variants = {
    sand: {
      background: 'var(--surface-sand)',
      color: 'var(--c-deep-sea)',
      border: 'var(--border-width) solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: 'var(--border-width) solid var(--border-default)'
    },
    coral: {
      background: 'var(--c-coral-100)',
      color: 'var(--c-coral-600)',
      border: 'var(--border-width) solid transparent'
    },
    deep: {
      background: 'var(--c-deep-sea)',
      color: '#fff',
      border: 'var(--border-width) solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sportfish-galapagos-design/components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// sportfish-galapagos-design/components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled text input with the Sportfish underline-and-fill treatment.
 */
function Input({
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
  const border = focused ? 'var(--brand-secondary)' : onDark ? 'var(--border-on-dark)' : 'var(--border-default)';
  const bg = onDark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: labelColor,
      marginBottom: 8
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-coral)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    className: onDark ? 'bx-field bx-field--dark' : 'bx-field',
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body-sm)',
      color: 'rgb(105, 113, 111)',
      marginTop: 6
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sportfish-galapagos-design/components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// sportfish-galapagos-design/components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled select control matching the Input treatment.
 */
function Select({
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
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: labelColor,
      marginBottom: 8
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-coral)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    onChange: onChange,
    required: required,
    style: {
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
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 17,
      height: 17,
      color: onDark ? 'var(--c-surf)' : 'var(--text-muted)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "sportfish-galapagos-design/components/forms/Select.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ExperienceCard = __ds_scope.ExperienceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
