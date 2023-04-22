import { StateSchema } from 'app/providers/StoreProvider';

export const getPreviousNumber = (state: StateSchema) => state.roulette?.previousNumber;
