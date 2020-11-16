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
import { useSelector } from "react-redux";

const list = [
  {
    id: 1,
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Banco Galicia",
    alias: "Tardes_que_son_Tardes",
    cbu: 156489872354 / 8,
    cvu: "--",
    telefono: "--",
  },
  {
    id: 2,
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "QuiqueBank",
    alias: "Don_Quijote",
    cbu: "--",
    cvu: "--",
    telefono: 3794258963,
  },
  {
    id: 3,
    name: "Vicky Amadea",
    avatar_url: "https://randomuser.me/api/portraits/women/44.jpg",
    subtitle: "Banco Brubank",
    alias: "El_reino_animal",
    cbu: 156489485354 / 6,
    cvu: "--",
    telefono: "--",
  },
];

const Amigos = ({ navigation }) => {
  const user = useSelector((store) => store.user.user);

  const { text, bg } = useSelector((store) => store.color);
  // Función del modal para los detalles
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState("");
  const toggle = () => setModal(!modal);
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

  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    console.log(status);
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      // console.log("dataaaaaaaaaaaaaaaaaaaa",data);
      const format = data.map((c, index) => ({
        id: index,
        name: c.name,
        telefono: "-",
        avatar_url: "--",
        subtitle: "QuiqueBank",
        alias: "Don_Quijote",
        cbu: "--",
        cvu: "--",
      })); /* console.log(format, "-------------------> format");
      const contactos = format.filter(async (c) => {
        console.log(c, "---------->c");
        let datos = storage
          .collection("Users")
          .where("phone", "==", `${c.telefono}`);
        let getRes = await datos.get();
        let data = await getRes.docs[0].data();
        return data.phone === c.telefono;
      });
      console.log("------------>", contactos); */
      /* console.log("formaaaaaaaaaaaat", format) */ setContacts(format);
    }
  };

  /* const favoriteContact = () => {
    return storage
      .collection("Users")
      .doc(user.uid)
      .collection("Contacts")
      .doc("hola")
      .set({ name: "Soy el object" });
  }; */

  useEffect(() => {
    getContacts();
    // getUser()
    /* favoriteContact(); */
  }, []);

  const requestMoney = async (phone) => {
    await Linking.openURL("sms:+5493517733375?body=otro");
    /* await Linking.openURL(`https://wa.me/+5493517733375?text=dame plata`) */
  };

  console.log(contacts);

  return (
    <ScrollView>
      <ThemeProvider theme={myTheme}>
        {contacts[0] &&
          contacts.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar rounded source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title style={{ color: text }}>
                  {l.name}
                </ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
              <Icon
                name="ios-information-circle"
                type="ionicon"
                onPress={() => {
                  setIndex(l.id);
                  toggle();
                }}
              />
              {l.telefono !== "--" && (
                <Icon
                  name="ios-hand"
                  type="ionicon"
                  onPress={() => requestMoney(l.telefono)}
                />
              )}
              <Icon
                name="ios-send"
                type="ionicon"
                onPress={() =>
                  navigation.navigate("TransfAmigo", {
                    name: l.name,
                    banco: l.subtitle,
                    alias: l.alias,
                    cvu: l.cvu,
                    telefono: l.telefono,
                  })
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
                    source={{ uri: contacts[index].avatar_url }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{contacts[index].name}</ListItem.Title>
                    <ListItem.Subtitle>
                      {contacts[index].subtitle}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </View>
              <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Text>Alias: {contacts[index].alias}</Text>
                <Text>CBU: {contacts[index].cbu}</Text>
                <Text>CVU: {contacts[index].cvu}</Text>
                <Text>Telefono: {contacts[index].telefono}</Text>
              </View>
              <ListItem topDivider>
                <Icon onPress={toggle} name="arrow-left" type="fontisto" />
                <Icon onPress={toggle} name="trash" type="fontisto" />
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
