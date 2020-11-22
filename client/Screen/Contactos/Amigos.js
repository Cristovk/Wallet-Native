import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Modal,
  Alert,
  Linking,
} from "react-native";
import { ListItem, Avatar, Icon, ThemeProvider } from "react-native-elements";
import * as Contacts from "expo-contacts";
import { storage, auth } from "../../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { addContact, getContacts } from '../../Redux/Contacts'

const Amigos = ({ navigation }) => {
  // const onlyContacts = [...new Set(contactsRedux)] 

  const user = useSelector((store) => store.user);
  const contactos = useSelector((store) => store.contacts)
  const [contacts, setContacts] = useState(contactos);
  const dispatch = useDispatch()
  const { text, bg } = useSelector((store) => store.color);

  // Función del modal para los detalles
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState("");
  const toggle = () => {
    setModal(!modal);
    if (index)
      setIndex("")
  }
  const myTheme = {
    ListItem: {
      containerStyle: {
        backgroundColor: bg,
      },
    },
    Icon: {
      color: text,
    },
  };

  // const contactsRedux = async () => {
  //   let id = auth.currentUser.uid
  //   await dispatch(addContact(id))
  //   await dispatch(getContacts(id)) 
  // };
  
  useEffect(() => {
    console.log(user)
  }, []);

  const requestMoney = async (phone) => {
    // await Linking.openURL("sms:+5493517733375?body=otro");
    await Linking.openURL(`https://wa.me/${phone}?text=Hola, necesitooooooo plataaaa! `)
  };

  return (
    <ScrollView>
      <ThemeProvider theme={myTheme}>

        {contactos[0] &&
          contactos.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar rounded source={{ uri: l.imagen }} />
              <ListItem.Content>
                <ListItem.Title style={{ color: text }}>
                  {l.name}
                </ListItem.Title>
                <ListItem.Subtitle style={{color:'grey'}}>QuiqueBank</ListItem.Subtitle>
              </ListItem.Content>
              <Icon
                name="ios-information-circle"
                type="ionicon"
                onPress={() => {
                  setIndex(l);
                  toggle();
                }}
              />
              {l.telefono !== "--" && (
                <Icon
                  name="ios-hand"
                  type="ionicon"
                  onPress={() => requestMoney(l.phone)}
                />
              )}
              <Icon
                name="ios-send"
                type="ionicon"
                onPress={() =>
                  navigation.navigate("Finish",  {
                    receiver: {apellido: l.lastName, nombre: l.name, cvu: l.cvu, dni: l.dni, telefono:  l.phone},
                    dato: {receivercvu: l.cvu, senderId:user.user.id},
                  }
                  )
                }
              />
            </ListItem>
          ))}
      </ThemeProvider>
      {/* ----------MODAL--------- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        {index && (
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <ListItem bottomDivider style={{ width: 200 }}>
                  <Avatar
                    size="medium"
                    rounded
                    source={{ uri:index.imagen }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{index.lastname ? index.name + " " + index.lastname : index.name}</ListItem.Title>
                    <ListItem.Subtitle>
                      QuiqueBank
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </View>
              <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                {/* <Text>Alias: {contactos[index].alias}</Text>
                <Text>CBU: {contactos[index].cbu}</Text>
                <Text>CVU: {contactos[index].cvu}</Text> */}
                <Text>Telefono: {index.phone}</Text>
              </View>
              <ListItem topDivider>
                <Icon onPress={toggle} name="arrow-left" type="fontisto" />
                {/* <Icon onPress={toggle} name="trash" type="fontisto" /> */}
              </ListItem>
            </View>
          </View>
        )}
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  list: {
    width: 200,
    justifyContent: "space-around",
  },
});

export default Amigos;
