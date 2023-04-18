import { Color4 } from '@babylonjs/core';
import { ChipsNominals } from '../model/types/types';

export const ChipSizes = [
  { nominal: ChipsNominals.CHIP_25_CENTS, row: 2, column: 0, color: new Color4(0.65, 0.45, 0.24, 1) },
  { nominal: ChipsNominals.CHIP_50_CENTS, row: 2, column: 1, color: new Color4(0.6, 0.66, 0.62, 1) },
  { nominal: ChipsNominals.CHIP_1_DOLLAR, row: 2, column: 2, color: new Color4(0.7, 0.7, 0.7, 1) },
  { nominal: ChipsNominals.CHIP_5_DOLLARS, row: 2, column: 3, color: new Color4(1, 0.1, 0.1, 1) },
  { nominal: ChipsNominals.CHIP_10_DOLLARS, row: 1, column: 0, color: new Color4(0, 1, 1, 1) },
  { nominal: ChipsNominals.CHIP_25_DOLLARS, row: 1, column: 1, color: new Color4(0.39, 0.89, 0.1, 1) },
  { nominal: ChipsNominals.CHIP_50_DOLLARS, row: 1, column: 2, color: new Color4(0.1, 0.1, 1, 1) },
  { nominal: ChipsNominals.CHIP_100_DOLLARS, row: 1, column: 3, color: new Color4(0.1, 0.1, 0.1, 1) },
  { nominal: ChipsNominals.CHIP_500_DOLLARS, row: 0, column: 0, color: new Color4(0.69, 0.4, 0.12, 1) },
  { nominal: ChipsNominals.CHIP_1000_DOLLARS, row: 0, column: 1, color: new Color4(0.69, 0.59, 0.14, 1) },
  { nominal: ChipsNominals.CHIP_5000_DOLLARS, row: 0, column: 2, color: new Color4(1, 0.3, 0.3, 1) },
  { nominal: ChipsNominals.CHIP_10000_DOLLARS, row: 0, column: 3, color: new Color4(0.98, 0.45, 0.27, 1) },
];
