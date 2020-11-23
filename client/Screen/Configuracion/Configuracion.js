import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Switch } from "react-native";
import styles from "./EstilosConfiguracion";
import { Icon } from "react-native-elements";
import Clave from "./Clave/Clave";
import Correo from "./Correo/Correo";
import Usuario from "./Usuario/Usuario";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../Redux/Estilos";
import AsyncStorage from '@react-native-community/async-storage'
import { auth, storage } from "../../../firebase";


const Configuracion = ({ navigation, route }) => {

  const setApp = route.params.params.darker;
  const dispatch = useDispatch();
  const { primary, secondary, text, bg, dark } = useSelector((store) => store.color);

  const [huella, setHuella] = useState()

  const [passwordchange, setPasswordChange] = useState(false);
  const [emailchange, setEmailChange] = useState(false);
  const [deleteuser, setDeleteUser] = useState(false);
  const iconColor = dark ? bg : secondary;


  const user = useSelector(store => store.user.user)

  const usarHuella = async () => {
    modifMetodo();
    if (huella) {
      const clave = JSON.stringify(user.clave)
      const usoHuella = await AsyncStorage.setItem("Metodo", clave)
    }
    if (!huella) {
      const usoHuella = await AsyncStorage.setItem("Metodo", "huella")
    }
    const usuario = await AsyncStorage.getItem("Metodo")
  }

  const getHuella = () => {
    AsyncStorage.getItem("Metodo")
      .then(resp => {
        if (resp === "huella") {
          setHuella(true)
        }
        else if (resp !== "huella" && user.metodo === "true") {
          setHuella(true)
        }
      }).catch(err => {
        console.log(err);
      })
  }

  const modifMetodo = async () => {
    const id = await auth.currentUser.uid
    if (!huella) {
      await storage.collection('Users').doc(id).update({
        ...user,
        metodo: "huella"
      })
    } else {
      await storage.collection('Users').doc(id).update({
        ...user,
        metodo: ""
      })
    }
  }

  useEffect(() => {
    getHuella();
  }, [])




  return (
    <ScrollView style={dark ? styles.generalOscuro : styles.general}>

      <View>
        <View style={dark ? styles.itemAjustesDark : styles.itemAjustes}>
          <View style={styles.subitemAjustes}>
            <View style={dark ? styles.contIconoDark : styles.contIcono}>
              <Icon
                size={20}
                name="night-clear"
                type="fontisto"
                color={iconColor}
              />
            </View>

            <View style={styles.textoSubitem}>
              <Text style={dark ? styles.nombreSubitemDark : styles.nombreSubitem}>Modo</Text>
              <Text style={dark ? styles.letraClara : styles.letraOscura}>Activa el modo oscuro</Text>
            </View>
          </View>
          <View style={styles.interruptor}>
            <Switch
              trackColor={{ false: dark ? primary : secondary, true: dark ? secondary : bg }}
              thumbColor={dark ? primary : secondary}
              value={dark}
              onValueChange={() => {
                setApp(!dark);
                dispatch(darkMode(dark));


              }}
            />
          </View>
        </View>

        <View style={dark ? styles.itemAjustesDark : styles.itemAjustes}>
          <View style={styles.subitemAjustes}>
            <View style={dark ? styles.contIconoDark : styles.contIcono}>
              <Icon size={20} name="lock" type="font-awesome" color={iconColor} />
            </View>

            <View style={styles.textoSubitem}>
              <Text style={dark ? styles.nombreSubitemDark : styles.nombreSubitem}>Contraseña</Text>
              <Text style={dark ? styles.letraClara : styles.letraOscura}>Cambia tu contraseña</Text>
            </View>
          </View>

          <View style={[dark ? styles.contIconoDark : styles.contIcono, styles.flecha]} >
            <Icon
              size={14}
              name="chevron-right"
              type="font-awesome"
              color={iconColor}
              onPress={() => setPasswordChange(true)}
            />
          </View>


        </View>

        <View style={dark ? styles.itemAjustesDark : styles.itemAjustes}>
          <View style={styles.subitemAjustes}>
            <View style={dark ? styles.contIconoDark : styles.contIcono}>
              <Icon
                size={16}
                name="envelope"
                type="font-awesome"
                color={iconColor}
              />
            </View>

            <View style={styles.textoSubitem}>
              <Text style={dark ? styles.nombreSubitemDark : styles.nombreSubitem}>Correo</Text>
              <Text style={dark ? styles.letraClara : styles.letraOscura}>Cambia tu correo</Text>
            </View>
          </View>
          <View style={[dark ? styles.contIconoDark : styles.contIcono, styles.flecha]} >
            <Icon
              size={14}
              name="chevron-right"
              type="font-awesome"
              color={iconColor}
              onPress={() => setEmailChange(true)}
            />
          </View>
        </View>

        <View style={dark ? styles.itemAjustesDark : styles.itemAjustes}>
          <View style={styles.subitemAjustes}>
            <View style={dark ? styles.contIconoDark : styles.contIcono}>
              <Icon
                size={20}
                name="microphone"
                type="font-awesome"
                color={iconColor}
              />
            </View>

            <View style={styles.textoSubitem}>
              <Text style={dark ? styles.nombreSubitemDark : styles.nombreSubitem}>Reconocimiento</Text>
              <Text style={dark ? styles.letraClara : styles.letraOscura}>Voz</Text>
            </View>
          </View>
          <View style={[dark ? styles.contIconoDark : styles.contIcono, styles.flecha]} >
            <Icon
              size={14}
              name="chevron-right"
              type="font-awesome"
              color={iconColor}
            />
          </View>
        </View>

        <View style={dark ? styles.itemAjustesDark : styles.itemAjustes}>
          <View style={styles.subitemAjustes}>
            <View style={dark ? styles.contIconoDark : styles.contIcono}>
              <Icon
                name="fingerprint"
                type="material"
                size={20}
                color={iconColor}
              />
            </View>

            <View style={styles.textoSubitem}>
              <Text style={dark ? styles.nombreSubitemDark : styles.nombreSubitem}>
                Ingreso con Huella :
                </Text>
            </View>
          </View>
          <View style={styles.interruptor}>
            <Switch
              trackColor={{ false: dark ? primary : secondary, true: dark ? secondary : bg }}
              thumbColor={dark ? primary : secondary}
              value={huella}
              onValueChange={() => {
                setHuella(!huella);
                usarHuella()
              }}
            />
          </View>
        </View>

        <View style={dark ? styles.itemAjustesDark : styles.itemAjustes}>
          <View style={styles.subitemAjustes}>
            <View style={dark ? styles.contIconoDark : styles.contIcono}>
              <Icon
                name="credit-card"
                type="font-awesome"
                size={18}
                color={iconColor}
              />
            </View>

            <View style={styles.textoSubitem}>
              <Text style={dark ? styles.nombreSubitemDark : styles.nombreSubitem}>Seguridad</Text>
              <Text style={dark ? styles.letraClara : styles.letraOscura}>Usá tu huella en transacciones</Text>
            </View>
          </View>
          <View style={[dark ? styles.contIconoDark : styles.contIcono, styles.flecha]} >
            <Icon
              size={14}
              name="chevron-right"
              type="font-awesome"
              color={iconColor}
            />
          </View>
        </View>

        <View style={dark ? styles.itemAjustesDark : styles.itemAjustes}>
          <View style={styles.subitemAjustes}>
            <View style={dark ? styles.contIconoDark : styles.contIcono}>
              <Icon name="trash" type="font-awesome" size={20} color={iconColor} />
            </View>

            <View style={styles.textoSubitem}>
              <Text style={dark ? styles.nombreSubitemDark : styles.nombreSubitem}>Cuenta</Text>
              <Text style={dark ? styles.letraClara : styles.letraOscura}>Eliminá tu cuenta</Text>
            </View>
          </View>
          <View style={[dark ? styles.contIconoDark : styles.contIcono, styles.flecha]} >
            <Icon
              size={14}
              name="chevron-right"
              type="font-awesome"
              color={iconColor}
              onPress={() => setDeleteUser(true)}
            />
          </View>
        </View>
      </View>


      {passwordchange && (
        <Clave
          cambiar={setPasswordChange}
          navigation={navigation}
          oscuro={dark}
        />
      )}
      {emailchange && (
        <Correo
          cambiar={setEmailChange}
          navigation={navigation}
          oscuro={dark}
        />
      )}
      {deleteuser && (
        <Usuario
          cambiar={setDeleteUser}
          navigation={navigation}
          oscuro={dark}
        />
      )}

    </ScrollView>
  );
};

export default Configuracion;
