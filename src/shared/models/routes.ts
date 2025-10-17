import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Shift } from './shift.types';

export const ROUTES = {
    SHIFT_LIST: "ShiftList",
    SHIFT: "Shift",
} as const

export type RootStackParamList = {
    [ROUTES.SHIFT_LIST]: undefined;
    [ROUTES.SHIFT]: {
        shiftId: string;
        shift?: Shift;
    };
};

export type ShiftListScreenProps = NativeStackScreenProps<
    RootStackParamList,
    typeof ROUTES.SHIFT_LIST
>;

export type ShiftDetailsScreenProps = NativeStackScreenProps<
    RootStackParamList,
    typeof ROUTES.SHIFT
>;
