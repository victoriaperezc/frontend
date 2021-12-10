import React from 'react'
import {Text, View, TouchableOpacity } from 'react-native';
import { Styles } from '../styles/Styles'


interface Props {
  docName: string;
  weigth: string;
  date: string
}


export const Documents_ComponentList: React.FC<Props> = ({docName, weigth,  date}) => {

    let aprobado: boolean = false;

    const testButton = () => {
        console.log('button was pressed');
    }
    return (
      
        <View style={Styles.infoContainer}>
          <Text style={Styles.name}>{docName}</Text>
          <View style={Styles.lineDivider} />
          <Text style={[Styles.date, { width: "8%" }]}>{weigth}</Text>
          <View style={Styles.lineDivider} />
          <Text style={[Styles.date, { width: "15%" }]}>{date}</Text>
          <View style={Styles.lineDivider} />
          <View style={Styles.buttonContainer}>
            <View style={Styles.containerRow}>
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
            </View>
          </View>
        </View>
      
    );
}
