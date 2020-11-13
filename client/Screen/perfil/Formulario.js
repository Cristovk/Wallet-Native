
import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import Lapiz from './Lapiz';
import styles from './estilosFormulario';


const Formulario = ({ data }) => {

  const { name, id, phone, dni, cuil, lastName } = data;
  //State que guarda los datos del usuario editado.
  const [datos, setDatos] = useState({ name, id, phone, dni, cuil, lastName });


  return (
    <View>
      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>Nombre</Text>
        <TextInput
          placeholder={name}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, name: data })}

        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>

      </View>

      <View style={styles.grupoform}>
        <Text style={styles.labelinput} >Apellido</Text>
        <TextInput
          placeholder={lastName}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, lastName: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>Teléfono</Text>
        <TextInput
          placeholder={phone}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, phone: data })}

        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>Cuil</Text>
        <TextInput
          placeholder={cuil}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, cuil: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>DNI</Text>
        <TextInput
          placeholder={dni}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, dni: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>Id Usuario</Text>
        <TextInput
          placeholder={id}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, id: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

    </View>
  );
}

export default Formulario;