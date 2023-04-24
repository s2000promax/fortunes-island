import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentBets = (state: StateSchema) => state.interactiveTable?.currentBets;
