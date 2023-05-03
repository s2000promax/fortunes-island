import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nextForTest from '@/shared/config/i18next/i18nextForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function ComponentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const {
    route = '/',
    initialState,
    asyncReducers,
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducer={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nextForTest}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
