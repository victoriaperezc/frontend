import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Text, View, TextInput, Button } from 'react-native'
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Styles } from '../styles/Styles';
import CustomInput from './CustomInput'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import idEmpleado from './TerminoFijo';
import { id } from './PantallaRegistro'
import Calendar_Field from './Calendar_Field'

import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { number } from 'yup/lib/locale';

const SignupSchema = Yup.object().shape({
    primerApellido: Yup.string().required('x'),
    segundoApellido: Yup.string(),
    nombres: Yup.string().required('x'),
    pais_nacimiento: Yup.string().required('x'),
    nacionalidad: Yup.string().required('x'),
    estrato: Yup.string().required('x'),
    estado: Yup.string().required('x'),
    ciudad: Yup.string().required('x'),
    sexo: Yup.string().required('x'),
    fecha_nacimiento: Yup.string().required('x'),
    tipo_documento: Yup.string().required('x'),
    identificacion: Yup.number().required('x'),
    lugar_expedicion: Yup.string().required('x'),
    fecha_expedicion: Yup.string().required('x'),
    estado_civil: Yup.string().required('x'),
    grupo_etnico: Yup.string().required('x'),
    cabeza_familia: Yup.string().required('x'),
    grupo_sanguineo: Yup.string(),
    nivel_educativo: Yup.string().required('x'),
    profesion: Yup.string().required('x'),
    vehiculo: Yup.string(),
    tipo_vivienda: Yup.string().required('x'),
    vivienda_propia: Yup.string(),
    personas_cargo: Yup.number().min(0, 'No valido'),
    numero_hijos: Yup.number().min(0, 'No valido').required('x'),
    tipo_direccion: Yup.string().required('x'),
    num1: Yup.string().required('Campo requerido').matches(/^[a-zA-Z0-9]+$/, 'No caracteres especiales'),
    num2: Yup.string().required('Campo requerido').matches(/^[a-zA-Z0-9]+$/, 'No caracteres especiales'),
    num3: Yup.string().required('Campo requerido').matches(/^[a-zA-Z0-9]+$/, 'No caracteres especiales'),
    direccion_area: Yup.string().required('x'),
    direccion_departamento: Yup.string().required('x'),
    direccion_ciudad: Yup.string().required('x'),
    telefono: Yup.string().matches(/^[0-9]+$/, "Solo números").min(7, 'Teléfono no valido').max(15, 'Teléfono no valido').required('x'),
    correo: Yup.string().email('Correo no valido').required('x'),
    celular: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(7, 'Celular no valido').max(15, 'Teléfono no valido').required('x'),
    deportes: Yup.string(),
    mascotas: Yup.string(),
    hobbies: Yup.string()
});

interface Props {
    //idEmpleado: string;
}

export const InformacionGeneral: React.FC<Props> = () => {
    console.log("IMPRIMIENDO " + id);


    const [selectedValuePais, setSelectedValuePais] = useState(0);
    const [PaisDetails, setPaisDetails] = useState([]);

    const [selectedValueDepartamento, setSelectedValueDepartamento] = useState(0);
    const [DepartamentoDetails, setDepartamentoDetails] = useState([]);

    const [selectedValueCiudad, setSelectedValueCiudad] = useState(0);
    const [CiudadDetails, setCiudadDetails] = useState([]);

    const [selectedValueDepartamentoColombia, setSelectedValueDepartamentoColombia] = useState(0);
    const [DepartamentoDetailsColombia, setDepartamentoDetailsColombia] = useState([]);

    const [selectedValueCiudadColombia, setSelectedValueCiudadColombia] = useState(0);
    const [CiudadDetailsColombia, setCiudadDetailsColombia] = useState([]);

    let idPais = 0;
    let idDepartamento = 0;
    let idDepartamentoColombia = 0;

    useEffect(() => {
        getPaises();
        getDepartamentos(idPais);
        getCiudades(idDepartamento);
        getDepartamentosColombia();
    }, []);

    const getPaises = async () => {
        const token = await AsyncStorage.getItem('userToken');

        fetch("http://localhost:3000", {

            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
        })
            .then((response) => response.json())
            .then((json) => setPaisDetails(json))
            .catch((error) => console.error(error));

    };

    const getDepartamentos = async (id: number) => {
        console.log("Pais:" + id);
        const token = await AsyncStorage.getItem('userToken');

        fetch("http://localhost:3000/get-states-by-country", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
            body: JSON.stringify({
                "id": id
            })
        })
            .then((response) => response.json())
            .then((json) => setDepartamentoDetails(json))
            .catch((error) => console.error(error))
    };

    const getCiudades = async (id: number) => {
        const token = await AsyncStorage.getItem('userToken');

        fetch("http://localhost:3000/get-cities-by-state", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
            body: JSON.stringify({
                "id": id
            })
        })
            .then((response) => response.json())
            .then((json) => setCiudadDetails(json))
            .catch((error) => console.error(error))
    };

    const getDepartamentosColombia = async () => {
        const token = await AsyncStorage.getItem('userToken');

        fetch("http://localhost:3000/get-states-by-colombia", {

            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
        })
            .then((response) => response.json())
            .then((json) => setDepartamentoDetailsColombia(json))
            .catch((error) => console.error(error));

    };

    const getCiudadesColombia = async (id: number) => {
        const token = await AsyncStorage.getItem('userToken');

        fetch("http://localhost:3000/get-cities-by-state-colombia", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
            body: JSON.stringify({
                "id": id
            })
        })
            .then((response) => response.json())
            .then((json) => setCiudadDetailsColombia(json))
            .catch((error) => console.error(error))
    };


    const renderPaises = () => {
        return PaisDetails.map((Pais, key) => {
            return <Picker.Item label={Pais.name} value={Pais.id} key={Pais.id} />
        })
    }

    const renderDepartamentos = () => {
        return DepartamentoDetails.map((Departamento, key) => {
            return <Picker.Item label={Departamento.name} value={Departamento.id} key={Departamento.id} />
        })
    }

    const renderCiudades = () => {
        return CiudadDetails.map((Ciudad, key) => {
            return <Picker.Item label={Ciudad.name} value={Ciudad.id} key={Ciudad.id} />
        })
    }

    const renderDepartamentosColombia = () => {
        return DepartamentoDetailsColombia.map((Departamento, key) => {
            return <Picker.Item label={Departamento.name} value={Departamento.id} key={Departamento.id} />
        })
    }

    const renderCiudadesColombia = () => {
        return CiudadDetailsColombia.map((Ciudad, key) => {
            return <Picker.Item label={Ciudad.name} value={Ciudad.id} key={Ciudad.id} />
        })
    }


    return (
        <Collapse style={{ alignItems: 'center', color: "red" }}>
            <CollapseHeader >
                <View style={Styles.windowDocuments}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Información General
                        </Text>
                    </View>
                    <View style={{ marginRight: '1%' }}>
                        <Text style={[Styles.formFillFont, { color: '#8E8E8E' }]}>
                        </Text>
                    </View>
                </View >
            </CollapseHeader>

            <CollapseBody style={{ alignItems: 'center' }}>
                <Formik
                    initialValues={{
                        primerApellido: '',
                        segundoApellido: '',
                        apellidos: '',
                        nombres: '',
                        pais_nacimiento: '',
                        nacionalidad: '',
                        estrato: '',
                        estado: '',
                        ciudad: '',
                        sexo: '',
                        fecha_nacimiento: '',
                        tipo_documento: '',
                        identificacion: '',
                        lugar_expedicion: '',
                        fecha_expedicion: '',
                        estado_civil: '',
                        grupo_etnico: '',
                        cabeza_familia: '',
                        grupo_sanguineo: '',
                        nivel_educativo: '',
                        profesion: '',
                        vehiculo: '',
                        tipo_vivienda: '',
                        vivienda_propia: '',
                        personas_cargo: '',
                        numero_hijos: '',
                        tipo_direccion: '',
                        num1: '',
                        num2: '',
                        num3: '',
                        direccion: '',
                        direccion_area: '',
                        direccion_departamento: '',
                        direccion_ciudad: '',
                        telefono: '',
                        correo: '',
                        celular: '',
                        deportes: '',
                        mascotas: '',
                        hobbies: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        values.apellidos = values.primerApellido + values.segundoApellido;
                        values.direccion = values.tipo_direccion + values.num1 + values.num2 + values.num3;

                        async function informacionGeneralEmpleado() {
                            try {
                                const caso = id;
                                console.log(caso)
                                const options = {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(values)
                                }
                                const response = await fetch(`http://localhost:3000/v1/informacion-general/${caso}`, options);
                                const respuesta = await response.json();
                                console.log(respuesta)
                                return respuesta
                            }
                            catch (error) { console.log(error) }
                        }

                        console.log("Informacion general")
                        informacionGeneralEmpleado();
                        console.log(values);
                    }}
                >
                    {({ handleSubmit, isValid, values, setFieldValue, errors, touched, handleChange, handleBlur }) => (
                        <>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                                <View style={{ width: '48%', backgroundColor: '#FFFFFF' }}>
                                    <Text style={Styles.textForm}>Primer apellido: * </Text>
                                    <Field style={Styles.fieldForm}
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="primerApellido"
                                        placeholder=""
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Segundo apellido:</Text>
                                    <Field style={Styles.fieldForm}
                                        component={CustomInput}
                                        placeholder=""
                                        name="segundoApellido"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Nombres: *</Text>
                                    <Field style={Styles.fieldForm}
                                        component={CustomInput}
                                        name="nombres"
                                        placeholder=""
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>País de nacimiento:*</Text>
                                    <View style={[(errors.pais_nacimiento && touched.pais_nacimiento) ? Styles.pickerError : Styles.picker]} >
                                        <Picker
                                            selectedValue={selectedValuePais}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedValuePais(itemValue);
                                                idPais = itemIndex;
                                                getDepartamentos(idPais + 1)
                                            }
                                            }>
                                            {renderPaises()}
                                        </Picker>

                                    </View>
                                    {errors.pais_nacimiento && touched.pais_nacimiento &&
                                        <Text style={[Styles.errorText]}>{errors.pais_nacimiento}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Nacionalidad: *</Text>
                                    <View style={[(errors.nacionalidad && touched.nacionalidad) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.nacionalidad}
                                            onValueChange={itemValue => setFieldValue('nacionalidad', itemValue)}
                                            onBlur={handleBlur('nacionalidad')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Colombiano" value="1" />
                                            <Picker.Item label="Extranjero" value="2" />
                                        </Picker>
                                    </View>
                                    {errors.nacionalidad && touched.nacionalidad &&
                                        <Text style={[Styles.errorText]}>{errors.nacionalidad}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Estrato socioeconómico:*</Text>
                                    <View style={[(errors.estrato && touched.estrato) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.estrato}
                                            onValueChange={itemValue => setFieldValue('estrato', itemValue)}
                                            onBlur={handleBlur('estrato')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="2" value="2" />
                                            <Picker.Item label="3" value="3" />
                                            <Picker.Item label="4" value="4" />
                                            <Picker.Item label="5" value="5" />
                                            <Picker.Item label="6" value="6" />
                                        </Picker>
                                    </View>
                                    {errors.estrato && touched.estrato &&
                                        <Text style={[Styles.errorText]}>{errors.estrato}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Departamento/Estado:*</Text>
                                    <View style={[(errors.estado && touched.estado) ? Styles.pickerError : Styles.picker]} >

                                        <Picker
                                            selectedValue={selectedValueDepartamento}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedValueDepartamento(itemValue);
                                                idDepartamento = itemValue;
                                                console.log("Departamento:" + itemIndex);
                                                getCiudades(idDepartamento);
                                            }
                                            }>
                                            {renderDepartamentos()}
                                        </Picker>


                                    </View>
                                    {errors.estado && touched.estado &&
                                        <Text style={[Styles.errorText]}>{errors.estado}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Ciudad/Municipio de nacimiento:*</Text>
                                    <View style={[(errors.ciudad && touched.ciudad) ? Styles.pickerError : Styles.picker]} >

                                        <Picker
                                            selectedValue={selectedValueCiudad}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedValueCiudad(itemValue);
                                            }
                                            }>
                                            {renderCiudades()}
                                        </Picker>

                                    </View>
                                    {errors.ciudad && touched.ciudad &&
                                        <Text style={[Styles.errorText]}>{errors.ciudad}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Sexo:*</Text>
                                    <View style={[(errors.sexo && touched.sexo) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.sexo}
                                            onValueChange={itemValue => setFieldValue('sexo', itemValue)}
                                            onBlur={handleBlur('sexo')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Masculino" value="m" />
                                            <Picker.Item label="Femenino" value="f" />
                                        </Picker>
                                    </View>
                                    {errors.sexo && touched.sexo &&
                                        <Text style={[Styles.errorText]}>{errors.sexo}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Fecha de nacimiento:*</Text>
                                    <Field
                                        placeholder="año-mes-dia"
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="fecha_nacimiento"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Tipo de identificación:*</Text>
                                    <View style={[(errors.tipo_documento && touched.tipo_documento) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.tipo_documento}
                                            onValueChange={itemValue => setFieldValue('tipo_documento', itemValue)}
                                            onBlur={handleBlur('tipo_documento')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Cédula de ciudadanía" value="1" />
                                            <Picker.Item label="Cédula de extranjería" value="2" />
                                            <Picker.Item label="NIT" value="3" />
                                            <Picker.Item label="Otro" value="4" />
                                            <Picker.Item label="Pasaporte" value="5" />
                                            <Picker.Item label="Registro Civil" value="6" />
                                            <Picker.Item label="Tarjeta de Identidad" value="7" />
                                        </Picker>
                                    </View>
                                    {errors.tipo_documento && touched.tipo_documento &&
                                        <Text style={[Styles.errorText]}>{errors.tipo_documento}</Text>
                                    }
                                    
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Número de identificación:*</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder=""
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="identificacion"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Lugar de expedición:</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder=""
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="lugar_expedicion"
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Fecha de expedición:</Text>
                                    <Calendar_Field />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Estado civil:*</Text>
                                    <View style={[(errors.estado_civil && touched.estado_civil) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.estado_civil}
                                            onValueChange={itemValue => setFieldValue('estado_civil', itemValue)}
                                            onBlur={handleBlur('estado_civil')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Casado" value="1" />
                                            <Picker.Item label="Separado" value="2" />
                                            <Picker.Item label="Soltero" value="3" />
                                            <Picker.Item label="Unión libre" value="4" />
                                            <Picker.Item label="Viudo" value="5" />
                                        </Picker>
                                    </View>
                                    {errors.estado_civil && touched.estado_civil &&
                                        <Text style={[Styles.errorText]}>{errors.estado_civil}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Grupo étnico:*</Text>
                                    <View style={[(errors.grupo_etnico && touched.grupo_etnico) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.grupo_etnico}
                                            onValueChange={itemValue => setFieldValue('grupo_etnico', itemValue)}
                                            onBlur={handleBlur('grupo_etnico')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Afroamericano" value="1" />
                                            <Picker.Item label="Indígena" value="2" />
                                            <Picker.Item label="Ninguna" value="3" />
                                            <Picker.Item label="Palenquero" value="4" />
                                            <Picker.Item label="Raizal" value="5" />
                                            <Picker.Item label="ROM (Gitano)" value="6" />
                                        </Picker>
                                    </View>
                                    {errors.grupo_etnico && touched.grupo_etnico &&
                                        <Text style={[Styles.errorText]}>{errors.grupo_etnico}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%', }}>
                                    <Text style={Styles.textForm}>Cabeza de familia: *</Text>
                                    <View style={[(errors.cabeza_familia && touched.cabeza_familia) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.cabeza_familia}
                                            onValueChange={itemValue => setFieldValue('cabeza_familia', itemValue)}
                                            onBlur={handleBlur('cabeza_familia')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="true" />
                                            <Picker.Item label="No" value="false" />
                                        </Picker>
                                    </View>
                                    {errors.cabeza_familia && touched.cabeza_familia &&
                                        <Text style={[Styles.errorText]}>{errors.cabeza_familia}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Grupo sanguíneo:</Text>
                                    <View style={[(errors.grupo_sanguineo && touched.grupo_sanguineo) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.grupo_sanguineo}
                                            onValueChange={itemValue => setFieldValue('grupo_sanguineo', itemValue)}
                                            onBlur={handleBlur('grupo_sanguineo')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="O-" value="O-" />
                                            <Picker.Item label="O+" value="O+" />
                                            <Picker.Item label="A-" value="A-" />
                                            <Picker.Item label="A+" value="A+" />
                                            <Picker.Item label="B-" value="B-" />
                                            <Picker.Item label="B+" value="B+" />
                                            <Picker.Item label="AB-" value="AB-" />
                                            <Picker.Item label="AB+" value="AB+" />
                                        </Picker>
                                    </View>
                                    {errors.grupo_sanguineo && touched.grupo_sanguineo &&
                                        <Text style={[Styles.errorText]}>{errors.grupo_sanguineo}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Nivel de educación:*</Text>
                                    <View style={[(errors.nivel_educativo && touched.nivel_educativo) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.nivel_educativo}
                                            onValueChange={itemValue => setFieldValue('nivel_educativo', itemValue)}
                                            onBlur={handleBlur('nivel_educativo')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Guarderia" value="1" />
                                            <Picker.Item label="Pre Escolar" value="2" />
                                            <Picker.Item label="Primaria" value="3" />
                                            <Picker.Item label="Bachillerato" value="4" />
                                            <Picker.Item label="Tecnologo" value="5" />
                                            <Picker.Item label="Profesional" value="6" />
                                            <Picker.Item label="Profesional Maestria" value="7" />
                                            <Picker.Item label="Profesional Especializado" value="8" />
                                            <Picker.Item label="Profesional Doctorado" value="9" />
                                            <Picker.Item label="Licenciado" value="10" />
                                            <Picker.Item label="Universitario" value="11" />
                                        </Picker>
                                    </View>
                                    {errors.nivel_educativo && touched.nivel_educativo &&
                                        <Text style={[Styles.errorText]}>{errors.nivel_educativo}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Profesión: *</Text>
                                    <Field
                                        placeholder=""
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="profesion"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>¿Posee vehículos?:</Text>
                                    <View style={[(errors.vehiculo && touched.vehiculo) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.vehiculo}
                                            onValueChange={itemValue => setFieldValue('vehiculo', itemValue)}
                                            onBlur={handleBlur('vehiculo')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="true" />
                                            <Picker.Item label="No" value="false" />
                                        </Picker>
                                    </View>
                                    {errors.vehiculo && touched.vehiculo &&
                                        <Text style={[Styles.errorText]}>{errors.vehiculo}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Tipo de vivienda:*</Text>
                                    <View style={[(errors.tipo_vivienda && touched.tipo_vivienda) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.tipo_vivienda}
                                            onValueChange={itemValue => setFieldValue('tipo_vivienda', itemValue)}
                                            onBlur={handleBlur('tipo_vivienda')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Arrendada" value="1" />
                                            <Picker.Item label="Familiar" value="2" />
                                            <Picker.Item label="Leasing" value="3" />
                                            <Picker.Item label="Propia" value="4" />
                                        </Picker>
                                    </View>
                                    {errors.tipo_vivienda && touched.tipo_vivienda &&
                                        <Text style={[Styles.errorText]}>{errors.tipo_vivienda}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>¿Posee vivienda propia?:</Text>
                                    <View style={[(errors.vivienda_propia && touched.vivienda_propia) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.vivienda_propia}
                                            onValueChange={itemValue => setFieldValue('vivienda_propia', itemValue)}
                                            onBlur={handleBlur('vivienda_propia')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="true" />
                                            <Picker.Item label="No" value="false" />
                                        </Picker>
                                    </View>
                                    {errors.vivienda_propia && touched.vivienda_propia &&
                                        <Text style={[Styles.errorText]}>{errors.vivienda_propia}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Personas a cargo:</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder=""
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="personas_cargo"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>No. Hijos:*</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder=""
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="numero_hijos"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Dirección de residencia:*</Text>
                                    <View style={[(errors.tipo_direccion && touched.tipo_direccion) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.tipo_direccion}
                                            onValueChange={itemValue => setFieldValue('tipo_direccion', itemValue)}
                                            onBlur={handleBlur('tipo_direccion')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Calle" value="Calle" />
                                            <Picker.Item label="Carrera" value="Carrera" />
                                            <Picker.Item label="Avenida" value="Avenida" />
                                            <Picker.Item label="Diagonal" value="Diagonal" />
                                            <Picker.Item label="Transversal" value="Transversal" />
                                            <Picker.Item label="Avenida Calle" value="Avenida Calle" />
                                            <Picker.Item label="Avenida Carrera" value="Avenida Carrera" />
                                            <Picker.Item label="Otro" value="Otro" />
                                        </Picker>
                                    </View>
                                    {errors.tipo_direccion && touched.tipo_direccion &&
                                        <Text style={[Styles.errorText]}>{errors.tipo_direccion}</Text>
                                    }
                                </View>
                                <View style={{ width: '48%', flexDirection: 'row', marginTop: wp('1.5%') }}>
                                    <TextInput style={Styles.fieldForm}
                                        style={[(errors.num1 && touched.num1) ? Styles.errorInputDireccion : Styles.textInputDireccion]}
                                        placeholder=""
                                        //name='num1'
                                        onChangeText={handleChange('num1')}
                                        onBlur={handleBlur('num1')}
                                        value={values.num1}
                                    />

                                    <Text style={{ marginTop: '0.5%' }}>#</Text>
                                    <TextInput
                                        style={[(errors.num1 && touched.num2) ? Styles.errorInputDireccion : Styles.textInputDireccion]}
                                        placeholder=""
                                        //name='num1'
                                        onChangeText={handleChange('num2')}
                                        onBlur={handleBlur('num2')}
                                        value={values.num2}
                                    />

                                    <Text style={{ marginTop: '0.4%' }}>-</Text>
                                    <TextInput
                                        style={[(errors.num3 && touched.num3) ? Styles.errorInputDireccion : Styles.textInputDireccion]}
                                        placeholder=""
                                        //name='num1'
                                        onChangeText={handleChange('num3')}
                                        onBlur={handleBlur('num3')}
                                        value={values.num3}
                                    />
                                </View>
                            </View>
                            {errors.num1 && touched.num1 &&
                                <Text style={[Styles.errorText, { marginLeft: '25%' }]}>{errors.num1}</Text>
                            }
                            {errors.num2 && touched.num2 &&
                                <Text style={[Styles.errorText, { marginLeft: '25%' }]}>{errors.num2}</Text>
                            }
                            {errors.num3 && touched.num3 &&
                                <Text style={[Styles.errorText, { marginLeft: '25%' }]}>{errors.num3}</Text>
                            }
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Área:*</Text>
                                    <View style={[(errors.direccion_area && touched.direccion_area) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.direccion_area}
                                            onValueChange={itemValue => setFieldValue('direccion_area', itemValue)}
                                            onBlur={handleBlur('direccion_area')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Urbana" value="urbana" />
                                            <Picker.Item label="Rural" value="rural" />
                                        </Picker>
                                    </View>
                                    {errors.direccion_area && touched.direccion_area &&
                                        <Text style={[Styles.errorText]}>{errors.direccion_area}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Departamento:*</Text>
                                    <View style={[(errors.direccion_departamento && touched.direccion_departamento) ? Styles.pickerError : Styles.picker]} >
                                        <Picker
                                            selectedValue={selectedValueDepartamentoColombia}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedValueDepartamentoColombia(itemValue);
                                                idDepartamentoColombia = itemValue;
                                                console.log("Departamento:" + itemIndex);
                                                getCiudadesColombia(idDepartamentoColombia);
                                            }
                                            }>
                                            {renderDepartamentosColombia()}
                                        </Picker>
                                    </View>
                                    {errors.direccion_departamento && touched.direccion_departamento &&
                                        <Text style={[Styles.errorText]}>{errors.direccion_departamento}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text>Ciudad/Municipio:*</Text>
                                    <View style={[(errors.direccion_ciudad && touched.direccion_ciudad) ? Styles.pickerError : Styles.picker]} >
                                    <Picker
                                            selectedValue={selectedValueCiudadColombia}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedValueCiudadColombia(itemValue);
                                            }
                                            }>
                                            {renderCiudadesColombia()}
                                        </Picker>
                                    </View>
                                    {errors.direccion_ciudad && touched.direccion_ciudad &&
                                        <Text style={[Styles.errorText]}>{errors.direccion_ciudad}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Teléfono:*</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder=""
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="telefono"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>E-mail:*</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder=""
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="correo"
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Celular:*</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder=""
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="celular"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '100%' }}>
                                    <Text style={Styles.textForm}>Deportes:</Text>
                                    <TextInput
                                        style={{ height: hp('20%'), backgroundColor: 'rgb(230,230,230)', justifyContent: 'flex-start', marginTop: '1%' }}
                                        placeholder="Añadir Texto"
                                        style={[(errors.deportes && touched.deportes) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                                        onChangeText={handleChange('deportes')}
                                        onBlur={handleBlur('deportes')}
                                        value={values.deportes}
                                    />
                                </View>
                                {errors.deportes && touched.deportes &&
                                    <Text style={[Styles.errorText]}>{errors.deportes}</Text>
                                }
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '100%' }}>
                                    <Text style={Styles.textForm}>Mascotas:</Text>
                                    <TextInput
                                        placeholder="Añadir Texto"
                                        style={[(errors.mascotas && touched.mascotas) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                                        onChangeText={handleChange('mascotas')}
                                        onBlur={handleBlur('mascotas')}
                                        value={values.mascotas}
                                    />
                                </View>
                                {errors.mascotas && touched.mascotas &&
                                    <Text style={[Styles.errorText]}>{errors.mascotas}</Text>
                                }
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '100%' }}>
                                    <Text style={Styles.textForm}>Hobbies:</Text>
                                    <TextInput
                                        placeholder="Añadir Texto"
                                        style={[(errors.hobbies && touched.hobbies) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                                        onChangeText={handleChange('hobbies')}
                                        onBlur={handleBlur('hobbies')}
                                        value={values.hobbies}
                                    />
                                </View>
                                {errors.hobbies && touched.hobbies &&
                                    <Text style={[Styles.errorText]}>{errors.hobbies}</Text>
                                }
                            </View>
                            <View style={{ marginTop: '2%' }}>
                                <Button
                                    onPress={handleSubmit}
                                    title="Enviar"
                                    disabled={!isValid}
                                    color='#5099D2'
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </CollapseBody>
        </Collapse>
    )
}



function props(props: any) {
    throw new Error('Function not implemented.');
}
