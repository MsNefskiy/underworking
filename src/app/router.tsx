import { ShiftList } from '@features/shift-list/shift-list.screen';
import { Shift } from '@features/shift/shift.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, ROUTES } from '@shared/models/routes';
import { Providers } from './providers';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Providers>
      <Stack.Navigator
        initialRouteName={ROUTES.SHIFT_LIST}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Stack.Screen
          name={ROUTES.SHIFT_LIST}
          component={ShiftList}
          options={{
            title: 'Доступные смены',
            headerBackTitle: 'Назад',
          }}
        />
        <Stack.Screen
          name={ROUTES.SHIFT}
          component={Shift}
          options={({ route }) => ({
            title: route.params.shift?.companyName || 'Детали смены',
            headerBackTitle: 'Назад',
          })}
        />
      </Stack.Navigator>
    </Providers>
  );
};
