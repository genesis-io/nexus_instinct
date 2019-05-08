import React from 'react';
import { render } from 'react-testing-library';
import {
  cleanup
} from 'test-utils';
import { App } from './';

afterEach(cleanup);

describe('<App />', () => {
  it('should render navigation bar', () => {
    const { container } = render(<App />);
    expect(container.querySelector('nav')).toBeTruthy();
  });
});
