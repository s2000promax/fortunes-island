import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentBetClicked = (state: StateSchema) => state.interactiveTable?.currentBetClicked;
