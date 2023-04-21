import { StateSchema } from 'app/providers/StoreProvider';

export const getSectionBitsButtons = (state: StateSchema) => state.interactiveTable?.sectionBitsButtons;
