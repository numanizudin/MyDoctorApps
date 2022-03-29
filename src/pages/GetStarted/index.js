import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground
      source={ILGetStarted}
      resizeMode="cover"
      style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    color: colors.white,
  },
  title: {
    fontSize: 25,
    color: colors.black,
    marginTop: 91,
    fontFamily: fonts.primary[600],
  },
});
