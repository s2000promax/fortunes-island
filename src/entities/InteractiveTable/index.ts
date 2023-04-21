export { getDoubleBitsButtons } from './model/selectors/getDoubleBitsButtons/getDoubleBitsButtons';
export { getSectionBitsButtons } from './model/selectors/getSectionBitsButtons/getSectionBitsButtons';
export { getSpecialBitsButtons } from './model/selectors/getSpecialBitsButtons/getSpecialBitsButtons';
export { getTableCoordinates } from './model/selectors/getTableCoordinates/getTableCoordinates';
export { getZeroBitsButtons } from './model/selectors/getZeroBitsButtons/getZeroBitsButtons';

export { interactiveTableActions, interactiveTableReducer } from './model/slice/interactiveTableSlice';

export {
  InteractiveTableSchema,
  TableCoordinates,
  SectionBitsButtons,
  SpecialBitsButtons,
  ZeroBitsButtons,
  DoubleBitsButtons,
  BitsIdTypes,
} from './model/types/interactiveTable';
