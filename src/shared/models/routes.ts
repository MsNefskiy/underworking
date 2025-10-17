import { Shift } from './shift';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const ROUTES = {
    SHIFT_LIST: "ShiftList",
    SHIFT: "Shift",
} as const

// Параметры для каждого экрана
export type RootStackParamList = {
    [ROUTES.SHIFT_LIST]: undefined; // Без параметров
    [ROUTES.SHIFT]: {
        shiftId: string;
        shift?: Shift; // Опционально, для передачи данных без повторного запроса
    };
};

// Типы пропсов для экранов
export type ShiftListScreenProps = NativeStackScreenProps<
    RootStackParamList,
    typeof ROUTES.SHIFT_LIST
>;

export type ShiftDetailsScreenProps = NativeStackScreenProps<
    RootStackParamList,
    typeof ROUTES.SHIFT
>;
