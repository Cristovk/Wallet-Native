import React, {useState} from 'react';
import { Text, View, Dimensions, Image, TextInput, Button } from 'react-native';
import { styles } from "./Sing-Up-Styles";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
Dimensions.get('window').width
Dimensions.get('window').height

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setBirthday(date);
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <Image
        style={[styles.icon, styles.centered]}
        source={require('../../../assets/icon.png')}
      />
      <Text style={styles.label}>Nombre</Text>    
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setName(text)}
        value={name}
        placeholder='John'
        placeholderTextColor={grey}
        textContentType= "name"
      />
      <Text style={styles.label}>Apellidos</Text>
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setLastname(text)}
        value={lastname}
        placeholder='Doe'
        placeholderTextColor={grey}
        textContentType= "familyName"
      />
      <Text style={styles.label}>Email</Text>  
      <TextInput
        style={[styles.inputs]}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder='johndoe@emailserver.com'
        placeholderTextColor={grey}
        textContentType= "emailAddress"
      />
      <Text style={styles.label}>Cumpleaños</Text>
      <Text 
        onPress={showDatePicker}
        style={[styles.inputs, {color: grey}]}
      >
        Select your Birthday
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={[styles.button, styles.box]}>
        <Button
          title='Anterior'
          color={orange}
          onPress={()=> navigation.navigate('SignIn')}
          />
        <View style={styles.separator}></View>
        <Button
          title='Siguiente'
          color={darkBlue}
          onPress={()=> navigation.navigate('SignUp1')}
        />
      </View>
    </View>
  )
}

export default SignUp;