import {it, describe, expect, jest} from '@jest/globals';
import renderer from 'react-test-renderer';
import LoginView from '../view';
import {LoginViewModel} from '../models';

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
  it('should match snapshot', () => {
    const {toJSON} = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
  });
});
