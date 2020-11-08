import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native'
import { styles } from "./Sing-Up-Styles";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";


const SignUp1 = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [DNI, setDNI] = useState('');
  const [CUIL, setCUIL] = useState('');

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
        placeholder='+54 9 00 1234-5678'
        placeholderTextColor={grey}
        textContentType="telephoneNumber"
      />
      <Text style={styles.label}>DNI</Text>
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setDNI(text)}
        value={DNI}
        placeholder='12.345.678'
        placeholderTextColor={grey}
      />
      <Text style={styles.label}>CUIL</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={text => setCUIL(text)}
        value={CUIL}
        placeholder='00-12345678-9'
        placeholderTextColor={grey}
      />
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
          onPress={() => navigation.navigate('SignUp2')}
        />
      </View>
    </View>
  )
}

export default SignUp1;