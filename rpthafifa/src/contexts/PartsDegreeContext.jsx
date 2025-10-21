import React, { createContext, useContext, useMemo, useReducer, useCallback } from 'react';
import { ALL_PARTS, INITIAL_DEGREES } from '../config/constants';

export const PARTS = ALL_PARTS;

const PartsDegreeContext = createContext(null);

// Action types
const SET_DEGREE = 'SET_DEGREE';
const SET_REFERENCE_PART = 'SET_REFERENCE_PART';

/**
 * Reducer for managing parts degrees state
 */
function partsDegreeReducer(state, action) {
  switch (action.type) {
    case SET_DEGREE:
      return {
        ...state,
        degrees: {
          ...state.degrees,
          [action.payload.part]: action.payload.value
        }
      };
    case SET_REFERENCE_PART:
      return {
        ...state,
        referencePart: action.payload
      };
    default:
      return state;
  }
}

export function PartsDegreeProvider({ children, initial = INITIAL_DEGREES }) {
  const [state, dispatch] = useReducer(partsDegreeReducer, {
    degrees: { ...INITIAL_DEGREES, ...initial },
    referencePart: null
  });

  const getDegree = useCallback((part) => state.degrees[part] ?? 0, [state.degrees]);
  
  const setDegree = useCallback((part, val) => {
    dispatch({ type: SET_DEGREE, payload: { part, value: val } });
  }, []);

  const setReferencePart = useCallback((partOrUpdater) => {
    if (typeof partOrUpdater === 'function') {
      dispatch({ type: SET_REFERENCE_PART, payload: partOrUpdater(state.referencePart) });
    } else {
      dispatch({ type: SET_REFERENCE_PART, payload: partOrUpdater });
    }
  }, [state.referencePart]);

  const value = useMemo(() => ({
    getDegree,
    setDegree,
    referencePart: state.referencePart,
    setReferencePart,
  }), [getDegree, setDegree, state.referencePart, setReferencePart]);

  return <PartsDegreeContext.Provider value={value}>{children}</PartsDegreeContext.Provider>;
}

export function usePartDegree(part) {
  const ctx = useContext(PartsDegreeContext);
  if (!ctx) throw new Error('usePartDegree must be used within PartsDegreeProvider');
  const { getDegree, setDegree} = ctx;
  const degree = getDegree(part);
  const onSet = useCallback((v) => setDegree(part, v), [setDegree, part]);
  return { degree, onSet};
}

export function useReferencePart() {
  const ctx = useContext(PartsDegreeContext);
  if (!ctx) throw new Error('useReferencePart must be used within PartsDegreeProvider');
  const { referencePart, setReferencePart } = ctx;
  return { referencePart, setReferencePart };
}
