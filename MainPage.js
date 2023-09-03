import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
/* import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';*/



const MainPage = () => {
/*
  const [scannedData, setScannedData] = useState(null);

  const handleScan = (event) => {
    setScannedData(event.data);
};
*/


/*const renderScanner = () => {
   (
    <QRCodeScanner
      onRead={handleScan}
      showMarker={true}
      reactivate={true}
      reactivateTimeout={5000}
    />
  );
};

const renderScannedData = () => {
  return (
    <View>
      <Text>{scannedData}</Text>
    </View>
  );
};*/


  const navigation = useNavigation();

  const CashPage = () => {
    navigation.navigate('CashBackPage');
  };

  const Settings = () => {
    navigation.navigate('Settings');
  };

  const RePage = () => {
    navigation.navigate('Recycling');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Hi, Ryan!</Text>
        <View style={styles.location}>
          <Image source={require('./location.png')} style={styles.icon} />
          <Text style={styles.locationText}>San Francisco, USA</Text>
        </View>
        <View style={styles.info}>
          <Image source={require('./smile.png')} style={styles.icon} />
          <Text style={styles.infoText}>5.40kg</Text>
          <Image source={require('./money.png')} style={styles.icon} />
          <Text style={styles.infoText}>10,31 $</Text>
        </View>
        <Text style={styles.message}>
          What’s the CO2 footprint of your groceries? Let FOODprint search!
        </Text>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Scan')} >
          <Text style={styles.buttonText}>QR code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search manually</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
      <View style={styles.menuBar}>
  <TouchableOpacity style={styles.menuButton}>
    <Image source={require('./main.png')} style={styles.menuIcon} />
    <Text style={styles.menuText}>Main</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuButton} onPress={CashPage}>
    <Image source={require('./cashback.png')} style={styles.menuIcon} />
    <Text style={styles.menuText} >Cashback</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuButton} onPress={RePage}>
    <Image source={require('./recycling.png')} style={styles.menuIcon} />
    <Text style={styles.menuText}>Recycle</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuButton} onPress={Settings}>
    <Image source={require('./profile.png')} style={styles.menuIcon} />
    <Text style={styles.menuText}>Profile</Text>
  </TouchableOpacity>
</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ffff',
    
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f6f7eb',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginBottom: 20,
    textAlign: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginLeft: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginLeft: 10,
  },
  message: {
    fontSize: 20,
    color: '#2a9d8f',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2a9d8f',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f6f7eb',
    textAlign: 'center',
  },
  menuBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f6f7eb',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  menuButton: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  menuText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
});

export default MainPage;