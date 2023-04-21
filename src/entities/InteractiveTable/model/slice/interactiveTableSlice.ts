import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  BitsIdTypes, DoubleBitsButtons,
  HoverIdTypes,
  InteractiveTableSchema,
} from '../types/interactiveTable';
import {
  TableCoordinatesArray,
  DoubleButsButtonsArray,
  SectionBitsButtonsArray,
  SpecialBitsButtonsArray,
  ZeroBitsButtonsArray,
} from '../../utils/utils';

const initialState: InteractiveTableSchema = {
  currentClicked: undefined,
  currentHover: undefined,
  tableCoordinates: TableCoordinatesArray,
  sectionBitsButtons: SectionBitsButtonsArray,
  specialBitsButtons: SpecialBitsButtonsArray,
  doubleBitsButtons: DoubleButsButtonsArray,
  zeroBitsButtons: ZeroBitsButtonsArray,
};

export const interactiveTableSlice = createSlice({
  name: 'interactiveTable',
  initialState,
  reducers: {
    setHovers: (state) => {

    },
    setCurrentClicked: (state, action: PayloadAction<BitsIdTypes>) => {
      state.currentClicked = action.payload;
    },
    setCurrentHovered: (state, action: PayloadAction<BitsIdTypes>) => {
      state.currentHover = action.payload;
    },
    setHighlightBits: (state) => {
      if (state.currentHover === DoubleBitsButtons['Bit2-1_1']) {
        state.tableCoordinates[2].isHover = true;
      }
    },
    removeCurrentHovered: (state) => {
      state.currentHover = undefined;
      state.tableCoordinates = TableCoordinatesArray;
    },

  },
});

export const { actions: interactiveTableActions } = interactiveTableSlice;
export const { reducer: interactiveTableReducer } = interactiveTableSlice;
