import { StateSchema } from 'app/providers/StoreProvider';

export const getZeroBitsButtons = (state: StateSchema) => state.interactiveTable?.zeroBitsButtons;
