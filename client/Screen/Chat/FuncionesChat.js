import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import {useState, UseEffect, useEffect} from "react"
import { auth, storage } from "../../../firebase";
// import { snapshotConstructor } from "firebase-functions/lib/providers/firestore";
export async function changeImage(con, setCon) {
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

    setCon([...con, { msj: `data:image/jpg;base64,${resultado.base64}`, res: 'Que agradable sujeto' }])
  }

}

export const chat = () => {
  
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState([])

  useEffect(
    () => {
      const unsuscribe = storage.collection("messages").onSnapshot(
        snapshot => {
          setLoading(false)
          setMessages(snapshot.docs.map(d => ({id: d.id, ...d.data()})))
        },
        err => {
          setError(err)
        }
      );
      return () => unsuscribe()
    },
    [setMessages]
  )
    return {error, loading, messages}
}


export const ordenarArray =(array,propiedad)=>{
  array.sort((a,b)=>{
    if(a[propiedad]<b[propiedad]){
      return -1;
    }
    if(a[propiedad]>b[propiedad]){
      return 1;
    }
    return 0;
 })
 return array;
}