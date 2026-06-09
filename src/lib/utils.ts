import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to combine class names with Tailwind conflict resolution.
 * Wraps `clsx` for conditional classes and `twMerge` to intelligently merge Tailwind utilities.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
