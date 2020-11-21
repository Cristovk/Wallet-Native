import React from 'react'
import { Icon } from 'react-native-elements';
import {useSelector} from 'react-redux'

const Editar = () => {
  const {secondary,primary,dark} = useSelector(store => store.color)
  return (
    <Icon
      size={16}
      name='pencil'
      type='font-awesome'
      color={dark ? secondary : primary}
    />
  );
}



export default Editar;