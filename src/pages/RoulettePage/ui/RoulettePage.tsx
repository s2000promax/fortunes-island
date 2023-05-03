import React, { memo, type ReactElement, useCallback, useEffect, useState } from 'react';
import cls from './RoulettePage.module.scss';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@/widgets/Canvas';
import { PhysicsImpostor, Scene, Vector3 } from '@babylonjs/core';
import { Roulette } from '@/features/Roulette';
import { InteractiveTable } from '@/features/InteractiveTable';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getAllDrawnNumbers,
  getCurrentBets,
  getIsRotating,
  getRotatingDirection,
  rouletteActions,
  rouletteReducer,
} from '@/entities/Roulette';
import {
  BetsIdTypes,
  ChipsNominals,
  getBetCoordinates, getCurrentBetClicked, getCurrentChipClicked,
  getDoubleBetsButtons,
  getSectionBetsButtons,
  getSpecialBetsButtons,
  getTableCoordinates,
  getZeroBetsButtons,
  interactiveTableActions,
  interactiveTableReducer,
} from '@/entities/InteractiveTable';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RotatingDirection } from '@/entities/Roulette/model/types/roulette';
import { Chips } from '@/shared/uiKit/3D/Chips';
import { getCoordinates } from '@/shared/lib/utils/utils';
import { CurrentBetWindow } from '@/shared/uiKit/CurrentBetWindow';
import { classNames } from '@/shared/lib/classNames/classNames';
import { GameScoreWindow } from '@/shared/uiKit/GameScoreWindow';

const reducers: ReducersList = {
  roulette: rouletteReducer,
  interactiveTable: interactiveTableReducer,
};

interface RoulettePageProps {
  className?: string;
}

const RoulettePage = (props: RoulettePageProps): ReactElement => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const TableBetsButtonsArray = useSelector(getTableCoordinates);
  const SectionBetsButtonsArray = useSelector(getSectionBetsButtons);
  const SpecialBetsButtonsArray = useSelector(getSpecialBetsButtons);
  const ZeroBetsButtonsArray = useSelector(getZeroBetsButtons);
  const DoubleBetsButtonsArray = useSelector(getDoubleBetsButtons);

  const rotatingDirection = useSelector(getRotatingDirection) || RotatingDirection.Сlockwise;
  const isRouletteRotating = useSelector(getIsRotating) || false;

  const currentBets = useSelector(getCurrentBets) || [];
  const choosedBet = useSelector(getCurrentBetClicked);
  const choosedChip = useSelector(getCurrentChipClicked);

  useEffect(() => {
    if (choosedChip && choosedBet) {
      dispatch(rouletteActions.addCurrentBet(
        {
          bet: choosedBet as BetsIdTypes,
          chip: choosedChip,
        },
      ));
      dispatch(interactiveTableActions.clearCurrentBetClicked());
    }
  }, [choosedChip, choosedBet, dispatch]);

  const onClickHandler = useCallback((id: BetsIdTypes) => {
    dispatch(interactiveTableActions.setCurrentClicked(id));
  }, [dispatch]);

  const onChooseChipHandler = useCallback((id: ChipsNominals) => {
    dispatch(interactiveTableActions.setChipsChoosed(id));
  }, [dispatch]);

  const onHoverHandler = useCallback((id: BetsIdTypes) => {
    dispatch(interactiveTableActions.setCurrentHovered(id));
    dispatch(interactiveTableActions.setHighlightBets());
  }, [dispatch]);

  const onRemoveHoverHandler = useCallback(() => {
    dispatch(interactiveTableActions.removeCurrentHovered());
  }, [dispatch]);

  const onRouletteStartHandler = useCallback(() => {
    dispatch(rouletteActions.changeRotation());
    dispatch(rouletteActions.startRoulette());
  }, [dispatch]);

  const onAddTemporaryDrawnNumberHandler = useCallback((num: string) => {
    dispatch(rouletteActions.addTemporaryDrawnNumber(num));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(cls.roulettePage, {}, [className])}
      >
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
            intensity={0.3}
            direction={new Vector3(0, 20, -20)}
          />
          <hemisphericLight
            name="light2"
            intensity={0.6}
            direction={new Vector3(30, 20, 0)}
          />
          <hemisphericLight
            name="light3"
            intensity={0.6}
            direction={new Vector3(-30, 20, 0)}
          />
          {
            (
              <Roulette
                position={new Vector3(0, 0, -23)}
                isRouletteRotating={isRouletteRotating}
                rotateDirection={rotatingDirection}
                onAddTemporaryDrawnNumberHandler={onAddTemporaryDrawnNumberHandler}
              />
            )
          }
          {
            TableBetsButtonsArray?.length
            && SectionBetsButtonsArray?.length
            && SpecialBetsButtonsArray?.length
            && ZeroBetsButtonsArray?.length
            && DoubleBetsButtonsArray?.length
            && (
              <>
                <InteractiveTable
                  TableBetsButtonsArray={TableBetsButtonsArray}
                  SectionBetsButtonsArray={SectionBetsButtonsArray}
                  SpecialBetsButtonsArray={SpecialBetsButtonsArray}
                  ZeroBetsButtonsArray={ZeroBetsButtonsArray}
                  DoubleBetsButtonsArray={DoubleBetsButtonsArray}
                  onClickHandler={onClickHandler}
                  onChooseChipHandler={onChooseChipHandler}
                  onHoverHandler={onHoverHandler}
                  onRemoveHoverHandler={onRemoveHoverHandler}
                  onRouletteStartHandler={onRouletteStartHandler}
                />
              </>
            )
          }
          {
            currentBets?.map((bet, index) => (
              <React.Fragment key={`betForTable-${bet.chip}-${index}`}>
                <Chips nominal={bet.chip}
                position={getCoordinates(getBetCoordinates, bet.bet)}
                />
              </React.Fragment>
            ))
          }
        </Canvas>
        <CurrentBetWindow />
        <GameScoreWindow />
      </div>
    </DynamicModuleLoader>
  );
};

export default RoulettePage;
