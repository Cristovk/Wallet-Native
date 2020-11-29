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


const Chat = ({ navigation }) => {
  const user = useSelector((store) => store.user);
  console.log('usuario', user)

  const [bienvenida, setBienvenida] = useState(false);
  const [abandonar, setAbandonar] = useState(false);
  const [fechaingreso, setFechaIngreso] = useState(false);
  const [user1,setUser1]=useState(false);
  const [user2,setUser2]=useState(false);
  const [message, setMessage] = useState({
    msg: "",
    senderId: user.user.id,
    userName: user.user.name,
    time: Date.now(),
    numero: "",
    entering: false,
    exiting: false
  });
  const [msjInput, setmsjInput] = useState('')

  const { messages } = chat();

  const { bg, text, primary, secondary, dark } = useSelector((store) => store.color);

  const sendMessage = async () => {
    let mensaje = message;
    mensaje.numero = messages.length;
    storage.collection("messages").add(mensaje);
    setmsjInput('');
  };

  ordenarArray(messages, "numero");
  let minutos;
  let nhoras;
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  let msj = "Hola " + user.user.name + '. ¿En qué te puedo ayudar el día de hoy?';
  let hora = new Date();
  let fecha = hora.getDate() + ' DE ' + (meses[hora.getMonth()]).toUpperCase() + ' DE ' + hora.getFullYear();
  const { name, lastName } = user.user
  minutos=hora.getMinutes()<10 ? '0'+hora.getMinutes():hora.getMinutes();
  nhoras=hora.getHours()<10 ? '0'+hora.getHours():hora.getHours();

  const mostrar = () => {
    setTimeout(() => {
      setFechaIngreso(true);
      setTimeout(() => {
        setUser1(true);
        setTimeout(() => {
          setUser2(true);
          setTimeout(() => {
            setBienvenida(true);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1500);

  }
  mostrar();
  const eliminarConversacion = () => {
    setAbandonar(true);
    setTimeout(() => {
      navigation.navigate('Ayuda');
    }, 2000);
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
          {fechaingreso && (
            <View style={styles.contBienvenida}>
              <Text style={styles.fecha}>{fecha}</Text>
            {user1 && <Text style={styles.fecha}>Andrés Sánchez se ha unido</Text>}
            {user2 && <Text style={styles.fecha}>{name + ' ' + lastName} se ha unido</Text>}
            </View>
          )}

          {bienvenida && (
            <View>
              <MsjBot
                mensaje={msj}
                hora={nhoras + ":" + minutos}
              />
            </View>
          )}

          {messages.map((m, index) => {
            let hora = new Date();
            let data = m;
            if (data.senderId === "dwB0JOFJOlaE3apd6WGI3wyQRQL2") {
              return (
                <View key={index}>
                  <MsjBot
                    mensaje={data.msg}
                    hora={hora.getHours() + ":" + minutos}
                  />
                </View>
              );
            } else {
              return (
                <View key={index}>
                  <MsjUser
                    mensaje={data.msg}
                    hora={hora.getHours() + ":" + minutos}
                  />
                </View>
              );
            }
          })}

          {abandonar && (
            <View style={styles.contBienvenida}>
              <Text style={[styles.fecha, styles.abandonar]}>{name + ' ' + lastName} se ha ido</Text>
            </View>
          )}

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