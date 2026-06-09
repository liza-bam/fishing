import * as React from 'react';

/** Pill chip for categories, filters and amenities. */
export interface TagProps {
  children: React.ReactNode;
  /** @default "sand" */
  variant?: 'sand' | 'outline' | 'coral' | 'deep';
  iconLeft?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
