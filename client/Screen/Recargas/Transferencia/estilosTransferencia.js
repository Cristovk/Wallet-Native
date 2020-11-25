
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  generaltransferencia: {
    backgroundColor: 'red',
    height: '100%'
  },
  titulotransferencia: {
    color: '#02072f',
    color: 'grey',
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 14,
    marginTop: 10
  },
  alerta: {
    marginTop: 30,
    margin: 4,
    borderRadius: 6,
    padding: 12,
    color: 'grey',
    borderColor: '#fc7029',
    borderWidth: 1,
    backgroundColor: 'rgba(252, 112, 41,0.1)',

  },
  textobanco: {
    color: 'grey',
    fontWeight: '600'
  },
  parrafo: {
    color: 'grey'
  },
  continputs: {
    padding: 6,
    marginTop: 35
  },
  grupoformulario: {
    flexDirection: 'row',
    position: 'relative'
  },
  label: {
    position: 'absolute',
    top: 12,
    color: 'grey',
    right: 5
  },
  inputtransferencia: {
    // textAlign:'end',
    width: '100%',
    padding: 6,
    borderBottomWidth: 1,
  },
  btncompartir: {
    marginTop: 110,
    borderColor: '#02072f',
    color: '#02072f',
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    borderRadius: 6
  },
  textocompartir: {
    textAlign: 'center'
  }
})
export default styles;