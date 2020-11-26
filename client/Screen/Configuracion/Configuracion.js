import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Switch, TouchableOpacity } from "react-native";
import styles from "./EstilosConfiguracion";
import { Icon } from "react-native-elements";
import Clave from "./Clave/Clave";
import Correo from "./Correo/Correo";
import Usuario from "./Usuario/Usuario";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../Redux/Estilos";
import AsyncStorage from '@react-native-community/async-storage'
import { auth, storage } from "../../../firebase";
import viewStyle from '../../Global-Styles/ViewContainer'

const Configuracion = ({ navigation, route }) => {

  const setApp = route.params.params.darker;
  const dispatch = useDispatch();
  const { primary, secondary, text, bg, dark } = useSelector((store) => store.color);

  const [huella, setHuella] = useState()
  const [huellaTrans, setHuellaTrans] = useState()

  const [passwordchange, setPasswordChange] = useState(false);
  const [emailchange, setEmailChange] = useState(false);
  const [deleteuser, setDeleteUser] = useState(false);
  const iconColor = dark ? primary : secondary;


  const user = useSelector(store => store.user.user)

  //Huella  Transcionsion
  const usarHuellaTrans = async () => {
    modifMetodo();
    if (huellaTrans) {
      const clave = JSON.stringify(user.clave)
      const usoHuella = await AsyncStorage.setItem("MetodoTrans", clave)
    }
    if (!huellaTrans) {
      const usoHuella = await AsyncStorage.setItem("MetodoTrans", "huellaTrans")
    }
    const usuario = await AsyncStorage.getItem("MetodoTrans")
  }

//huella Login
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

  //getHuella LOGIN
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
    //getHuella Trans
  const getHuellaTrans = () => {
    AsyncStorage.getItem("MetodoTrans")
      .then(resp => {
        if (resp === "huellaTrans") {
          setHuellaTrans(true)
        }
        else if (resp !== "huellaTrans" && user.metodoTrans === "true") {
          setHuellaTrans(true)
        }
      }).catch(err => {
        console.log(err);
      })
  }


  const modifMetodo = async () => {
    const id = await auth.currentUser.uid
    if (!huella || !huellaTrans) {
      await storage.collection('Users').doc(id).update({
        ...user,
        metodo: "huella",
        metodoTrans: "huellaTrans"
      })
    } else {
      await storage.collection('Users').doc(id).update({
        ...user,
        metodo: "",
        metodoTrans: ""
      })
    }
  }

  useEffect(() => {
    getHuella();
    setHuellaTrans();
  }, [])




  return (
    <ScrollView style={dark ? styles.generalOscuro : styles.general}>

      <View style={[{ backgroundColor: primary, marginTop: 25 }, viewStyle.container]}>
        <View style={{ marginTop: 25 }}>
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
                trackColor={{ false: dark ? bg : secondary, true: dark ? secondary : bg }}
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
                <Icon size={20} name="lock" type="font-awesome" color={iconColor} />
              </View>



              <View style={styles.textoSubitem}>
                <Text style={dark ? styles.nombreSubitemDark : styles.nombreSubitem}>Contraseña</Text>
                <Text style={dark ? styles.letraClara : styles.letraOscura}>Cambia tu contraseña</Text>
              </View>
            </View>

            <View style={[dark ? styles.contIconoDark : styles.contIcono, styles.flecha]} >
              <TouchableOpacity
                onPress={() => setPasswordChange(true)}
              >
                <Icon
                  size={14}
                  name="chevron-right"
                  type="font-awesome"
                  color={iconColor}
                />
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => setEmailChange(true)}
              >
                <Icon
                  size={14}
                  name="chevron-right"
                  type="font-awesome"
                  color={iconColor}
                />

              </TouchableOpacity>
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

                  {/* Swtch para huella de transaccion*/ }
              <View style={styles.textoSubitem}>
              <Text style={dark ? styles.nombreSubitemDark : styles.nombreSubitem}>
                Transacciones con Huella:
              </Text>
            </View>
          </View>
          <View style={styles.interruptor}>
            <Switch
              trackColor={{ false: dark ? bg : secondary, true: dark ? secondary : bg }}
              thumbColor={dark ? primary : secondary}
              value={huellaTrans}
              onValueChange={() => {
                setHuellaTrans(!huellaTrans);
                usarHuellaTrans()
              }}
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
              <TouchableOpacity
                onPress={() => setDeleteUser(true)}

              >
                <Icon
                  size={14}
                  name="chevron-right"
                  type="font-awesome"
                  color={iconColor}
                  onPress={() => setDeleteUser(true)}
                />

              </TouchableOpacity>
            </View>
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
