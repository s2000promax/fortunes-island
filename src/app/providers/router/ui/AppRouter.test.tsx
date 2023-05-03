import AppRouter from './AppRouter';
import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { AppRoutes } from '@/shared/config/routeConfig/routeConfig';

describe('app/router/AppRouter', () => {
  test('About Page should be render', async () => {
    ComponentRender(<AppRouter/>, {
      route: '/' + AppRoutes.ABOUT,
    });

      const page = await screen.findByTestId('AboutPage');
      expect(page).toBeInTheDocument();
  });

  test('Profile Page should be render', async () => {
    ComponentRender(<AppRouter/>, {
      route: '/' + AppRoutes.PROFILE,
      initialState: {
        user: {
          authData: {
            id: '',
            username: '',
            balance: 0,
            avatar: '',
          },
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });
});
