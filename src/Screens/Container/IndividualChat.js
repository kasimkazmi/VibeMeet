import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  ImageStore,
} from 'react-native';
import {
  GiftedChat,
  Actions,
  SystemMessage,
  InputToolbar,
  Send,
  Bubble,
  RenderMessageVideoProps,
  MessageAudioProps,
  renderInputToolbar,
} from 'react-native-gifted-chat';
import {ChatHeaderComponent, MatchCard, MagicSwalCard} from '../../Components';
import {colors, fonts, images} from '../../Constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IndividualChat = props => {
  const [messages, setMessages] = useState([]);
  const [current_msg_txt, set_current_msg_txt] = useState('');

  const [show, setshow] = useState(false);
  const onLongPress = () => {
    if (this.props.onLongPress) {
      this.props.onLongPress(this.context, this.props.currentMessage);
    } else {
      if (this.props.currentMessage.text) {
        const options = ['Alart', 'Sumbit'];
        const cancelButtonIndex = options.length - 1;
        this.context.actionSheet().showActionSheetWithOptions(
          {
            options,
            cancelButtonIndex,
          },
          buttonIndex => {
            switch (buttonIndex) {
              case 0:
                Clipboard.setString(this.props.currentMessage.text);
                break;
            }
          },
        );
      }
    }
  };

  const hide = () => {
    setshow(false);
  };
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Guyss Chai Peeeloo',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);
  const customSystemMessage = props => {
    return (
      <View style={{flex: 1}}>
             <InputToolbar
          {...props}
          // optionTintColor={{color: colors.black}}
          primaryStyle={{
            top: 10,
            backgroundColor: colors.lightGray,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 30,
            height: 50,
          }}
          renderSend={props => {
            return (
              <Send {...props}>
                <View
                  style={{
                    height: 50,
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="send-circle" color={colors.pink} size={35} />
                </View>
              </Send>
            );
          }}
          accessoryStyle={{borderWidth:2221, height:20, backgroundColor:"green"}}
          containerStyle={{
            borderTopColor: colors.purple,
            borderRadius: 80,
            height: 80,
            paddingLeft: 10,
          }}
          textInputStyle={{color: colors.black}}
        />
        {/* <Icon name="lock" color="#9d9d9d" size={16} /> */}
        {/* <Text style={styles.ChatMessageSystemMessageText}>
          Your chat is secured. Remember to be cautious about what you share
          with others.
        </Text> */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ChatHeaderComponent
        route={props.navigation}
        style={{}}
        textstyle={styles.title}
        children={'User Name'}
      />
      <View style={styles.seprator} />

      {/* <MagicSwalCard /> */}
      {setshow ? (
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <MatchCard
            children={'Start Matching Your Vibe, ALL the Best ! '}
            match={'Match 70%'}
          />
        </View>
      ) : null}

      <GiftedChat
        messages={messages}
        messagesContainerStyle={{paddingBottom: 70}}
        onLongPress={onLongPress}
        onSend={text => onSend(text)}
        renderInputToolbar={props => customSystemMessage(props)}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: colors.pink,
                },
                left: {
                  backgroundColor: colors.purple,
                  color: colors.white,
                  borderRadius: 8,
                },
              }}
            />
          );
        }}

      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ChatMessageSytemMessageContainer: {
    backgroundColor: 'green',
    flex: 1,
    bottom: 20,
  },
  ChatMessageSystemMessageText: {color: colors.black},
  seprator: {
    paddingTop: 20,
  },
  lable: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink',
    paddingTop: 8,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },

  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 2,
      height: 13,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.2,
    elevation: 7,
  },
});
export default IndividualChat;
