import { type ReactElement, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import { Roulette } from 'features/Roulette';
import { InteractiveTable } from 'features/InteractiveTable';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getIsRotating, rouletteActions, rouletteReducer } from 'entities/Roulette';
import {
  BetsIdTypes,
  ChipsNominals,
  getDoubleBetsButtons,
  getSectionBetsButtons,
  getSpecialBetsButtons,
  getTableCoordinates,
  getZeroBetsButtons,
  interactiveTableActions,
  interactiveTableReducer,
} from 'entities/InteractiveTable';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCurrentHover } from 'entities/InteractiveTable/model/selectors/getCurrentHover/getCurrentHover';
import Ammo from 'ammojs-typed';

const reducers: ReducersList = {
  roulette: rouletteReducer,
  interactiveTable: interactiveTableReducer,
};

// @ts-ignore
const ammo = await Ammo();

const RoulettePage = (): ReactElement => {
  const { t } = useTranslation('RoulettePage');
  const dispatch = useAppDispatch();

  const TableBitsButtonsArray = useSelector(getTableCoordinates);
  const SectionBitsButtonsArray = useSelector(getSectionBetsButtons);
  const SpecialBitsButtonsArray = useSelector(getSpecialBetsButtons);
  const ZeroBitsButtonsArray = useSelector(getZeroBetsButtons);
  const DoubleBitsButtonsArray = useSelector(getDoubleBetsButtons);

  const isRouletteRotating = useSelector(getIsRotating) || false;

  const onClickHandler = useCallback((id: BetsIdTypes) => {
    dispatch(interactiveTableActions.setCurrentClicked(id));
  }, [dispatch]);

  const onChooseChipHandler = useCallback((id: ChipsNominals) => {
    dispatch(interactiveTableActions.setChipsChoosed(id));
  }, [dispatch]);

  const onHoverHandler = useCallback((id: BetsIdTypes) => {
    dispatch(interactiveTableActions.setCurrentHovered(id));
    dispatch(interactiveTableActions.setHighlightBits());
  }, [dispatch]);

  const onRemoveHoverHandler = useCallback(() => {
    dispatch(interactiveTableActions.removeCurrentHovered());
  }, [dispatch]);

  const onRouletteStartHandler = useCallback(() => {
    dispatch(rouletteActions.startRoulette());
  }, [dispatch]);

  // @ts-ignore
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        {t('Roulette page')}
        <Canvas>
          <arcRotateCamera
            name="camera1"
            target={new Vector3(-5, 12, 0)}
            alpha={Math.PI / 2}
            beta={Math.PI / 6}
            radius={40}
          />
          <hemisphericLight
            name="light1"
            intensity={0.1}
            direction={Vector3.Up()}
          />
          {
            ammo && (
              <Roulette
                position={new Vector3(0, 0, -23)}
                ammo={ammo}
                isRouletteRotating={isRouletteRotating}
              />
            )
          }
          {
            TableBitsButtonsArray?.length
            && SectionBitsButtonsArray?.length
            && SpecialBitsButtonsArray?.length
            && ZeroBitsButtonsArray?.length
            && DoubleBitsButtonsArray?.length
            && (
              <>
                <InteractiveTable
                  TableBitsButtonsArray={TableBitsButtonsArray}
                  SectionBitsButtonsArray={SectionBitsButtonsArray}
                  SpecialBitsButtonsArray={SpecialBitsButtonsArray}
                  ZeroBitsButtonsArray={ZeroBitsButtonsArray}
                  DoubleBitsButtonsArray={DoubleBitsButtonsArray}
                  onClickHandler={onClickHandler}
                  onChooseChipHandler={onChooseChipHandler}
                  onHoverHandler={onHoverHandler}
                  onRemoveHoverHandler={onRemoveHoverHandler}
                  onRouletteStartHandler={onRouletteStartHandler}
                />
              </>
            )
          }
        </Canvas>
      </div>
    </DynamicModuleLoader>
  );
};

export default RoulettePage;
