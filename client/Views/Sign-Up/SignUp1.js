import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native'
import { styles } from "./Sing-Up-Styles";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";

const SignUp1 = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [DNI, setDNI] = useState('');
  const [CUIL, setCUIL] = useState('');
  const [Err, setErr] = useState({
    invalidPhoneFormat: "",
    emptyPhone: "",
    invalidDNIFormat: "",
    emptyDNI: "",
    invalidCUILFormat: "",
    emptyCUIL: "",
  });

  const validateForm = () => {
    setErr({
      invalidPhoneFormat: "",
      emptyPhone: "",
      invalidDNIFormat: "",
      emptyDNI: "",
      invalidCUILFormat: "",
      emptyCUIL: "",
    });
    let invalidPhoneFormat = "";
    let emptyPhone = "";
    let invalidDNIFormat = "";
    let emptyDNI = "";
    let invalidCUILFormat = "";
    let emptyCUIL = "";

    if (!phone) {
      emptyPhone = 'El campo Teléfono es necesario';
    }
    else if (!/^[+549][0-9]{13,14}$/.test(phone)) {
      invalidPhoneFormat = " Formato de correo incorrecto, debe ser del tipo \n +549 11 2345 6789";
    }
    if (!DNI) {
      emptyDNI = 'El campo DNI es necesario';
    }
    else if (!/^[0-9]{8}$/.test(DNI)) {
      invalidDNIFormat = " El DNI debe tener 8 dígitos";
    }
    if (!CUIL) {
      emptyCUIL = 'El campo CUIL es necesario';
    }
    else if (!/^[0-9]{11}$/.test(CUIL)) {
      invalidCUILFormat = " Debe tener 11 dígitos";
    }
    if (emptyPhone || invalidPhoneFormat || emptyDNI || invalidDNIFormat || emptyCUIL || invalidCUILFormat) {
      setErr({ emptyPhone, invalidPhoneFormat, emptyDNI, invalidDNIFormat, emptyCUIL, invalidCUILFormat });
      return false;
    } else return true;
  }
  const handleOnPress = () => {
    const valid = validateForm();
    if (valid) {
      navigation.navigate('SignUp2');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Image
          style={[styles.icon]}
          source={require('../../../assets/icon.png')}
        />
      </View>
      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setPhone(text)}
        value={phone}
        placeholder='+54 9 11 1234-5678'
        placeholderTextColor={grey}
        textContentType="telephoneNumber"
      />
      {
        Err.emptyPhone ? (<Text style={styles.error}>{Err.emptyPhone}</Text>) : null
      }
      {
        Err.invalidPhoneFormat ? (<Text style={styles.error}>{Err.invalidPhoneFormat}</Text>) : null
      }
      <Text style={styles.label}>DNI</Text>
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setDNI(text)}
        value={DNI}
        placeholder='12.345.678'
        placeholderTextColor={grey}
      />
      {
        Err.emptyDNI ? (<Text style={styles.error}>{Err.emptyDNI}</Text>) : null
      }
      {
        Err.invalidDNIFormat ? (<Text style={styles.error}>{Err.invalidDNIFormat}</Text>) : null
      }
      <Text style={styles.label}>CUIL</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={text => setCUIL(text)}
        value={CUIL}
        placeholder='00-12345678-9'
        placeholderTextColor={grey}
      />
      {
        Err.emptyCUIL ? (<Text style={styles.error}>{Err.emptyCUIL}</Text>) : null
      }
      {
        Err.invalidCUILFormat ? (<Text style={styles.error}>{Err.invalidCUILFormat}</Text>) : null
      }
      <View style={[styles.button, styles.box]}>
        <Button
          title='Anterior'
          color={orange}
          onPress={() => navigation.navigate('SignUp')}
        />
        <View style={styles.separator}></View>
        <Button
          title='Siguiente'
          color={darkBlue}
          onPress={() => handleOnPress()}
        />
      </View>
    </View>
  )
}

export default SignUp1;