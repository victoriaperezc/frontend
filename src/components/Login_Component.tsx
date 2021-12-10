import React, {useEffect, useState} from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Styles } from '../styles/Styles';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from '../../hooks/UseForm';
import { useNavigation } from '@react-navigation/core';
import { Recaptcha_Component, validCaptcha } from './Recaptcha_Component';
import { LinearGradient } from 'expo-linear-gradient';

export var userID: string;

export const Login_Component = () => {

  const url = "localhost:3000";
  const navigator = useNavigation();

  const { correo, password, form, onChange } = useForm({
    correo: '',
    password: ''
  });

  

  const showCaptchaAlert = () => {
    alert('Complete el reCaptcha antes de continuar');
  }

  const showEmailAlert = () => {
    alert('Ingrese una dirección de correo valida');
  }

  const showCredentialsAlert = () => {
    alert('Dirección de correo electronico o contraseña incorrectos');
  }

  const onLogin = () => {
    attemptLogin();
  }

  async function attemptLogin() {
    if (validCaptcha) {
      if (validEmail(correo)) {
        try {
          const options = {
            method: 'GET',
          }
          const response = await fetch(`http://${url}/v1/login/${correo}&${password}`, options);
          const respuesta = await response.json();
          if (respuesta.message == "Datos incorrectos") {
            showCredentialsAlert();
          } else {
            userID = respuesta.data[0].ID_EMPLEADO;

            console.log(userID);

            navigator.dispatch(CommonActions.navigate({ name: 'PerfilAfiliado', }));
          }
          return respuesta
        }
        catch (error) {
        }
      } else {
        showEmailAlert();
      }
    } else {
      showCaptchaAlert();
    }
  }

  const validEmail = (correo: any) => {
    var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(String(correo).toLowerCase())
  }

  const onAdminLogin = () => {
    if (validCaptcha) {
      navigator.dispatch(CommonActions.navigate({ name: 'ListaSolicitantes', }));
    } else {
      showCaptchaAlert();
    }
  }

  const onResetPassword = () => {
    // Recover password
  }

  return (
    <View style={Styles.loginContainer}>
      <View style={Styles.loginComponents}>
        <View style={[Styles.loginTextFieldContainer, {}]}>
          <Text style={Styles.welcomeText}>Bienvenido de vuelta!</Text>
          <TextInput
            style={Styles.loginTextField}
            placeholder="Usuario"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => onChange(value, "correo")}
            value={correo}
            onSubmitEditing={onLogin}
          />
          <TextInput
            style={Styles.loginTextField}
            secureTextEntry={true}
            placeholder="Contraseña"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => onChange(value, "password")}
            value={password}
            onSubmitEditing={onLogin}
          />
        </View>
        <View
          style={[
            Styles.containerRow,
            { flexWrap: "wrap", marginTop: "20%" },
          ]}
        >
          <View style={{ width: "30%" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onResetPassword}
              style={{ marginHorizontal: "2%" }}
            >
              <Text style={[Styles.mediumText, { color: "#001D6C" }]}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "30%" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={Styles.loginButton}
              onPress={onLogin}
            >
              <Text style={Styles.logginButtonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "40%" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={Styles.loginButton}
              onPress={onAdminLogin}
            >
              <Text style={Styles.logginButtonText}>
                Ingreso Administrativos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[Styles.simpleContainer, { marginTop: "23%", marginBottom: '10%' }]}
        >
          <Recaptcha_Component />
        </View>
        <View style={Styles.profileCardBottomLogin}>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={["#FE462C", "#E5E5E5", "#0072C3"]}
            style={Styles.bottomBackground}
          />
        </View>
      </View>
    </View>
  );
}