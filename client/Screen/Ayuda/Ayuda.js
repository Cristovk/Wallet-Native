import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView,Dimensions } from "react-native";
import styles from "./EstilosAyuda";
import { Icon } from "react-native-elements";
import Subitem from './VistasAyuda/Subitem';
import Modelo from './VistasAyuda/Modelo';
import datos from './VistasAyuda/Datos';
import Chat from '../Chat/Chat';

// import Tarjeta from './VistasAyuda/Tarjeta';
import { useSelector } from "react-redux";
import styleBoton from '../../Global-Styles/BotonGrande'



const Ayuda = () => {
  


  const { bg, text, primary, secondary,dark } = useSelector((store) => store.color);
  console.log('LOS COLORES',bg,text,primary,text);

  const alto= Dimensions.get('window').height;
  
  const [item, setItem] = useState({
    administrar: false,
    tarjeta: false,
    editar: false,
    transferir: false,
    pagar: false,
    recargar: false
  });
  const [currentview, setCurrentView] = useState('');
  const [chat,setChat]=useState(false);
  const { administrar, tarjeta, editar, transferir, pagar, recargar } = item;

  const showItems = (name) => {
    setItem({ ...item, [name]: !item[name] })
  }
  const updateCurrent = (value) => {
    setCurrentView(value);
  }
  const hideItems = () => {
    setItem({
      administrar: false,
      tarjeta: false,
      retirar: false,
      transferir: false,
      pagar: false,
      recargar: false
    })
  }

  //fondo bg
  ///fondo primary
  ///boton secondary
  ///borderbotton grey

  return (
    <ScrollView style={[styles.generalClave,{backgroundColor: bg}]}>
     <View style={[styles.generalView,{backgroundColor: primary,height:alto}]}>
  

      {/* SECCIÓN DE ADMINISTRAR */}

      <View style={[styles.itemAyuda,{borderBottomColor: dark ? 'grey': secondary}]}>
        <Text style={styles.textoItem}>Seguridad e ingreso</Text>

        <Icon
          size={14}
          name={!administrar ? 'chevron-right' : 'chevron-down'}
          type="font-awesome"
          color={dark ?'grey': secondary}
          onPress={() => showItems('administrar')}
        />
      </View>

      {administrar && (
        <View>
          <Text style={[styles.padre,{borderBottomColor : dark ? 'grey':'#ccc'}]} onPress={() => updateCurrent('reconocimientoFacial')}><Subitem texto='Activar reconocimiento facial en Quiquebank' /></Text>
          <Text style={[styles.padre,{borderBottomColor : dark ? 'grey':'#ccc'}]} onPress={() => updateCurrent('huella')}><Subitem texto='Usar huella en mis transacciones' /></Text>
        </View>
      )}


      {/* SECCIÓN DE TARJETA */}
      <View style={[styles.itemAyuda,{borderBottomColor: dark ? 'grey': secondary}]}>
        <Text style={styles.textoItem}>Tarjeta MoonBank</Text>
        <Icon
          size={14}
          name={!tarjeta ? 'chevron-right' : 'chevron-down'}
          type="font-awesome"
          color={dark ?'grey': secondary}
          onPress={() => showItems('tarjeta')}
        />
      </View>

      {/* {tarjeta && (
        <View>
          <Text style={styles.padre} onPress={() => updateCurrent('tarjeta')}><Subitem texto='Asociar mi tarjeta' /></Text>
        </View>
      )} */}
 

      {/* SECCIÓN DE DATOS */}
      <View style={[styles.itemAyuda,{borderBottomColor: dark ? 'grey': secondary}]}>
        <Text style={styles.textoItem}>Mis datos</Text>
        <Icon
          size={14}
          name={!editar ? 'chevron-right' : 'chevron-down'}
          type="font-awesome"
          color={dark ?'grey': secondary}
          onPress={() => showItems('editar')}
        />
      </View>
      {editar && (
        <View>
          <Text style={[styles.padre,{borderBottomColor : dark ? 'grey':'#ccc'}]} onPress={() => updateCurrent('editarDatos')}><Subitem texto='Cambiar mi dni o mi correo' /></Text>
        </View>
      )}


      {/* SECCIÓN DE TRANSFERENCIAS */}


      <View style={[styles.itemAyuda,{borderBottomColor: dark ? 'grey': secondary}]}>
        <Text style={styles.textoItem}>Transferir</Text>

        <Icon
          size={14}
          name={!transferir ? 'chevron-right' : 'chevron-down'}
          type="font-awesome"
          color={dark ?'grey': secondary}
          onPress={() => showItems('transferir')}
        />
      </View>

      {transferir && (
        <View>
          <Text style={[styles.padre,{borderBottomColor : dark ? 'grey':'#ccc'}]} onPress={() => updateCurrent('transferirConocido')}><Subitem texto='Transferir dinero a un contacto' />  </Text>
          <Text style={[styles.padre,{borderBottomColor : dark ? 'grey':'#ccc'}]} onPress={() => updateCurrent('transferirDesconocido')}><Subitem texto='Transferir dinero a un desconocido' />  </Text>

        </View>
      )}

      {/* SECCIÓN DE PAGOS */}
      <View style={[styles.itemAyuda,{borderBottomColor: dark ? 'grey': secondary}]}>
        <Text style={styles.textoItem}>Pagar</Text>

        <Icon
          size={14}
          name={!pagar ? 'chevron-right' : 'chevron-down'}
          type="font-awesome"
          color={dark ?'grey': secondary}
          onPress={() => showItems('pagar')}
        />
      </View>
      {pagar && (
        <View>
          <Text style={[styles.padre,{borderBottomColor : dark ? 'grey':'#ccc'}]} onPress={() => updateCurrent('serviciosPublicos')}><Subitem texto='Pagar mis servicios públicos' />  </Text>
          <Text style={[styles.padre,{borderBottomColor : dark ? 'grey':'#ccc'}]} onPress={() => updateCurrent('entretenimiento')}><Subitem texto='Pagar mis servicios de entretenimiento' />  </Text>
        </View>
      )}


      {/* SECCIÓN DE RECARGAS */}
      <View style={[styles.itemAyuda,{borderBottomColor: dark ? 'grey': secondary}]}>
        <Text style={styles.textoItem}>Recargas</Text>

        <Icon
          size={14}
          name={!recargar ? 'chevron-right' : 'chevron-down'}
          type="font-awesome"
          color={dark ?'grey': secondary}
          onPress={() => showItems('recargar')}
        />
      </View>

      {recargar && (
        <View>
          <Text style={[styles.padre,{borderBottomColor : dark ? 'grey':'#ccc'}]} onPress={() => updateCurrent('recargarEfectivo')}><Subitem texto='Recargar mi app con dinero en efectivo' /> </Text>
          <Text style={[styles.padre,{borderBottomColor : dark ? 'grey':'#ccc'}]} onPress={() => updateCurrent('recargarTransferencia')}><Subitem texto='Recargar mi app con por transferencia' /> </Text>
        </View>
      )}


      {/* <View style={{justifyContent:'center',flexDirection:'row',marginTop:15}}> */}
      <View style={styleBoton.container} >
        <TouchableOpacity 
        onPress={()=>{setChat(true),alert('hola')}}
        style={[{ backgroundColor: secondary,top:60 }, styleBoton.boton]}
        >
  
          <Text style={[{ color: text }, styleBoton.texto]}  >Inicia chat de ayuda</Text>
        </TouchableOpacity>
      </View>
      <Text onPress={()=>{setChat(true),alert('hola')}}>CHAT</Text>

      {/* <View style={styleBoton.botonContainer}>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={[{ backgroundColor: secondary }, styleBoton.boton]}
        >
          <Text style={[{ color: text }, styleBoton.texto]} >Guardar</Text>
        </TouchableOpacity>
      </View> */}

     

      {currentview === 'reconocimientoFacial' &&
        <Modelo change={setCurrentView}
          volver='Reconocimiento facial'
          titulo={datos.reconocimientoFacial.titulo}
          texto={datos.reconocimientoFacial.texto}
          hide={hideItems}
        />}

      {currentview === 'huella' &&
        <Modelo change={setCurrentView}
          volver='Huella en transacciones'
          titulo={datos.huella.titulo}
          texto={datos.huella.texto}
          hide={hideItems}
        />}

      {/* {currentview === 'tarjeta' &&
        <Tarjeta change={setCurrentView}  hide={hideItems} />} */}


      {currentview === 'editarDatos' &&
        <Modelo change={setCurrentView}
          volver='Editar mis datos'
          titulo={datos.editarDatos.titulo}
          texto={datos.editarDatos.texto}
          hide={hideItems}
        />}

      

      {currentview === 'transferirConocido' &&
        <Modelo change={setCurrentView}
          volver='Transferir a un contacto'
          titulo={datos.transferirConocido.titulo}
          texto={datos.transferirConocido.texto}
          hide={hideItems}
        />}

      {currentview === 'transferirDesconocido' &&
        <Modelo change={setCurrentView}
          volver='Transferir a un desconocido'
          titulo={datos.transferirDesconocido.titulo}
          texto={datos.transferirDesconocido.texto}
          hide={hideItems}
        />}

      {currentview === 'serviciosPublicos' &&
        <Modelo change={setCurrentView}
          volver='Servicios públicos'
          titulo={datos.serviciosPublicos.titulo}
          texto={datos.serviciosPublicos.texto}
          hide={hideItems}
        />}

      {currentview === 'entretenimiento' &&
        <Modelo change={setCurrentView}
          volver='Servicios de entretenimiento'
          titulo={datos.entretenimiento.titulo}
          texto={datos.entretenimiento.texto}
          hide={hideItems}
        />}

      {currentview === 'recargarEfectivo' &&
        <Modelo change={setCurrentView}
          volver='Recarga en efectivo'
          titulo={datos.recargarEfectivo.titulo}
          texto={datos.recargarEfectivo.texto}
          hide={hideItems}
        />}

      {currentview === 'recargarTransferencia' &&
        <Modelo change={setCurrentView}
          volver='Recarga por transferencia'
          titulo={datos.recargarTransferencia.titulo}
          texto={datos.recargarTransferencia.texto}
          hide={hideItems}
        />}
        {chat && <Chat/>}
        
       
        </View>
    </ScrollView>
  );
};

export default Ayuda;
