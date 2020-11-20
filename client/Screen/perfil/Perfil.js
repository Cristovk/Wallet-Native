import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  LogBox,
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "./estilosPerfil";
import Formulario from "./Formulario";
import { storage, auth } from "../../../firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { userLog } from "../../Redux/User";
import { connect, useSelector } from "react-redux";

const Perfil = (props) => {
  const { bg, text } = useSelector((store) => store.color);
  const [data, setData] = useState({
    name: props.user.name,
    lastName: props.user.lastName,
    phone: props.user.phone,
    dni: props.user.dni,
    cuil: props.user.cuil,
    id: props.user.id,
    imagen:
      props.user.imagen ||
      "https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg",
  });

  const changeImage = async () => {
    const permisos = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    const resultado = permisos.permissions.cameraRoll.status;

    if (resultado === "denied") {
      alert("no has dado permisos");
    } else {
      const resultado = await ImagePicker.launchImageLibraryAsync({
        base64: true,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });
      setData({
        ...data,
        imagen: `data:image/jpg;base64,${resultado.base64}`,
      });
    }
  };
  useEffect(() => {
    props.userLog();
  }, []);

  // LogBox.ignoreAllLogs();

  return (
    <ScrollView>
      <View style={{ backgroundColor: bg, height: "100%" }}>
        <View style={styles.generalimagen}>
          <View style={{ ...styles.contenedorimagen, borderColor: text }}>
            {/* <Image style={styles.imagenperfil} source={{ uri: 'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg' }} /> */}
            <Image style={styles.imagenperfil} source={{ uri: data.imagen }} />

            <View style={styles.contenedorcamara}>
              <Icon
                size={16}
                name="camera"
                type="font-awesome"
                color="white"
                onPress={() => changeImage()}
              />
            </View>
          </View>
        </View>

        <Text style={{ ...styles.nombreusuario, color: text }}>
          {data.name + " " + data.lastName}
        </Text>
        <Text style={{ ...styles.titulodatos, color: text }}>
          Datos Personales
        </Text>
        <Formulario data={data} navigation={props.navigation} />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    userLog: (id) => dispatch(userLog(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
