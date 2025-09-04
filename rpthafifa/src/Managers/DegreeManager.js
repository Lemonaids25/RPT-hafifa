import React, { useState } from 'react';

export default function DegreeManager({ children, initialDegree = 0 }) {
  const [degree, setDegree] = useState(initialDegree);

  const handleSet = (rotation) => setDegree(rotation);
  const handleReset = () => setDegree(0);

  // Render prop pattern: children is a function
  return children({ degree, handleSet, handleReset });
}