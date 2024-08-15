import React, { createContext, useContext } from 'react';
import { useSessionStorage as useSessionStorageOriginal } from '../functions/useSessionStorage';

const SessionStorageContext = createContext();

export const SessionStorageProvider = ({ children }) => {
  const sessionStorageValues = useSessionStorageOriginal();
  return (
    <SessionStorageContext.Provider value={sessionStorageValues}>
      {children}
    </SessionStorageContext.Provider>
  );
};

export const useSessionStorage = () => useContext(SessionStorageContext);