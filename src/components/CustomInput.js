// CustomInput.js
import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'
import { Styles } from '../styles/Styles';

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        style={[
          Styles.textInputInformacionGeneral,
          hasError && Styles.errorInput
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <Text style={Styles.errorText}>{errors[name]}</Text>}
    </>
  )
}



export default CustomInput