import * as React from 'react';

/** A large serif figure with a caption — used in stat rows. */
export interface StatBlockProps {
  value: React.ReactNode;
  label: React.ReactNode;
  /** @default "start" */
  align?: 'start' | 'center';
  /** Reverse colours for placement on deep-sea sections. @default false */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function StatBlock(props: StatBlockProps): JSX.Element;
