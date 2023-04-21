
export type TableCoordinates = {
  id: BitsNumbers;
  row: number;
  column: number;
  dx: number;
  dz: number;
  isHover: boolean;
}

export enum SectionBitsButtons {
  'Bits_Section_1' = 'Bits_Section_1',
  'Bits_Section_2' = 'Bits_Section_2',
  'Bits_Section_3' = 'Bits_Section_3',
}

export enum SpecialBitsButtons {
  'Bits_1-18' = 'Bits_1-18',
  'Bits_Even' = 'Bits_Even',
  'Bits_Red' = 'Bits_Red',
  'Bits_Black' = 'Bits_Black',
  'Bits_Odd' = 'Bits_Odd',
  'Bits_19-36' = 'Bits_19-36',
};

export enum ZeroBitsButtons {
  'Bit_0' = 'Bit_0',
  'Bit_00' = 'Bit_00',
};

export enum DoubleBitsButtons {
  'Bit2-1_1' = 'Bit2-1_1',
  'Bit2-1_2' = 'Bit2-1_2',
  'Bit2-1_3' = 'Bit2-1_3',
};

export enum BitsNumbers {
  'Bit_1' = 1,
  'Bit_2',
  'Bit_3',
  'Bit_4',
  'Bit_5',
  'Bit_6',
  'Bit_7',
  'Bit_8',
  'Bit_9',
  'Bit_10',
  'Bit_11',
  'Bit_12',
  'Bit_13',
  'Bit_14',
  'Bit_15',
  'Bit_16',
  'Bit_17',
  'Bit_18',
  'Bit_19',
  'Bit_20',
  'Bit_21',
  'Bit_22',
  'Bit_23',
  'Bit_24',
  'Bit_25',
  'Bit_26',
  'Bit_27',
  'Bit_28',
  'Bit_29',
  'Bit_30',
  'Bit_31',
  'Bit_32',
  'Bit_33',
  'Bit_34',
  'Bit_35',
  'Bit_36',
}

export type BitsIdTypes =
  | BitsNumbers | SectionBitsButtons | SpecialBitsButtons | ZeroBitsButtons | DoubleBitsButtons | undefined;

export type HoverIdTypes =
  | SectionBitsButtons | SpecialBitsButtons | DoubleBitsButtons | undefined;

export interface InteractiveTableSchema {
  tableCoordinates: Array<TableCoordinates>;
  sectionBitsButtons: Array<SectionBitsButtons>;
  specialBitsButtons: Array<SpecialBitsButtons>;
  zeroBitsButtons: Array<ZeroBitsButtons>;
  doubleBitsButtons: Array<DoubleBitsButtons>;
  currentClicked: BitsIdTypes;
  currentHover: BitsIdTypes;
}
