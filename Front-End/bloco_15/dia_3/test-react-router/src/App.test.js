import React from 'react';
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';


describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
    const home = screen.getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
    userEvent.click(screen.getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = screen.getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/');
    const noMatch = screen.getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
    const aboutOnly = screen.getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
});