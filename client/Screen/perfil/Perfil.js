import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "./estilosPerfil";
import Formulario from "./Formulario";
import { storage, auth } from "../../../firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { userLog } from "../../Redux/User";
import { connect } from "react-redux";

const Perfil = (props) => {
  const [imagen, setImagen] = useState(
    "https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg"
  );
  const [data, setData] = useState({
    name: props.user.name,
    lastName: props.user.lastName,
    phone: props.user.phone,
    dni: props.user.dni,
    cuil: props.user.cuil,
    id: props.user.id,
  });

  const changeImage = async () => {
    const permisos = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    const resultado = permisos.permissions.cameraRoll.status;

    if (resultado === "denied") {
      alert("no has dado permisos");
    } else {
      const resultado = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      setImagen(resultado.uri);
    }
  };
  useEffect(() => {
    props.userLog();
  }, []);

  return (
    <ScrollView>
      <View style={styles.generalperfil}>
        <View style={styles.generalimagen}>
          <View style={styles.contenedorimagen}>
            {/* <Image style={styles.imagenperfil} source={{ uri: 'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg' }} /> */}
            <Image style={styles.imagenperfil} source={{ uri: imagen }} />

            <View style={styles.contenedorcamara}>
              <Icon
                size={16}
                name="camera"
                type="font-awesome"
                color="white"
                onPress={changeImage}
              />
            </View>
          </View>
        </View>

        <Text style={styles.nombreusuario}>
          {data.name + " " + data.lastName}
        </Text>
        <Text style={styles.titulodatos}>Datos Personales</Text>
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
