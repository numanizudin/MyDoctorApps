import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, storeData, useForm} from '../../utils';

export default function Login({navigation}) {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('success: ', res);
        dispatch({type: 'SET_LOADING', value: false});
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user: ', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(err => {
        console.log('error: ', err);
        dispatch({type: 'SET_LOADING', value: false});
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={10} />
        <Link title="Lupa Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Daftar Akun Baru"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={40} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 19,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
