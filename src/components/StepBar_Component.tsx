import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import { color } from 'react-native-elements/dist/helpers';
import { Styles } from '../styles/Styles'

const icons=["rocket","star"];


export const StepBar_Component = () => {
    return (
        <View style={Styles.stepBar}>
            <View style={[Styles.stepBox, { backgroundColor: '#2C698DCC'} ]}><Text style={Styles.text}>1</Text></View>
            <View style={Styles.stepLine}></View>
            <View style={[Styles.stepBox, { backgroundColor: '#2C698DCC' }]}><Text style={Styles.text}>2</Text></View>
            <View style={Styles.stepLine}></View>
            <View style={[Styles.stepBox, { backgroundColor: '#2C698DCC' }]}><Text style={Styles.text}>3</Text></View>
            <View style={Styles.stepLine}></View>
            <View style={[Styles.stepBox, { backgroundColor: '#2C698D' }]}><Text style={Styles.text}>4</Text></View>
            <View style={Styles.stepLine}></View>
            <View style={[Styles.stepBox, { backgroundColor: '#D8D8D8' }]}><Text style={Styles.textEnd}>5</Text></View>
        </View >
    )
}
