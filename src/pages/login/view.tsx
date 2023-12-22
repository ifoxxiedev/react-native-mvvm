import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useLoginViewModel from './view.model';

const LoginView: React.FC = () => {
  const {email, onSubmit, password, setEmail, setPassword, isLoading} =
    useLoginViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>E-mail</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="email@email.com"
          autoCapitalize={'none'}
          autoComplete={'off'}
        />
      </View>

      <View>
        <Text>Password</Text>
        <TextInput
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity onPress={onSubmit} disabled={isLoading}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
