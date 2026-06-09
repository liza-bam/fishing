import * as React from 'react';

/** Uppercase tracked overline marker — image corners, eyebrows. */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "default" */
  tone?: 'default' | 'coral' | 'light';
  /** Adds a translucent capsule backdrop for use over photography. @default false */
  floating?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
