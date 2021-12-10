import React from 'react'
import { View } from 'react-native';
import { VistaFormularios } from '../components/VistaFormularios';
import { Styles } from '../styles/Styles';
import { Header_Component } from '../components/Header_Component';

export const AffiliatonForm_Page = () => {
  return (
    <View style={Styles.containerColumn}>
      <Header_Component title="Formulario de Afiliación" />
      <VistaFormularios />
    </View>
  )
}
