import React from 'react';
import {
  render,
  cleanup,
  renderWithRouter
} from 'test-utils';
import { Landing } from './';
import {
  header,
  description
} from './constants';

afterEach(cleanup);

describe('<Landing />', () => {
  it('should render correct header text', () => {
    const { getByText } = render(renderWithRouter(<Landing />));
    expect(getByText(header)).toBeTruthy();
  });

  it('should render correct description', () => {
    const { getByText } = render(renderWithRouter(<Landing />));
    expect(getByText(description)).toBeTruthy();
  });
});