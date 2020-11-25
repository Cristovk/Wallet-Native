import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "./EstilosAyuda";
import { Icon } from "react-native-elements";
import Subitem from "./VistasAyuda/Subitem";
import Modelo from "./VistasAyuda/Modelo";
import datos from "./VistasAyuda/Datos";
import Chat from "../Chat/Chat";

// import Tarjeta from './VistasAyuda/Tarjeta';
import { useSelector } from "react-redux";
import styleBoton from "../../Global-Styles/BotonGrande";

const Ayuda = ({ navigation }) => {
  const { bg, text, primary, secondary, dark } = useSelector(
    (store) => store.color
  );
  const alto = Dimensions.get("window").height;

  const [item, setItem] = useState({
    administrar: false,
    tarjeta: false,
    editar: false,
    transferir: false,
    pagar: false,
    recargar: false,
  });
  const [currentview, setCurrentView] = useState("");
  const [chat, setChat] = useState(false);
  const { administrar, tarjeta, editar, transferir, pagar, recargar } = item;

  const showItems = (name) => {
    setItem({ ...item, [name]: !item[name] });
  };
  const updateCurrent = (value) => {
    setCurrentView(value);
  };
  const hideItems = () => {
    setItem({
      administrar: false,
      tarjeta: false,
      retirar: false,
      transferir: false,
      pagar: false,
      recargar: false,
    });
  };

  //fondo bg
  ///fondo primary
  ///boton secondary
  ///borderbotton grey

  return (
    <ScrollView style={[styles.generalClave, { backgroundColor: bg }]}>
      <View
        style={[styles.generalView, { backgroundColor: primary, height: alto }]}
      >
        {/* SECCIÓN DE ADMINISTRAR */}

        <View
          style={[
            styles.itemAyuda,
            { borderBottomColor: dark ? "grey" : secondary },
          ]}
        >
          <Text style={styles.textoItem}>Seguridad e ingreso</Text>
          <TouchableOpacity onPress={() => showItems("administrar")}>
            <Icon
              size={16}
              name={!administrar ? "chevron-right" : "chevron-down"}
              type="font-awesome"
              color={dark ? "grey" : secondary}
            />
          </TouchableOpacity>
        </View>

        {administrar && (
          <View>
            <Text
              style={[
                styles.padre,
                { borderBottomColor: dark ? "grey" : "#ccc" },
              ]}
              onPress={() => updateCurrent("reconocimientoFacial")}
            >
              <Subitem texto="Activar reconocimiento facial en Quiquebank" />
            </Text>
            <Text
              style={[
                styles.padre,
                { borderBottomColor: dark ? "grey" : "#ccc" },
              ]}
              onPress={() => updateCurrent("huella")}
            >
              <Subitem texto="Usar huella en mis transacciones" />
            </Text>
          </View>
        )}

        {/* SECCIÓN DE TARJETA */}
        <View
          style={[
            styles.itemAyuda,
            { borderBottomColor: dark ? "grey" : secondary },
          ]}
        >
          <Text style={styles.textoItem}>Tarjeta MoonBank</Text>
          <TouchableOpacity onPress={() => showItems("tarjeta")}>
            <Icon
              size={16}
              name={!tarjeta ? "chevron-right" : "chevron-down"}
              type="font-awesome"
              color={dark ? "grey" : secondary}
            />
          </TouchableOpacity>
        </View>

        {/* {tarjeta && (
        <View>
          <Text style={styles.padre} onPress={() => updateCurrent('tarjeta')}><Subitem texto='Asociar mi tarjeta' /></Text>
        </View>
      )} */}

        {/* SECCIÓN DE DATOS */}
        <View
          style={[
            styles.itemAyuda,
            { borderBottomColor: dark ? "grey" : secondary },
          ]}
        >
          <Text style={styles.textoItem}>Mis datos</Text>
          <TouchableOpacity onPress={() => showItems("editar")}>
            <Icon
              size={16}
              name={!editar ? "chevron-right" : "chevron-down"}
              type="font-awesome"
              color={dark ? "grey" : secondary}
            />
          </TouchableOpacity>
        </View>
        {editar && (
          <View>
            <Text
              style={[
                styles.padre,
                { borderBottomColor: dark ? "grey" : "#ccc" },
              ]}
              onPress={() => updateCurrent("editarDatos")}
            >
              <Subitem texto="Cambiar mi dni o mi correo" />
            </Text>
          </View>
        )}

        {/* SECCIÓN DE TRANSFERENCIAS */}

        <View
          style={[
            styles.itemAyuda,
            { borderBottomColor: dark ? "grey" : secondary },
          ]}
        >
          <Text style={styles.textoItem}>Transferir</Text>
          <TouchableOpacity onPress={() => showItems("transferir")}>
            <Icon
              size={16}
              name={!transferir ? "chevron-right" : "chevron-down"}
              type="font-awesome"
              color={dark ? "grey" : secondary}
            />
          </TouchableOpacity>
        </View>

        {transferir && (
          <View>
            <Text
              style={[
                styles.padre,
                { borderBottomColor: dark ? "grey" : "#ccc" },
              ]}
              onPress={() => updateCurrent("transferirConocido")}
            >
              <Subitem texto="Transferir dinero a un contacto" />{" "}
            </Text>
            <Text
              style={[
                styles.padre,
                { borderBottomColor: dark ? "grey" : "#ccc" },
              ]}
              onPress={() => updateCurrent("transferirDesconocido")}
            >
              <Subitem texto="Transferir dinero a un desconocido" />{" "}
            </Text>
          </View>
        )}

        {/* SECCIÓN DE PAGOS */}
        <View
          style={[
            styles.itemAyuda,
            { borderBottomColor: dark ? "grey" : secondary },
          ]}
        >
          <Text style={styles.textoItem}>Pagar</Text>
          <TouchableOpacity onPress={() => showItems("pagar")}>
            <Icon
              size={16}
              name={!pagar ? "chevron-right" : "chevron-down"}
              type="font-awesome"
              color={dark ? "grey" : secondary}
            />
          </TouchableOpacity>
        </View>
        {pagar && (
          <View>
            <Text
              style={[
                styles.padre,
                { borderBottomColor: dark ? "grey" : "#ccc" },
              ]}
              onPress={() => updateCurrent("serviciosPublicos")}
            >
              <Subitem texto="Pagar mis servicios públicos" />{" "}
            </Text>
            <Text
              style={[
                styles.padre,
                { borderBottomColor: dark ? "grey" : "#ccc" },
              ]}
              onPress={() => updateCurrent("entretenimiento")}
            >
              <Subitem texto="Pagar mis servicios de entretenimiento" />{" "}
            </Text>
          </View>
        )}

        {/* SECCIÓN DE RECARGAS */}
        <View
          style={[
            styles.itemAyuda,
            { borderBottomColor: dark ? "grey" : secondary },
          ]}
        >
          <Text style={styles.textoItem}>Recargas</Text>
          <TouchableOpacity onPress={() => showItems("recargar")}>
            <Icon
              size={14}
              name={!recargar ? "chevron-right" : "chevron-down"}
              type="font-awesome"
              color={dark ? "grey" : secondary}
            />
          </TouchableOpacity>
        </View>

        {recargar && (
          <View>
            <Text
              style={[
                styles.padre,
                { borderBottomColor: dark ? "grey" : "#ccc" },
              ]}
              onPress={() => updateCurrent("recargarEfectivo")}
            >
              <Subitem texto="Recargar mi app con dinero en efectivo" />{" "}
            </Text>
            <Text
              style={[
                styles.padre,
                { borderBottomColor: dark ? "grey" : "#ccc" },
              ]}
              onPress={() => updateCurrent("recargarTransferencia")}
            >
              <Subitem texto="Recargar mi app con por transferencia" />{" "}
            </Text>
          </View>
        )}

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 15,
          }}
          onPress={() => alert("Hacia el chat")}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Chat")}
            style={[
              { backgroundColor: secondary, top: 60 },
              styleBoton.botonSinShadow,
            ]}
          >
            <Text style={[{ color: text }, styleBoton.texto]}>
              Inicia chat de ayuda
            </Text>
          </TouchableOpacity>
        </View>

        {currentview === "reconocimientoFacial" && (
          <Modelo
            change={setCurrentView}
            volver="Reconocimiento facial"
            titulo={datos.reconocimientoFacial.titulo}
            texto={datos.reconocimientoFacial.texto}
            hide={hideItems}
            navigation={navigation}
          />
        )}

        {currentview === "huella" && (
          <Modelo
            change={setCurrentView}
            volver="Huella en transacciones"
            titulo={datos.huella.titulo}
            texto={datos.huella.texto}
            hide={hideItems}
            navigation={navigation}
          />
        )}

        {/* {currentview === 'tarjeta' &&
        <Tarjeta change={setCurrentView}  hide={hideItems} />} */}

        {currentview === "reconocimientoFacial" && (
          <Modelo
            change={setCurrentView}
            volver="Reconocimiento facial"
            titulo={datos.reconocimientoFacial.titulo}
            texto={datos.reconocimientoFacial.texto}
            hide={hideItems}
          />
        )}

        {currentview === "huella" && (
          <Modelo
            change={setCurrentView}
            volver="Huella en transacciones"
            titulo={datos.huella.titulo}
            texto={datos.huella.texto}
            hide={hideItems}
          />
        )}

        {/* {currentview === 'tarjeta' &&
        <Tarjeta change={setCurrentView}  hide={hideItems} />} */}

        {currentview === "editarDatos" && (
          <Modelo
            change={setCurrentView}
            volver="Editar mis datos"
            titulo={datos.editarDatos.titulo}
            texto={datos.editarDatos.texto}
            hide={hideItems}
            navigation={navigation}
          />
        )}

        {currentview === "transferirConocido" && (
          <Modelo
            change={setCurrentView}
            volver="Transferir a un contacto"
            titulo={datos.transferirConocido.titulo}
            texto={datos.transferirConocido.texto}
            hide={hideItems}
            navigation={navigation}
          />
        )}

        {currentview === "transferirDesconocido" && (
          <Modelo
            change={setCurrentView}
            volver="Transferir a un desconocido"
            titulo={datos.transferirDesconocido.titulo}
            texto={datos.transferirDesconocido.texto}
            hide={hideItems}
            navigation={navigation}
          />
        )}

        {currentview === "serviciosPublicos" && (
          <Modelo
            change={setCurrentView}
            volver="Servicios públicos"
            titulo={datos.serviciosPublicos.titulo}
            texto={datos.serviciosPublicos.texto}
            hide={hideItems}
            navigation={navigation}
          />
        )}

        {currentview === "entretenimiento" && (
          <Modelo
            change={setCurrentView}
            volver="Servicios de entretenimiento"
            titulo={datos.entretenimiento.titulo}
            texto={datos.entretenimiento.texto}
            hide={hideItems}
            navigation={navigation}
          />
        )}

        {currentview === "recargarEfectivo" && (
          <Modelo
            change={setCurrentView}
            volver="Recarga en efectivo"
            titulo={datos.recargarEfectivo.titulo}
            texto={datos.recargarEfectivo.texto}
            hide={hideItems}
            navigation={navigation}
          />
        )}

        {currentview === "recargarTransferencia" && (
          <Modelo
            change={setCurrentView}
            volver="Recarga por transferencia"
            titulo={datos.recargarTransferencia.titulo}
            texto={datos.recargarTransferencia.texto}
            hide={hideItems}
            navigation={navigation}
          />
        )}
        {chat && <Chat />}
      </View>
    </ScrollView>
  );
};

export default Ayuda;
