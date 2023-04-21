import {
  SpecialBitsButtons,
  TableCoordinates,
  ZeroBitsButtons,
  BitsNumbers,
  DoubleBitsButtons,
  SectionBitsButtons,
} from '../model/types/interactiveTable';

export const TableCoordinatesArray: Array<TableCoordinates> = [
  { id: BitsNumbers['Bit_1'], row: 0, column: 0, dx: 0, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_2'], row: 1, column: 0, dx: 0, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_3'], row: 0, column: 1, dx: 0, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_4'], row: 1, column: 1, dx: 3, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_5'], row: 0, column: 2, dx: 3, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_6'], row: 1, column: 2, dx: 3, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_7'], row: 0, column: 3, dx: 6, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_8'], row: 1, column: 3, dx: 6, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_9'], row: 0, column: 4, dx: 6, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_10'], row: 1, column: 4, dx: 9, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_11'], row: 1, column: 5, dx: 9, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_12'], row: 0, column: 5, dx: 9, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_13'], row: 1, column: 6, dx: 12, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_14'], row: 0, column: 6, dx: 12, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_15'], row: 1, column: 7, dx: 12, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_16'], row: 0, column: 7, dx: 15, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_17'], row: 1, column: 8, dx: 15, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_18'], row: 0, column: 8, dx: 15, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_19'], row: 0, column: 9, dx: 18, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_20'], row: 1, column: 9, dx: 18, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_21'], row: 0, column: 10, dx: 18, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_22'], row: 1, column: 10, dx: 21, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_23'], row: 0, column: 11, dx: 21, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_24'], row: 1, column: 11, dx: 21, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_25'], row: 0, column: 12, dx: 24, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_26'], row: 1, column: 12, dx: 24, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_27'], row: 0, column: 13, dx: 24, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_28'], row: 1, column: 13, dx: 27, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_29'], row: 1, column: 14, dx: 27, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_30'], row: 0, column: 14, dx: 27, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_31'], row: 1, column: 15, dx: 30, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_32'], row: 0, column: 15, dx: 30, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_33'], row: 1, column: 16, dx: 30, dz: 4, isHover: false },

  { id: BitsNumbers['Bit_34'], row: 0, column: 16, dx: 33, dz: 0, isHover: false },
  { id: BitsNumbers['Bit_35'], row: 1, column: 17, dx: 33, dz: 2, isHover: false },
  { id: BitsNumbers['Bit_36'], row: 0, column: 17, dx: 33, dz: 4, isHover: false },
];

export const SectionBitsButtonsArray: Array<SectionBitsButtons> = [
  SectionBitsButtons['Bits_Section_1'],
  SectionBitsButtons['Bits_Section_2'],
  SectionBitsButtons['Bits_Section_3'],
];
export const SpecialBitsButtonsArray: Array<SpecialBitsButtons> = [
  SpecialBitsButtons['Bits_1-18'],
  SpecialBitsButtons['Bits_Even'],
  SpecialBitsButtons['Bits_Red'],
  SpecialBitsButtons['Bits_Black'],
  SpecialBitsButtons['Bits_Odd'],
  SpecialBitsButtons['Bits_19-36'],
];

export const ZeroBitsButtonsArray: Array<ZeroBitsButtons> = [
  ZeroBitsButtons['Bit_0'],
  ZeroBitsButtons['Bit_00'],
];

export const DoubleButsButtonsArray: Array<DoubleBitsButtons> = [
  DoubleBitsButtons['Bit2-1_1'],
  DoubleBitsButtons['Bit2-1_2'],
  DoubleBitsButtons['Bit2-1_3'],
];
