import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, ListDoctor} from '../../components';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
} from '../../assets';
import {colors} from '../../utils';

export default function ChooseDoctor() {
  return (
    <View style={styles.page}>
      <Header title="Pilih Dokter Anak" type="ungu" />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Alexandre janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor2}
        name="Alexandre janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor3}
        name="Alexandre janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor4}
        name="Alexandre janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor5}
        name="Alexandre janie"
        desc="Wanita"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
