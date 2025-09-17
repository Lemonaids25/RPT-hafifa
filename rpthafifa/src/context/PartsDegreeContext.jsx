import React, { createContext, useContext, useState, useCallback } from 'react';
import { createCollectionContext } from './CreateCollectionContext';
import { ALL_PART_IDS, PARTS_CONFIG } from '../config/parts';

const {
  CollectionContext: PartsDegreeContext,
  CollectionProvider,
  useCollection,
  useCollectionItem,
} = createCollectionContext();

const initialDegrees = ALL_PART_IDS.reduce((acc, partId) => {
  acc[partId] = 0;
  return acc;
}, {});

export function PartsDegreeProvider({ children }) {
  const [referencePart, setReferencePart] = useState(null);

  return (
    <CollectionProvider
      initialCollection={initialDegrees}
      referencePart={referencePart}
      setReferencePart={setReferencePart}
    >
      {children}
    </CollectionProvider>
  );
}

export function usePartDegree(part) {
  const { item: degree, set: onSet } = useCollectionItem(part);
  return { degree: degree ?? 0, onSet };
}

export function useAllDegrees() {
  const { collection } = useCollection();
  return collection;
}

export function useReferencePart() {
  const { referencePart, setReferencePart } = useCollection();
  return { referencePart, setReferencePart };
}