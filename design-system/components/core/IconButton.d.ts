import * as React from 'react';

/** Circular icon-only button — nav arrows, play, share, menu. */
export interface IconButtonProps {
  /** Icon node, e.g. <i data-lucide="arrow-right"></i> */
  icon: React.ReactNode;
  /** Accessible label (also the tooltip). */
  label: string;
  /** @default "solid" */
  variant?: 'solid' | 'outline' | 'glass';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
