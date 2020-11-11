import React, { useState } from 'react';
import { Text, View, Dimensions, Image, TextInput, Button, ScrollView } from 'react-native';
import { styles } from "./Sing-Up-Styles";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import { addUser, saveData } from '../../Redux/User'
import { useDispatch } from 'react-redux'



Dimensions.get('window').width;
Dimensions.get('window').height;

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [birthday, setBirthday] = useState();
  const [Err, setErr] = useState({
    emptyName: "",
    emptyLastname: "",
    emptyEmail: "",
    invalidEmailFormat: "",
    emptyDay: "",
    invalidDayFormat: "",
    emptyMonth: "",
    invalidMonthFormat: "",
    emptyYear: "",
    invalidYearFormat: "",
  });
<<<<<<< HEAD

  let newDate = new Date(year, month - 1, day);
=======
                                                                   
  let newDate = new Date( month - 1, day, year);
>>>>>>> 93b196104c0f6f0654f0dd930adeda91de30f291
  let actualYear = new Date().getFullYear();

  const validateForm = () => {
    setErr({
      emptyName: "",
      emptyLastname: "",
      emptyEmail: "",
      invalidEmailFormat: "",
      emptyDay: "",
      invalidDayFormat: "",
      emptyMonth: "",
      invalidMonthFormat: "",
      emptyYear: "",
      invalidYearFormat: "",
    });
    let emptyName = "";
    let emptyLastname = "";
    let emptyEmail = "";
    let invalidEmailFormat = "";
    let emptyDay = "";
    let invalidDayFormat = "";
    let emptyMonth = "";
    let invalidMonthFormat = "";
    let emptyYear = "";
    let invalidYearFormat = "";

    if (!name) {
      emptyName = 'El campo Nombre(s) es necesario';
    }
    if (!lastname) {
      emptyLastname = 'El campo Appellido(s) es necesario';
    }
    if (!email) {
      emptyEmail = 'El campo Email es necesario';
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      invalidEmailFormat = "Formato de email inválido";
    }
    if (!day) {
      emptyDay = 'El campo Día es necesario';
    }
    else if (day < 1 || day > 31 || isNaN(day)) {
      invalidDayFormat = "Escoja un número entre 1 y 31";
    }
    else if (!month) {
      emptyMonth = "El campo Mes es necesario";
    }
    else if (month < 1 || month > 12 || isNaN(month)) {
      invalidMonthFormat = "Escoja un mes entre 1 y 12";
    }
    else if (!year) {
      emptyYear = 'El campo Año es necesario';
    }
    else if (year < (actualYear - 100) || year > actualYear || isNaN(year)) {
      invalidYearFormat = `Elija un año entre ${actualYear - 100} y ${actualYear}`;
    }
    if (emptyName || emptyLastname || emptyEmail || invalidEmailFormat || emptyDay || invalidDayFormat || emptyMonth || invalidMonthFormat || emptyYear || invalidYearFormat) {
      setErr({ emptyName, emptyLastname, emptyEmail, invalidEmailFormat, emptyDay, invalidDayFormat, emptyMonth, invalidMonthFormat, emptyYear, invalidYearFormat });
      return false;
    }
    else return true;
  }

  let info = {
    name: name,
    lastname: lastname,
    birthday: birthday
  }

  const handleOnPress = () => {
    console.log(info)
    const valid = validateForm();
    if (valid) {
      dispatch(addUser('email', email))
      dispatch(saveData(info))
      setBirthday(newDate);
      navigation.navigate('SignUp1')
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centered}>
        <Image
          style={[styles.icon]}
          source={require('../../../assets/icon.png')}
        />
      </View>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setName(text)}
        value={name}
        placeholder='John'
        placeholderTextColor={grey}
        textContentType="name"
      />
      {Err.emptyName ? (<Text style={styles.error}>{Err.emptyName}</Text>) : null}
      <Text style={styles.label}>Apellidos</Text>
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setLastname(text)}
        value={lastname}
        placeholder='Doe'
        placeholderTextColor={grey}
        textContentType="familyName"
      />
      {Err.emptyLastname ? (<Text style={styles.error}>{Err.emptyLastname}</Text>) : null}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder='johndoe@emailserver.com'
        placeholderTextColor={grey}
        textContentType="emailAddress"
      />
      {Err.emptyEmail ? (<Text style={styles.error}>{Err.emptyEmail}</Text>) : null}
      {Err.invalidEmailFormat ? (<Text style={styles.error}>{Err.invalidEmailFormat}</Text>) : null}
      <Text style={styles.label}>Cumpleaños</Text>
      <View style={[styles.inputs, styles.cumple]}>
        <TextInput
          placeholder='Día'
          placeholderTextColor='black'
          onChangeText={(d) => setDay(d)}
          style={[styles.date]}
          maxLength={2}
        />
        <View style={styles.verticalSeparator}></View>
        <TextInput
          placeholder='Mes'
          placeholderTextColor='black'
          onChangeText={(m) => setMonth(m)}
          style={[styles.date]}
          maxLength={2}
        />
        <View style={styles.verticalSeparator}></View>
        <TextInput
          placeholder='Año'
          placeholderTextColor='black'
          onChangeText={(y) => setYear(y)}
          style={[styles.date]}
          maxLength={4}
        />
      </View>
      {Err.emptyDay ? (<Text style={styles.error}>{Err.emptyDay}</Text>) : null}
      {Err.invalidDayFormat ? (<Text style={styles.error}>{Err.invalidDayFormat}</Text>) : null}
      {Err.emptyMonth ? (<Text style={styles.error}>{Err.emptyMonth}</Text>) : null}
      {Err.invalidMonthFormat ? (<Text style={styles.error}>{Err.invalidMonthFormat}</Text>) : null}
      {Err.emptyYear ? (<Text style={styles.error}>{Err.emptyYear}</Text>) : null}
      {Err.invalidYearFormat ? (<Text style={styles.error}>{Err.invalidYearFormat}</Text>) : null}
      <View style={[styles.button, styles.box]}>
        <Button
          title='Anterior'
          color={orange}
          onPress={() => navigation.navigate('Login')}
        />
        <View style={styles.separator}></View>
        <Button
          title='Siguiente'
          color={darkBlue}
          onPress={() => handleOnPress()}
        />
      </View>
    </ScrollView>
  )
}
export default SignUp;