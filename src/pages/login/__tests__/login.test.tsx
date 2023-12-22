// import MockAdapter from 'axios-mock-adapter';
import {it, describe, jest} from '@jest/globals';
import {renderHook} from '@testing-library/react-hooks';
import {LoginViewModel} from '../models';
// import {client} from '../../../common/repositories/client';
import {UserModel} from '../../../common/models/user.model';
import useLoginViewModel from '../view.model';

// const mock = new MockAdapter(client);

jest.mock('../view.model', () => {
  const fnLoginViewModel = jest.fn();
  fnLoginViewModel.mockReturnValue({
    isLoading: false,
    password: '',
    email: '',
    onSubmit: jest.fn(),
    setEmail: jest.fn(),
    setPassword: jest.fn(),
  } as LoginViewModel);
  return fnLoginViewModel;
});

describe('Login snapshot test', () => {
  it('should be able to sign in', async () => {
    const user: UserModel = {
      id: '1',
      email: 'foo@email.com',
      name: 'Foo',
    };

    // mock.onPost('/auth/login').reply(200, user);

    // RENDERIZAR HOOKS em TESTES
    const {result} = renderHook(useLoginViewModel);
    console.log(result.current);

    // act(() => result.current.setEmail(user.email)); // DISPARAR SET STATE
    // await waitFor(() => result.current.email === user.email); // AGUARDA A RENDERIZAÇÃO/ATUALIZAÇÃO DO VALOR

    // act(() => result.current.setPassword('password'));
    // await waitFor(() => result.current.password === 'password');

    // act(() => result.current.onSubmit());
    // await waitFor(() => result.current.isLoading === false);
  });
});
