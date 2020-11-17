import React, { useEffect, useState, useRef} from 'react'
import { View, Text, ScrollView,Button, Platform } from 'react-native'
import { ListItem } from 'react-native-elements'
import style from './homeStyles'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { auth, storage } from "../../../firebase";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
async function schedulePushNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
     body,
      data: { data: 'goes here' },
    },
    trigger: { seconds: 10 },
  });
}
async function buildNotification(amount,where,type,received){
  let title
  let body

  if(type == "Tentrante"){
      let title = `Nueva transferencia de ${from}.`
      let body = `Recibiste $${amount}.`
              
  }else if(type == "compra"){
    let title = `Tu pago a ${where} fue aprobado.`
    let body = `Total $${amount}.`
                
    }else if(type == "recarga"){
      let title = `Nueva recarga acreditada.`
      let body = `Total  + $${amount}.` 
    } 
    schedulePushNotification(title,body)
    //post to reset state
}
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
const Home = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    
    storage.collection("Users")
    .doc(auth.currentUser.uid)
    .collection("Wallet")
    .doc("transferReceived")
    .onSnapshot(async function(doc) {
      const {amount, where, type, received} = await doc.data()

    });
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);
  // const {title, amount, icon} = route.params;

  const lista = [
    {
      title: 'Carga sube',
      amount: 98,
      purchaseId: 3,
      type: "Transporte"
    },
    {
      title: 'Super Dia%',
      amount: 789,
      date: "Sun Nov 08 2020 16:49:19 GMT-0300 (hora estándar de Argentina)",
      purchaseId: 4,
      type: "Almacen"
    },
    {
      title: 'Factura Personal',
      amount: 340,
      purchaseId: 5,
      type: "Servicios"

    },
    {
      title: 'Riot Points',
      amount: 560,
      purchaseId: 6,
      type: "Videojuegos"
    },
    {
      title: 'Shell',
      amount: 7800,
      purchaseId: 6,
      type: "Gasolinera"
    },
    {
      title: 'Netflix',
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento"
    },
    {
      title: 'Medialunas del abuelo',
      amount: 5000,
      purchaseId: 2,
      type: "Panaderia"
    }]

  return (
    <ScrollView >

      <View style={style.balance}>
        <Text style={style.tituloBalance}>Balance General</Text>
        <Text style={style.saldoBalance}>$35.000</Text>
      </View>
      <ListItem
        onPress={() => navigation.navigate('Detalle', {
          title: lista[0].title,
          amount: lista[0].amount,
          icon: lista[0].type
        })}
        style={style.listaContenedor}
      >
        <ListItem.Chevron />
        <ListItem.Content style={style.lista}>
          <ListItem.Title>{lista[0].title} </ListItem.Title>
          <ListItem.Subtitle>${lista[0].amount} </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem
        onPress={() => navigation.navigate('Detalle', {
          title: lista[1].title,
          amount: lista[1].amount,
          icon: lista[1].type
        })}
        style={style.listaContenedor}
      >
        <ListItem.Chevron />
        <ListItem.Content style={style.lista}>
          <ListItem.Title>{lista[1].title} </ListItem.Title>
          <ListItem.Subtitle>${lista[1].amount} </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem
        onPress={() => navigation.navigate('Detalle', {
          title: lista[2].title,
          amount: lista[2].amount,
          icon: lista[2].type
        })}
        style={style.listaContenedor}
      >
        <ListItem.Chevron />
        <ListItem.Content style={style.lista}>
          <ListItem.Title>{lista[2].title}</ListItem.Title>
          <ListItem.Subtitle>${lista[2].amount}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem
        onPress={() => navigation.navigate('Detalle', {
          title: lista[3].title,
          amount: lista[3].amount,
          icon: lista[3].type
        })}
        style={style.listaContenedor}
      >
        <ListItem.Chevron />
        <ListItem.Content style={style.lista}>
          <ListItem.Title>{lista[3].title}</ListItem.Title>
          <ListItem.Subtitle>${lista[3].amount}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <View>
      </View>
    </ScrollView>
  )
}


export default Home