import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentHover = (state: StateSchema) => state.interactiveTable?.currentHover;
