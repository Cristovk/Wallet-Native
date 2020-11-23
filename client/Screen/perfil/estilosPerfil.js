import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  generalperfil: {
    height: '100%'
  },
  generalimagen: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },
  generalvolver: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contenedorimagen: {
    // borderColor: '#0272F',
    borderWidth: 1,
    width: 100,
    height: 100,
    marginTop: 10,
    marginHorizontal: 'auto',
    borderRadius: 100,
    position: 'relative',
  },
  imagenperfil: {
    width: '96%',
    height: '96%',
    borderWidth: 1,
    position: 'absolute',
    borderRadius: 100,
    left: 2,
    top: 2,
  },
  contenedorcamara: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: 35,
    height: 35,
    paddingTop: 10,
    borderRadius: 100,
    right: 4,
    position: 'absolute'
  },
  nombreusuario: {
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
    fontWeight: '600',
    color: '#02072f',
    fontWeight: 'bold'
  },
  titulodatos: {
    paddingLeft: 10,
    fontWeight: '600',
    color: '#02072f',
    marginBottom: 6,
    marginTop: 15
  },
  link: {
    color: '#fff',
    textAlign: 'center'
  },
  generalvolver: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  btnvolver: {
    backgroundColor: '#02072f',
    width: 80,
    textAlign: 'center',
    padding: 2,
    marginTop: 5,
    borderRadius: 2,
    marginRight: 10,
    justifyContent: "center"
  }
})
export default styles;