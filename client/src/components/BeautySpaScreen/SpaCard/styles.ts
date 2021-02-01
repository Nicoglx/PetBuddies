import { StyleSheet } from 'react-native';
import {StatusBar} from 'react-native';

export const styles = StyleSheet.create({
    screen: {
      marginTop: 5,
      backgroundColor: "whitesmoke",
      
    },
    containerAll: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
         marginBottom: 10,
      shadowColor: "#000",
      opacity: 10,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      overflow: "hidden",
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 10,
      borderRadius: 8,
      height: "auto",
      position: "relative",
    },
    headersContainer: {
      flex: 1,
      /* backgroundColor: 'red', */
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 10,
      maxHeight: 50,
    },
    textTitle: {
      fontSize:15,
    },
    button: {
      backgroundColor: 'rgba(110,110,150, 0.8)',
      justifyContent: 'center',
      borderRadius: 20,
      height: 40,
      width: 90,
      elevation: 5,
    },
    textButton: {
      textAlign: 'center',
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
    detailsContainer: {
      /* backgroundColor: 'red', */
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    photo: {
      width: 150,
      height: 150,
    },
    titleListContainer: {
      alignItems: 'center',
      backgroundColor: 'rgba(110,190,190, 0.5)',
      borderStyle: 'solid',
      borderRadius: 5,
    },
    textTitleList: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemList: {
      padding: '3%',
    },
    textList: {},
    alignC: {
      textAlign: 'center'
    }
  });
