
export type TableCoordinates = {
  id: BetsNumbers;
  row: number;
  column: number;
  dx: number;
  dz: number;
  isHover: boolean;
}

export enum SectionBetsButtons {
  'Bets_Section_1' = 'Bets_Section_1',
  'Bets_Section_2' = 'Bets_Section_2',
  'Bets_Section_3' = 'Bets_Section_3',
}

export enum SpecialBetsButtons {
  'Bets_1-18' = 'Bets_1-18',
  'Bets_Even' = 'Bets_Even',
  'Bets_Red' = 'Bets_Red',
  'Bets_Black' = 'Bets_Black',
  'Bets_Odd' = 'Bets_Odd',
  'Bets_19-36' = 'Bets_19-36',
};

export enum ZeroBetsButtons {
  'Bet_0' = 'Bet_0',
  'Bet_00' = 'Bet_00',
};

export enum DoubleBetsButtons {
  'Bet2-1_1' = 'Bet2-1_1',
  'Bet2-1_2' = 'Bet2-1_2',
  'Bet2-1_3' = 'Bet2-1_3',
};

export enum BetsNumbers {
  'Bet_1' = 1,
  'Bet_2',
  'Bet_3',
  'Bet_4',
  'Bet_5',
  'Bet_6',
  'Bet_7',
  'Bet_8',
  'Bet_9',
  'Bet_10',
  'Bet_11',
  'Bet_12',
  'Bet_13',
  'Bet_14',
  'Bet_15',
  'Bet_16',
  'Bet_17',
  'Bet_18',
  'Bet_19',
  'Bet_20',
  'Bet_21',
  'Bet_22',
  'Bet_23',
  'Bet_24',
  'Bet_25',
  'Bet_26',
  'Bet_27',
  'Bet_28',
  'Bet_29',
  'Bet_30',
  'Bet_31',
  'Bet_32',
  'Bet_33',
  'Bet_34',
  'Bet_35',
  'Bet_36',
  'Bet_0',
  'Bet_00',
}

export enum ChipsNominals {
  CHIP_25_CENTS = 0.25,
  CHIP_50_CENTS = 0.5,
  CHIP_1_DOLLAR = 1,
  CHIP_5_DOLLARS = 5,
  CHIP_10_DOLLARS = 10,
  CHIP_25_DOLLARS = 25,
  CHIP_50_DOLLARS = 50,
  CHIP_100_DOLLARS = 100,
  CHIP_500_DOLLARS = 500,
  CHIP_1000_DOLLARS = 1000,
  CHIP_5000_DOLLARS = 5000,
  CHIP_10000_DOLLARS = 10000,
}

export type CurrentBet = {
  bet: BetsIdTypes | ChipsNominals;
  chip: ChipsNominals;
}

export type BetsIdTypes =
  | BetsNumbers | SectionBetsButtons | SpecialBetsButtons | ZeroBetsButtons | DoubleBetsButtons | undefined;

export type HoverIdTypes =
  | SectionBetsButtons | SpecialBetsButtons | DoubleBetsButtons | undefined;

export interface InteractiveTableSchema {
  tableCoordinates: Array<TableCoordinates>;
  sectionBetsButtons: Array<SectionBetsButtons>;
  specialBetsButtons: Array<SpecialBetsButtons>;
  zeroBetsButtons: Array<ZeroBetsButtons>;
  doubleBetsButtons: Array<DoubleBetsButtons>;
  currentBetClicked: BetsIdTypes | ChipsNominals | undefined;
  currentChipClicked: ChipsNominals | undefined;
  currentBets: Array<CurrentBet>;
  currentHover: BetsIdTypes;
}
