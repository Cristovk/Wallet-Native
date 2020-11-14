import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Modal, Alert, Linking } from 'react-native'
import { ListItem, Avatar, Icon, ThemeProvider } from 'react-native-elements'
import { useSelector } from 'react-redux'
import * as Contacts from 'expo-contacts'

const list = [
  {
    id: 1,
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Banco Galicia',
    alias: 'Tardes_que_son_Tardes',
    cbu: 156489872354 / 8,
    cvu: '--',
    telefono: '--'
  },
  {
    id: 2,
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'QuiqueBank',
    alias: 'Don_Quijote',
    cbu: '--',
    cvu: '--',
    telefono: 3794258963
  },
  {
    id: 3,
    name: 'Vicky Amadea',
    avatar_url: 'https://randomuser.me/api/portraits/women/44.jpg',
    subtitle: 'Banco Brubank',
    alias: 'El_reino_animal',
    cbu: 156489485354 / 6,
    cvu: '--',
    telefono: '--'
  }
]

const Amigos = ({ navigation }) => {

  const { text, bg } = useSelector(store => store.color)
  // Función del modal para los detalles
  const [modal, setModal] = useState(false)
  const [index, setIndex] = useState('')
  const toggle = () => setModal(!modal)
  const myTheme = {
    ListItem: {
      containerStyle: {
        backgroundColor: bg
      }
    },
    Icon: {
      color: text
    }
  }

  const [contacts,setContacts] = useState([])

  useEffect(()=>{
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({fields:[Contacts.Fields.Name,Contacts.Fields.PhoneNumbers]});
        const format = data.map((c,index) => ({
          id: index,
          name: c.name,
          telefono: c.phoneNumbers[0].digits,
          avatar_url: '--',
          subtitle: 'QuiqueBank',
          alias: 'Don_Quijote',
          cbu: '--',
          cvu: '--'
        }))
        setContacts(format)
      }
    })()
  },[])

  const requestMoney = async(phone) => {
    await Linking.openURL('sms:+5493517733375?body=otro')
    /* await Linking.openURL(`https://wa.me/+5493517733375?text=dame plata`) */
  }

  return (
    <ScrollView>
      <ThemeProvider theme={myTheme}>
        {list.map((l, i) =>
          <ListItem key={i} bottomDivider>
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title style={{ color: text }}>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name='ios-information-circle' type='ionicon' onPress={() => { setIndex(l.id); toggle() }} />
            {l.telefono !== '--' && <Icon name='ios-hand' type='ionicon' onPress={()=>requestMoney(l.telefono)} />}
            <Icon name='ios-send' type='ionicon' onPress={() => navigation.navigate('TransfAmigo', {
              name: l.name,
              banco: l.subtitle,
              alias: l.alias,
              cvu: l.cvu,
              telefono: l.telefono
            })} />
          </ListItem>
        )}
        <Text>{JSON.stringify(contacts[0])}</Text>
      </ThemeProvider>
      {/* ----------MODAL--------- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
        }}
      >
        {index &&
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <ListItem bottomDivider style={{ width: 200 }}>
                  <Avatar size='medium' rounded source={{ uri: list[index - 1].avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title>{list[index - 1].name}</ListItem.Title>
                    <ListItem.Subtitle>{list[index - 1].subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </View>
              <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Text>Alias: {list[index - 1].alias}</Text>
                <Text>CBU: {list[index - 1].cbu}</Text>
                <Text>CVU: {list[index - 1].cvu}</Text>
                <Text>Telefono: {list[index - 1].telefono}</Text>
              </View>
              <ListItem topDivider >
                <Icon onPress={toggle} name='arrow-left' type='fontisto' />
                <Icon onPress={toggle} name='trash' type='fontisto' />
              </ListItem>
            </View>
          </View>}
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  list: {
    width: 200,
    justifyContent: 'space-around'
  }
})

export default Amigos