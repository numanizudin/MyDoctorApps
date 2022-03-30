import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILHospitalBG} from '../../assets/illustration';
import {colors, fonts} from '../../utils';
import {ListHospitals} from '../../components';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '../../assets';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals
          type="Rumah Sakit"
          name="RSUD Pavilliun Sumedang"
          address="Jl. Pangeran Sugih No.4"
          pic={DummyHospital1}
        />
        <ListHospitals
          type="Rumah Sakit Anak"
          name="Happy Family Kids"
          address="Jl. Pangeran Sugih No.4"
          pic={DummyHospital2}
        />
        <ListHospitals
          type="Rmah Sakit Jiwa"
          name="RSJ Sumedang"
          address="Jl. Pangeran Sugih No.4"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
