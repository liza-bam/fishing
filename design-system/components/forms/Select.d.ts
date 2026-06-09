import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

/** Labelled select with a custom chevron. */
export interface SelectProps {
  label?: string;
  id?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
