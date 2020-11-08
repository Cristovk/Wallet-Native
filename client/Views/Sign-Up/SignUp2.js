import React, {useState} from 'react';
import { TextInput, Text, View, Button, Image } from 'react-native';
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import { styles } from "./Sing-Up-Styles";
// import {
//   TextField,
//   FilledTextField,
//   OutlinedTextField,
// } from 'react-native-material-textfield';



const SignUp2 = ({navigation}) => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [code, setCode] = useState('');
  const [Err, setErr] = useState({
    matchPasswordErr: "",
    shortPasswordErr: "",
    codeErr: "",
  });
  const handleOnPress = () => {
    const valid = validateForm();
    if (valid) {
      
      navigation.navigate('SignIn')
    }
  }
  const formatText = () => {
    
  }

  function validateForm() {
    setErr({ 
      matchPasswordErr: "",
      shortPasswordErr: "",
      codeErr: "",
    });
    let matchPasswordErr = "";
    let shortPasswordErr = "";
    let codeErr = "";

    if (password1 !== password2) {
      matchPasswordErr = " Las contraseñas no coinciden";
    }
    if (password1.length < 8) {
      shortPasswordErr = " Debe tener al menos 8 caracteres";
    }
    // if (codeErr ) {
      
    // }
    if (matchPasswordErr || shortPasswordErr || codeErr) {
      setErr({ matchPasswordErr, shortPasswordErr, codeErr });
      return false;
    } else return true;
  }
  return (
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
        placeholder= '********'
        placeholderTextColor={grey}
        textContentType= 'password'
      />
      {
        Err.shortPasswordErr ? 
        (<Text style={styles.error}>{Err.shortPasswordErr}</Text>) :
        null
      }
      {/* <OutlinedTextField
        label='Contraseña'
        formatText={formatText}
        onSubmitEditing={handleOnPress()}
        ref={this.fieldRef}
        errorColor= 'red'
      /> */}
      <Text style={styles.label}>Repite la contraseña</Text>    
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setPassword2(text)}
        value={password2}
        placeholder= '********'
        placeholderTextColor={grey}
        textContentType= "password"
      />
      {
        Err.matchPasswordErr ? 
        (<Text style={styles.error}>{Err.matchPasswordErr}</Text>) :
        null
      }
      <Text style={styles.label}>Código de seguridad</Text>    
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setCode(text)}
        value={code}
        placeholder='Js3jk56'
        placeholderTextColor={grey}
        textContentType= "oneTimeCode"
      />
      <View style={[styles.button, styles.box]}>
        <Button
          title='Anterior'
          color={orange}
          onPress={()=> navigation.navigate('SignUp1')}
        />
        <View style={styles.separator}></View>
        <Button
          title='Crear Cuenta'
          color={darkBlue}
          onPress={()=> handleOnPress()}
        />
      </View>
    </View>
  )
}

export default SignUp2;