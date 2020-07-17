import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
import Dashboard from '../../pages/Dashboard';

const apiMock = new MockAdapter(api);

const wait = (amount = 0): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, amount));
};

const actWait = async (amount = 0): Promise<void> => {
  await act(async () => {
    await wait(amount);
  });
};

describe('Dashboard Page', () => {
  it('should be able to add new repository', async () => {
    apiMock.onGet('repos/deborarss/ihelp').reply(200, {
      full_name: 'Deborarss/iHelp',
      description:
        'App to help people who cannot leave home because of the coronavirus',
      owner: {
        login: 'Deborarss',
        avatar_url: 'https://avatars3.githubusercontent.com/u/22102668?v=4',
      },
    });

    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Dashboard />,
    );

    const githubField = getByPlaceholderText('Digite aqui');
    const buttonElement = getByText('Pesquisar');

    fireEvent.change(githubField, { target: { value: 'deborarss/ihelp' } });

    fireEvent.click(buttonElement);

    await actWait();

    expect(getByTestId('repository')).toContainElement(
      getByText('Deborarss/iHelp'),
    );
  });
});
