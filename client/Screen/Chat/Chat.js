import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TextInput, Dimensions } from "react-native";
import styles from "./EstilosChat";
import { Icon } from "react-native-elements";
import MsjBot from "./MsjBot";
import MsjUser from "./MsjUser";
import MsjFoto from "./MsjFoto";
import { changeImage, chat, ordenarArray } from "./FuncionesChat";
import { storage } from "../../../firebase";
import { useSelector } from "react-redux";
import { InputGroup } from "native-base";

const Chat = ({navigation}) => {
  const user = useSelector((store) => store.user);
  
  const [bienvenida, setBienvenida] = useState(false);
  const [message, setMessage] = useState({
    msg: "",
    senderId: user.user.id,
    userName: user.user.name,
    time: Date.now(),
    numero: "",
    entering: false,
    exiting: false
  });
  const [msjInput,setmsjInput]=useState('')

  const { messages } = chat();
  
  const { bg, text, primary, secondary, dark } = useSelector((store) => store.color);

  const sendMessage = async () => {
    let mensaje = message;
    mensaje.numero = messages.length;
    storage.collection("messages").add(mensaje);
    setmsjInput('');
  };
  
  ordenarArray(messages, "numero");

  let msj = "Hola " + user.user.name + '. ¿En qué te puedo ayudar el día de hoy?';
  let hora = new Date();

 
  const mostrar = () => {
    setTimeout(() => {
      setBienvenida(true);
    }, 3000);
  }
  mostrar();
  const eliminarConversacion = ()=>{
    setBienvenida(false);
    navigation.navigate('Ayuda')
  }

  return (
    <View
      style={
        (styles.general,
          { backgroundColor: dark ? "#000" : bg, height: "100%" })
      }
    >
      <View style={styles.cerrarChat}>
            <Icon
              size={16}
              name="times"
              type="font-awesome"
              color="#fff"
              onPress={eliminarConversacion}
            />
      </View>

    
     
      <View style={[styles.contMensajes, { backgroundColor: "#fff" }]}>
        <ScrollView style={styles.scroll}>
          

          {!bienvenida && (
            <Text style={styles.bienvenida}>
              Hernán el trolo se ha unido a la conversación ...
            </Text>
          )}
          {bienvenida && (
            <View>
              <MsjBot
                mensaje={msj}
                hora={hora.getHours() + ":" + hora.getMinutes() }
              />
            </View>
          )}

          {messages.map((m, index) => {
            let hora = new Date();
            let data = m;
            if (data.senderId === "KB0ULCTcdjOyF6IjVMn2T5rPyQt2") {

              return (
                <View key={index}>
                  <MsjBot
                    mensaje={data.msg}
                    hora={hora.getHours() + ":" + hora.getMinutes()}
                  />
                </View>
              );
            } else {
              return (
                <View key={index}>
                  <MsjUser
                    mensaje={data.msg}
                    hora={hora.getHours() + ":" + hora.getMinutes()}
                  />
                </View>
              );
            }
          })}
        </ScrollView>
      </View>


      <View
        style={[styles.contInput, { backgroundColor: dark ? text : primary }]}
      >
        <View style={styles.contCam}>
          <Icon
            size={16}
            name="camera"
            type="font-awesome"
            color="grey"
          />
        </View>

        <TextInput
          placeholder="Escribe un mensaje"
          multiline={true}
          numberOfLines={2}
          style={styles.input}
          placeholderTextColor="grey"
          value={msjInput}
          onChangeText={(data) => {
            setmsjInput(data), setMessage({ ...message, msg: data });
          }}
        />
        <View style={styles.contSend}>
          <Icon
            size={23}
            name="send"
            type="material"
            color="grey"
            onPress={sendMessage}
          />

        </View>
      </View>
    </View>
  );
};

export default Chat;