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

export function validarChat(mensaje) {
    
    let respuesta;
    if(mensaje.length<4){
        respuesta='Por favor sé más claro con tu petición';
    }else{
        if (!mensaje.includes('jaja') && !mensaje.includes('servicios') && !mensaje.includes('servicios') && !mensaje.includes('transferencia')
        && !mensaje.includes('recarga') && !mensaje.includes('tarjeta') && !mensaje.includes('telefono')) {
        respuesta='En seguida uno de nuestros asesores se hará cargo'
    } 
    else {
        if (mensaje.includes('jaja')) respuesta = 'Tu risa es estupida';
        if (mensaje.includes('servicios')) respuesta = 'Claro que puedes pagar tus servicios con nuestra app';
        if (mensaje.includes('transferencia')) respuesta = 'Puedes transferir a tus contactos o desconocidos';
        if (mensaje.includes('recarga')) respuesta = 'Puedes recargar tu cuenta en puntos autorizados';
        if (mensaje.includes('tarjeta')) respuesta = 'Obtén tu tarjeta moonbank y empieza a disfrutar de nuestros beneficios';
        if (mensaje.includes('tarjeta')) respuesta = 'Obten tu tarjeta moonbank y empieza a disfrutar de nuestros beneficios';
        if (mensaje.includes('telefono')) respuesta = 'Puedes comunicarte al número 3013184491 para más información';
        if (mensaje.includes('hola')) respuesta = 'Hola, ¿En qúe te podemos ayudar?';
        if (mensaje.includes('contraseña')) respuesta = 'Puedes resstablecer tu contraseña';

    }
    }
    
    return respuesta;

}