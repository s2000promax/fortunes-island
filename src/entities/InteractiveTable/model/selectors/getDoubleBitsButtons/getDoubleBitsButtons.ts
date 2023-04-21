import { StateSchema } from 'app/providers/StoreProvider';

export const getDoubleBitsButtons = (state: StateSchema) => state.interactiveTable?.doubleBitsButtons;
