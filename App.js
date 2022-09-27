import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  SplashScreen
} from 'react-native';
import React, {useState} from 'react';


const Separator = () => <View style={styles.separator} />;

const Counter = () => {
  const [count, setCount] = useState(10);
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#6ED4C8'}}>
      <Text style={styles.header}>Counter</Text>
      <Separator />
      <Text style={styles.header}>{count}</Text>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCount(count + 10);
        }}>
        <Text style={styles.text}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (count <= 0) {
            alert('count cant be negative');
          } else {
            setCount(count - 10);
          }
        }}>
        <Text style={styles.text}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // eslint-disable-next-line prettier/prettier
          setCount((count * 0));
        }}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: 'black',
    margin: 60,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Counter;
