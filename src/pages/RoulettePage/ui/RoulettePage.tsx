import { type ReactElement, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import { Roulette } from 'features/Roulette';
import { InteractiveTable } from 'features/InteractiveTable';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { rouletteReducer } from 'entities/Roulette';
import {
  BitsIdTypes,
  DoubleBitsButtons,
  getDoubleBitsButtons,
  getSectionBitsButtons,
  getSpecialBitsButtons,
  getTableCoordinates,
  getZeroBitsButtons,
  interactiveTableActions,
  interactiveTableReducer,
} from 'entities/InteractiveTable';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCurrentHover } from 'entities/InteractiveTable/model/selectors/getCurrentHover/getCurrentHover';

const reducers: ReducersList = {
  roulette: rouletteReducer,
  interactiveTable: interactiveTableReducer,
};

const RoulettePage = (): ReactElement => {
  const { t } = useTranslation('RoulettePage');
  const dispatch = useAppDispatch();

  const TableBitsButtonsArray = useSelector(getTableCoordinates);
  const SectionBitsButtonsArray = useSelector(getSectionBitsButtons);
  const SpecialBitsButtonsArray = useSelector(getSpecialBitsButtons);
  const ZeroBitsButtonsArray = useSelector(getZeroBitsButtons);
  const DoubleBitsButtonsArray = useSelector(getDoubleBitsButtons);

  const currentHover = useSelector(getCurrentHover);

  console.log('currentHover', currentHover);

  const onClickHandler = useCallback((id: BitsIdTypes) => {
    dispatch(interactiveTableActions.setCurrentClicked(id));
  }, [dispatch]);

  const onHoverHandler = useCallback((id: BitsIdTypes) => {
    dispatch(interactiveTableActions.setCurrentHovered(id));
    if (id === DoubleBitsButtons['Bit2-1_1']){
      dispatch(interactiveTableActions.setHighlightBits());
    }
  }, [dispatch]);

  const onRemoveHoverHandler = useCallback(() => {
    dispatch(interactiveTableActions.removeCurrentHovered());
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
            TableBitsButtonsArray?.length
            && SectionBitsButtonsArray?.length
            && SpecialBitsButtonsArray?.length
            && ZeroBitsButtonsArray?.length
            && DoubleBitsButtonsArray?.length
            && (
              <>
                <Roulette
                  position={new Vector3(0, 0, -23)}
                />

                <InteractiveTable
                  TableBitsButtonsArray={TableBitsButtonsArray}
                  SectionBitsButtonsArray={SectionBitsButtonsArray}
                  SpecialBitsButtonsArray={SpecialBitsButtonsArray}
                  ZeroBitsButtonsArray={ZeroBitsButtonsArray}
                  DoubleBitsButtonsArray={DoubleBitsButtonsArray}
                  onClickHandler={onClickHandler}
                  onHoverHandler={onHoverHandler}
                  onRemoveHoverHandler={onRemoveHoverHandler}
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
