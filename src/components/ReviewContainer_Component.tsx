import React from 'react'
import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../styles/Styles';
import { ProgressBar } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';
import { ModalView_Component } from './ModalView_Component';

interface Props {
  type: string;
}

let text: String;
let progress: number;


export const ReviewContainer_Component: React.FC<Props> = ({ type }) => {

  const navigator = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  if (type == "verificacion") {
    text = "Documentos pendientes de verificación"
    progress = 0.2
  } if (type == "firma") {
    text = "Diligenciar las cartas de vinculación"
    progress = 0.6
  } if (type == "devolucion") {
    text = "Devolución"
    progress = 0.3
  } if (type == "deceval") {
    text = "Pagaré Deceval"
    progress = 0.8
  } if (type == "formulario") {
    text = "Formulario"
    progress = 0.4
  } if (type == 'verificacionFormulario'){
    text = "Formulario pendiente de validación"
    progress = 0.5
  } if (type == "riesgos"){
    text = "Pendiente de validación de riesgos"
    progress = 0.7
  }

  const onCloseModal = () => {
    setModalVisible(false);
  }

  const onIngress = () => {
    if (type == "formulario") {
      navigator.dispatch(CommonActions.navigate({ name: 'AffiliatonForm_Page' }));
    }
    else {
      setModalVisible(true);
    }
  }

  return (
    <View style={Styles.processStateContainer}>
      <View style={[Styles.containerRow, { paddingBottom: "1%", paddingTop: '1%' }]}>
        <Text style={Styles.profileCardTextName}>Vinculación al Fondo</Text>
      </View>
      <View style={[Styles.containerRow, { paddingBottom: "1%", marginTop: '5%' }]}>
        <View style={[Styles.containerColumn, { width: "35%" }]}>
          <ProgressBar
            style={Styles.progressBar}
            progress={progress}
            color="#2C698D" />
          <View style={[Styles.containerRow, { justifyContent: 'flex-end', marginTop: '3%' }]}>
            <Text style={Styles.progressText}>{progress * 100}%</Text>
          </View>
        </View >
        <View style={[Styles.simpleContainer, { width: "40%" }]}>
          <Text
            style={[Styles.mediumText, { fontFamily: "WorkSans", color: "#2C698D" }]}>
            {text}
          </Text>
        </View>
        <View style={Styles.verticalDivider} />
        <View style={[Styles.simpleContainer, { width: "25%" }]}>
          <TouchableOpacity onPress={onIngress}>
            <View style={Styles.loginButton}>
              <Text style={Styles.logginButtonText}>Ingresar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isModalVisible}>
        <View style={Styles.modalContainer}>
          <TouchableOpacity
            style={Styles.modalCloseButton}
            onPress={onCloseModal}>
            <Text style={Styles.modalCloseButtonText}>x</Text>
          </TouchableOpacity>
          <ModalView_Component type={type} />
        </View>
      </Modal>

      <LinearGradient
        style={Styles.statusCardBottom}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={['#0072C3', '#FFFFFF']}
      />
    </View>
  );
}