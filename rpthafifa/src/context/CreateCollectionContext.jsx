import React, { createContext, useContext, useState, useCallback } from 'react';

export function createCollectionContext() {
  const CollectionContext = createContext(null);

  function CollectionProvider({ children, initialCollection = {}, ...rest }) {
    const [collection, setCollection] = useState(initialCollection);

    const setItem = useCallback((id, value) => {
      setCollection(prev => ({ ...prev, [id]: value }));
    }, []);

    const removeItem = useCallback((id) => {
      setCollection(prev => {
        const newCollection = { ...prev };
        delete newCollection[id];
        return newCollection;
      });
    }, []);

    const value = { collection, setItem, removeItem, ...rest };

    return (
      <CollectionContext.Provider value={value}>
        {children}
      </CollectionContext.Provider>
    );
  }

  function useCollection() {
    const context = useContext(CollectionContext);
    if (!context) {
      throw new Error('useCollection must be used within a CollectionProvider');
    }
    return context;
  }

  function useCollectionItem(id) {
    const { collection, setItem, removeItem } = useCollection();
    const item = collection[id];

    const set = useCallback((value) => {
      setItem(id, value);
    }, [id, setItem]);

    const remove = useCallback(() => {
      removeItem(id);
    }, [id, removeItem]);

    return { item, set, remove };
  }

  return {
    CollectionContext,
    CollectionProvider,
    useCollection,
    useCollectionItem,
  };
}