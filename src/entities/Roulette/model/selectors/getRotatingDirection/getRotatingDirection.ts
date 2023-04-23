import { StateSchema } from 'app/providers/StoreProvider';

export const getRotatingDirection = (state: StateSchema) => state.roulette?.rotatingDirection;
