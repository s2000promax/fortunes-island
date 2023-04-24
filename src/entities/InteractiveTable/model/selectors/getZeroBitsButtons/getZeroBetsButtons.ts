import { StateSchema } from 'app/providers/StoreProvider';

export const getZeroBetsButtons = (state: StateSchema) => state.interactiveTable?.zeroBetsButtons;
