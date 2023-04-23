import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RotatingDirection, RouletteSchema } from '../types/roulette';
import { BetsNumbers } from 'entities/InteractiveTable';

const initialState: RouletteSchema = {
  isRotating: false,
  isSceneReady: false,
  rotatingDirection: RotatingDirection.Сlockwise,
  previousNumber: undefined,
  currentNumber: undefined,
  allDrawnNumbers: [],
};

export const rouletteSlice = createSlice({
  name: 'roulette',
  initialState,
  reducers: {
    setSceneReady: (state) => {
      state.isSceneReady = true;
    },
    startRoulette: (state) => {
      state.isRotating = true;
    },
    stopRoulette: (state) => {
      state.isRotating = false;
    },

    addPreviousNumber: (state, action: PayloadAction<BetsNumbers>) => {
      state.previousNumber = action.payload;
    },
    addDrawnNumber: (state, action: PayloadAction<BetsNumbers>) => {
      state.allDrawnNumbers.push(action.payload);
    },
    changeRotation: (state) => {
      state.rotatingDirection = state.rotatingDirection === RotatingDirection.Сlockwise
        ? RotatingDirection.СounterСlockwise
        : RotatingDirection.Сlockwise;
    },
  },
});

export const { actions: rouletteActions } = rouletteSlice;
export const { reducer: rouletteReducer } = rouletteSlice;
