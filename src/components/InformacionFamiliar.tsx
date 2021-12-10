import React, { useState } from 'react'
import { Text, View, TextInput, Button, NativeSyntheticEvent, TargetedEvent, TouchableOpacity } from 'react-native';
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';
import { Styles } from '../styles/Styles';
import { Formik, Form, Field, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';
import {id} from './PantallaRegistro'
import CustomInput from './CustomInput'
import  TablaFamilia  from './TablaFamilia';
import Calendar_Field from './Calendar_Field'



const SignupSchema = Yup.object().shape({
    selectedValueAgregarFamiliar: Yup.string().required('x'),
    nombres: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().required('x'), 
    }),
    apellidos: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().required('x'), 
    }),
    sexo: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().required('x'), 
    }),
    fecha_nacimiento: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().required('x'), 
    }),
    id_parentesco: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().required('x'), 
    }),
    trabaja_IBM: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string() 
    }),
    tipo_documento: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().required('x'), 
    }),
    documento: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().min(8,({min}) =>`Número de documento min de ${min}`).required('x'), 
    }),
    nivel_educativo: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().required('x'), 
    }),
    correo: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().email('Correo no valido')
    }),
    telefono: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().matches(/^[0-9]+$/, "Solo números").min(7,'Teléfono no valido').max(15,'Teléfono no valido').required('x') 
    }),
    pep: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string().required('x'), 
    }),
    hobbies: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string()
    }),
    deportes: Yup.string().when('selectedValueAgregarFamiliar',{
        is: 'true', 
        then: Yup.string()
    }),
    actividad_pep: Yup.string().when('pep',{
        is: 'true', 
        then: Yup.string().required('x'), 
    }),
    
});


export const InformacionFamiliar = () => {

    const [selectedValueAgregarFamiliar, setselectedValueAgregarFamiliar] = useState("");
    const [pep, setPep] = useState("");
    const [isSelected, setSelection] = useState(false);

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
      setButtonClicked(true)
    }

    const renderAgregarFamiliar = (errors: FormikErrors<{hobbies:string; deportes:string; sexo:string; id_parentesco:string; trabaja_IBM:string; tipo_documento:string; nivel_educativo:string; pep:string; actividad_pep:string;}>, touched: FormikTouched<{hobbies:string; deportes:string; sexo:string; id_parentesco:string; trabaja_IBM:string;  tipo_documento:string; nivel_educativo:string; pep:string; actividad_pep:string;}>, values: {hobbies?:any; deportes?:any; sexo?: any; id_parentesco?: any; trabaja_IBM?: any; tipo_documento?: any; nivel_educativo?: any; pep?: any; actividad_pep?: any; }, setFieldValue: { (field: string, value: any, shouldValidate?: boolean): void; (arg0: string, arg1: any): void; }, handleBlur: (arg0: string) => { (e: NativeSyntheticEvent<TargetedEvent>): void; (e: NativeSyntheticEvent<TargetedEvent>): void; (e: NativeSyntheticEvent<TargetedEvent>): void; (e: NativeSyntheticEvent<TargetedEvent>): void; (e: NativeSyntheticEvent<TargetedEvent>): void; (e: NativeSyntheticEvent<TargetedEvent>): void; }, handleChange: any) => {
        if (selectedValueAgregarFamiliar == 'true')
            return (
                <><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text style={Styles.textForm}>Apellidos:*</Text>
                        <Field style={Styles.fieldForm}
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="apellidos"
                            placeholder=""
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text style={Styles.textForm}>Nombres:*</Text>
                        <Field style={Styles.fieldForm}
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="nombres"
                            placeholder=""
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text style={Styles.textForm}>Sexo:*</Text>
                            <View style={[(errors.sexo && touched.sexo ) ? Styles.pickerError : Styles.picker]} >
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
                            {errors.sexo  && touched.sexo &&
                                <Text style={[Styles.errorText]}>{errors.sexo}</Text>
                            }
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text style={Styles.textForm}>Fecha de nacimiento:</Text>
                            <Calendar_Field/>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text style={Styles.textForm}>Parentesco:*</Text>
                            <View style={[(errors.id_parentesco && touched.id_parentesco) ? Styles.pickerError : Styles.picker]} >
                                <Picker style={Styles.fieldForm}
                                    selectedValue={values.id_parentesco}
                                    onValueChange={itemValue => setFieldValue('id_parentesco', itemValue)}
                                    onBlur={handleBlur('id_parentesco')}
                                >
                                    <Picker.Item label="Seleccione una opción:" value="" />
                                    <Picker.Item label="Esposa" value="1" />
                                    <Picker.Item label="Esposo" value="2" />
                                    <Picker.Item label="Hija" value="3" />
                                    <Picker.Item label="Hijo" value="4" />
                                    <Picker.Item label="Madre" value="5" />
                                    <Picker.Item label="Padre" value="6" />
                                </Picker>
                            </View>
                            {errors.id_parentesco  && touched.id_parentesco &&
                                <Text style={[Styles.errorText]}>{errors.id_parentesco}</Text>
                            }
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text style={Styles.textForm}>Trabaja en IBM:</Text>
                            <View style={[(errors.trabaja_IBM && touched.trabaja_IBM) ? Styles.pickerError : Styles.picker]} >
                                <Picker style={Styles.fieldForm}
                                    selectedValue={values.trabaja_IBM}
                                    onValueChange={itemValue => setFieldValue('trabaja_IBM', itemValue)}
                                    onBlur={handleBlur('trabaja_IBM')}
                                >
                                    <Picker.Item label="Seleccione una opción:" value="" />
                                    <Picker.Item label="Sí" value="true" />
                                    <Picker.Item label="No" value="false" />
                                </Picker>
                            </View>
                            {errors.trabaja_IBM  && touched.trabaja_IBM &&
                                <Text style={[Styles.errorText]}>{errors.trabaja_IBM}</Text>
                            }
                        </View>
                    </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
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
                            {errors.tipo_documento  && touched.tipo_documento &&
                                <Text style={[Styles.errorText]}>{errors.tipo_documento}</Text>
                            }
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text style={Styles.textForm}>Número de documento:*</Text>
                            <Field style={Styles.fieldForm}
                                component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                name="documento"
                                placeholder=""
                            />
                        </View>
                    </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
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
                            {errors.nivel_educativo  && touched.nivel_educativo &&
                                <Text style={[Styles.errorText]}>{errors.nivel_educativo}</Text>
                            }
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text style={Styles.textForm}>E-mail:</Text>
                            <Field style={Styles.fieldForm}
                                component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                name="correo"
                                placeholder=""
                            />
                        </View>
                    </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text style={Styles.textForm}>Teléfono:*</Text>
                            <Field style={Styles.fieldForm}
                                component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                name="telefono"
                                placeholder=""
                            />
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text style={Styles.textForm}>¿Es PEP?:*</Text>
                            <View style={[(errors.pep && touched.pep) ? Styles.pickerError : Styles.picker]} >
                                        <Picker  style={Styles.fieldForm}
                                            selectedValue={values.pep} 
                                            onValueChange={itemValue => {setPep(itemValue); setFieldValue('pep', itemValue)}}
                                            onBlur={handleBlur('pep')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="true" />
                                            <Picker.Item label="No" value="false" />
                                        </Picker>
                                    </View>
                                    {errors.pep  && touched.pep &&
                                        <Text style={[Styles.errorText]}>{errors.pep}</Text>
                                    }
                        </View>
                    </View>
                    <Text>{renderParentescoPEP(errors, touched, values, setFieldValue, handleBlur, handleChange)}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text style={Styles.textForm}>Deportes:</Text>
                        <TextInput
                            placeholder="Añadir Texto"
                            style={[(errors.deportes && touched.deportes) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                            onChangeText={handleChange('deportes')}
                            onBlur={handleBlur('deportes')}
                            value={values.deportes}
                        />
                    </View>
                    {errors.deportes  &&  touched.deportes &&
                        <Text style={[Styles.errorText]}>{errors.deportes}</Text>
                    }
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text style={Styles.textForm}>Hobbies:</Text>
                        <TextInput
                            placeholder="Añadir Texto"
                            style={[(errors.hobbies && touched.hobbies) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                            onChangeText={handleChange('hobbies')}
                            onBlur={handleBlur('hobbies')}
                            value={values.hobbies}
                        />
                    </View>
                    {errors.hobbies  &&  touched.hobbies &&
                        <Text style={[Styles.errorText]}>{errors.hobbies}</Text>
                    }
                </View>
                </>
            )
        else return null
    }

    const renderParentescoPEP = (errors: FormikErrors<{actividad_pep: string; }>, touched: FormikTouched<{actividad_pep: string;  }>, values: {actividad_pep?: any;  }, setFieldValue: { (field: string, value: any, shouldValidate?: boolean | undefined): void; (arg0: string, arg1: any): void; }, handleBlur: any, handleChange: any) => {
        if (pep == 'true')
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text style={Styles.textForm}>Clase de Actividad PEP:*</Text>
                            <View style={[(errors.actividad_pep && touched.actividad_pep) ? Styles.pickerError : Styles.picker]} >
                                <Picker style={Styles.fieldForm}
                                    selectedValue={values.actividad_pep}
                                    onValueChange={itemValue => setFieldValue('actividad_pep', itemValue)}
                                    onBlur={handleBlur('actividad_pep')}
                                >
                                    <Picker.Item label="Seleccione una opción" value="" />
                                    <Picker.Item label="Farandula" value="1" />
                                    <Picker.Item label="FFMM/Policia" value="2" />
                                    <Picker.Item label="Lideres Comunales" value="3" />
                                    <Picker.Item label="Politica" value="4" />
                                    <Picker.Item label="Prensa" value="5" />
                                </Picker>
                            </View>
                            {errors.actividad_pep && touched.actividad_pep &&
                                <Text style={[Styles.errorText]}>{errors.actividad_pep}</Text>
                            }
                        </View>
                    </View>
                </View>
            )
        else return null
    }

    const Function = (errors: FormikErrors<{ sexo:string; id_parentesco:string; trabaja_IBM:string; tipo_documento:string; nivel_educativo:string; pep:string; actividad_pep:string; selectedValueAgregarFamiliar:string; }>, touched: FormikTouched<{sexo:string; id_parentesco:string; trabaja_IBM:string; tipo_documento:string; nivel_educativo:string; pep:string; actividad_pep:string; selectedValueAgregarFamiliar:string; }>, values: {sexo?: any; id_parentesco?: any; trabaja_IBM?: any; tipo_documento?: any; nivel_educativo?: any; pep?: any; actividad_pep?: any; selectedValueAgregarFamiliar?: any }, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void, handleBlur:any, handleChange:any) => {
            return (
                <><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text style={Styles.textForm}>¿Desea Agregar un familiar?:*</Text>
                        <View style={[(errors.selectedValueAgregarFamiliar && touched.selectedValueAgregarFamiliar) ? Styles.pickerError : Styles.picker]} >
                            <Picker style={Styles.fieldForm}
                                selectedValue={values.selectedValueAgregarFamiliar} 
                                onValueChange={itemValue => {setselectedValueAgregarFamiliar(itemValue); setFieldValue('selectedValueAgregarFamiliar', itemValue)}}
                                onBlur={handleBlur('selectedValueAgregarFamiliar')}

                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Sí" value="true" />
                                <Picker.Item label="No" value="false" />
                            </Picker>
                        </View>
                        {errors.selectedValueAgregarFamiliar && touched.selectedValueAgregarFamiliar &&
                            <Text style={[Styles.errorText]}>{errors.selectedValueAgregarFamiliar}</Text>
                        }
                    </View>
                    
                </View><Text>{renderAgregarFamiliar(errors, touched, values, setFieldValue, handleBlur, handleChange)}</Text></>
            )

    }
    return (
        <Collapse style={{ alignItems: 'center' }}>
            <CollapseHeader >
                <View style={Styles.windowDocuments}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Información Familiar 
                        </Text>
                    </View>
                    <View style={{ marginRight: '1%' }}>
                        <Text style={[Styles.formFillFont, { color: '#8E8E8E' }]}>
                            >
                        </Text>
                    </View>
                </View >
            </CollapseHeader>

            <CollapseBody style={{ alignItems: 'center' }}>
                <Formik
                    initialValues={{
                        selectedValueAgregarFamiliar:'',
                        nombres: '',
                        apellidos: '',
                        sexo:'',
                        fecha_nacimiento:'',
                        id_parentesco:'',
                        trabaja_IBM:'',
                        tipo_documento:'',
                        documento:'',
                        nivel_educativo:'',
                        correo:'',
                        telefono:'',
                        pep: '',
                        hobbies:'',
                        deportes:'',
                        actividad_pep:''
                        
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        async function informacionFinancieraEmpleado() {
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
                                const response = await fetch(`http://localhost:3000/v1/informacion-familiar/${caso}`, options);
                                const respuesta = await response.json();
                                console.log(respuesta)
                                return respuesta
                            }
                            catch (error) { console.log(error) }
                        }

                        console.log("Informacion financiera")
                        console.log("IMPRIMIENDO " + id);
                        informacionFinancieraEmpleado();
                        console.log(values);
                    }}
                >
                    {({ handleSubmit, isValid, values, setFieldValue, errors, touched, handleChange, handleBlur }) => (
                        <>
                          
                            <Text>{Function(errors, touched, values, setFieldValue, handleBlur, handleChange)}</Text>
                            <View style={{ marginTop: '2%' }}>
                                <Button
                                    onPress={handleSubmit}
                                    title="Enviar"
                                    disabled={!isValid}
                                    color='#5099D2'
                                />
                            </View>
                            <View style={{marginLeft:'120%',width: '40%'}}>
                            <TouchableOpacity
                                onPress={handleButtonClick}
                                style={Styles.loginButton}
                            >
                                <Text style={Styles.logginButtonText}>Ver Familiares</Text>
                            </TouchableOpacity>
                            
                    </View>
                            {buttonClicked ? <TablaFamilia /> : null}
                        </>
                    )}
                </Formik>
                
            </CollapseBody>
        </Collapse>
        
    )
}