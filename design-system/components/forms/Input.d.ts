import * as React from 'react';

/** Labelled text input. Set `onDark` for use on deep-sea sections. */
export interface InputProps {
  label?: string;
  id?: string;
  /** @default "text" */
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  hint?: string;
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
