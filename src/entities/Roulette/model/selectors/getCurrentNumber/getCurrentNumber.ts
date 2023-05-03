import { StateSchema } from '@/app/providers/StoreProvider';

export const getCurrentNumber = (state: StateSchema) => state.roulette?.currentNumber;
