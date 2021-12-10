import React, {useEffect} from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { Header_Component } from '../components/Header_Component';
import { ProfileCard_Component } from '../components/ProfileCard_Component';
import { Styles } from '../styles/Styles';
import SwitchSelector from "react-native-switch-selector";
import { ReviewContainer_Component } from '../components/ReviewContainer_Component';
import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';
import { Documents_Component } from '../components/Documents_Component';
import {usuario} from '../components/ProfileCard_Component'
import { userID } from '../components/Login_Component';
import {id} from '../components/PantallaRegistro'

interface Props {
    idEmpleado: string;
}

export type document = {
    docName: string;
    docSize: string;
    isApproved: boolean;
}


export const AffiliatedProfile_Page: React.FC<Props> = ({ idEmpleado }) => {

    const navigator = useNavigation();

    const [data, setData] =useState([])
    var nombre: string
    var apellido: string
    var tipo_doc: string
    var doc: string

    async function postData(){
      try {
          const options = {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              },
          }
          const response = await fetch(`http://localhost:3000/v1/informacion-general-precargados/${userID || id}`, options);
          const respuesta = await response.json();
          console.log(respuesta)
          setData(respuesta.data);
          return respuesta
      }
      catch (error) { console.log(error) }
    }

    useEffect(() => {
        postData()
    },[]);

    console.log(data);
    data.map((element) => {
      //console.log(element.NOMBRES)
      nombre = (element.NOMBRES);
      apellido = (element.APELLIDOS);
      tipo_doc = element.TIPO;
      doc = element.IDENTIFICACION
    })

    apellido = ' '+apellido;
    doc = ' '+doc;

    var documentsData: { [id: string]: document } = { //Dev
        'identificacion': { docName: 'Cédula de ciudadanía', docSize: '18Kb', isApproved: true },
        'oferta': { docName: 'Oferta laboral', docSize: '125Kb', isApproved: true },
        'certifBanc': { docName: 'Certificación bancaria', docSize: '72Kb', isApproved: true },
        'poliza': { docName: 'Póliza exequial', docSize: '50Kb', isApproved: false }
    }

    
    var userData: { [id: string]: usuario } = { 
        'usuario': {name: nombre + apellido, num_doc: tipo_doc + doc, type: 'IBM'},
    }

    const reviewComponent = [
        "firma", "devolucion", "deceval", "formulario", "verificacion", "adicional1"
    ];

    const [component, setComponent] = useState("verificacion");
    const [shouldShow, setShouldShow] = useState(true);

    const onNext = (valor: string) => {
        // Login success
        //navigator.dispatch(CommonActions.navigate({ name: 'PerfilDevolucion', }));
        setComponent(valor);
    }

    const options = [
        { label: "Perfil", value: 'perfil' },
        { label: "Documentos", value: 'documentos' }
    ];

    const setView = (component: string) => {
        if (component == 'perfil') {
            setShouldShow(true);
        } else {
            setShouldShow(false);
        }
    }

    return (
      <View style={Styles.containerColumn}>
        <Header_Component title="Perfil de Usuario" />
        <View style={Styles.containerRow}>
          <View style={[Styles.containerColumn, { flex: 2 }]}>
            <ProfileCard_Component usuario={userData["usuario"]}/>
          </View>
          <View style={[Styles.containerColumn, { flex: 4 }]}>
            <View style={Styles.profileOptionsButtonContainer}>
              <SwitchSelector
                options={options}
                initial={0}
                onPress={(value) => setView(value.toString())}
                textColor='#FE462C'
                buttonColor="#E5E5E5"
                selectedColor="#FE462C"
                backgroundColor="#E5E5E5"
                selectedTextStyle={Styles.profileOptionsButtonText}
              />
            </View>
            <View style={Styles.profileBodyRightContainer}>
              <View
                style={[
                  Styles.containerColumn,
                  { justifyContent: "flex-start" },
                ]}
              >
                {shouldShow ? (
                  <ReviewContainer_Component type={component} />
                ) : (
                  <View>
                    <Documents_Component documento={documentsData["identificacion"]} />
                    <Documents_Component documento={documentsData["oferta"]} />
                    <Documents_Component documento={documentsData["certifBanc"]} />
                    <Documents_Component documento={documentsData["poliza"]} />
                  </View>
                )}
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => onNext("verificacion")}
              >
                <Text>Verificación</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => onNext("devolucion")}
              >
                <Text>Devolución</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => onNext("formulario")}
              >
                <Text>Formulario</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => onNext("verificacionFormulario")}
              >
                <Text>Verificacion Formulario</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => onNext("riesgos")}
              >
                <Text>Riesgos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => onNext("firma")}
              >
                <Text>Firma</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => onNext("deceval")}
              >
                <Text>Deceval</Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </View>
      </View>
    );
}
