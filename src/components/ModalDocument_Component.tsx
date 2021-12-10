import React, {useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { document } from '../pages/AffiliatedProfile_Page';
import { Styles } from '../styles/Styles';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import * as WebBrowser from 'expo-web-browser';
import { userID } from './Login_Component';


interface Props {
    documento: document;
}

export const ModalDocument_Component: React.FC<Props> = ({ documento }) => {
    const navigator = useNavigation();

    const [buttonClicked, setButtonClicked] = useState(false);

    let stateText: string = "Falta llenar";
    let buttonText: string = "Llenar";

    if (documento.isApproved) {
        stateText = "Completado";
        buttonText = "Editar";
    }

    const edit = () => {

    }

    const view = () => { 
        setButtonClicked(true)
        //<Pdf source={source}/>
        async function cartas() {
            let response;
            try {
                const options = {
                    method: 'GET',
                    responseType: 'streamg'      
                }
                if (documento.docName == "Solicitud de Asociación")
                {
                    response= await fetch(`http://localhost:3100/api/v1/cartas/asociado/${userID}`, options);
                }
                if (documento.docName == "Autorización Deducción de Ahorro")
                {
                    response= await fetch(`http://localhost:3100/api/v1/cartas/deduccion-ahorros/${userID}`, options);
                }
                if (documento.docName == "Autorización Deducción de Ingresos Para Pagos FEIBM")
                {
                    response= await fetch(`http://localhost:3100/api/v1/cartas/deduccion-ingresos/${userID}`, options);
                }
                if (documento.docName == "Declaración Voluntad")
                {
                    response= await fetch(`http://localhost:3100/api/v1/cartas/declaracion-voluntad/${userID}`, options);
                }
                window.open(response.url);
                console.log(response)
                //WebBrowser.openBrowserAsync(response.url);
            }
            catch (error) { console.log(error) }   
        } 
        cartas()  
        //
 

    }
    
    

    return (
        <View style={Styles.containerRow}>
            <View style={[Styles.simpleContainer, { width: '40%' }]}>
                <Text style={[Styles.modalText, { marginRight: 'auto', marginLeft: '10%' }]}>{documento.docName}</Text>
            </View>
            <View style={[Styles.containerRow, { width: '60%' }]}>
                <View style={[Styles.simpleContainer, { width: '30%' }]}>
                    <Text style={Styles.modalText}>{stateText}</Text>
                </View>
                <View style={[Styles.containerRow, { width: '70%' }]}>
                    <TouchableOpacity
                        style={Styles.modalButton}
                        onPress={edit}>
                        <Text style={Styles.modalText}>{buttonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.modalButton}
                        onPress={view}>
                        <Text style={Styles.modalText}>Visualizar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}
