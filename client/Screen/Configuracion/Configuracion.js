import React, { useState } from "react";
import { View, Text, ScrollView, Switch } from "react-native";
import styles from "./EstilosConfiguracion";
import { Icon } from "react-native-elements";
import Clave from "./Clave/Clave";
import Correo from "./Correo/Correo";
import Usuario from "./Usuario/Usuario";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../Redux/Estilos";
import Contraseña from './Contraseña/Contraseña';

const Configuracion = ({ navigation, route }) => {
  console.log(route);
  const setApp = route.params.params.darker;
  const dispatch = useDispatch();
  const dark = useSelector((store) => store.color.dark);

  const [passwordchange, setPasswordChange] = useState(false);
  const [emailchange, setEmailChange] = useState(false);
  const [deleteuser, setDeleteUser] = useState(false);
 
  const [d, setD] = useState(true);

  const mostrar = () => {
    setDeleteUser(true);
  };
 
  return (
    <ScrollView style={styles.general}>
      
        <View>
          <View style={styles.itemAjustes}>
            <View style={styles.subitemAjustes}>
              <View style={styles.contIcono}>
                <Icon
                  size={20}
                  name="night-clear"
                  type="fontisto"
                  color="#fff"
                />
              </View>

              <View style={styles.textoSubitem}>
                <Text style={styles.nombreSubitem}>Modo</Text>
                <Text>Activa el modo oscuro</Text>
              </View>
            </View>
            <View style={styles.interruptor}>
              <Switch
                trackColor={{ false: "#767577", true: "#02072f" }}
                thumbColor={"#f4f3f4"}
                value={dark}
                onValueChange={() => {
                  setApp(!dark);
                  dispatch(darkMode(dark));
                }}
              />
            </View>
          </View>

          <View style={styles.itemAjustes}>
            <View style={styles.subitemAjustes}>
              <View style={styles.contIcono}>
                <Icon size={20} name="lock" type="font-awesome" color="#fff" />
              </View>

              <View style={styles.textoSubitem}>
                <Text style={styles.nombreSubitem}>Contraseña</Text>
                <Text>Cambia tu contraseña</Text>
              </View>
            </View>
           
            <View style={[styles.contIcono, styles.flecha]} >
              <Icon
                size={14}
                name="chevron-right"
                type="font-awesome"
                color="#fff"
                onPress={()=>setPasswordChange(true)}
              />
            </View>
            
            
          </View>

          <View style={styles.itemAjustes}>
            <View style={styles.subitemAjustes}>
              <View style={styles.contIcono}>
                <Icon
                  size={16}
                  name="envelope"
                  type="font-awesome"
                  color="#fff"
                />
              </View>

              <View style={styles.textoSubitem}>
                <Text style={styles.nombreSubitem}>Correo</Text>
                <Text>Cambia tu correo</Text>
              </View>
            </View>
            <View style={[styles.contIcono, styles.flecha]}>
              <Icon
                size={14}
                name="chevron-right"
                type="font-awesome"
                color="#fff"
                onPress={() =>setEmailChange(true)}
              />
            </View>
          </View>

          <View style={styles.itemAjustes}>
            <View style={styles.subitemAjustes}>
              <View style={styles.contIcono}>
                <Icon
                  size={20}
                  name="microphone"
                  type="font-awesome"
                  color="#fff"
                />
              </View>

              <View style={styles.textoSubitem}>
                <Text style={styles.nombreSubitem}>Reconocimiento</Text>
                <Text>Voz</Text>
              </View>
            </View>
            <View style={[styles.contIcono, styles.flecha]}>
              <Icon
                size={14}
                name="chevron-right"
                type="font-awesome"
                color="#fff"
              />
            </View>
          </View>

          <View style={styles.itemAjustes}>
            <View style={styles.subitemAjustes}>
              <View style={styles.contIcono}>
                <Icon
                  name="fingerprint"
                  type="material"
                  size={20}
                  color="#fff"
                />
              </View>

              <View style={styles.textoSubitem}>
                <Text style={styles.nombreSubitem}>
                  ¿Cómo te querés loguear?
                </Text>
                <Text>Huella</Text>
              </View>
            </View>
            <View style={[styles.contIcono, styles.flecha]}>
              <Icon
                size={14}
                name="chevron-right"
                type="font-awesome"
                color="#fff"
              />
            </View>
          </View>

          <View style={styles.itemAjustes}>
            <View style={styles.subitemAjustes}>
              <View style={styles.contIcono}>
                <Icon
                  name="credit-card"
                  type="font-awesome"
                  size={18}
                  color="#fff"
                />
              </View>

              <View style={styles.textoSubitem}>
                <Text style={styles.nombreSubitem}>Seguridad</Text>
                <Text>Usa tu huella en transacciones</Text>
              </View>
            </View>
            <View style={[styles.contIcono, styles.flecha]}>
              <Icon
                size={14}
                name="chevron-right"
                type="font-awesome"
                color="#fff"
              />
            </View>
          </View>

          <View style={styles.itemAjustes}>
            <View style={styles.subitemAjustes}>
              <View style={styles.contIcono}>
                <Icon name="trash" type="font-awesome" size={20} color="#fff" />
              </View>

              <View style={styles.textoSubitem}>
                <Text style={styles.nombreSubitem}>Cuenta</Text>
                <Text>Elimina tu cuenta</Text>
              </View>
            </View>
            <View style={[styles.contIcono, styles.flecha]}>
              <Icon
                size={14}
                name="chevron-right"
                type="font-awesome"
                color="#fff"
                onPress={mostrar}
              />
            </View>
          </View>
        </View>
      

      {passwordchange && (
        <Clave
          cambiar={setPasswordChange}
          navigation={navigation}
        />
      )}
      {emailchange && (
        <Correo
          cambiar={setEmailChange}
          navigation={navigation}
        />
      )}
      {deleteuser && (
        <Usuario
          cambiar={setDeleteUser}
          navigation={navigation}
        />
      )}

    </ScrollView>
  );
};

export default Configuracion;
