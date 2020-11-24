import React from "react";
import { View, Text, TextInput, TouchableOpacity, Linking } from "react-native";
import styles from "./estilosTransferencia";
import * as SMS from "expo-sms";
import { useDispatch, useSelector } from "react-redux";

const Transferencia = ({ color }) => {
  //   var selector = document.createRange();

  const user = useSelector((state) => state.user.user);
  const shareCVUbySMS = async () => {
    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(
          [],
          `Hola, te comparto mi CVU de MoonBank para la transferencia,\nSaludos y gracias.\n\n${user.cvu}`
        );
      } else {
        Alert.alert("Su dispositivo no es compatible con esta función");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const shareCVUbyWApp = async () => {
    try {
      await Linking.openURL(
        `https://wa.me/?text=Hola, te comparto mi CVU de *MoonBank* para la transferencia,\n_Saludos y gracias._\n\n*${user.cvu}*`
      );
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <View>
      <Text style={{ ...styles.titulotransferencia, color: color.text }}>
        Desde cualquier cuenta
      </Text>
      <Text style={styles.parrafo}>
        Transferís a tu DNI desde una cuenta bancaria o billetera virtual de 07
        a 00 hs, y se acredita en el momento.
      </Text>
      <View style={styles.alerta}>
        <Text style={{ ...styles.textobanco, color: color.text }}>
          Los cajeros automáticos todavía no permiten transferir a un DNI.
        </Text>
      </View>
      <View style={styles.continputs}>
        <View style={styles.grupoformulario}>
          <Text
            style={{ ...styles.label, color: color.dark ? color.s : "grey" }}
          >
            CVU
          </Text>
          <TextInput
            style={{
              ...styles.inputtransferencia,
              color: color.dark ? color.text : "grey",
            }}
            value="0000000984045"
          />
        </View>
      </View>

      {/* <View style={styles.continputs}>
        <View style={styles.grupoformulario}>
          <Text
            style={{ ...styles.label, color: color.dark ? color.s : "grey" }}
          >
            Alias
          </Text>
          <TextInput
            style={{
              ...styles.inputtransferencia,
              color: color.dark ? color.text : "grey",
            }}
            value="ANDRES.QUIQUEAPP"
          />
        </View>
      </View> */}
      <View>
        <TouchableOpacity
          onPress={shareCVUbySMS}
          style={{
            ...styles.btncompartir,
            borderColor: color.dark ? color.s : color.p,
          }}
        >
          <Text
            style={{
              ...styles.textocompartir,
              color: color.dark ? color.s : color.p,
            }}
          >
            Compartir CVU vía SMS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={shareCVUbyWApp}
          style={{
            ...styles.btncompartir,
            borderColor: color.dark ? color.s : color.p,
          }}
        >
          <Text
            style={{
              ...styles.textocompartir,
              color: color.dark ? color.s : color.p,
            }}
          >
            Compartir CVU vía WApp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Transferencia;
