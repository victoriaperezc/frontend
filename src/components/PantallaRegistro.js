import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, TextInput, CheckBox, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Styles } from '../styles/Styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TerminoFijo } from './TerminoFijo';
import TerminoIndefinido from './TerminoIndefinido';
import {Header_GradientSimple} from './Header_GradientSimple';


const SignupSchema = Yup.object().shape({
  nombres: Yup.string().required('x'),
  apellidos: Yup.string().required('x'),
  tipo_documento: Yup.string().required('x'),
  identificador: Yup
    .number() 
    .min(8,({min}) =>`Número de documento min de ${min}`)
    .required('x'),
  correo: Yup.string().email().required('x'),
  password: Yup
    .string()
    .min(8,({min}) =>`Contraseña min de ${min}`)
    .required('x'),
  nomina_id: Yup.string().required('x'),
});

export var id = '';
export const PantallaRegistro = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true)
  }

  const [buttonClicked2, setButtonClicked2] = useState(false);

  const handleButtonClick2 = () => {
    setButtonClicked2(true)
  }

  const showAlert = () => {
    alert('Cuenta creada con exito');
    navigation.navigate('PerfilAfiliado');
  }

  const errorAlert = () => {
    alert('La cuenta no fue creada');
  }

  return (
    <Formik
      initialValues={{
        nombres: '',
        apellidos: '',
        tipo_documento: '',
        identificador: '',
        correo: '',
        password: '',
        nomina_id:''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        async function jsonEmpleado() {
          const options = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          }
          const response = await fetch('http://localhost:3000/v1/formulario-inicial/', options);
          const respuesta = await response.json();
          console.log(respuesta)
          return respuesta
        }
        async function idEmpleado() {
          try {
            let caso = await jsonEmpleado();
            console.log(caso.id_empleado);
            id = caso.id_empleado;
            console.log("prueba id: " + id);
            id.length?showAlert():errorAlert()
          }
          catch (error) { console.log(error) }
        }

     
        //navigation.navigate('PerfilAfiliado');
        
        console.log(values);
        idEmpleado();
        
      }}
    >
      {({ handleSubmit, isValid, values, setFieldValue, errors, touched, handleChange, handleBlur }) => (
        <>
          <View style={styles.container}>
            <Header_GradientSimple/>
            <Text style={styles.textStyling}>Registro</Text>
            <View style={styles.backProfileDocumentsSplit}>
              <View style={{flexDirection: 'row'}}>
              <View style={styles.backProfile}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('8%'), width: wp('31.3%') }}>
                  <View style={{ width: '50%', height: hp('4.7%')}}>
                    <TextInput
                      placeholder="Nombre"
                      style={(errors.nombres && touched.nombres) ? styles.textinputError : styles.textinput}
                      onChangeText={handleChange('nombres')}
                      onBlur={handleBlur('nombres')}
                      value={values.nombres}
                    />
                    {errors.nombres && touched.nombres &&
                      <Text style={[Styles.errorText]}>{errors.nombres}</Text>
                    }
                  </View>
                  <View style={{ width: '50%', marginLeft: '1%' ,height: hp('4.7%')}}>
                    <TextInput
                      placeholder="Apellido"
                      style={(errors.apellidos && touched.apellidos) ? styles.textinputError : styles.textinput}
                      onChangeText={handleChange('apellidos')}
                      onBlur={handleBlur('apellidos')}
                      value={values.apellidos}
                    />
                    {errors.apellidos && touched.apellidos &&
                      <Text style={[Styles.errorText]}>{errors.apellidos}</Text>
                    }
                  </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('31.3%') }}>
                  <View style={{ width: '46%', height: '100%',marginLeft: wp('0.6%') }}>
                    <View style={[(errors.tipo_documento && touched.tipo_documento) ? Styles.pickerError : Styles.picker]} >
                      <Picker
                        style={{ height: hp('4.7%')}}
                        selectedValue={values.tipo_documento}
                        onValueChange={itemValue => setFieldValue('tipo_documento', itemValue)}
                        onBlur={handleBlur('tipo_documento')}
                      >
                        <Picker.Item label="Seleccione una opción" value="" />
                        <Picker.Item label="Cédula de Ciudadania" value="1" />
                        <Picker.Item label="Cédula de Extranjeria" value="2" />
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

                  <View style={{ width: '49.5%', marginLeft: '1%' }}>
                    <TextInput
                      placeholder="Numero de documento"
                      style={(errors.identificador && touched.identificador) ? styles.textinputError : styles.textinput}
                      onChangeText={handleChange('identificador')}
                      onBlur={handleBlur('identificador')}
                      value={values.identificador}
                    />
                  </View>
                  {errors.identificador && touched.identificador &&
                    <Text style={[Styles.errorText]}>{errors.identificador}</Text>
                  }
                </View>

                <View style={{ justifyContent: 'space-between', marginTop: wp('1%'), width: wp('31.3%') }}>
                  <View style={{ width: '100%' }}>
                    <TextInput
                      placeholder="Correo"
                      style={(errors.correo && touched.correo) ? styles.textinputError : styles.textinput}
                      onChangeText={handleChange('correo')}
                      onBlur={handleBlur('correo')}
                      value={values.email}
                    />
                  </View>
                  {errors.correo && touched.correo &&
                    <Text style={[Styles.errorText]}>{errors.correo}</Text>
                  }
                </View>

                <View style={{ justifyContent: 'space-between', marginTop: wp('1%'), width: wp('31.3%') }}>
                  <View style={{ width: '100%' }}>
                    <TextInput
                      placeholder="Contraseña"
                      secureTextEntry={true}
                      style={(errors.password && touched.password) ? styles.textinputError : styles.textinput}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                  </View>
                  {errors.password && touched.password &&
                    <Text style={[Styles.errorText]}>{errors.password}</Text>
                  }
                </View>
                <View style={{ justifyContent: 'space-between', marginTop: wp('1%'), width: wp('31.3%') }}>
                  <View style={{ width: '100%' }}>
                  <View style={[(errors.nomina_id && touched.nomina_id) ? Styles.pickerError : Styles.picker]} >
                                <Picker
                                    selectedValue={values.nomina_id}
                                    onValueChange={itemValue => setFieldValue('nomina_id', itemValue)}
                                    onBlur={handleBlur('nomina_id')}
                                >
                                    

                                    <Picker.Item label="Nomina a la que pertenece:" value="" />
                                    <Picker.Item label="FEIBM" value="1" />
                                    <Picker.Item label="TREK" value="2" />
                                    <Picker.Item label="IBM" value="3" />
                                    <Picker.Item label="Kyndryl" value="4" />
                                </Picker>
                            </View>
                            {errors.nomina_id  && touched.nomina_id &&
                                <Text style={[Styles.errorText]}>{errors.nomina_id}</Text>
                            }
                  </View>
                </View>
                <TextInput />
              </View>
              <View style={styles.lineProfile} />
              <View style={styles.backProfile}>
                <View style={styles.backContratoRight}>

                  <Text style={styles.textStyling2}>Seleccione tipo de contrato</Text>
                  <View style={styles.backOrderButtonFijo}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.loginButton}
                            onPress={handleButtonClick}>
                            <Text style={styles.logginButtonText}>
                                Término Fijo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.loginButton}
                            onPress={handleButtonClick2}>
                            <Text style={styles.logginButtonText}>
                                Término Indefinido
                            </Text>
                        </TouchableOpacity>
                  </View>
                  {buttonClicked ? <TerminoFijo /> : null}
                  {buttonClicked2 ? <TerminoIndefinido /> : null}

                </View>
              </View>
              </View>
              
              <View style={styles.containerAceptacion}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                <Text style={styles.text}>
                  Acepto vincularme al fondo de empleados
                </Text>
              </View>
            </View>
            <View style={styles.containerEnviar}>
              <Button
                color="#D0D3D4"
                onPress={handleSubmit}
                title="Enviar"
                disabled={!isValid}
                color='#5099D2'
              />
            </View>
            </View>
            
          </View>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#0072C3",
    textAlign: "center",
    width: wp("9%"),
    height: hp("8%"),
    marginHorizontal: "5%",
  },
  logginButtonText:{
    fontSize: hp("2%"),
    color: "#ffffff",
    paddingHorizontal: 25,
    paddingVertical: 5,
    fontFamily: "WorkSans",
  },
  containerEnviar: {
    height: hp('6%'), 
    width: wp('7%'), 
    marginLeft: wp('64%'),
    marginTop: hp('-2%')
  },
  textStyling: {
    fontFamily: 'Montserrat',
    fontSize: hp('5%'),
    marginTop: hp('5%'),
    textAlign: 'center',
    color: '#2C698D'
  },
  textStyling2: {
    fontFamily: 'WorkSans',
    fontSize: hp('3%'),
    marginTop: hp('7%'),
    textAlign: 'center',
    color: '#2C698D'
  },
  text: {
    textAlign: 'center',
    marginTop: hp('1%'),
    fontSize: wp('0.8%'),
    margin: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
  textinput: {
    height: hp('4.7%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 4
  },
  textinputError: {
    height: hp('4.7%'),
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4
  },
  container: {
    height: hp('100%'), 
    width: wp('100%'), 
    backgroundColor: '#E5E5E5'
  },
  containerAceptacion: {
    height: hp('6.7%'), 
    width: wp('17%'), 
    marginLeft: wp('0%'),
    marginTop: hp('-3%')
  },
  textinput: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    backgroundColor: '#FBFCFC',
    padding: 4,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  backProfileDocumentsSplit: {
    marginTop: hp('3%'),
    height: hp('80%'), 
    width: wp('90%'), 
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  backProfile: {
    height: hp('65%'), // 70% of height device screen
    width: wp('36%'), // 80% of width device screen
    marginTop: hp('5%'),
    marginLeft: wp('0%'),
    backgroundColor: '#FFFFFF',
    paddingLeft: wp('2%'),
  },
  backContrato: {
    height: hp('45%'), // 70% of height device screen
    width: wp('31%'),
    marginLeft: wp('0%'),
    backgroundColor: '#ffffff',
    paddingLeft: wp('2%'),
  },
  backContratoRight: {
    height: hp('45%'),
    width: wp('31%'), 
    marginTop: hp('10%'),
    marginLeft: wp('2%'),
    backgroundColor: '#F9F9F9',
    padding: wp('1%'),
    borderRadius: 10,
    alignItems: 'center'
  },
  lineProfile: {
    borderWidth: wp('0.05%'),
    height: hp('50%'),
    marginTop: hp('13%'),
  },
  divider: {
    height: hp('10%'),
  },
  backOrderButtonFijo: {
    ...Platform.select({
      android: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      default: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        flexDirection: 'row',
        marginTop: wp('4%'),
        justifyContent: 'space-around'
      },
    }),
  },
});

export default PantallaRegistro;
