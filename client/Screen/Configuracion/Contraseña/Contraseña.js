import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity,Alert } from "react-native";
import styles from "./EstilosContraseña";
import { Icon } from "react-native-elements";


const Clave = () => {

 
  return (
    <View style={styles.generalClave}>
      <View style={styles.titulo}>
        <Icon
          size={16}
          name="arrow-circle-left"
          type="font-awesome"
          color="#fff"
        
        />
        <Text style={styles.subtitulo}>Cambia tu contraseña</Text>
      </View>

      <View style={styles.contraseñas}>
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry={true}
    
          maxLength={15}
          placeholderTextColor='#fff'
        />
        
       
        <TextInput
          placeholder="Repite tu contraseña"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(data) => setPassword2(data)}
          maxLength={15}
          placeholderTextColor='#fff'
        />

        
      </View>

      <TouchableOpacity style={styles.btnGuardar}>
       <Text style={styles.btn} >Guardar</Text> 
      </TouchableOpacity>
    </View>
  );
};

export default Clave;
