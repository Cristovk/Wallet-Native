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
import { ListItem, Avatar, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { iconM } from "../../Components/stack/profileImage";

const Amigos = ({ navigation }) => {
  const user = useSelector((store) => store.user.user);
  const contactos = useSelector((store) => store.contacts);
  const [contacts, setContacts] = useState([]);
  const { text, bg, dark, primary, secondary } = useSelector(
    (store) => store.color
  );

  // Función del modal para los detalles
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState("");
  const toggle = () => {
    setModal(!modal);
    if (index) setIndex("");
  };

  // const contactsRedux = async () => {
  //   let id = auth.currentUser.uid
  //   await dispatch(addContact(id))
  //   await dispatch(getContacts(id))
  // };
  useEffect(() => {
    setContacts(contactos);
  }, []);

  const requestMoney = async (phone) => {
    // await Linking.openURL("sms:+5493517733375?body=otro");
    await Linking.openURL(
      `https://wa.me/${phone}?text=Hola, te comparto mi CVU de MoonBank para la transferencia,\nSaludos y gracias.\n\n*${user.cvu}*`
    );
  };

  return (
    <View style={{ backgroundColor: bg, height: "100%" }}>
      <View
        style={{
          height: 50,
          borderRadius: 10,
          backgroundColor: primary,
          marginBottom: -15,
        }}
      ></View>
      <View style={{ backgroundColor: primary, height: "100%" }}>
        <ScrollView>
          {contacts[0] &&
            contacts.map((l, i) => {
              return (
                <ListItem
                  key={i}
                  bottomDivider
                  containerStyle={{ backgroundColor: primary }}
                >
                  <Avatar rounded source={{ uri: l.imagen || iconM }} />
                  <ListItem.Content>
                    <ListItem.Title
                      style={{ color: !dark ? text : "black", fontSize: 20 }}
                    >
                      {l.name}
                    </ListItem.Title>
                    <ListItem.Subtitle
                      style={{ color: !dark ? secondary : "black" }}
                    >
                      MoonBank
                    </ListItem.Subtitle>
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
                      name="ios-share-alt"
                      type="ionicon"
                      onPress={() => requestMoney(l.phone)}
                    />
                  )}
                  <Icon
                    name="ios-send"
                    type="ionicon"
                    onPress={() =>
                      navigation.navigate("Finish", {
                        receiver: {
                          apellido: l.lastName,
                          nombre: l.name,
                          cvu: l.cvu,
                          dni: l.dni,
                          telefono: l.phone,
                        },
                        dato: {
                          receivercvu: l.cvu,
                          senderId: user.id,
                        },
                      })
                    }
                  />
                </ListItem>
              );
            })}

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
                <View style={[styles.modalView, { backgroundColor: primary }]}>
                  <View>
                    <ListItem
                      bottomDivider
                      style={{ width: 200 }}
                      containerStyle={{ backgroundColor: primary }}
                    >
                      <Avatar
                        size="medium"
                        rounded
                        source={{ uri: index.imagen }}
                      />
                      <ListItem.Content>
                        <ListItem.Title style={{ fontSize: 20 }}>
                          {index.lastname
                            ? index.name + " " + index.lastname
                            : index.name}
                        </ListItem.Title>
                        <ListItem.Subtitle>MoonBank</ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  </View>
                  <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                    {/* <Text>Alias: {contactos[index].alias}</Text>
                <Text>CBU: {contactos[index].cbu}</Text>
                <Text>CVU: {contactos[index].cvu}</Text> */}
                    <Text style={{ fontSize: 15 }}>
                      Telefono: {index.phone}
                    </Text>
                  </View>
                  <ListItem
                    topDivider
                    containerStyle={{ backgroundColor: primary }}
                  >
                    <Icon
                      onPress={toggle}
                      name="arrow-left"
                      type="fontisto"
                      color={!dark ? text : secondary}
                    />
                    {/* <Icon onPress={toggle} name="trash" type="fontisto" /> */}
                  </ListItem>
                </View>
              </View>
            )}
          </Modal>
        </ScrollView>
      </View>
    </View>
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
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
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
