export { getDoubleBetsButtons } from './model/selectors/getDoubleBitsButtons/getDoubleBetsButtons';
export { getSectionBetsButtons } from './model/selectors/getSectionBitsButtons/getSectionBetsButtons';
export { getSpecialBetsButtons } from './model/selectors/getSpecialBitsButtons/getSpecialBetsButtons';
export { getTableCoordinates } from './model/selectors/getTableCoordinates/getTableCoordinates';
export { getZeroBetsButtons } from './model/selectors/getZeroBitsButtons/getZeroBetsButtons';

export { interactiveTableActions, interactiveTableReducer } from './model/slice/interactiveTableSlice';

export {
  InteractiveTableSchema,
  TableCoordinates,
  SectionBetsButtons,
  SpecialBetsButtons,
  ZeroBetsButtons,
  DoubleBetsButtons,
  BetsIdTypes,
  BetsNumbers,
  ChipsNominals,
} from './model/types/interactiveTable';
