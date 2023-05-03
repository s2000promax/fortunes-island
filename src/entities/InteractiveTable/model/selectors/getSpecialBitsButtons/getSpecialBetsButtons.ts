import { StateSchema } from '@/app/providers/StoreProvider';

export const getSpecialBetsButtons = (state: StateSchema) => state.interactiveTable?.specialBetsButtons;
