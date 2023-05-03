import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentBet, RotatingDirection, RouletteSchema } from '../types/roulette';
import { BetsNumbers } from '@/entities/InteractiveTable';
import { PhysicsImpostor } from '@babylonjs/core';

const initialState: RouletteSchema = {
  isRotating: false,
  isSceneReady: false,
  rotatingDirection: RotatingDirection.Сlockwise,
  currentBets: [],
  currentNumber: undefined,
  allDrawnNumbers: [],
  temporaryNumbers: [],
  currentWinDelta: 0,
};

export const rouletteSlice = createSlice({
  name: 'roulette',
  initialState,
  reducers: {
    setSceneReady: (state) => {
      state.isSceneReady = true;
    },
    startRoulette: (state) => {
      state.currentNumber = undefined;
      state.temporaryNumbers = [];
      state.isRotating = true;
    },
    addTemporaryDrawnNumber: (state, action: PayloadAction<string>) => {
      state.temporaryNumbers = [...state.temporaryNumbers, action.payload];
      if (state.temporaryNumbers.length > 10) {
        state.isRotating = false;
        state.currentNumber = state.temporaryNumbers[state.temporaryNumbers.length - 1];
        let winStatus = false;
        if (state.currentBets.length) {
          state.currentBets.forEach(bet => {
            if (Number(bet.bet) === Number(state.currentNumber)) {
              state.currentWinDelta += Number(bet.chip) * 2;
              winStatus = true;
            } else state.currentWinDelta -= Number(bet.chip);
          });
        }
        state.allDrawnNumbers.push({
          drawnNumber: state.currentNumber,
          status: winStatus,
        });
        state.temporaryNumbers = [];
        state.currentNumber = undefined;
        state.currentBets = [];
      }
    },
    fixResult: (state) => {
      state.currentWinDelta = 0;
    },
    changeRotation: (state) => {
      state.rotatingDirection = state.rotatingDirection === RotatingDirection.Сlockwise
        ? RotatingDirection.СounterСlockwise
        : RotatingDirection.Сlockwise;
    },
    addCurrentBet: (state, action: PayloadAction<CurrentBet>) => {
      state.currentBets = [...state.currentBets, action.payload];
    },
  },
});

export const { actions: rouletteActions } = rouletteSlice;
export const { reducer: rouletteReducer } = rouletteSlice;
