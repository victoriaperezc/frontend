import React from 'react'
import {Text, View, TouchableOpacity } from 'react-native';
import { document } from '../pages/AffiliatedProfile_Page';
import { Styles } from '../styles/Styles'

interface Props {
    documento: document;
}

export const Documents_Component: React.FC<Props> = ({ documento }) => {

    let aprobado: boolean = false;

    const testButton = () => {
        console.log('button was pressed');
    }
    return (
      
        <View style={Styles.infoContainer}>
          <Text style={Styles.name}>{documento.docName}</Text>
          <View style={Styles.verticalDivider} />
          <Text style={[Styles.date, { width: "10%" }]}>{documento.docSize}</Text>
          <View style={Styles.verticalDivider} />
          <Text style={Styles.date}>10/29/2021</Text>
          <View style={Styles.verticalDivider} />
          <View style={Styles.buttonContainer}>
            <View style={Styles.containerRow}>
              {documento.isApproved ? (
                <View style={Styles.containerRow}>
                  <TouchableOpacity
                    style={[Styles.loginButton, {backgroundColor: "#FE8171"}]}
                    onPress={testButton}
                  >
                    <Text style={Styles.logginButtonText}>Descargar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[Styles.loginButton, {backgroundColor: "#FE8171"}]}
                    onPress={testButton}
                  >
                    <Text style={Styles.logginButtonText}>Visualizar</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ paddingRight: "20%" }}>
                  <TouchableOpacity
                    style={[Styles.loginButton, { width: "150%" , backgroundColor: "#FE8171"}]}
                    onPress={testButton}
                  >
                    <Text style={Styles.logginButtonText}>Cargar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      
    );
}
