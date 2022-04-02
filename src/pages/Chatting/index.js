import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts, getData, showError} from '../../utils';
import {Fire} from '../../config';

export default function Chatting({navigation, route}) {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      setUser(res);
    });
  }, []);

  const chatSend = () => {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTIme: `${hour}:${minute} ${hour > 12 ? 'PM' : 'AM'}`,
      chatContent: chatContent,
    };
    setChatContent('');
    Fire.database()
      .ref(
        `chatting/${user.uid}_${
          dataDoctor.data.uid
        }/allChat/${year}-${month}-${date}`,
      )
      .push(data)
      .then(() => {
        setChatContent('');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="ungu-profile"
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.category}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Rabu, 30 Maret, 2022</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
