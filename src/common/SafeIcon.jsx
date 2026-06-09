import React from 'react';

/**
 * SafeIcon – tiny wrapper around any SVG/heroicon component.
 *
 * Props
 * -----
 * as      – The icon component (e.g., Bars3Icon, XMarkIcon).
 * className – Additional Tailwind classes.
 * ...rest – Any other SVG props (stroke, fill, etc.).
 */
export default function SafeIcon({ as: Icon, className = '', ...rest }) {
  if (!Icon) {
    console.warn('SafeIcon: missing `as` prop');
    return null;
  }
  return <Icon className={className} {...rest} />;
}
