import React, { useState } from 'react';
import { TextInput, Text, View, Button, Image, ScrollView, Alert } from 'react-native';
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import { styles } from "./Sing-Up-Styles";
import { addUser } from '../../Redux/User';
import { useDispatch, useSelector } from 'react-redux';

const SignUp2 = ({ navigation }) => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [code, setCode] = useState('');
  const [Err, setErr] = useState({
    matchPasswordErr: "",
    shortPasswordErr: "",
    notNumberPasswordErr: "",
    codeErr: "",
  });

  const dispatch = useDispatch()
  const user = useSelector(store => store.user.userAuth)
  const userData = useSelector(store => store.user.userData)
  console.log(user)
  console.log(userData)

  const handleOnPress = () => {
    const valid = validateForm();
    if (valid) {
      dispatch(addUser('password', password2));
      Alert.alert('Cuenta creada!')
      navigation.navigate('Login')
    }
  }

  function validateForm() {
    setErr({
      matchPasswordErr: "",
      shortPasswordErr: "",
      notNumberPasswordErr: "",
      codeErr: "",
    });
    let matchPasswordErr = "";
    let shortPasswordErr = "";
    let notNumberPasswordErr = "";
    let codeErr = "";

    if (password1 !== password2) {
      matchPasswordErr = "Las contraseñas no coinciden";
    }
    if (password1.length < 8 || password1.length > 15) {
      shortPasswordErr = "Debe tener entre 8 y 15 caracteres";
    }
    else if (password1.search(/[0-9]/) == -1) {
      notNumberPasswordErr = "Debe tener al menos un número"
    }
    if (matchPasswordErr || shortPasswordErr || codeErr || notNumberPasswordErr) {
      setErr({ matchPasswordErr, shortPasswordErr, codeErr, notNumberPasswordErr });
      return false;
    } else return true;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.centered}>
          <Image
            style={[styles.icon]}
            source={require('../../../assets/icon.png')}
          />
        </View>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={[styles.inputs]}
          onChangeText={text => setPassword1(text)}
          value={password1}
          placeholder='********'
          placeholderTextColor={grey}
          textContentType='password'
          secureTextEntry={true}
        />
        {Err.shortPasswordErr ? (<Text style={styles.error}>{Err.shortPasswordErr}</Text>) : null}
        {Err.notNumberPasswordErr ? (<Text style={styles.error}>{Err.notNumberPasswordErr}</Text>) : null}
        <Text style={styles.label}>Repite la contraseña</Text>
        <TextInput
          style={[styles.inputs]}
          onChangeText={text => setPassword2(text)}
          value={password2}
          placeholder='********'
          placeholderTextColor={grey}
          textContentType="password"
          secureTextEntry={true}
        />
        {Err.matchPasswordErr ? (<Text style={styles.error}>{Err.matchPasswordErr}</Text>) : null}
        <Text style={styles.label}>Código de seguridad</Text>
        <TextInput
          style={[styles.inputs]}
          onChangeText={text => setCode(text)}
          value={code}
          placeholder='Js3jk56'
          placeholderTextColor={grey}
          textContentType="oneTimeCode"
        />
        <View style={[styles.button, styles.box]}>
          <Button
            title='Anterior'
            color={orange}
            onPress={() => navigation.navigate('SignUp1')}
          />
          <View style={styles.separator}></View>
          <Button
            title='Crear Cuenta'
            color={darkBlue}
            onPress={() => handleOnPress()}
          />
        </View>
      </View>
    </ScrollView>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     email: state.userReducer.userAuth.email
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addUser: (email, password) => dispatch(addUser(email, password))
//   }
// }


export default /*connect(mapStateToProps, mapDispatchToProps)*/SignUp2;