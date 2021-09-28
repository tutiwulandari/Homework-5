import { screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {Login}  from '../pages/login/Login';

describe('Login', () => {
  test('renders loading', async () => {
    const queryClient = new QueryClient();
    return(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText('Login')).toBeInTheDocument();
    });
  });
});