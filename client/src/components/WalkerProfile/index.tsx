import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { RouteStackParamList } from '../../NavigationConfig/types';
import { Icon } from 'react-native-elements';
import { Rating } from 'react-native-ratings';
import axios from 'axios';



const WalkerProfile = ({ navigation, route }: RouteStackParamList<'WalkerProfile'>) => {

  const [state, setState] = React.useState<any>()
  React.useEffect(() => {
    axios.get(`http://localhost:3001/walkers/${route.params.id}`)
    .then((result) => setState(result.data))
  },[])

  console.log(state)
  const renderLabel = () => {
    
    return (
      <View style={[styles.tabBar, styles.tabContainer]}>
        <View>
        <Animated.Text style={styles.tabLabelText}>
          $ {state.fee}
        </Animated.Text>
        <Animated.Text style={styles.tabLabelNumber}>
        Por <br/>
        Viaje
        </Animated.Text>
        </View>
        <View>
        <Animated.Text style={styles.tabLabelText}>
        Horarios
        </Animated.Text>
        <Animated.Text style={styles.tabLabelNumber}>
          {state.workHours}
        </Animated.Text>
        </View>
        <View>
        <Animated.Text style={styles.tabLabelText}>
          255
        </Animated.Text>
        <Animated.Text style={styles.tabLabelNumber}>
        Paseos <br/>
        realizados
        </Animated.Text>
        </View>
        {/* <View>
        <Animated.Text style={styles.tabLabelText}>
          100%
        </Animated.Text>
        <Animated.Text style={styles.tabLabelNumber}>
        Respuesta <br/>
        a mensajes
        </Animated.Text>
        </View> */}
      </View>
    )
  }

  if(!state) return <Icon name='spinner' reverse type='font-awesome-5'/>

  return (
    <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.userRow}>
          <Image
            style={styles.userImage}
            source={{uri: state.photo}}
          />
          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>{state.name + ' ' + state.lastname}</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text style={styles.userBioText}>{state.description}</Text>
          </View>
        </View>
        <View style={styles.socialRow}>
          <Rating
          readonly
          startingValue={state.rating}
          />
          <Text style={styles.ratingText}>27 calificaciones</Text>
        </View>
      </View>
      {renderLabel()}
      <View style={styles.descriptionRow}>
            <Icon name='map-marker' type='font-awesome' size={25} color='#c98c70' />
            <Text style={styles.userDescriptionText}>Vive en {state.zona}</Text>
      </View>
      <View style={styles.descriptionRow}>
            <Icon name='paw' type='font-awesome' size={25} color='#c98c70' />
            <Text style={styles.userDescriptionText}>Pasea en {state.workZone.map((item: string) => `${item} `)}</Text>
      </View>
      <View style={styles.messageRow}>
          <Icon name='comments' type='font-awesome' reverse color='#456672' />
          <Text style={styles.messageText}>Envíale un mensaje</Text>
        </View>
    </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
    headerContainer: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      marginBottom: 10,
      marginTop: 30,
    },
    indicatorTab: {
      backgroundColor: 'transparent',
    },
    scroll: {
      backgroundColor: '#FFF',
    },
    sceneContainer: {
      marginTop: 10,
    },
    socialRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    messageRow: {
      flexDirection: 'row',
      marginLeft: 40,
      marginRight: 40,
    },
    tabBar: {
      backgroundColor: '#EEE',
    },
    tabContainer: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 12,
      justifyContent: 'space-around',
      paddingBottom: 2,
    },
    tabLabelNumber: {
      color: 'gray',
      fontSize: 12.5,
      textAlign: 'center',
    },
    tabLabelText: {
      color: 'black',
      fontSize: 22.5,
      fontWeight: '600',
      textAlign: 'center',
    },
    userBioRow: {
      marginLeft: 40,
      marginRight: 40,
    },
    descriptionRow: {
      marginLeft: 20,
      marginRight: 40,
      marginBottom: 20,
      marginTop: 20,
      flexDirection: 'row',
    },
    userBioText: {
      color: 'gray',
      fontSize: 13.5,
      textAlign: 'center',
    },
    userDescriptionText: {
      color: 'gray',
      fontSize: 13.5,
      textAlign: 'center',
      marginLeft: 5,
    },
    ratingText: {
      color: 'white',
      fontSize: 13.5,
      textAlign: 'center',
      marginLeft: 14,
      margin: 10,
      backgroundColor: 'gray',
      padding: 3,
      borderRadius: 5,
    },
    messageText: {
      color: '#456672',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 14,
      margin: 14,
    },
    userImage: {
      borderRadius: 60,
      height: 120,
      marginBottom: 10,
      width: 120,
    },
    userNameRow: {
      marginBottom: 10,
    },
    userNameText: {
      color: '#5B5A5A',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    userRow: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 12,
    },
  });

export default WalkerProfile;