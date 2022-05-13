import {async} from '@firebase/util';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, TextInput, Button} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {getDatabase, ref, set} from 'firebase/database';

import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Chat from './screens/Chat';

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Chat' component={Chat} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
}

const Support = props => {
  const [currentPage, setCurrentPage] = useState();
  const [username, setUsername] = useState(null);
  const [users, setUsers] = useState(null);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [MyData, setMyData] = useState(null);
 
 
  const onLogin = async () => {
    try {
      const database = getDatabase();

      //    First Check if the user Register before
      const user = await findeUser(username);

      // Create a new user if not register
      if (user) {
        setMyData(user);
      } 
      else{
          const newUserObj={
              username:username,
              avatar:"https://i.pravatar.cc/150?u="+Date.now(),
          }
      
           set(ref(database,`user/${username}`),newUserObj);
           setMyData(newUserObj)
        }


    } catch (error) {
      console.log(error, 'Error Raised');
    }
    //   setCurrentPage('users');
  };

  const findeUser = async () => {};
  const onClickUser = user => {
    setCurrentPage('chat');
    setSelectedUser(user);
  };
  const onAddUser = () => {};

  const onBack = () => {
    setCurrentPage('users');
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    let isCancelled = false;
  });

  // kitty.getChannels({filter: {joined: true}}).then(result => {
  //   if (!isCancelled) {
  //     setChannels(result.paginator.items);

  //     if (loading) {
  //       setLoading(false);
  //     }
  //   }
  // });
  //     return () => {
  //       isCancelled = true;
  //     };
  //   }, [isFocused, loading]);

  //   if (loading) {
  //     // return <Loading />;
  //   }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <Button title={'Login'} />
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
  container: {
    backgroundColor: '#cacaca',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    color: 'black',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
