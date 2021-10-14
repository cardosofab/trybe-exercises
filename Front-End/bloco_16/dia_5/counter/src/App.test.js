import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
  
    expect(screen.queryByText('5')).toBeInTheDocument();
  });
  
  test('if a click works', () => {
    renderWithRedux(<App />);
    const buttonAdd = screen.getByRole('button');
    userEvent.click(buttonAdd);
  
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('if counter starts with ten', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdd = screen.getByRole('button');

    expect(screen.getByText('10')).toBeInTheDocument();
    
    userEvent.click(buttonAdd);
    
    expect(screen.getByText('11')).toBeInTheDocument();

  });
});


