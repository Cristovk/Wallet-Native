import React from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import style from "./Check_Styles";
import { Icon, ListItem } from "react-native-elements";

const confirmOrError = ({ navigation, route }) => {
  const datos = route.params
 console.log("---------",datos)
 console.log("ESTO",datos.receiver)
 console.log('BIEN',route.params.receiver)
  return (
    <ScrollView>
        <View style={style.tituloContainer}>
          <Text style={style.titulo}>Datos del receptor</Text>
        </View>
        <View style={style.listaContenedor}>
          <ListItem style={style.lista}>
          
            <ListItem.Content>
              <ListItem.Title>Nombre:</ListItem.Title>
              <ListItem.Subtitle>{"Lizi Tagliani"}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
           
            <ListItem.Content>
              <ListItem.Title>Dni: </ListItem.Title>
              <ListItem.Subtitle>{"41130203"} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
        
            <ListItem.Content>
              <ListItem.Title>Telefono: </ListItem.Title>
              <ListItem.Subtitle>{"+541198562"} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            
            <ListItem.Content>
              <ListItem.Title>Cvu: </ListItem.Title>
              <ListItem.Subtitle>{"456789798"} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <View style={[style.botonContainer, { marginBottom: 15 }]}>
             
                <TouchableOpacity
                  style={style.boton}
                  onPress={() => {

                      navigation.navigate("Finish", {
                       
                      })
                  }}
                >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Confirmar</Text>
            
          </TouchableOpacity>
          <TouchableOpacity
                  style={style.boton}
                  onPress={() => {

                      navigation.navigate("Home", {
                       
                      })
                  }}
                >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Cancelar</Text>
            
          </TouchableOpacity>
          </View>
          </View>
    </ScrollView>
  );
};

export default confirmOrError;
