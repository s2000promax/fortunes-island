import { StateSchema } from 'app/providers/StoreProvider';

export const getSpecialBitsButtons = (state: StateSchema) => state.interactiveTable?.specialBitsButtons;
