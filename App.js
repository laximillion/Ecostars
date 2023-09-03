import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import MainPage from './MainPage';
import LoginApp from './Login';
import SignUpApp from './SignUp';
import Settings from './Settings';
import CashBackPage from './CashBackPage';
import Recycling from './Recycling';
import Scan from './Scan';
import Results from './Results';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginApp" component={LoginApp} />
        <Stack.Screen name="SignUpApp" component={SignUpApp} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="CashBackPage" component={CashBackPage} />
        <Stack.Screen name="Recycling" component={Recycling} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('LoginApp');
  };
  const handleSignUpPress = () => {
    navigation.navigate('SignUpApp');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./apptop.png')} style={styles.pic1} />
       <Image source={require('./logo1.png')} style={styles.logo} />
      <Text style={styles.title}>Your Own Eco Corner</Text>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Image source={require('./appbottom.png')} style={styles.pic2} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic1:{
    position: 'absolute',
    top:0,
  },
  pic2:{
    position: 'absolute',
    bottom:0,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8db5ac',
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2a9d8f',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f6f7eb',
  },
});

export default App;