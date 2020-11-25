import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";



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

export function validarChat(mensaje,user) {
  let respuesta='En seguida uno de nuestros asesores se hará cargo';
  if(mensaje.length<3){
      respuesta='Por favor sé más claro con tu petición';
  }
  else {
     
      if (mensaje.includes('jaja')) respuesta = 'Tu risa es estupida';
      if (mensaje.includes('servicios')) respuesta = 'Claro que podés pagar tus servicios con nuestra app';
      if (mensaje.includes('transferencia')) respuesta = 'Podés transferir a tus contactos o desconocidos';
      if (mensaje.includes('recarga')) respuesta = 'Podés recargar tu cuenta en puntos autorizados';
      if (mensaje.includes('tarjeta')) respuesta = 'Asociá tu tarjeta moonbank y empieza a disfrutar de nuestros beneficios';
      if (mensaje.includes('telefono')) respuesta = 'Podés comunicarte al número 3013184491 para más información';
      if (mensaje.includes('hola')) respuesta = `Hola ${user}, ¿Cómo te encuentras el día de hoy?`;
      if (mensaje.includes('buenos dias')) respuesta = `Hola ${user}, ¿Cómo te encuentras el día de hoy?`;
      if (mensaje.includes('buenos días')) respuesta = `Hola ${user}, ¿Cómo te encuentras el día de hoy?`;
      if (mensaje.includes('buen dia')) respuesta = `Hola ${user}, ¿Cómo te encuentras el día de hoy?`;
      if (mensaje.includes('buenas tardes')) respuesta = `Hola ${user}, ¿Cómo te encuentras el día de hoy?`;
      if (mensaje.includes('buenos noches')) respuesta = `Hola ${user}, ¿Cómo te encuentras el día de hoy?`;
      if (mensaje.includes('buenos')) respuesta = `Hola ${user}, ¿Cómo te encuentras el día de hoy?`;
      if (mensaje.includes('chao')) respuesta = 'Hasta luego, volvé pronto!';
      if (mensaje.includes('contraseña')) respuesta = 'Podés reestablecer tu contraseña';
      if (mensaje.includes('chao')) respuesta = 'Hasta luego, volvé pronto!';
      if (mensaje.includes('contactos')) respuesta = 'Podés envíar y recibir dinero de un contacto tuyo';
      if (mensaje.includes('como estás')) respuesta = '¿Bien y vos?';
      if (mensaje.includes('como estas')) respuesta = '¿Bien y vos?';

  }
  
  return respuesta;

}
