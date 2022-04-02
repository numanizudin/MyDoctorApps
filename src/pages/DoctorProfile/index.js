import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

export default function DoctorProfile({navigation, route}) {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
        <Profile
          name={dataDoctor.data.fullName}
          desc={dataDoctor.data.profession}
          photo={{uri: dataDoctor.data.photo}}
        />
        <Gap height={10} />
        <ProfileItem label="Alumni" value={dataDoctor.data.university} />
        <ProfileItem
          label="Tempat Praktik"
          value={dataDoctor.data.hospital_address}
        />
        <ProfileItem label="No. STR" value={dataDoctor.data.str_number} />
        <View style={styles.btn}>
          <Button
            title="Start Consultation"
            onPress={() => navigation.navigate('Chatting', dataDoctor)}
          />
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
  btn: {
    paddingHorizontal: 40,
    paddingTop: 23,
    paddingBottom: 40,
  },
});
