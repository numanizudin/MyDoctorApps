import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils/colors';

export default function Register({navigation}) {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={24} />
          <Button
            title="Continue"
            onPress={() => navigation.navigate('UploadPhoto')}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    padding: 40,
    paddingTop: 0,
  },
});
