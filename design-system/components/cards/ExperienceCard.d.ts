import * as React from 'react';

/**
 * Image-forward card for itineraries, islands and experiences.
 */
export interface ExperienceCardProps {
  /** Image URL (rendered at 4:3). */
  image: string;
  imageAlt?: string;
  /** Floating corner badge text, e.g. "8 Days". */
  badge?: React.ReactNode;
  /** Uppercase eyebrow above the title. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Pill meta chips, e.g. [{icon, label:"Snorkeling"}]. */
  meta?: ExperienceCardMeta[];
  /** Price string, e.g. "$6,400". Shows the footer when present. */
  price?: React.ReactNode;
  /** @default "per person" */
  priceNote?: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function ExperienceCard(props: ExperienceCardProps): JSX.Element;

export interface ExperienceCardMeta {
  icon?: React.ReactNode;
  label: React.ReactNode;
}
