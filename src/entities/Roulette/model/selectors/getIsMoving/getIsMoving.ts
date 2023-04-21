import { StateSchema } from 'app/providers/StoreProvider';

export const getIsMoving = (state: StateSchema) => state.roulette?.isMoving;
