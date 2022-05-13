import React, {useState} from 'react';
import {View, Alert, Text, ScrollView} from 'react-native';
import {ButtonComponent} from '../src/components';

const Task = () => {
  const programingLang = [
    {
      id: 1,
      title: 'React',
      description: 'React is use to develop website frontend',
    },
    {
      id: 2,
      title: 'Java',
      description: 'JAVA is use to develop software',
    },
    {
      id: 3,
      title: 'Angular',
      description: 'Angular is use to develop website',
    },
    {
      id: 4,
      title: 'PHP',
      description: 'PHP is use to develop basic website',
    },
    {
      id: 5,
      title: 'Python',
      description: 'Python is great language to integrate frontend',
    },
  ];

  const [ArryChange, setArryChange] = useState(programingLang);

  const [ArryChange1, setArryChange1] = useState(programingLang);
  const [ArryChange2, setArryChange2] = useState(programingLang);
  const [ArryChange3, setArryChange3] = useState(programingLang);

  const push = () => {
    {
      const mya = ArryChange1.push({
        id: 10,
        title: 'kasim',
        description: 'Sample Data',
      });
      console.log(ArryChange, ' <<<<< Data is Pusshed >>>>>>');
      setArryChange1(mya);
    }
  };

  const upperCase = () => {
    const uppercased = ArryChange.map(item => item.title.toUpperCase());

    console.log(uppercased);
  };

  const filter = () => {
    const mya = ArryChange.filter(item => item.id == 1);
    console.log(mya, '<<<<< After Filter >>>>>>');
    setArryChange(mya);
  };
  const Delete = () => {
    const index = ArryChange2.findIndex(item => item.id === 4);
    ArryChange.splice(index, 1);
    console.log(ArryChange2, '<<<<< Delete by index   >>>>>>');

    setArryChange2(index);
  };

  // const filter = ()=> {
  //   if (ArryChange.includes(id)) {
  //     setArryChange(ArryChange => ArryChange.filter(item => item.id == 1));
  //     console.log(setArryChange, '<<<<----Close------->');

  //   } else {
  //     setArryChange(ArryChange => [...ArryChange, id]);
  //         console.log(setArryChange, '<<<<<<<<<<<<Open<<<<<>>>>>>');

  //   }
  // };

  const change = () => {
    const mya = ArryChange.filter(item => item.id == 1);
    console.log(mya, '<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>');
  };

  return (
    <ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          paddingTop: 8,
          paddingBottom: 8,
        }}>
        <Text style={{fontSize: 36}}> Task Given By TL </Text>
        <View style={{padding: 8}}>
          <Text>
            Task 1 : Push another object in this array at the end position and
            first position
          </Text>
          <Text>Task 2 : Filter data of array accoring to id</Text>
          <Text>
            Task 3 : Change any value of existing data according to index
          </Text>
          <Text>
            Task 4 : Delete any object of array according to index or ID
          </Text>
          <Text>
            Task 5 : map array and show the list on your screen, and title
            should always in uppercase letter
          </Text>
          <Text>
            Tasks 6 : Write a function to generate an array between two integers
            of 1 step length .
          </Text>
        </View>
        <View style={{borderWidth: 1}}>
          <Text style={{textAlign: 'center', fontSize: 20}}>
            Array Examples
          </Text>

          {ArryChange.map((data, index) => (
            <View key={index} style={{flexDirection: 'row', padding: 8}}>
              <Text style={{color: 'red', paddingRight: 6}}>{data.id}</Text>
              <Text style={{color: 'green', paddingRight: 6}}>
                {data.title}
              </Text>
              <Text style={{color: 'blue', paddingRight: 6}}>
                {data.description}
              </Text>
            </View>
          ))}

          {/* {(ArryChange => ArryChange.filter(item => item.title != 'Angular'))}
          console.log(ArryChange); */}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <ButtonComponent
          name={'PUSH'}
          onPress={() => push()}
          styles={{
            paddingLeft: 20,
            paddingRight: 20,
            borderWidth: 1,
            borderRadius: 20,
          }}
          index={0}
        />
        <ButtonComponent
          name={'Filter'}
          onPress={() => filter()}
          styles={{
            paddingLeft: 20,
            paddingRight: 20,
            borderWidth: 1,
            borderRadius: 20,
          }}
          index={0}
        />
        <ButtonComponent
          name={'Change '}
          // onPress={() => _submit()}
          styles={{
            paddingLeft: 20,
            paddingRight: 20,
            borderWidth: 1,
            borderRadius: 20,
          }}
          index={0}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <ButtonComponent
          name={'Uppercase '}
          onPress={() => upperCase()}
          styles={{
            paddingLeft: 20,
            paddingRight: 20,
            borderWidth: 1,
            borderRadius: 20,
          }}
          index={0}
        />
        <ButtonComponent
          name={'Delete'}
          onPress={() => Delete()}
          styles={{
            paddingLeft: 20,
            paddingRight: 20,
            borderWidth: 1,
            borderRadius: 20,
          }}
          index={0}
        />

        <ButtonComponent
          name={'Generate '}
          onPress={() => Delete()}
          styles={{
            paddingLeft: 20,
            paddingRight: 20,
            borderWidth: 1,
            borderRadius: 20,
          }}
          index={0}
        />
      </View>
      {/* <SwitchCase value={'Admin'} /> */}
    </ScrollView>
  );
};

export default Task;
