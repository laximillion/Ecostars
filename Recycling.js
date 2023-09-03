import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import paperIcon from './paper.png';
import plasticIcon from './plastic.png';
import glassIcon from './glass.png';
import batteryIcon from './battery.png';

const Recycling = () => {
  const [paperProgress, setPaperProgress] = useState(0.5);
  const [plasticProgress, setPlasticProgress] = useState(0.2);
  const [glassProgress, setGlassProgress] = useState(0.9);
  const [batteryProgress, setBatteryProgress] = useState(0.4);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recycling</Text>

    
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Paper</Text>
        <Image source={paperIcon} style={styles.icon} />
        <ProgressBar
          progress={paperProgress}
          width={200}
          height={20}
          borderRadius={10}
          color='#568276'
          unfilledColor='#d3e3dc'
          borderWidth={0}
          animated={true}
          useNativeDriver={true}
        />
        <Text style={styles.sectionProgressText}>{`${paperProgress * 10}kg`}</Text>
      </View>




      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Plastic</Text>
        <Image source={plasticIcon} style={styles.icon} />
        <ProgressBar
          progress={plasticProgress}
          width={200}
          height={20}
          borderRadius={10}
          color='#568276'
          unfilledColor='#d3e3dc'
          borderWidth={0}
          animated={true}
          useNativeDriver={true}
        />
        <Text style={styles.sectionProgressText}>{`${plasticProgress * 10}kg`}</Text>
      </View>




      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Glass</Text>
        <Image source={glassIcon} style={styles.icon} />
        <ProgressBar
          progress={glassProgress}
          width={200}
          height={20}
          borderRadius={10}
          color='#568276'
          unfilledColor='#d3e3dc'
          borderWidth={0}
          animated={true}
          useNativeDriver={true}
        />
        <Text style={styles.sectionProgressText}>{`${glassProgress * 10}kg`}</Text>
      </View>




      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Battery</Text>
        <Image source={batteryIcon} style={styles.icon} />
        <ProgressBar
          progress={batteryProgress}
          width={200}
          height={20}
          borderRadius={10}
          color='#568276'
          unfilledColor='#d3e3dc'
          borderWidth={0}
          animated={true}
          useNativeDriver={true}
        />
        <Text style={styles.sectionProgressText}>{`${batteryProgress * 10}kg`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7fb09e',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 40,
        marginBottom: 20
      },
      sectionProgressText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
      },
      sectionContainer: {
        borderWidth: 2,
        borderColor: '#4e826f',
        backgroundColor: '#ffffff',
        borderRadius: 30,
        height: 50,
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
      },
      sectionTitle: {
        width: 75,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold'
      },
      icon: {
        width: 30,
        height: 30,
        marginRight: 10
      },
      progressBar: {
        
        height: 20,
        backgroundColor: '#d3e3dc',
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 10
      },
      progressText: {
        fontSize: 16,
        color: '#6e8b6d',
        fontWeight: 'bold',
        marginLeft: 5
      }
    });

    export default Recycling;