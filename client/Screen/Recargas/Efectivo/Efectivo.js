import React,{useEffect,useState} from 'react'
import { View, Text, Image, Linking, TouchableOpacity, Alert } from 'react-native'
import { useSelector } from 'react-redux';
import styles from './estilosEfectivo';
import style from '../../Configuracion/Correo/CorreoEstilos'
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import {dot,logo} from "../../../../assets/index";
import {ActivityIndicator} from "react-native"

const Efectivo = ({ color }) => {

  const [location,setLocation] = useState("");
  const [places,setPlaces] = useState([]);
  const [keyword,setKeyword] = useState("rapipago");

  const user = useSelector(store => store.user.user)
  const { primary, secondary, bg, text, dark } = useSelector(store => store.color)
  const handleRapiPago = async () => {
    await Linking.openURL("https://www.rapipago.com.ar/rapipagoWeb/index.php/resultado_sucursales")
  }

  const handlePagoFacil = async () => {
    await Linking.openURL("https://www.e-pagofacil.com/")
  }

  const getLocation = async () => {
    const permiso = await Permissions.askAsync(Permissions.LOCATION)
    const respuesta = permiso.permissions.location.status
    if(respuesta === "denied"){
      Alert.alert("No se tiene los permisos para el mapa")
    }else{
      const consulta = await Location.hasServicesEnabledAsync()
      if(!consulta){
        Alert.alert("No esta disponible su ubicación")
      }
      const loc = await Location.getCurrentPositionAsync()
      const coordenadas = getDelta(loc.coords.latitude,loc.coords.longitude,1200)
      setLocation(coordenadas)
      console.log(coordenadas)
    }
  }

  const getDelta = (lat, lon, distance) => {
      distance = distance/2
      const circumference = 40075
      const oneDegreeOfLatitudeInMeters = 111.32 * 1000
      const angularDistance = distance/circumference

      const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
      const longitudeDelta = Math.abs(Math.atan2(
              Math.sin(angularDistance)*Math.cos(lat),
              Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

      return  {
          latitude: lat,
          longitude: lon,
          latitudeDelta,
          longitudeDelta,
      }
  }

  const handleSearch = async (local) => {
    console.log("se presiono el boton")
    let array = [];
    if(location){
      const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=1200&keyword=${local}&key=AIzaSyBb1jsHd9pMGasi6PWTIPLPLKr0Sgat-QU`)
      if(data.results){
        data.results.map(e => {
          let dato = {
            latitude: e.geometry.location.lat,
            longitude: e.geometry.location.lng,
            name:e.name,
            icon:e.icon
          }
          array.push(dato);
        })
      }
      if(array.length===0){
        Alert.alert("No se encontraron resultados")
      }
      console.log(array);
      setPlaces(array);
    }else{
      console.log("salio mal");
    }
  }


  useEffect(() => {
    getLocation()

  },[])

  return (
    <View >
      <Text style={{ ...styles.titulotransferencia, color: color.text }}>Desde cualquier centro de recarga</Text>
      <Text style={styles.parrafo}>Acercate a cualquiera de nuestros puntos de recarga habilitados y decí que vas a recargar tu billetera <Text style={{ fontWeight: "bold" }}>MoonBank</Text> con el siguiente código: </Text>
      <View style={[{ marginTop: 25 }, dark ? style.tituloBlack : style.titulo]}>
        <Text style={[{ backgroundColor: primary }, style.subtitulo]}>{user.pin} </Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.parrafo}>Conoce los puntos de recarga más cercanos:</Text>
      </View>
      <View style={styles.contenedorimagenes}>
        <TouchableOpacity
          onPress={() => handleSearch("rapipago")}
          style={[{ backgroundColor: primary }, styles.botonImagen]}
        >
          <Image style={styles.imagenpunto} source={require('../../../src/rapipagoSinFondo.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSearch("pagofacil")}
          style={[{ backgroundColor: primary }, styles.botonImagen]}
        >
          <Image style={styles.imagenpunto} source={require('../../../src/pagofacillogoSinfondo.png')} />
        </TouchableOpacity>
      </View>
<View>
  {location  ? <MapView style={{height:300}}  initialRegion={location}
    >
    <Marker 
      coordinate = {{latitude:Number(location.latitude),longitude:Number(location.longitude)}} title={"Ubicacion"} pinColor={'black'}>
      </Marker>

      {places[0] && places.map((e) => {
        return(
          <MapView.Marker coordinate={{latitude:e.latitude, longitude: e.longitude}} title={e.name}>
       </MapView.Marker>
        )})
    }
      </MapView>: <ActivityIndicator size="large" color={bg} style={{marginTop:50}}/>}
</View>
    </View>
  );
}

export default Efectivo;
