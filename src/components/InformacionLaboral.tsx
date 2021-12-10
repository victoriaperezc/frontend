import React, { Component, useRef, useState, useEffect } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Styles } from '../styles/Styles';
import CustomInput from './CustomInput'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextInputMask } from 'react-native-masked-text'

import { id } from './PantallaRegistro'
import Calendar_Field from './Calendar_Field'

import AsyncStorage from '@react-native-community/async-storage';

const SignupSchema = Yup.object().shape({
    nomina_id: Yup.string().required('x'),
    sucursal: Yup.string().required('x'),
    tipo_direccion: Yup.string().required('x'),
    num1: Yup.string().required('Campo requerido').matches(/^[a-zA-Z0-9]+$/, 'No caracteres especiales'),
    num2: Yup.string().required('Campo requerido').matches(/^[a-zA-Z0-9]+$/, 'No caracteres especiales'),
    num3: Yup.string().required('Campo requerido').matches(/^[a-zA-Z0-9]+$/, 'No caracteres especiales'),
    departamento: Yup.string().required('x'),
    municipio: Yup.string().required('x'),
    codigo_empleado: Yup.string().min(5, 'No valido').required('x'),
    cargo: Yup.string().min(5, 'No valido').required('x'),
    sueldo_id: Yup.string().required('x'),
    sueldoPesos: Yup.string().required('x'),
    telefono: Yup.string().matches(/^[0-9]+$/, "Solo números").min(7, 'Teléfono no valido').max(15, 'Teléfono no valido').required('x'),
    correo: Yup.string().email('Correo no valido').required('x'),
    fecha_ingreso: Yup.string().required('x'),
    tipo_contrato: Yup.string().required('x'),
    fecha_contrato: Yup.string().required('x'),
    nuevo_ingreso: Yup.string(),
    numero_cuenta: Yup.number().required('x'),
    tipo_cuenta: Yup.string().required('x'),
    banco: Yup.string().required('x'),
    numero_cuenta2: Yup.number(),
    tipo_cuenta2: Yup.string(),
    banco2: Yup.string(),
    cuotas_inscripcion: Yup.string().required('x'),
    porcentaje_ordinaria: Yup.string().required('x'),
    valor_inscripcion: Yup.string().required('x'),
    valor_ordinaria: Yup.string().required('x'),
    valor_voluntario: Yup.string(),
    valor_vacaciones: Yup.string(),
    valor_educativo: Yup.string(),

    anterior_fecha_ingreso: Yup.string().when('nuevo_ingreso', {
        is: 'true',
        then: Yup.string()
    }),
    fecha_salida: Yup.string().when('nuevo_ingreso', {
        is: 'true',
        then: Yup.string()
    }),

    //porcentajeOk: Yup.string().required()

});



export const InformacionLaboral = () => {

    const [departamento, setSelectedValueDepto] = useState("");
    const [nuevo_ingreso, setselectedValueFondoYaHabiaEstado] = useState("");
    const porcentajeInscripcion: number = 10;

    const [selectedValueDepartamentoColombia, setSelectedValueDepartamentoColombia] = useState(0);
    const [DepartamentoDetailsColombia, setDepartamentoDetailsColombia] = useState([]);

    const [selectedValueCiudadColombia, setSelectedValueCiudadColombia] = useState(0);
    const [CiudadDetailsColombia, setCiudadDetailsColombia] = useState([]);

    let idDepartamentoColombia = 0;

    useEffect(() => {
        getDepartamentosColombia();
    }, []);

    const getDepartamentosColombia = async () => {
        console.log("Pais:" + id);
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

    const renderFondoYaHabiaEstado = () => {
        if (nuevo_ingreso == 'true')
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text style={Styles.textForm}>Fecha de ingreso anterior:</Text>
                        <Field style={Styles.fieldForm}
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="anterior_fecha_ingreso"
                            placeholder="Seleccione año-mes-día"
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text style={Styles.textForm}>Fecha de retiro:</Text>
                        <Field style={Styles.fieldForm}
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="fecha_salida"
                            placeholder="Seleccione año-mes-día"
                        />
                    </View>
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
                            Información Laboral
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
                        nomina_id: '',
                        sucursal: '',
                        tipo_direccion: '',
                        num1: '',
                        num2: '',
                        num3: '',
                        departamento: '',
                        municipio: '',
                        codigo_empleado: '',
                        cargo: '',
                        sueldo_id: '',
                        sueldo: '',
                        sueldoPesos: '',
                        telefono: '',
                        correo: '',
                        fecha_ingreso: '',
                        tipo_contrato: '',
                        fecha_contrato: '',
                        nuevo_ingreso: '',
                        anterior_fecha_ingreso: '',
                        fecha_salida: '',
                        numero_cuenta: '',
                        tipo_cuenta: '',
                        banco: '',
                        numero_cuenta2: '',
                        tipo_cuenta2: '',
                        banco2: '',
                        cuotas_inscripcion: '',
                        porcentaje_inscripcion: '',
                        valor_inscripcion: '',
                        valor_cuota_inscripcion: '',
                        porcentaje_ordinaria: '',
                        valor_ordinaria: '',
                        valor_voluntario: '00',
                        valor_vacaciones: '00',
                        valor_educativo: '00',
                        porcentajeOk: ''

                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        async function informacionLaboralEmpleado() {
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
                                const response = await fetch(`http://localhost:3000/v1/informacion-laboral/${caso}`, options);
                                const respuesta = await response.json();
                                console.log(respuesta)
                                return respuesta
                            }
                            catch (error) { console.log(error) }
                        }

                        console.log("Informacion laboral")
                        console.log("IMPRIMIENDO " + id);
                        informacionLaboralEmpleado();
                        console.log(values);
                    }}
                >
                    {({ handleSubmit, isValid, values, setFieldValue, errors, touched, handleChange, handleBlur }) => (
                        <>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Nómina a la que pertenece: *</Text>
                                    <View style={[(errors.nomina_id && touched.nomina_id) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.nomina_id}
                                            onValueChange={itemValue => setFieldValue('nomina_id', itemValue)}
                                            onBlur={handleBlur('nomina_id')}
                                        >


                                            <Picker.Item label="Seleccione una opción:" value="" />
                                            <Picker.Item label="FEIBM" value="1" />
                                            <Picker.Item label="TREK" value="2" />
                                            <Picker.Item label="IBM" value="3" />
                                            <Picker.Item label="Kyndryl" value="4" />
                                        </Picker>
                                    </View>
                                    {errors.nomina_id && touched.nomina_id &&
                                        <Text style={[Styles.errorText]}>{errors.nomina_id}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Sucursal:*</Text>
                                    <View style={[(errors.sucursal && touched.sucursal) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.sucursal}
                                            onValueChange={itemValue => setFieldValue('sucursal', itemValue)}
                                            onBlur={handleBlur('sucursal')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="" fontFamily="WorkSans" color="#red" />
                                            <Picker.Item label="Bogotá" value="1" />
                                            <Picker.Item label="Medellín" value="2" />
                                            <Picker.Item label="Cali" value="3" />
                                            <Picker.Item label="Barranquilla" value="4" />
                                            <Picker.Item label="Bucaramanga" value="5" />
                                            <Picker.Item label="Dosquebradas" value="6" />
                                            <Picker.Item label="Cucuta" value="7" />
                                            <Picker.Item label="Pasto" value="8" />
                                            <Picker.Item label="Ibague" value="9" />
                                            <Picker.Item label="Neiva" value="10" />
                                            <Picker.Item label="Rioacha" value="11" />
                                            <Picker.Item label="Villavicencio" value="12" />
                                            <Picker.Item label="Corozal" value="13" />
                                            <Picker.Item label="Sogamoso" value="14" />
                                            <Picker.Item label="Valledupar" value="15" />
                                            <Picker.Item label="Popayan" value="16" />
                                            <Picker.Item label="Girardot" value="17" />
                                            <Picker.Item label="Santa Marta" value="18" />
                                            <Picker.Item label="Cartagena" value="19" />
                                            <Picker.Item label="Armenia" value="20" />
                                            <Picker.Item label="Pereira" value="21" />
                                        </Picker>
                                    </View>
                                    {errors.sucursal && touched.sucursal &&
                                        <Text style={[Styles.errorText]}>{errors.sucursal}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Dirección de trabajo:*</Text>
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
                                    <TextInput
                                        style={[(errors.num1 && touched.num1) ? Styles.errorInputDireccion : Styles.textInputDireccion]}
                                        placeholder=""
                                        //name='num1'
                                        onChangeText={handleChange('num1')}
                                        onBlur={handleBlur('num1')}
                                        value={values.num1}
                                    />

                                    <Text style={{ marginTop: '0.5%' }}>#</Text>
                                    <TextInput
                                        style={[(errors.num2 && touched.num2) ? Styles.errorInputDireccion : Styles.textInputDireccion]}
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
                                    <Text style={Styles.textForm}>Departamento:*</Text>
                                    <View style={[(errors.departamento && touched.departamento) ? Styles.pickerError : Styles.picker]} >
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
                                    {errors.departamento && touched.departamento &&
                                        <Text style={[Styles.errorText]}>{errors.departamento}</Text>
                                    }
                                </View>

                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Ciudad/Municipio:*</Text>
                                    <View style={[(errors.municipio && touched.municipio) ? Styles.pickerError : Styles.picker]} >
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
                                {errors.municipio && touched.municipio &&
                                    <Text style={[Styles.errorText]}>{errors.municipio}</Text>
                                }

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Código de empleado:*</Text>
                                    <Field style={Styles.fieldForm}
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="codigo_empleado"
                                        placeholder="Ingrese su código de empleado"

                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Cargo:</Text>
                                    <Field
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="cargo"
                                        placeholder="Ingrese el cargo que desempeñe"
                                    />
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Tipo de sueldo:*</Text>
                                    <View style={[(errors.sueldo_id && touched.sueldo_id) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.sueldo_id}
                                            onValueChange={itemValue => setFieldValue('sueldo_id', itemValue)}
                                            onBlur={handleBlur('sueldo_id')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="" />
                                            <Picker.Item label="Normal" value="1" />
                                            <Picker.Item label="Integral" value="2" />
                                        </Picker>
                                    </View>
                                    {errors.sueldo_id && touched.sueldo_id &&
                                        <Text style={[Styles.errorText]}>{errors.sueldo_id}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Sueldo:*</Text>
                                    <TextInputMask
                                        style={[(errors.sueldoPesos && touched.sueldoPesos) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                                        placeholder="$0"
                                        onChangeText={handleChange('sueldoPesos')}
                                        onBlur={handleBlur('sueldoPesos')}
                                        value={values.sueldoPesos}
                                        type={'money'}
                                        options={{
                                            precision: 0,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: '$',
                                        }}
                                    />
                                    {errors.sueldoPesos && touched.sueldoPesos &&
                                        <Text style={[Styles.errorText]}>{errors.sueldoPesos}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Teléfono/celular corporativo:*</Text>
                                    <Field
                                        placeholder="Ingrese teléfono-ext o celular corporativo"
                                        component={CustomInput}
                                        name="telefono"
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Correo corporativo:*</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder="Ingrese su dirección de correo electrónico corporativo"
                                        component={CustomInput}
                                        name="correo"
                                    />
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>

                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Fecha de ingreso a IBM:</Text>

                                    <Calendar_Field />

                                    {errors.tipo_contrato && touched.tipo_contrato &&
                                        <Text style={[Styles.errorText]}>{errors.tipo_contrato}</Text>
                                    }

                                </View>



                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Tipo de contrato:*</Text>
                                    <View style={[(errors.tipo_contrato && touched.tipo_contrato) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.tipo_contrato}
                                            onValueChange={itemValue => setFieldValue('tipo_contrato', itemValue)}
                                            onBlur={handleBlur('tipo_contrato')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="" />
                                            <Picker.Item label="Fijo" value="1" />
                                            <Picker.Item label="Indefinido" value="2" />
                                        </Picker>
                                    </View>
                                    {errors.tipo_contrato && touched.tipo_contrato &&
                                        <Text style={[Styles.errorText]}>{errors.tipo_contrato}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>

                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Fecha fin del contrato:</Text>

                                    <Calendar_Field />

                                </View>

                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>¿Ya había pertenecido al fondo?:</Text>
                                    <View style={[(errors.nuevo_ingreso && touched.nuevo_ingreso) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.nuevo_ingreso}
                                            onValueChange={itemValue => { setselectedValueFondoYaHabiaEstado(itemValue); setFieldValue('nuevo_ingreso', itemValue) }}
                                            onBlur={handleBlur('nuevo_ingreso')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="" />
                                            <Picker.Item label="Sí" value="true" />
                                            <Picker.Item label="No" value="false" />
                                        </Picker>
                                    </View>
                                    {errors.nuevo_ingreso && touched.nuevo_ingreso &&
                                        <Text style={[Styles.errorText]}>{errors.nuevo_ingreso}</Text>
                                    }
                                </View>
                            </View>
                            <Text>{renderFondoYaHabiaEstado()}</Text>
                            <View style={Styles.windowDocuments}>
                                <Text style={{ marginLeft: '40%', color: '#2C698D', textAlign: 'center' }}>
                                    Información Bancaria
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '31%' }}>
                                    <Text style={Styles.textForm}>Número de cuenta 1:*</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder="Ingrese su número de cuenta bancaria"
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="numero_cuenta"
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '31%' }}>
                                    <Text style={Styles.textForm}>Tipo de cuenta:*</Text>
                                    <View style={[(errors.tipo_cuenta && touched.tipo_cuenta) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.tipo_cuenta}
                                            onValueChange={itemValue => setFieldValue('tipo_cuenta', itemValue)}
                                            onBlur={handleBlur('tipo_cuenta')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="" />
                                            <Picker.Item label="Ahorro" value="1" />
                                            <Picker.Item label="Corriente" value="2" />
                                        </Picker>
                                    </View>
                                    {errors.tipo_cuenta && touched.tipo_cuenta &&
                                        <Text style={[Styles.errorText]}>{errors.tipo_cuenta}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '30%' }}>
                                    <Text style={Styles.textForm}>Banco:*</Text>
                                    <View style={[(errors.banco && touched.banco) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.banco}
                                            onValueChange={itemValue => setFieldValue('banco', itemValue)}
                                            onBlur={handleBlur('banco')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="" />
                                            <Picker.Item label="Bancolombia" value="1" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Davivienda" value="3" />
                                            <Picker.Item label="BBVA" value="4" />
                                            <Picker.Item label="Banco de occidente" value="5" />
                                            <Picker.Item label="Banco Itaú" value="6" />
                                            <Picker.Item label="Banco Agrario" value="7" />
                                            <Picker.Item label="Banco d" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                        </Picker>
                                    </View>
                                    {errors.banco && touched.banco &&
                                        <Text style={[Styles.errorText]}>{errors.banco}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '31%' }}>
                                    <Text style={Styles.textForm}>Número de cuenta 2:</Text>
                                    <Field style={Styles.fieldForm}
                                        placeholder="Ingrese su número de cuenta bancaria"
                                        component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                                        name="numero_cuenta2"
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '31%' }}>
                                    <Text style={Styles.textForm}>Tipo de cuenta:</Text>
                                    <View style={[(errors.tipo_cuenta2 && touched.tipo_cuenta2) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.tipo_cuenta2}
                                            onValueChange={itemValue => setFieldValue('tipo_cuenta2', itemValue)}
                                            onBlur={handleBlur('tipo_cuenta2')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="" />
                                            <Picker.Item label="Ahorro" value="1" />
                                            <Picker.Item label="Corriente" value="2" />
                                        </Picker>
                                    </View>
                                    {errors.tipo_cuenta2 && touched.tipo_cuenta2 &&
                                        <Text style={[Styles.errorText]}>{errors.tipo_cuenta2}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '30%' }}>
                                    <Text style={Styles.textForm}>Banco:</Text>
                                    <View style={[(errors.banco2 && touched.banco2) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.banco2}
                                            onValueChange={itemValue => setFieldValue('banco2', itemValue)}
                                            onBlur={handleBlur('banco2')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="" />
                                            <Picker.Item label="Bancolombia" value="1" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Davivienda" value="3" />
                                            <Picker.Item label="BBVA" value="4" />
                                            <Picker.Item label="Banco de occidente" value="5" />
                                            <Picker.Item label="Banco Itaú" value="6" />
                                            <Picker.Item label="Banco Agrario" value="7" />
                                            <Picker.Item label="Banco d" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                            <Picker.Item label="Banco de Bogotá" value="2" />
                                        </Picker>
                                    </View>
                                    {errors.banco2 && touched.banco2 &&
                                        <Text style={[Styles.errorText]}>{errors.banco2}</Text>
                                    }
                                </View>
                            </View>
                            <View style={Styles.windowDocuments}>
                                <Text style={{ marginLeft: '41%', color: '#2C698D', textAlign: 'center' }}>
                                    Aportes y Ahorros
                                </Text>
                            </View>
                            <Text style={{ marginTop: '1%', alignSelf: 'flex-start' }} >31A - Cuota de inscripción</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '22%' }}>
                                    <Text style={Styles.textForm}>Número de cuotas:*</Text>
                                    <View style={[(errors.cuotas_inscripcion && touched.cuotas_inscripcion) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.cuotas_inscripcion}
                                            onValueChange={itemValue => setFieldValue('cuotas_inscripcion', itemValue)}
                                            onBlur={handleBlur('cuotas_inscripcion')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="" />
                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="2" value="2" />
                                            <Picker.Item label="3" value="3" />
                                            <Picker.Item label="4" value="4" />
                                            <Picker.Item label="5" value="5" />
                                            <Picker.Item label="6" value="6" />
                                        </Picker>
                                    </View>
                                    {errors.cuotas_inscripcion && touched.cuotas_inscripcion &&
                                        <Text style={[Styles.errorText]}>{errors.cuotas_inscripcion}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '22%' }}>
                                    <Text style={Styles.textForm}>Porcentaje:</Text>
                                    <TextInput
                                        style={[Styles.textInputInformacionGeneral, { backgroundColor: 'rgb(230,230,230)' }]}
                                        {...values.porcentaje_inscripcion = porcentajeInscripcion.toString()}
                                        onChangeText={handleChange('porcentaje_inscripcion')}
                                        value={values.porcentaje_inscripcion}
                                        editable={false}
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '22%' }}>
                                    <Text style={Styles.textForm}>Valor de inscripción:</Text>
                                    <TextInputMask
                                        {...values.sueldo = values.sueldoPesos.slice(1).replace(/\./g, '')}
                                        {...values.sueldo.length ? values.valor_inscripcion = ((parseInt(values.sueldo) / 100) * parseInt(values.porcentaje_inscripcion)).toString() : null}
                                        style={[Styles.textInputInformacionGeneral, { backgroundColor: 'rgb(230,230,230)' }]}
                                        placeholder='$ 0'
                                        onChangeText={handleChange('valor_inscripcion')}
                                        value={values.valor_inscripcion}
                                        editable={false}
                                        type={'money'}
                                        options={{
                                            precision: 0,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: '$',
                                        }}
                                    />

                                </View>
                                <View style={{ marginLeft: '4%', width: '22%' }}>
                                    <Text style={Styles.textForm}>Valor de cada cuota</Text>
                                    <TextInputMask
                                        {...values.cuotas_inscripcion.length ? values.valor_cuota_inscripcion = ((parseInt(values.valor_inscripcion)) / (parseInt(values.cuotas_inscripcion))).toFixed(0).toString() : null}
                                        style={[Styles.textInputInformacionGeneral, { backgroundColor: 'rgb(230,230,230)' }]}
                                        placeholder="$0"
                                        onChangeText={handleChange('valor_cuota_inscripcion')}
                                        onBlur={handleBlur('valor_cuota_inscripcion')}
                                        value={values.valor_cuota_inscripcion}
                                        editable={false}
                                        type={'money'}
                                        options={{
                                            precision: 0,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: '$',
                                        }}
                                    />
                                </View>
                            </View>
                            <Text style={{ marginTop: '1%', alignSelf: 'flex-start' }}>30Q - Cuota mensual ordinaria*</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Porcentaje:</Text>
                                    <View style={[(errors.porcentaje_ordinaria && touched.porcentaje_ordinaria) ? Styles.pickerError : Styles.picker]} >
                                        <Picker style={Styles.fieldForm}
                                            selectedValue={values.porcentaje_ordinaria}
                                            onValueChange={itemValue => setFieldValue('porcentaje_ordinaria', itemValue)}
                                            onBlur={handleBlur('porcentaje_ordinaria')}
                                        >
                                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                                            <Picker.Item label="5%" value="5" />
                                            <Picker.Item label="6%" value="6" />
                                            <Picker.Item label="7%" value="7" />
                                            <Picker.Item label="8%" value="8" />
                                            <Picker.Item label="9%" value="9" />
                                            <Picker.Item label="10%" value="10" />
                                        </Picker>
                                    </View>
                                    {errors.porcentaje_ordinaria && touched.porcentaje_ordinaria &&
                                        <Text style={[Styles.errorText]}>{errors.porcentaje_ordinaria}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Valor de cuota:</Text>
                                    <TextInputMask
                                        {...values.sueldo_id == '1' ?
                                            values.valor_ordinaria = ((parseInt(values.sueldo) / 100) * parseInt(values.porcentaje_ordinaria)).toString()
                                            :
                                            values.valor_ordinaria = (Math.round((parseInt(values.sueldo) * 75.54) / 100) * (parseInt(values.porcentaje_ordinaria) / 100)).toString()
                                        }
                                        style={[Styles.textInputInformacionGeneral, { backgroundColor: 'rgb(230,230,230)' }]}
                                        placeholder="$0"
                                        onChangeText={handleChange('valor_ordinaria')}
                                        onBlur={handleBlur('valor_ordinaria')}
                                        value={values.valor_ordinaria}
                                        type={'money'}
                                        options={{
                                            precision: 0,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: '$',
                                        }}
                                    />
                                </View>
                            </View>

                            <Text style={{ marginTop: '1%', alignSelf: 'flex-start' }}>31H - Ahorro voluntario</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Valor mínimo de ahorro:</Text>
                                    <Text style={{ backgroundColor: 'rgb(230,230,230)', marginTop: '1%', borderColor: 'black' }}>$50000</Text>
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Valor del ahorro:</Text>
                                    <TextInputMask
                                        style={[(errors.valor_voluntario && touched.valor_voluntario) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                                        placeholder="$0"
                                        onChangeText={handleChange('valor_voluntario')}
                                        onBlur={handleBlur('valor_voluntario')}
                                        value={values.valor_voluntario}
                                        type={'money'}
                                        options={{
                                            precision: 0,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: '$',
                                        }}
                                    />
                                    {errors.valor_voluntario && touched.valor_voluntario &&
                                        <Text style={[Styles.errorText]}>{errors.valor_voluntario}</Text>
                                    }
                                </View>
                            </View>
                            <Text style={{ marginTop: '1%', alignSelf: 'flex-start' }}>31I - Ahorro vacaciones</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>

                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Valor mínimo de ahorro:</Text>
                                    <Text style={{ backgroundColor: 'rgb(230,230,230)', marginTop: '1%', borderColor: 'black' }}>$50000</Text>
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text style={Styles.textForm}>Valor del ahorro:</Text>
                                    <TextInputMask
                                        style={[(errors.valor_vacaciones && touched.valor_vacaciones) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                                        placeholder="$0"
                                        onChangeText={handleChange('valor_vacaciones')}
                                        onBlur={handleBlur('valor_vacaciones')}
                                        value={values.valor_vacaciones}
                                        type={'money'}
                                        options={{
                                            precision: 0,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: '$',
                                        }}
                                    />
                                    {errors.valor_vacaciones && touched.valor_vacaciones &&
                                        <Text style={[Styles.errorText]}>{errors.valor_vacaciones}</Text>
                                    }
                                </View>
                            </View>
                            <Text style={{ marginTop: '1%', alignSelf: 'flex-start' }}>31I - Ahorro educativo</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>

                                <View style={{ width: '48%' }}>
                                    <Text style={Styles.textForm}>Valor mínimo de ahorro:</Text>
                                    <Text style={{ backgroundColor: 'rgb(230,230,230)', marginTop: '1%', borderColor: 'black' }}>$100000</Text>
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text>Valor del ahorro:</Text>
                                    <TextInputMask
                                        style={[(errors.valor_educativo && touched.valor_educativo) ? Styles.errorInput : Styles.textInputInformacionGeneral]}
                                        placeholder="$0"
                                        onChangeText={handleChange('valor_educativo')}
                                        onBlur={handleBlur('valor_educativo')}
                                        value={values.valor_educativo}
                                        type={'money'}
                                        options={{
                                            precision: 0,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: '$',
                                        }}
                                    />
                                    {errors.valor_educativo && touched.valor_educativo &&
                                        <Text style={[Styles.errorText]}>{errors.valor_educativo}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ marginTop: '2%', flexDirection: 'row', marginLeft: '20%' }}>
                                <View>
                                    <Button
                                        onPress={handleSubmit}
                                        title="Enviar"
                                        disabled={!isValid}
                                        color='#5099D2'
                                    />
                                </View>
                                <View style={{ marginLeft: '120%', width: '40%' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const total = parseInt(values.valor_inscripcion) + parseInt(values.valor_ordinaria) + parseInt(values.valor_vacaciones.slice(1).replace(/\./g, '')) + parseInt(values.valor_voluntario.slice(1).replace(/\./g, '')) + parseInt(values.valor_educativo.slice(1).replace(/\./g, ''))
                                            let porcentaje
                                            if (values.sueldo_id == '1') { porcentaje = ((total * 100) / parseInt(values.sueldo)).toFixed(2) }
                                            if (values.sueldo_id == '2') { porcentaje = ((total * 100) / ((parseInt(values.sueldo) * 75.54) / 100)).toFixed(2) }
                                            (parseInt(porcentaje) < 50) ? values.porcentajeOk = 'true' : values.porcentajeOk = ''

                                            alert(`El valor de sus aportes y ahorros ($${total}) son el ${porcentaje}% del valor su salario: $${values.sueldo}`)
                                        }}
                                        style={Styles.loginButton}
                                    >
                                        <Text style={Styles.logginButtonText}>Ver mi porcentaje</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </>
                    )}
                </Formik>
            </CollapseBody>
        </Collapse>
    )
}
