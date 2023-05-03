import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsRotating = (state: StateSchema) => state.roulette?.isRotating;
