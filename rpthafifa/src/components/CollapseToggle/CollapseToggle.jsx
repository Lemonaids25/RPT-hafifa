import React from 'react';

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
