import React, { useState } from "react";
import { View, ScrollView, Text, TextInput,Dimensions } from "react-native";
import styles from "./EstilosChat";
import { Icon } from "react-native-elements";
import MsjBot from "./MsjBot";
import MsjUser from "./MsjUser";
import MsjFoto from "./MsjFoto";
import { changeImage, validarChat } from "./FuncionesChat";
import { useSelector } from "react-redux";
import { auth } from "../../../firebase";

const Prueba = () => {
  const [conversation, setConversation] = useState([]); //Listado de mensajes del usuario
  const [msj, setMsj] = useState(""); //Mensaje actual del usuario
  const alto= Dimensions.get('window').height*0.90;

  const {user} = useSelector((store)=>store.user);
  const { bg, text, primary, secondary,dark } = useSelector((store) => store.color);
  const sendMsj = () => {
    if (msj) {
      const mensaje = msj.toLowerCase();

      const respuesta = validarChat(mensaje,user.name);
      setConversation([
        ...conversation,
        { msj: msj, res: respuesta, active: false },
      ]);
      setMsj("");
    }
  };
  

  return (
    <View style={styles.general,{backgroundColor:dark?'#000':bg,height:'100%'}}>
      <View style={[styles.contMensajes,{backgroundColor:'#fff'}]}>
        <ScrollView style={styles.scroll}>
          <View style={styles.contBot}>
            <Text style={styles.msjBot}>
              Hola. {user.name} ¿En qué te podemos ayudar hoy?
            </Text>
          </View>

          {conversation.map((ele, index) => {
            let data = ele;
            if (data.msj.slice(0, 4) === "data") {
              return (
                <View key={index}>
                  <MsjFoto url={ele.msj} />
                  <MsjBot mensaje={ele.res} />
                </View>
              );
            } else {
              return (
                <View key={index}>
                  <MsjUser mensaje={ele.msj} />
                  <MsjBot mensaje={ele.res} />
                </View>
              );
            }
          })}
        </ScrollView>
      </View>

      <View style={[styles.contInput,{backgroundColor:dark ? text:primary}]}>
        <View style={styles.contCam}>
          <Icon
            size={16}
            name="camera"
            type="font-awesome"
            color="grey"
            onPress={() => changeImage(conversation, setConversation)}
          />
        </View>

        <TextInput
          placeholder="Escribe un mensaje"
          multiline={true}
          numberOfLines={2}
          style={styles.input}
          placeholderTextColor="grey"
          onChangeText={(data) => setMsj(data)}
          value={msj}
        />
        <View style={styles.contSend}>
          <Icon
            size={23}
            name="send"
            type="material"
            color="grey"
            onPress={sendMsj}
          />
        </View>
      </View>
    </View>
  );
};

export default Prueba;
