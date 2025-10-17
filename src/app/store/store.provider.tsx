import { createContext, useEffect } from 'react';
import { RootStore } from './root.store';

export const StoreContext = createContext<RootStore | undefined>(undefined);

interface StoreProviderProps {
  store: RootStore;
  children: React.ReactNode;
}

export const StoreProvider = ({ store, children }: StoreProviderProps) => {
  useEffect(() => {
    store.initialize();
  }, [store]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
