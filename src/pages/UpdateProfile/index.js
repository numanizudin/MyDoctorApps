import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors} from '../../utils';

export default function UpdateProfile() {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={24} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
