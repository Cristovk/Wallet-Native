import React, {useState} from "react";
import {View, Text,/* Button, */ Alert, TouchableOpacity} from 'react-native'
import styles from './login-styles'
import {TextInput, Button} from 'react-native-paper'
import {Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const Login = ({navigation}) => {
    
    const [text,setText] = useState({
        email: "",
        password: ""
      })

    const handleChange = (name,value) =>{
        setText({
          ...text,
          [name]:value
        })
    }
    
    const login = () => {
        Alert.alert(
            "Bienvenido!",
            "Serás redirigido a tu perfil.",
            [{text:'continuar'}]
        )
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>$ald∞</Text>
            <View>
                <Input
                textContentType='emailAddress'
                autoCompleteType='email'
                /* style={styles.input} */
                label=' Email'
                leftIcon={{type:'font-awesome',name:'envelope'}}
                placeholderTextColor='grey'
                placeholder='Email'
                onChangeText={(value) => handleChange('email',value)}
                defaultValue={text.email}
                />
                
                <Input
                secureTextEntry={true}
                autoCompleteType='password'
                /* style={styles.input} */
                label='Password'
                leftIcon={{type:'font-awesome',name:'lock'}}
                placeholderTextColor='grey'
                placeholder=' Password'
                onChangeText={(value) => handleChange('password',value)}
                defaultValue={text.password}
                />
            </View>
            <Button
                style={styles.button}
                mode='contained'
                title='Login'
                onPress={login}
                color='darkblue'
            >
                Login
            </Button>
            <View style={styles.viewLinks}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.link}>Recuperar password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.link}>Crear cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;