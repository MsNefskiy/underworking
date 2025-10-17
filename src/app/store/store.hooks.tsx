import { useContext } from "react";
import { RootStore } from "./root.store";
import { StoreContext } from "./store.provider";

export const useStore = (): RootStore => {
  const context = useContext(StoreContext);
  
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  
  return context;
};

export const useLocationStore = () => {
  const store = useStore();
  return store.locationStore;
};

export const useShiftStore = () => {
  const store = useStore();
  return store.shiftStore;
};