import {
  BetsNumbers,
  DoubleBetsButtons,
  SectionBetsButtons,
  SpecialBetsButtons,
  TableCoordinates,
  ZeroBetsButtons,
} from '../model/types/interactiveTable';

export const TableCoordinatesArray: Array<TableCoordinates> = [
  { id: BetsNumbers['Bet_1'], row: 0, column: 0, dx: 0, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_2'], row: 1, column: 0, dx: 0, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_3'], row: 0, column: 1, dx: 0, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_4'], row: 1, column: 1, dx: 3, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_5'], row: 0, column: 2, dx: 3, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_6'], row: 1, column: 2, dx: 3, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_7'], row: 0, column: 3, dx: 6, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_8'], row: 1, column: 3, dx: 6, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_9'], row: 0, column: 4, dx: 6, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_10'], row: 1, column: 4, dx: 9, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_11'], row: 1, column: 5, dx: 9, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_12'], row: 0, column: 5, dx: 9, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_13'], row: 1, column: 6, dx: 12, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_14'], row: 0, column: 6, dx: 12, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_15'], row: 1, column: 7, dx: 12, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_16'], row: 0, column: 7, dx: 15, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_17'], row: 1, column: 8, dx: 15, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_18'], row: 0, column: 8, dx: 15, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_19'], row: 0, column: 9, dx: 18, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_20'], row: 1, column: 9, dx: 18, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_21'], row: 0, column: 10, dx: 18, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_22'], row: 1, column: 10, dx: 21, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_23'], row: 0, column: 11, dx: 21, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_24'], row: 1, column: 11, dx: 21, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_25'], row: 0, column: 12, dx: 24, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_26'], row: 1, column: 12, dx: 24, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_27'], row: 0, column: 13, dx: 24, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_28'], row: 1, column: 13, dx: 27, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_29'], row: 1, column: 14, dx: 27, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_30'], row: 0, column: 14, dx: 27, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_31'], row: 1, column: 15, dx: 30, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_32'], row: 0, column: 15, dx: 30, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_33'], row: 1, column: 16, dx: 30, dz: 4, isHover: false },

  { id: BetsNumbers['Bet_34'], row: 0, column: 16, dx: 33, dz: 0, isHover: false },
  { id: BetsNumbers['Bet_35'], row: 1, column: 17, dx: 33, dz: 2, isHover: false },
  { id: BetsNumbers['Bet_36'], row: 0, column: 17, dx: 33, dz: 4, isHover: false },
];

export const SectionBetsButtonsArray: Array<SectionBetsButtons> = [
  SectionBetsButtons['Bets_Section_1'],
  SectionBetsButtons['Bets_Section_2'],
  SectionBetsButtons['Bets_Section_3'],
];
export const SpecialBetsButtonsArray: Array<SpecialBetsButtons> = [
  SpecialBetsButtons['Bets_1-18'],
  SpecialBetsButtons['Bets_Even'],
  SpecialBetsButtons['Bets_Red'],
  SpecialBetsButtons['Bets_Black'],
  SpecialBetsButtons['Bets_Odd'],
  SpecialBetsButtons['Bets_19-36'],
];

export const ZeroBetsButtonsArray: Array<ZeroBetsButtons> = [
  ZeroBetsButtons['Bet_0'],
  ZeroBetsButtons['Bet_00'],
];

export const DoubleBetsButtonsArray: Array<DoubleBetsButtons> = [
  DoubleBetsButtons['Bet2-1_1'],
  DoubleBetsButtons['Bet2-1_2'],
  DoubleBetsButtons['Bet2-1_3'],
];

export const RedBets: Array<BetsNumbers> = [
  BetsNumbers.Bet_1,
  BetsNumbers.Bet_3,
  BetsNumbers.Bet_5,
  BetsNumbers.Bet_7,
  BetsNumbers.Bet_9,
  BetsNumbers.Bet_12,
  BetsNumbers.Bet_14,
  BetsNumbers.Bet_16,
  BetsNumbers.Bet_18,
  BetsNumbers.Bet_19,
  BetsNumbers.Bet_21,
  BetsNumbers.Bet_23,
  BetsNumbers.Bet_25,
  BetsNumbers.Bet_27,
  BetsNumbers.Bet_30,
  BetsNumbers.Bet_32,
  BetsNumbers.Bet_34,
  BetsNumbers.Bet_36,
];

export const BlackBets: Array<BetsNumbers> = [
  BetsNumbers.Bet_2,
  BetsNumbers.Bet_4,
  BetsNumbers.Bet_6,
  BetsNumbers.Bet_8,
  BetsNumbers.Bet_10,
  BetsNumbers.Bet_11,
  BetsNumbers.Bet_13,
  BetsNumbers.Bet_15,
  BetsNumbers.Bet_17,
  BetsNumbers.Bet_20,
  BetsNumbers.Bet_22,
  BetsNumbers.Bet_24,
  BetsNumbers.Bet_26,
  BetsNumbers.Bet_28,
  BetsNumbers.Bet_29,
  BetsNumbers.Bet_31,
  BetsNumbers.Bet_33,
  BetsNumbers.Bet_35,
];
