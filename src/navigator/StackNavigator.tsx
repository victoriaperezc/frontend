import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { Login_Page } from '../pages/Login_Page';
import PantallaRegistro from '../components/PantallaRegistro';
import { AffiliatedProfile_Page } from '../pages/AffiliatedProfile_Page';
import { TerminoFijo } from '../components/TerminoFijo';
import TerminoIndefinido from '../components/TerminoIndefinido';
import PerfilFEL from '../components/PerfilFEL';
import PerfilDevolucion from '../components/PerfilDevolucion';
import PerfilFirma from '../components/PerfilFirma';
import PerfilDeceval from '../components/PerfinDeceval';
import PerfilEmpleado from '../pages/PerfilEmpleadoPagina';
import DocumentosEmpleadoPagina from '../pages/DocumentosEmpleadoPagina';
import ListaAplicantesPagina from '../pages/ListaAplicantesPagina';
import { AffiliatonForm_Page } from '../pages/AffiliationForm_Page';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#f3f3f3",
        },
        headerShown: false
      }}
    >
      <Stack.Group
        screenOptions={{
          headerBackground: () =>
            <LinearGradient
              start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
              colors={['#FE462C', '#E5E5E5', '#0072C3']}
              style={styles.linearGradient}
            />,
          cardStyle: {
            backgroundColor: "#E5E5E5",
          },
        }}
      >
        <Stack.Screen name="LoginPage" component={Login_Page} />
        <Stack.Screen
          name="PerfilAfiliado"
          component={AffiliatedProfile_Page}
          options={{
            headerShown: false
          }} />
          
        <Stack.Screen name="ListaSolicitantes" component={ListaAplicantesPagina} />

        <Stack.Screen name="AffiliatonForm_Page" component={AffiliatonForm_Page} />


        <Stack.Screen name="Registro" component={PantallaRegistro} />
        <Stack.Screen name="TerminoFijo" component={TerminoFijo} />
        <Stack.Screen name="TerminoIndefinido" component={TerminoIndefinido} />
        <Stack.Screen name="PerfilF" component={PerfilFEL} />
        <Stack.Screen name="PerfilDevolucion" component={PerfilDevolucion} />
        <Stack.Screen name="PerfilFirma" component={PerfilFirma} />
        <Stack.Screen name="PerfilDeceval" component={PerfilDeceval} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0072C3',
          }
        }}
      >
        <Stack.Screen name="PerfilEmpleado" component={PerfilEmpleado} />
        <Stack.Screen name="DocumentosEmpleado" component={DocumentosEmpleadoPagina} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});