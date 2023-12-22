import {useState} from 'react';
import {login} from '../../common/repositories/auth.repository';
import {Alert} from 'react-native';

const useLoginViewModel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const result = await login({email, password});
      console.log(result);
    } catch (error) {
      console.log(error);
      Alert.alert('Ops!', 'Argo deu errado!');
    } finally {
      setIsLoading(true);
    }
  };

  return {
    email,
    password,
    setPassword,
    setEmail,
    isLoading,
    onSubmit: handleSubmit,
  };
};

export default useLoginViewModel;
