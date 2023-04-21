import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RouletteSchema } from '../types/roulette';

const initialState: RouletteSchema = {
  isMoving: false,
  isSceneReady: false,
};

export const rouletteSlice = createSlice({
  name: 'roulette',
  initialState,
  reducers: {
    setSceneReady: (state) => {
      state.isSceneReady = true;
    },
    startMoving: (state, action: PayloadAction<any>) => {
      state.isMoving = true;
    },
    stopMoving: (state) => {
      state.isMoving = false;
    },
  },
});

export const { actions: rouletteActions } = rouletteSlice;
export const { reducer: rouletteReducer } = rouletteSlice;
