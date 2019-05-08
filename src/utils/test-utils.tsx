import
  React, {
  ReactChild,
  ReactElement
} from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import theme from '../components/app/theme';


interface Props {
  children: ReactChild
}

export const AllTheProviders = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
};

// use for components that need router context
const renderWithRouter = (
  ui: ReactElement,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {}
  ) => (<Router history={history}>{ui}</Router>);


const customRender = (ui: ReactElement, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from 'react-testing-library'

// override render method
export {
  customRender as render,
  renderWithRouter
}