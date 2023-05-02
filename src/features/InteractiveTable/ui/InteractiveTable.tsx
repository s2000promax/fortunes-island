import React, { memo, useEffect, useMemo, useState } from 'react';
import { Table } from '@/shared/uiKit/3D/Table';
import { useScene } from 'react-babylonjs';
import { HemisphericLight, Mesh, Nullable, Scene, Vector3 } from '@babylonjs/core';
import { InteractiveButton, InteractiveButtonSize } from '@/shared/uiKit/3D/InteractiveButton';
import {
  TableCoordinates,
  SectionBetsButtons,
  SpecialBetsButtons,
  ZeroBetsButtons,
  DoubleBetsButtons,
  BetsIdTypes, ChipsNominals,
} from '@/entities/InteractiveTable';
import { Chips, ChipSizes } from '@/shared/uiKit/3D/Chips';
import { SpinButton } from '@/shared/uiKit/3D/SpinButton';
import { HoverIdTypes } from '@/entities/InteractiveTable/model/types/interactiveTable';

interface InteractiveTableProps {
  name?: string;
  position?: Vector3;
  onClickHandler: (id: BetsIdTypes) => void;
  onChooseChipHandler: (id: ChipsNominals) => void;
  onHoverHandler: (id: BetsIdTypes) => void;
  onRemoveHoverHandler: () => void;
  onRouletteStartHandler: () => void;
  TableBetsButtonsArray: Array<TableCoordinates>;
  SectionBetsButtonsArray: Array<SectionBetsButtons>;
  SpecialBetsButtonsArray: Array<SpecialBetsButtons>;
  ZeroBetsButtonsArray: Array<ZeroBetsButtons>;
  DoubleBetsButtonsArray: Array<DoubleBetsButtons>;
}

export const InteractiveTable = memo((props: InteractiveTableProps) => {
  const {
    name = 'InteractiveTable',
    position,
    TableBetsButtonsArray,
    SectionBetsButtonsArray,
    SpecialBetsButtonsArray,
    ZeroBetsButtonsArray,
    DoubleBetsButtonsArray,
    onClickHandler,
    onChooseChipHandler,
    onHoverHandler,
    onRemoveHoverHandler,
    onRouletteStartHandler,
  } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;
  useMemo(() => {
    if (scene) {
      console.log(scene.lights);
      // const light1 = new HemisphericLight(`${name}-hemiLight-1`, new Vector3(0, 10, -10), scene);
      // const light2 = new HemisphericLight(`${name}-hemiLight-2`, new Vector3(-10, -10, -5), scene);
    }
    // setMesh(ball);

  }, [scene]);
  return (
    <mesh
      name={name}
      position={position}
    >
      <Table/>
      {
        TableBetsButtonsArray.map((el, index) =>
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
        SectionBetsButtonsArray.map((el, index) => (
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
        SpecialBetsButtonsArray.map((el, index) => (
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
        ZeroBetsButtonsArray.map((el, index) => (
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
        DoubleBetsButtonsArray.map((el, index) => (
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
            onChooseChipHandler={onChooseChipHandler}
          />
        ))
      }
      <SpinButton
        position={new Vector3(-24, 0.61, 5)}
        onRouletteStartHandler={onRouletteStartHandler}
      />
    </mesh>
  );
});
