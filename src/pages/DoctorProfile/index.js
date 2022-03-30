import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

export default function DoctorProfile() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header title="Doctor Profile" />
        <Profile name="Alifia Putri" desc="Dokter Anak" />
        <Gap height={10} />
        <ProfileItem label="Alumni" value="STMIK Sumedang, 2021" />
        <ProfileItem
          label="Tempat Praktik"
          value="Rumah Sakit Umum, Sumedang"
        />
        <ProfileItem label="No. STR" value="1802837772600" />
        <View style={styles.btn}>
          <Button title="Start Consultation" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  btn: {
    paddingHorizontal: 40,
    paddingTop: 23,
    paddingBottom: 40,
  },
});
