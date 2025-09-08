import React from 'react';

// Tiny reusable collapse/expand button
// Props:
// - collapsed: boolean
// - onClick: () => void
// - className?: string (defaults to 'collapse-toggle' to match CSS)
// - expandSymbol?: ReactNode (default '‹') when expanded
// - collapseSymbol?: ReactNode (default '›') when collapsed
export default function CollapseToggle({
  collapsed,
  onClick,
  className = 'collapse-toggle',
  expandSymbol = '‹',
  collapseSymbol = '›',
}) {
  const ariaLabel = collapsed ? 'Show Pitch and Roll' : 'Hide Pitch and Roll';
  const title = collapsed ? 'Expand' : 'Collapse';
  const symbol = collapsed ? collapseSymbol : expandSymbol;
  return (
    <button className={className} aria-label={ariaLabel} onClick={onClick} title={title}>
      {symbol}
    </button>
  );
}
