import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, ImageBackground, Button } from 'react-native';
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Styles } from '../styles/Styles';
import CustomInput from './CustomInput'
import { Formik, Form, Field, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';
import { id } from './PantallaRegistro'
import NumberFormat from 'react-number-format';
import { TextInputMask } from 'react-native-masked-text';
import Calendar_Field from './Calendar_Field';
import AsyncStorage from '@react-native-community/async-storage';


function formatNumber(number: number) {
    return new Intl.NumberFormat("ES-CO", {
        style: 'currency',
        currency: "COP"
    }).format(number)
}

const SignupSchema = Yup.object().shape({
    renta: Yup.string().required('x'),
    recursos_publicos: Yup.string().required('x'),
    pep: Yup.string().required('x'),
    familiar_pep: Yup.string().required('x'),
    actividad_otros_ingresos: Yup.string().required('x'),
    ciiu_otros_ingresos: Yup.number().min(1, 'No valido').max(5000, 'No valido').required('x'),
    ciudad_otros_ingresos: Yup.string().required('x'),
    ingresos_mensuales: Yup.string().required('x'),
    otros_ingresos: Yup.string().required('x'),
    egresos_mensuales: Yup.string().required('x'),
    bienes_activos: Yup.string().required('x'),
    deudas_pasivos: Yup.string().required('x'),
    operaciones_monedas: Yup.string().required('x'),
    cuentas_moneda: Yup.string().required('x'),
    reinsercion: Yup.string().required('x'),
    situacion_justicia: Yup.string().required('x'),

    actividad_pep: Yup.string().when('pep', {
        is: 'true',
        then: Yup.string().required('x'),
        //otherwise: Yup.string()
    }),
    parentesco: Yup.string().when('familiar_pep', {
        is: 'true',
        then: Yup.string().required('x')
    }),
    observaciones_familiar: Yup.string().when('familiar_pep', {
        is: 'true',
        then: Yup.string()
    }),
    operaciones: Yup.string().when('operaciones_monedas', {
        is: 'true',
        then: Yup.string().required('x')
    }),
    banco: Yup.string().when('cuentas_moneda', {
        is: 'true',
        then: Yup.string().required('x')
    }),
    moneda: Yup.string().when('cuentas_moneda', {
        is: 'true',
        then: Yup.string().required('x')
    }),
    pais: Yup.string().when('cuentas_moneda', {
        is: 'true',
        then: Yup.string().required('x')
    }),
    ciudad: Yup.string().when('cuentas_moneda', {
        is: 'true',
        then: Yup.string().required('x')
    }),
    detalle: Yup.string().when('situacion_justicia', {
        is: 'true',
        then: Yup.string().required('x')
    })


});


export const InformacionFinanciera = () => {

    const [pep, setPep] = useState("");
    const [familiar_pep, setFamiliar_pep] = useState("");
    const [operaciones_monedas, setOperaciones_monedas] = useState("");
    const [cuentas_moneda, setCuentas_moneda] = useState("");
    const [situacion_justicia, setSituacionJusticia] = useState("");
    const initialValues = {
        renta: '',
        recursos_publicos: '',
        pep: '',
        familiar_pep: '',
        actividad_otros_ingresos: '',
        ciiu_otros_ingresos: '',
        ciudad_otros_ingresos: '',
        ingresos_mensuales: '',
        otros_ingresos: '',
        egresos_mensuales: '',
        bienes_activos: '',
        deudas_pasivos: '',
        operaciones_monedas: '',
        cuentas_moneda: '',
        reinsercion: '',
        situacion_justicia: '',
        detalle: '',
        actividad_pep: '',
        parentesco: '',
        observaciones_familiar: '',
        operaciones: '',
        banco: '',
        moneda: '',
        pais: '',
        ciudad: ''
    };

    const [selectedValueCiudadColombia, setSelectedValueCiudadColombia] = useState(0);
    const [CiudadDetailsColombia, setCiudadDetailsColombia] = useState([]);

    useEffect(() => {
        getCiudadesColombia();
    }, []);

    const getCiudadesColombia = async () => {
        const token = await AsyncStorage.getItem('userToken');

        fetch("http://localhost:3000/get-cities-colombia", {

            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
        })
            .then((response) => response.json())
            .then((json) => setCiudadDetailsColombia(json))
            .catch((error) => console.error(error))
    };

    const renderCiudadesColombia = () => {
        return CiudadDetailsColombia.map((Ciudad, key) => {
            return <Picker.Item label={Ciudad.name} value={Ciudad.id} key={Ciudad.id} />
        })
    }

    const renderPEP = (errors: FormikErrors<{ detalle: string; reinsercion: string; situacion_justicia: string; operaciones_monedas: string; cuentas_moneda: string; deudas_pasivos: string; bienes_activos: string; egresos_mensuales: string; otros_ingresos: string; ingresos_mensuales: number; ciudad_otros_ingresos: string; actividad_pep: string; familiar_pep: string }>, touched: FormikTouched<{ detalle: string; reinsercion: string; situacion_justicia: string; operaciones_monedas: string; cuentas_moneda: string; deudas_pasivos: string; bienes_activos: string; egresos_mensuales: string; otros_ingresos: string; ingresos_mensuales: number; ciudad_otros_ingresos: string; actividad_pep: string; familiar_pep: string }>, values: { detalle: any; reinsercion: any; situacion_justicia: any; operaciones_monedas: any; cuentas_moneda: any; deudas_pasivos: any; bienes_activos: any; egresos_mensuales: any; otros_ingresos: any; ingresos_mensuales: any; ciudad_otros_ingresos: any; parentesco: any; observaciones_familiar: any; actividad_pep: any; familiar_pep: any }, setFieldValue: { (field: string, value: any, shouldValidate?: boolean | undefined): void; (arg0: string, arg1: any): void; }, handleBlur: any, handleChange: any) => {
        if (pep == 'true')
            return (
                <>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('0%'), width: wp('70%') }}>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text style={Styles.textForm}>Clase de actividad PEP:*</Text>
                            <View style={[(errors.actividad_pep && touched.actividad_pep) ? Styles.pickerError : Styles.picker]} >
                                <Picker
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={[{ width: '48%' }]}>
                            <Text style={Styles.textForm}>¿Usted es familiar de algun PEP?:*</Text>
                            <View style={[(errors.familiar_pep && touched.familiar_pep) ? Styles.pickerError : Styles.picker]} >
                                <Picker style={Styles.fieldForm}
                                    selectedValue={values.familiar_pep}
                                    onValueChange={itemValue => { setFamiliar_pep(itemValue); setFieldValue('familiar_pep', itemValue) }}
                                    onBlur={handleBlur('familiar_pep')}
                                >
                                    <Picker.Item label="Seleccione una opción" value="" />
                                    <Picker.Item label="Si" value="true" />
                                    <Picker.Item label="No" value="false" />
                                </Picker>
                            </View>
                            {errors.familiar_pep && touched.familiar_pep &&
                                <Text style={[Styles.errorText]}>{errors.familiar_pep}</Text>
                            }
                        </View>

                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text style={Styles.textForm}>Actividad económica otros ingresos:*</Text>
                            <Field style={Styles.fieldForm}
                                placeholder="Actividad económica otros ingresos"
                                component={CustomInput}
                                name="actividad_otros_ingresos"
                            />
                        </View>
                    </View>
                    <Text>{renderFamiliaPEP(errors, touched, values, handleBlur, handleChange)}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={Styles.textForm}>Código CIIU otros ingresos:*</Text>
                            <Field style={Styles.fieldForm}
                                placeholder="Código CIIU otros ingresos"
                                component={CustomInput}
                                name="ciiu_otros_ingresos"
                            />
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text style={Styles.textForm}>Ciudad - otras actividades económicas:*</Text>
                            <View style={[(errors.ciudad_otros_ingresos && touched.ciudad_otros_ingresos) ? Styles.pickerError : Styles.picker]} >
                                <Picker
                                    selectedValue={selectedValueCiudadColombia}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setSelectedValueCiudadColombia(itemValue);
                                    }
                                    }>
                                    {renderCiudadesColombia()}
                                </Picker>
                            </View>
                            {errors.ciudad_otros_ingresos && touched.ciudad_otros_ingresos &&
                                <Text style={[Styles.errorText]}>{errors.ciudad_otros_ingresos}</Text>
                            }
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={Styles.textForm}>Ingresos mensuales:*</Text>
                            <TextInputMask
                                style={[(errors.ingresos_mensuales && touched.ingresos_mensuales) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                                placeholder="$0"
                                onChangeText={handleChange('ingresos_mensuales')}
                                onBlur={handleBlur('ingresos_mensuales')}
                                value={values.ingresos_mensuales}
                                type={'money'}
                                options={{
                                    precision: 0,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: '$',
                                }}
                            />
                            {errors.ingresos_mensuales && touched.ingresos_mensuales &&
                                <Text style={[Styles.errorText]}>{errors.ingresos_mensuales}</Text>
                            }
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text style={Styles.textForm}>Otros ingresos:*</Text>
                            <TextInputMask
                                style={[(errors.otros_ingresos && touched.otros_ingresos) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                                placeholder="$0"
                                onChangeText={handleChange('otros_ingresos')}
                                onBlur={handleBlur('otros_ingresos')}
                                value={values.otros_ingresos}
                                type={'money'}
                                options={{
                                    precision: 0,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: '$',
                                }}
                            />
                            {errors.otros_ingresos && touched.otros_ingresos &&
                                <Text style={[Styles.errorText]}>{errors.otros_ingresos}</Text>
                            }
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={Styles.textForm}>Egresos mensuales:*</Text>
                            <TextInputMask
                                style={[(errors.egresos_mensuales && touched.egresos_mensuales) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                                placeholder="$0"
                                onChangeText={handleChange('egresos_mensuales')}
                                onBlur={handleBlur('egresos_mensuales')}
                                value={values.egresos_mensuales}
                                type={'money'}
                                options={{
                                    precision: 0,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: '$',
                                }}
                            />
                            {errors.egresos_mensuales && touched.egresos_mensuales &&
                                <Text style={[Styles.errorText]}>{errors.egresos_mensuales}</Text>
                            }
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text style={Styles.textForm}>Total bienes activos:*</Text>
                            <TextInputMask
                                style={[(errors.bienes_activos && touched.bienes_activos) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                                placeholder="$0"
                                onChangeText={handleChange('bienes_activos')}
                                onBlur={handleBlur('bienes_activos')}
                                value={values.bienes_activos}
                                type={'money'}
                                options={{
                                    precision: 0,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: '$',
                                }}
                            />
                            {errors.bienes_activos && touched.bienes_activos &&
                                <Text style={[Styles.errorText]}>{errors.bienes_activos}</Text>
                            }
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={Styles.textForm}>Total deudas pasivos:*</Text>
                            <TextInputMask
                                style={[(errors.deudas_pasivos && touched.deudas_pasivos) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                                placeholder="$0"
                                onChangeText={handleChange('deudas_pasivos')}
                                onBlur={handleBlur('deudas_pasivos')}
                                value={values.deudas_pasivos}
                                type={'money'}
                                options={{
                                    precision: 0,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: '$',
                                }}
                            />
                            {errors.deudas_pasivos && touched.deudas_pasivos &&
                                <Text style={[Styles.errorText]}>{errors.deudas_pasivos}</Text>
                            }
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text style={Styles.textForm}>Realiza operaciones en moneda extranjera y/o criptomodena:*</Text>
                            <View style={[(errors.operaciones_monedas && touched.operaciones_monedas) ? Styles.pickerError : Styles.picker]} >
                                <Picker style={Styles.fieldForm}
                                    selectedValue={values.operaciones_monedas}
                                    onValueChange={itemValue => { setOperaciones_monedas(itemValue); setFieldValue('operaciones_monedas', itemValue) }}
                                    onBlur={handleBlur('operaciones_monedas')}
                                >
                                    <Picker.Item label="Seleccione una opción" value="" />
                                    <Picker.Item label="Si" value="true" />
                                    <Picker.Item label="No" value="false" />
                                </Picker>
                            </View>
                            {errors.operaciones_monedas && touched.operaciones_monedas &&
                                <Text style={[Styles.errorText]}>{errors.operaciones_monedas}</Text>
                            }
                        </View>
                    </View>
                    <Text>{renderOperaciones(errors, touched, values, handleBlur, handleChange, setFieldValue)}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={Styles.textForm}>Posee cuentas en moneda extranjera:*</Text>
                            <View style={[(errors.cuentas_moneda && touched.cuentas_moneda) ? Styles.pickerError : Styles.picker]} >
                                <Picker style={Styles.fieldForm}
                                    selectedValue={values.cuentas_moneda}
                                    onValueChange={itemValue => { setCuentas_moneda(itemValue); setFieldValue('cuentas_moneda', itemValue) }}
                                    onBlur={handleBlur('cuentas_moneda')}
                                >
                                    <Picker.Item label="Seleccione una opción" value="" />
                                    <Picker.Item label="Si" value="true" />
                                    <Picker.Item label="No" value="false" />
                                </Picker>
                            </View>
                            {errors.cuentas_moneda && touched.cuentas_moneda &&
                                <Text style={[Styles.errorText]}>{errors.cuentas_moneda}</Text>
                            }
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text style={Styles.textForm}>Se acogió usted a un proceso de reinserción:*</Text>
                            <View style={[(errors.reinsercion && touched.reinsercion) ? Styles.pickerError : Styles.picker]} >
                                <Picker style={Styles.fieldForm}
                                    selectedValue={values.reinsercion}
                                    onValueChange={itemValue => setFieldValue('reinsercion', itemValue)}
                                    onBlur={handleBlur('reinsercion')}
                                >
                                    <Picker.Item label="Seleccione una opción" value="" />
                                    <Picker.Item label="Si" value="true" />
                                    <Picker.Item label="No" value="false" />
                                </Picker>
                            </View>
                            {errors.reinsercion && touched.reinsercion &&
                                <Text style={[Styles.errorText]}>{errors.reinsercion}</Text>
                            }
                        </View>
                    </View>
                    <Text>{renderCuentas()}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={Styles.textForm}>¿Usted ha estado inmerso(a) en alguna situación con la justicia?:*</Text>
                            <View style={[(errors.situacion_justicia && touched.situacion_justicia) ? Styles.pickerError : Styles.picker]} >
                                <Picker style={Styles.fieldForm}
                                    selectedValue={values.situacion_justicia}
                                    onValueChange={itemValue => { setSituacionJusticia(itemValue); setFieldValue('situacion_justicia', itemValue) }}
                                    onBlur={handleBlur('situacion_justicia')}
                                >
                                    <Picker.Item label="Seleccione una opción" value="" />
                                    <Picker.Item label="Si" value="true" />
                                    <Picker.Item label="No" value="false" />
                                </Picker>
                            </View>
                            {errors.situacion_justicia && touched.situacion_justicia &&
                                <Text style={[Styles.errorText]}>{errors.situacion_justicia}</Text>
                            }
                        </View>
                    </View>
                    <Text>{renderSituacionJusticia(errors, touched, values, handleBlur, handleChange)}</Text>
                </>
            )
        else return (
            <>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('0%'), width: wp('70%') }}>
                    <View style={[{ marginLeft: '4%', width: '48%' }]}>
                        <Text style={Styles.textForm}>¿Usted es familiar de algun PEP?:*</Text>
                        <View style={[(errors.familiar_pep && touched.familiar_pep) ? Styles.pickerError : Styles.picker]} >
                            <Picker style={Styles.fieldForm}
                                selectedValue={values.familiar_pep}
                                onValueChange={itemValue => { setFamiliar_pep(itemValue); setFieldValue('familiar_pep', itemValue) }}
                                onBlur={handleBlur('familiar_pep')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Si" value="true" />
                                <Picker.Item label="No" value="false" />
                            </Picker>
                        </View>
                        {errors.familiar_pep && touched.familiar_pep &&
                            <Text style={[Styles.errorText]}>{errors.familiar_pep}</Text>
                        }
                    </View>
                </View>
                <Text>{renderFamiliaPEP(errors, touched, values, handleBlur, handleChange)}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                    <View style={{ width: '48%' }}>
                        <Text style={Styles.textForm}>Actividad económica otros ingresos:*</Text>
                        <Field style={Styles.fieldForm}
                            placeholder="Actividad económica otros ingresos"
                            component={CustomInput}
                            name="actividad_otros_ingresos"
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text style={Styles.textForm}>Código CIIU otros ingresos:* </Text>
                        <Field style={Styles.fieldForm}
                            placeholder="Código CIIU otros ingresos"
                            component={CustomInput}
                            name="ciiu_otros_ingresos"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                    <View style={{ width: '48%' }}>
                        <Text style={Styles.textForm}>Ciudad - otras actividades económicas:*</Text>
                        <View style={[(errors.ciudad_otros_ingresos && touched.ciudad_otros_ingresos) ? Styles.pickerError : Styles.picker]} >
                        <Picker
                                    selectedValue={selectedValueCiudadColombia}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setSelectedValueCiudadColombia(itemValue);
                                    }
                                    }>
                                    {renderCiudadesColombia()}
                                </Picker>
                        </View>
                        {errors.ciudad_otros_ingresos && touched.ciudad_otros_ingresos &&
                            <Text style={[Styles.errorText]}>{errors.ciudad_otros_ingresos}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text style={Styles.textForm}>Ingresos mensuales:*</Text>
                        <TextInputMask
                            style={[(errors.ingresos_mensuales && touched.ingresos_mensuales) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                            placeholder="$0"
                            onChangeText={handleChange('ingresos_mensuales')}
                            onBlur={handleBlur('ingresos_mensuales')}
                            value={values.ingresos_mensuales}
                            type={'money'}
                            options={{
                                precision: 0,
                                separator: ',',
                                delimiter: '.',
                                unit: '$',
                            }}
                        />
                        {errors.ingresos_mensuales && touched.ingresos_mensuales &&
                            <Text style={[Styles.errorText]}>{errors.ingresos_mensuales}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                    <View style={{ width: '48%' }}>
                        <Text style={Styles.textForm}>Otros ingresos:*</Text>
                        <TextInputMask
                            style={[(errors.otros_ingresos && touched.otros_ingresos) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                            placeholder="$0"
                            onChangeText={handleChange('otros_ingresos')}
                            onBlur={handleBlur('otros_ingresos')}
                            value={values.otros_ingresos}
                            type={'money'}
                            options={{
                                precision: 0,
                                separator: ',',
                                delimiter: '.',
                                unit: '$',
                            }}
                        />
                        {errors.otros_ingresos && touched.otros_ingresos &&
                            <Text style={[Styles.errorText]}>{errors.otros_ingresos}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text style={Styles.textForm}>Egresos mensuales:*</Text>
                        <TextInputMask
                            style={[(errors.egresos_mensuales && touched.egresos_mensuales) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                            placeholder="$0"
                            onChangeText={handleChange('egresos_mensuales')}
                            onBlur={handleBlur('egresos_mensuales')}
                            value={values.egresos_mensuales}
                            type={'money'}
                            options={{
                                precision: 0,
                                separator: ',',
                                delimiter: '.',
                                unit: '$',
                            }}
                        />
                        {errors.egresos_mensuales && touched.egresos_mensuales &&
                            <Text style={[Styles.errorText]}>{errors.egresos_mensuales}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                    <View style={{ width: '48%' }}>
                        <Text style={Styles.textForm}>Total bienes activos:*</Text>
                        <TextInputMask
                            style={[(errors.bienes_activos && touched.bienes_activos) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                            placeholder="$0"
                            onChangeText={handleChange('bienes_activos')}
                            onBlur={handleBlur('bienes_activos')}
                            value={values.bienes_activos}
                            type={'money'}
                            options={{
                                precision: 0,
                                separator: ',',
                                delimiter: '.',
                                unit: '$',
                            }}
                        />
                        {errors.bienes_activos && touched.bienes_activos &&
                            <Text style={[Styles.errorText]}>{errors.bienes_activos}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text style={Styles.textForm}>Total deudas pasivos:*</Text>
                        <TextInputMask
                            style={[(errors.deudas_pasivos && touched.deudas_pasivos) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                            placeholder="$0"
                            onChangeText={handleChange('deudas_pasivos')}
                            onBlur={handleBlur('deudas_pasivos')}
                            value={values.deudas_pasivos}
                            type={'money'}
                            options={{
                                precision: 0,
                                separator: ',',
                                delimiter: '.',
                                unit: '$',
                            }}
                        />
                        {errors.deudas_pasivos && touched.deudas_pasivos &&
                            <Text style={[Styles.errorText]}>{errors.deudas_pasivos}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                    <View style={{ width: '48%' }}>
                        <Text style={Styles.textForm}>Realiza operaciones en moneda extranjera y/o criptomodena:*</Text>
                        <View style={[(errors.operaciones_monedas && touched.operaciones_monedas) ? Styles.pickerError : Styles.picker]} >
                            <Picker style={Styles.fieldForm}
                                selectedValue={values.operaciones_monedas}
                                onValueChange={itemValue => { setOperaciones_monedas(itemValue); setFieldValue('operaciones_monedas', itemValue) }}
                                onBlur={handleBlur('operaciones_monedas')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Si" value="true" />
                                <Picker.Item label="No" value="false" />
                            </Picker>
                        </View>
                        {errors.operaciones_monedas && touched.operaciones_monedas &&
                            <Text style={[Styles.errorText]}>{errors.operaciones_monedas}</Text>
                        }
                    </View>

                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text style={Styles.textForm}>Posee cuentas en moneda extranjera:*</Text>
                        <View style={[(errors.cuentas_moneda && touched.cuentas_moneda) ? Styles.pickerError : Styles.picker]} >
                            <Picker style={Styles.fieldForm}
                                selectedValue={values.cuentas_moneda}
                                onValueChange={itemValue => { setCuentas_moneda(itemValue); setFieldValue('cuentas_moneda', itemValue) }}
                                onBlur={handleBlur('cuentas_moneda')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Si" value="true" />
                                <Picker.Item label="No" value="false" />
                            </Picker>
                        </View>
                        {errors.cuentas_moneda && touched.cuentas_moneda &&
                            <Text style={[Styles.errorText]}>{errors.cuentas_moneda}</Text>
                        }
                    </View>
                </View>
                <Text>{renderOperaciones(errors, touched, values, handleBlur, handleChange, setFieldValue)}</Text>

                <Text>{renderCuentas()}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                    <View style={{ width: '48%' }}>
                        <Text style={Styles.textForm}>Se acogió usted a un proceso de reinserción:*</Text>
                        <View style={[(errors.reinsercion && touched.reinsercion) ? Styles.pickerError : Styles.picker]} >
                            <Picker style={Styles.fieldForm}
                                selectedValue={values.reinsercion}
                                onValueChange={itemValue => setFieldValue('reinsercion', itemValue)}
                                onBlur={handleBlur('reinsercion')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Si" value="true" />
                                <Picker.Item label="No" value="false" />
                            </Picker>
                        </View>
                        {errors.reinsercion && touched.reinsercion &&
                            <Text style={[Styles.errorText]}>{errors.reinsercion}</Text>
                        }
                    </View>

                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text style={Styles.textForm}>¿Usted ha estado inmerso(a) en alguna situación con la justicia?:*</Text>
                        <View style={[(errors.situacion_justicia && touched.situacion_justicia) ? Styles.pickerError : Styles.picker]} >
                            <Picker style={Styles.fieldForm}
                                selectedValue={values.situacion_justicia}
                                onValueChange={itemValue => { setSituacionJusticia(itemValue); setFieldValue('situacion_justicia', itemValue) }}
                                onBlur={handleBlur('situacion_justicia')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Si" value="true" />
                                <Picker.Item label="No" value="false" />
                            </Picker>
                        </View>
                        {errors.situacion_justicia && touched.situacion_justicia &&
                            <Text style={[Styles.errorText]}>{errors.situacion_justicia}</Text>
                        }
                    </View>
                </View>
                <Text>{renderSituacionJusticia(errors, touched, values, handleBlur, handleChange)}</Text>


            </>
        )
    }

    const renderFamiliaPEP = (errors: FormikErrors<{ ciudad_otros_ingresos: string; actividad_pep: string; familiar_pep: string; parentesco: string; observaciones_familiar: string; }>, touched: FormikTouched<{ ciudad_otros_ingresos: string; actividad_pep: string; familiar_pep: string; parentesco: string; observaciones_familiar: string; }>, values: { ciudad_otros_ingresos: any; actividad_pep: any; familiar_pep: any; parentesco: any; observaciones_familiar: any; }, handleBlur: any, handleChange: any) => {
        if (familiar_pep == 'true')
            return (
                <View style={[pep ? null : { marginTop: '4%', marginLeft: '-52%' }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={Styles.textForm}>Indicar parentesco:*</Text>
                            <Field
                                placeholder="Indicar Parentesco"
                                component={CustomInput}
                                name="parentesco"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '100%' }}>
                            <Text style={Styles.textForm}>Observaciones:</Text>
                            <TextInput
                                style={[(errors.observaciones_familiar && touched.observaciones_familiar) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                                placeholder="Añadir Texto"
                                onChangeText={handleChange('observaciones_familiar')}
                                onBlur={handleBlur('observaciones_familiar')}
                                value={values.observaciones_familiar}
                            />
                        </View>
                        {errors.observaciones_familiar && touched.observaciones_familiar &&
                            <Text style={[Styles.errorText]}>{errors.observaciones_familiar}</Text>
                        }
                    </View>
                </View>
            )
        else return null
    }

    const renderOperaciones = (errors: FormikErrors<{ detalle: string; reinsercion: string; situacion_justicia: string; operaciones_monedas: string; cuentas_moneda: string; }>, touched: FormikTouched<{ detalle: string; reinsercion: string; situacion_justicia: string; operaciones_monedas: string; cuentas_moneda: string }>, values: { detalle: any; reinsercion: any; situacion_justicia: any; operaciones_monedas: any; cuentas_moneda: any; }, setFieldValue: { (field: string, value: any, shouldValidate?: boolean | undefined): void; (arg0: string, arg1: any): void; }, handleBlur: any, handleChange: any) => {
        if (operaciones_monedas == 'true')
            return (
                <View >
                    <View style={[pep ? { flexDirection: 'row', justifyContent: 'space-between', width: wp('70%') } : { flexDirection: 'row', justifyContent: 'space-between', width: wp('70%'), marginLeft: '-52%' }]}>
                        <View style={[pep ? { width: '48%', marginLeft: '-48%' } : { width: '48%', marginLeft: '4%' }]}>
                            <Text style={Styles.textForm}>Cuales:*</Text>
                            <Field style={Styles.fieldForm}
                                placeholder="Cuales"
                                component={CustomInput}
                                name="operaciones"
                            />
                        </View>
                    </View>
                </View>
            )
        else return null
    }

    const renderCuentas = () => {
        if (cuentas_moneda == 'true')
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={Styles.textForm}>Banco:*</Text>
                            <Field style={Styles.fieldForm}
                                placeholder="Banco"
                                component={CustomInput}
                                name="banco"
                            />
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text style={Styles.textForm}>Moneda:*</Text>
                            <Field style={Styles.fieldForm}
                                placeholder="Moneda"
                                component={CustomInput}
                                name="moneda"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                        <View style={{ width: '48%' }}>
                            <Text style={Styles.textForm}>País:*</Text>
                            <Field style={Styles.fieldForm}
                                placeholder="Pais"
                                component={CustomInput}
                                name="pais"
                            />
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text style={Styles.textForm}>Ciudad:*</Text>
                            <Picker
                                    selectedValue={selectedValueCiudadColombia}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setSelectedValueCiudadColombia(itemValue);
                                    }
                                    }>
                                    {renderCiudadesColombia()}
                                </Picker>
                        </View>
                    </View>
                </View>
            )
        else return null
    }

    const renderSituacionJusticia = (errors: FormikErrors<{ detalle: string; }>, touched: FormikTouched<{ detalle: string; }>, values: { detalle: any; }, handleBlur: any, handleChange: any) => {
        if (situacion_justicia == 'true')
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%'), marginLeft: '-48%' }}>
                    <View style={{ width: '100%' }}>
                        <Text style={Styles.textForm}>Detalle:</Text>
                        <TextInput
                            style={[(errors.detalle && touched.detalle) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                            onChangeText={handleChange('detalle')}
                            onBlur={handleBlur('detalle')}
                            value={values.detalle}
                            placeholder="Si ha estado inmerso(a) en alguna situación con la justicia indique el detalle, de lo contrario ponga N/A"
                            multiline={true}
                        />
                    </View>
                    {errors.detalle && touched.detalle &&
                        <Text style={[Styles.errorText]}>{errors.detalle}</Text>
                    }
                </View>
            )
        else return null
    }



    return (
        <Collapse style={{ alignItems: 'center' }}>
            <CollapseHeader >
                <View style={Styles.windowDocuments}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Información Financiera
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
                    initialValues={initialValues}
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
                                const response = await fetch(`http://localhost:3000/v1/informacion-financiera/${caso}`, options);
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
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '100%' }}>
                                    <Text style={Styles.textForm}>Para tener en cuenta:</Text>
                                    <TextInput
                                        style={{ height: hp('20%'), backgroundColor: '#F3F3F3', justifyContent: 'flex-start', marginTop: '1%' }}
                                        placeholder=" El código CIIU debe tomarlo de su RUT. 
                                        PEP: Personas expuestas política y públicamente"
                                        editable={false}
                                        multiline={true}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Declara Renta:*</Text>
                                    <View style={[(errors.renta && touched.renta) ? Styles.pickerError : Styles.picker]} >
                                        <Picker
                                            selectedValue={values.renta}
                                            onValueChange={itemValue => setFieldValue('renta', itemValue)}
                                            onBlur={handleBlur('renta')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="true" />
                                            <Picker.Item label="No" value="false" />
                                        </Picker>
                                    </View>
                                    {errors.renta && touched.renta &&
                                        <Text style={[Styles.errorText]}>{errors.renta}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Administra o administró recursos públicos:*</Text>
                                    <View style={[(errors.recursos_publicos && touched.recursos_publicos) ? Styles.pickerError : Styles.picker]} >
                                        <Picker
                                            selectedValue={values.recursos_publicos}
                                            onValueChange={itemValue => setFieldValue('recursos_publicos', itemValue)}
                                            onBlur={handleBlur('recursos_publicos')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="true" />
                                            <Picker.Item label="No" value="false" />
                                        </Picker>
                                    </View>
                                    {errors.recursos_publicos && touched.recursos_publicos &&
                                        <Text style={[Styles.errorText]}>{errors.recursos_publicos}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Es PEP:*</Text>
                                    <View style={[(errors.pep && touched.pep) ? Styles.pickerError : Styles.picker]} >
                                        <Picker
                                            selectedValue={values.pep}
                                            onValueChange={itemValue => { setPep(itemValue); setFieldValue('pep', itemValue) }}
                                            onBlur={handleBlur('pep')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="true" />
                                            <Picker.Item label="No" value="false" />
                                        </Picker>
                                    </View>
                                    {errors.pep && touched.pep &&
                                        <Text style={[Styles.errorText]}>{errors.pep}</Text>
                                    }
                                </View>
                                <Text>{renderPEP(errors, touched, values, setFieldValue, handleBlur, handleChange)}</Text>
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
