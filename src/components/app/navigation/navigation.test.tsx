import React from 'react';
import 'jest-styled-components';
import {
  render,
  cleanup,
  renderWithRouter,
} from 'test-utils';
import { Navigation } from './';
import { TestIds } from './constants';
import theme from '../theme';

afterEach(cleanup);

describe('<Navigation />',() => {
  describe('home route', () => {
    const homeProps = {
      location: {
        pathname: '/'
      },
    };

    it('should render transparent background when on home url', () => {
      const { getByTestId } = render(renderWithRouter(<Navigation {...homeProps} />));
      expect(getByTestId(TestIds.Navigation)).toHaveStyleRule('background-color', theme.colors.transparent);
    });
  });

  describe('login route', () => {
    const loginProps = {
      location: {
        pathname: '/login'
      },
    };

    it('should render white background when on login url', () => {
      const { getByTestId } = render(renderWithRouter(<Navigation {...loginProps} />));
      expect(getByTestId(TestIds.Navigation)).toHaveStyleRule('background-color', theme.colors.white);
    });

    it('should not render sign in link when on login screen', () => {
      const { queryByTestId } = render(renderWithRouter(<Navigation {...loginProps} />));
      expect(queryByTestId(TestIds.SignIn)).toBeNull();
    });
  });
});

