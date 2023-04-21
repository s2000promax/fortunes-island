import React, { useEffect } from 'react';
import { Table } from 'shared/uiKit/3D/Table';
import { useScene } from 'react-babylonjs';
import { Scene, Vector3 } from '@babylonjs/core';
import { InteractiveButton, InteractiveButtonSize } from 'shared/uiKit/3D/InteractiveButton';
import {
  TableCoordinates,
  SectionBitsButtons,
  SpecialBitsButtons,
  ZeroBitsButtons,
  DoubleBitsButtons,
  BitsIdTypes,
} from 'entities/InteractiveTable';
import { Chips, ChipSizes } from 'shared/uiKit/3D/Chips';
import { SpinButton } from 'shared/uiKit/3D/SpinButton';
import { HoverIdTypes } from 'entities/InteractiveTable/model/types/interactiveTable';

interface InteractiveTableProps {
  name?: string;
  position?: Vector3;
  onClickHandler: (id: BitsIdTypes) => void;
  onHoverHandler: (id: BitsIdTypes) => void;
  onRemoveHoverHandler: () => void;
  TableBitsButtonsArray: Array<TableCoordinates>;
  SectionBitsButtonsArray: Array<SectionBitsButtons>;
  SpecialBitsButtonsArray: Array<SpecialBitsButtons>;
  ZeroBitsButtonsArray: Array<ZeroBitsButtons>;
  DoubleBitsButtonsArray: Array<DoubleBitsButtons>;
}

export const InteractiveTable = (props: InteractiveTableProps) => {
  const {
    name = 'InteractiveTable',
    position,
    TableBitsButtonsArray,
    SectionBitsButtonsArray,
    SpecialBitsButtonsArray,
    ZeroBitsButtonsArray,
    DoubleBitsButtonsArray,
    onClickHandler,
    onHoverHandler,
    onRemoveHoverHandler,
  } = props;
  const scene = useScene() as Scene;
  // const isHover = useSelector(getIsHover);
  // console.log('isHover', isHover);
  useEffect(() => {
    // console.log(TableBitsButtonsArray[2].isHover);
  }, [TableBitsButtonsArray]);
  return (
    <mesh
      name={name}
      position={position}
    >
      <Table/>
      {
        TableBitsButtonsArray.map((el, index) =>
          (
            <InteractiveButton
              key={`oneSizeButton-${index}`}
              name={`oneSizeButton-${index}`}
              size={InteractiveButtonSize.SIZE1}
              row={el.row}
              col={el.column}
              position={new Vector3(16.5 - el.dx, 0.61, -3 - el.dz)}
              id={el.id}
              isHover={el.isHover}
              onClickHandler={onClickHandler}
              onHoverHandler={onHoverHandler}
              onRemoveHoverHandler={onRemoveHoverHandler}
            />
          ))
      }
      {
        SectionBitsButtonsArray.map((el, index) => (
          <InteractiveButton
            key={`fourSizeButton-${index}`}
            name={`fourSizeButton-${index}`}
            size={InteractiveButtonSize.SIZE4}
            col={index}
            position={new Vector3(12 - (index * 12), 0.61, -1)}
            id={el}
            onClickHandler={onClickHandler}
            onHoverHandler={onHoverHandler}
            onRemoveHoverHandler={onRemoveHoverHandler}
          />
        ))
      }
      {
        SpecialBitsButtonsArray.map((el, index) => (
          <InteractiveButton
            key={`twoSizeButton-${index}`}
            name={`twoSizeButton-${index}`}
            size={InteractiveButtonSize.SIZE2}
            col={index}
            position={new Vector3(15 - (index * 6), 0.61, 1)}
            id={el}
            onClickHandler={onClickHandler}
            onHoverHandler={onHoverHandler}
            onRemoveHoverHandler={onRemoveHoverHandler}
          />
        ))
      }
      {
        ZeroBitsButtonsArray.map((el, index) => (
          <InteractiveButton
            key={`ZeroSizeButton-${index}`}
            name={`ZeroSizeButton-${index}`}
            size={InteractiveButtonSize.SIZE0}
            row={2}
            col={index}
            position={new Vector3(19.5, 0.61, -6 + (index * 3))}
            id={el}
            onClickHandler={onClickHandler}
            onHoverHandler={onHoverHandler}
            onRemoveHoverHandler={onRemoveHoverHandler}
          />
        ))
      }
      {
        DoubleBitsButtonsArray.map((el, index) => (
          <InteractiveButton
            key={`Two-oneSizeButton-${index}`}
            name={`Two-oneSizeButton-${index}`}
            size={InteractiveButtonSize.SIZE21}
            col={6}
            position={new Vector3(-20, 0.61, -7 + (index * 2))}
            id={el}
            onClickHandler={onClickHandler}
            onHoverHandler={onHoverHandler}
            onRemoveHoverHandler={onRemoveHoverHandler}
          />
        ))
      }
      {
        ChipSizes.map((chip, index) => (
          <Chips
            key={`ZeroSizeButton-${chip.nominal}`}
            nominal={chip.nominal}
            position={new Vector3(16.5 - (index * 3), 0.61, 6)}
          />
        ))
      }
      <SpinButton
        position={new Vector3(-24, 0.61, 5)}
      />
    </mesh>
  );
};
