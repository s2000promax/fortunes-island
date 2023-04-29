import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentWinDelta = (state: StateSchema) => state.roulette?.currentWinDelta;
