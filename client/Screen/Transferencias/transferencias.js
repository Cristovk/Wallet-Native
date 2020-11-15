import React, { useState } from 'react'
import { View, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import style from './transferEstilos'
import { Icon, Text, ListItem } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'


const Transferencias = ({ navigation }) => {
  const [state, setState] = useState(false)
  const [dato, setDato] = useState({
    cvu: "",
    monto: "",
    motivo: "",
    email: "",
  })

  console.log(dato)

  return (
    <ScrollView>
      <View style={style.barraSuperior}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
          >
            <Icon
              name="arrow-swap"
              type="fontisto"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text h4
          h4Style={{ color: "white", paddingEnd: 100 }}
        >Transferir</Text>
      </View>
      <View style={{ marginTop: 90 }}>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>Transferir</ListItem.Title>
            <ListItem.CheckBox checked={state} onPress={() => setState(!state)} />
          </ListItem.Content>
        </ListItem>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>CVU o Cuenta</ListItem.Title>
            <TextInput placeholder="cvu/cuenta" style={style.input} onChangeText={(data) => setDato({ ...dato, cvu: data })} />
          </ListItem.Content>
        </ListItem>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>Monto</ListItem.Title>
            <TextInput placeholder="Ingrese Monto" style={style.input} onChangeText={(data) => setDato({ ...dato, monto: data })} />
          </ListItem.Content>
        </ListItem>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>Motivo</ListItem.Title>
            <TextInput placeholder="Ingrese Motivo" style={style.input} onChangeText={(data) => setDato({ ...dato, motivo: data })} />
          </ListItem.Content>
        </ListItem>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>Email</ListItem.Title>
            {/* <Input placeholder="Ingrese Email"
              style={style.input}
              textContentType='emailAddress'
              onChangeText={(data) => setDato({ ...dato, email: data })} /> */}
            <TextInput
              textContentType='emailAddress'
              autoCompleteType='email'
              /* style={styles.input} */
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              placeholderTextColor='grey'
              placeholder='Ingrese Email'
              onChangeText={(value) => setDato({ ...dato, email: value })}
              defaultValue={dato.email}
            />
          </ListItem.Content>
        </ListItem>
      </View>
      <View style={style.botonContainer}>
        <TouchableOpacity
          disabled={state === false || !dato.cvu || !dato.monto || !dato.motivo || !dato.email}
          style={style.boton}
          onPress={() => navigation.navigate("TransfConfirm", {
            state: state,
            cvu: dato.cvu,
            monto: dato.monto,
            motivo: dato.motivo,
            email: dato.email
          })}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}

          >Confirmar Transferencia</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Transferencias;