import { StateSchema } from '@/app/providers/StoreProvider';

export const getSectionBetsButtons = (state: StateSchema) => state.interactiveTable?.sectionBetsButtons;
