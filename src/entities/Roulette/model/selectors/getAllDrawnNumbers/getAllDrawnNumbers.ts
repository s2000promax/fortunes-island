import { StateSchema } from 'app/providers/StoreProvider';

export const getAllDrawnNumbers = (state: StateSchema) => state.roulette?.allDrawnNumbers;
