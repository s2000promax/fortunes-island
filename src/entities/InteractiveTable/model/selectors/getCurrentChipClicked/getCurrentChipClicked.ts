import { StateSchema } from '@/app/providers/StoreProvider';

export const getCurrentChipClicked = (state: StateSchema) => state.interactiveTable?.currentChipClicked;
