import { StateSchema } from '@/app/providers/StoreProvider';

export const getDoubleBetsButtons = (state: StateSchema) => state.interactiveTable?.doubleBetsButtons;
