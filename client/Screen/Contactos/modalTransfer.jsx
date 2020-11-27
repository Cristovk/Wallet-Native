import React from 'react'
import {
    View,
    Button,
    Text,
    ScrollView,
    StyleSheet,
    Modal,
    Alert,
    Linking,
  } from "react-native";
  import { ListItem, Avatar, Icon } from "react-native-elements";

  const ModalTransfer = ({transfer,toggle,styles,user,navigation, dark, primary, secondary, text }) => {
      return(
          <View style={styles.centeredView}>
            <View style={[styles.modalView, { backgroundColor: primary }]}>
              <View>
                <ListItem
                  bottomDivider
                  style={{ width: 200 }}
                  containerStyle={{ backgroundColor: primary }}
                >
                  <ListItem.Content>
                    <ListItem.Title style={{ fontSize: 20 }}>
                      Transferir
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </View>
              <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection:'row',justifyContent:'space-around'}}>
                <Button title='Pesos' onPress={()=>{
                    navigation.navigate("Finish", {
                        receiver: {
                          apellido: transfer.lastName,
                          nombre: transfer.name,
                          cvu: transfer.cvu,
                          dni: transfer.dni,
                          telefono: transfer.phone,
                        },
                        dato: {
                          receivercvu: transfer.cvu,
                          senderId: user.id,
                        },
                      })
                    toggle()
                }}/>
                <Button title='Dolares' onPress={()=>{
                    navigation.navigate("FinishDolar", {
                        receiver: {
                          apellido: transfer.lastName,
                          nombre: transfer.name,
                          cvu: transfer.cvu,
                          dni: transfer.dni,
                          telefono: transfer.phone,
                        },
                        dato: {
                          receivercvu: transfer.cvu,
                          senderId: user.id,
                        },
                      })
                    toggle()
                }}/>
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
      )
  }

  export default ModalTransfer 