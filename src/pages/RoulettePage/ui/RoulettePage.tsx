import { type ReactElement, useCallback } from 'react';
import cls from './RoulettePage.module.scss';
import { useTranslation } from 'react-i18next';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import { Roulette } from 'features/Roulette';
import { InteractiveTable } from 'features/InteractiveTable';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getAllDrawnNumbers,
  getIsRotating,
  getRotatingDirection,
  rouletteActions,
  rouletteReducer,
} from 'entities/Roulette';
import {
  BetsIdTypes,
  ChipsNominals,
  getCurrentBets,
  getBetCoordinates,
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
import Ammo from 'ammojs-typed';
import { RotatingDirection } from 'entities/Roulette/model/types/roulette';
import { Chips } from 'shared/uiKit/3D/Chips';
import { getCoordinates } from 'shared/lib/utils/utils';
import { CurrentBetWindow } from 'shared/uiKit/CurrentBetWindow';
import { classNames } from 'shared/lib/classNames/classNames';
import { GameScoreWindow } from 'shared/uiKit/GameScoreWindow';

const reducers: ReducersList = {
  roulette: rouletteReducer,
  interactiveTable: interactiveTableReducer,
};

// @ts-ignore
const ammo = await Ammo();

interface RoulettePageProps {
  className?: string;
}

const RoulettePage = (props: RoulettePageProps): ReactElement => {
  const { className } = props;
  const { t } = useTranslation('RoulettePage');
  const dispatch = useAppDispatch();

  const TableBitsButtonsArray = useSelector(getTableCoordinates);
  const SectionBitsButtonsArray = useSelector(getSectionBetsButtons);
  const SpecialBitsButtonsArray = useSelector(getSpecialBetsButtons);
  const ZeroBitsButtonsArray = useSelector(getZeroBetsButtons);
  const DoubleBitsButtonsArray = useSelector(getDoubleBetsButtons);

  const rotatingDirection = useSelector(getRotatingDirection) || RotatingDirection.Сlockwise;
  const isRouletteRotating = useSelector(getIsRotating) || false;

  const currentBets = useSelector(getCurrentBets);
  const allDrawnNumbers = useSelector(getAllDrawnNumbers) || [];

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
    dispatch(rouletteActions.changeRotation());
    dispatch(rouletteActions.startRoulette());
  }, [dispatch]);

  // @ts-ignore
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.roulettePage, {}, [className])}>
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
                rotateDirection={rotatingDirection}
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
          {
            currentBets?.map(bet => (
              <>
                <Chips nominal={bet.chip}
                position={getCoordinates(getBetCoordinates, bet.bet)}
                />
              </>
            ))
          }
        </Canvas>
        <CurrentBetWindow
        currentBets={currentBets}
        />
        <GameScoreWindow allDrawnNumbers={allDrawnNumbers} />
      </div>
    </DynamicModuleLoader>
  );
};

export default RoulettePage;
