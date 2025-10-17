import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStore } from './store/root.store';
import { StoreProvider } from './store/store.provider';

const rootStore = new RootStore();
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider store={rootStore}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </StoreProvider>
  );
}
