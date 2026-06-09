import * as React from 'react';

/**
 * Primary call-to-action button for the Sportfish Galápagos brand.
 * Pill-shaped, uppercase, tracked. Coral by default; outline & on-dark variants.
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor instead of a button. */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
