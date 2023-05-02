import { StateSchema } from '@/app/providers/StoreProvider';

export const getTableCoordinates = (state: StateSchema) => state.interactiveTable?.tableCoordinates;
