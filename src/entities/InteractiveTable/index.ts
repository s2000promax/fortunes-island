export { getBetCoordinates } from './utils/utils';

export { getDoubleBetsButtons } from './model/selectors/getDoubleBitsButtons/getDoubleBetsButtons';
export { getSectionBetsButtons } from './model/selectors/getSectionBitsButtons/getSectionBetsButtons';
export { getSpecialBetsButtons } from './model/selectors/getSpecialBitsButtons/getSpecialBetsButtons';
export { getTableCoordinates } from './model/selectors/getTableCoordinates/getTableCoordinates';
export { getZeroBetsButtons } from './model/selectors/getZeroBitsButtons/getZeroBetsButtons';
export { getCurrentBetClicked } from './model/selectors/getCurrentBetClicked/getCurrentBetClicked';
export { getCurrentBets } from './model/selectors/getCurrentBets/getCurrentBets';
export { getCurrentChipClicked } from './model/selectors/getCurrentChipClicked/getCurrentChipClicked';

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
  CurrentBetsPositions,
  CurrentBet,
} from './model/types/interactiveTable';
