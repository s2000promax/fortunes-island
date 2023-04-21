import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  BetsIdTypes, ChipsNominals,
  DoubleBetsButtons,
  InteractiveTableSchema,
  SectionBetsButtons,
  SpecialBetsButtons,
} from '../types/interactiveTable';
import {
  TableCoordinatesArray,
  DoubleBetsButtonsArray,
  SectionBetsButtonsArray,
  SpecialBetsButtonsArray,
  ZeroBetsButtonsArray, RedBets, BlackBets,
} from '../../utils/utils';

const initialState: InteractiveTableSchema = {
  currentBetClicked: undefined,
  currentBets: [],
  currentHover: undefined,
  currentChipClicked: undefined,
  tableCoordinates: TableCoordinatesArray,
  sectionBetsButtons: SectionBetsButtonsArray,
  specialBetsButtons: SpecialBetsButtonsArray,
  doubleBetsButtons: DoubleBetsButtonsArray,
  zeroBetsButtons: ZeroBetsButtonsArray,
};

export const interactiveTableSlice = createSlice({
  name: 'interactiveTable',
  initialState,
  reducers: {
    setCurrentClicked: (state, action: PayloadAction<BetsIdTypes | ChipsNominals>) => {
      state.currentBetClicked = action.payload;

      if (state.currentChipClicked) {
        state.currentBets.push(
          {
            bet: action.payload,
            chip: state.currentChipClicked,
          });
      }
    },
    setChipsChoosed: (state, action: PayloadAction<ChipsNominals>) => {
      state.currentChipClicked = action.payload;
    },
    setCurrentHovered: (state, action: PayloadAction<BetsIdTypes>) => {
      state.currentHover = action.payload;
    },
    setHighlightBits: (state) => {
      if (state.currentHover === DoubleBetsButtons['Bet2-1_1']) {
        for (let i = 2; i <= 35; i += 3) {
          state.tableCoordinates[i].isHover = true;
        }
      }

      if (state.currentHover === DoubleBetsButtons['Bet2-1_2']) {
        for (let i = 1; i <= 34; i += 3) {
          state.tableCoordinates[i].isHover = true;
        }
      }

      if (state.currentHover === DoubleBetsButtons['Bet2-1_3']) {
        for (let i = 0; i <= 33; i += 3) {
          state.tableCoordinates[i].isHover = true;
        }
      }

      if (state.currentHover === SectionBetsButtons['Bets_Section_1']) {
        for (let i = 0; i <= 11; i += 1) {
          state.tableCoordinates[i].isHover = true;
        }
      }

      if (state.currentHover === SectionBetsButtons['Bets_Section_2']) {
        for (let i = 12; i <= 23; i += 1) {
          state.tableCoordinates[i].isHover = true;
        }
      }

      if (state.currentHover === SectionBetsButtons['Bets_Section_3']) {
        for (let i = 24; i <= 35; i += 1) {
          state.tableCoordinates[i].isHover = true;
        }
      }

      if (state.currentHover === SpecialBetsButtons['Bets_1-18']) {
        for (let i = 0; i <= 17; i += 1) {
          state.tableCoordinates[i].isHover = true;
        }
      }

      if (state.currentHover === SpecialBetsButtons['Bets_Even']) {
        for (let i = 0; i <= 35; i += 1) {
          if (i % 2 !== 0) {
            state.tableCoordinates[i].isHover = true;
          }
        }
      }

      if (state.currentHover === SpecialBetsButtons['Bets_Red']) {
        RedBets.forEach(bet => {
          state.tableCoordinates[bet - 1].isHover = true;
        });
      }

      if (state.currentHover === SpecialBetsButtons['Bets_Black']) {
        BlackBets.forEach(bet => {
          state.tableCoordinates[bet - 1].isHover = true;
        });
      }

      if (state.currentHover === SpecialBetsButtons['Bets_Odd']) {
        for (let i = 0; i <= 35; i += 1) {
          if (i % 2 === 0) {
            state.tableCoordinates[i].isHover = true;
          }
        }
      }

      if (state.currentHover === SpecialBetsButtons['Bets_19-36']) {
        for (let i = 18; i <= 35; i += 1) {
          state.tableCoordinates[i].isHover = true;
        }
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
