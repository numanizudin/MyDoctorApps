import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ILHospitalBG} from '../../assets/illustration';
import {colors, fonts, showError} from '../../utils';
import {ListHospitals} from '../../components';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '../../assets';
import {Fire} from '../../config';

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('hospitals/')
      .once('value')
      .then(res => {
        console.log('data: ', res.val());
        if (res.val()) {
          setHospitals(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospitals.map(item => {
          return (
            <ListHospitals
              key={item.id}
              type={item.type}
              name={item.name}
              address={item.address}
              pic={item.pic}
            />
          );
        })}
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
