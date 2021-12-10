import { useNavigation } from '@react-navigation/core';
import React from 'react'
import {View } from 'react-native'
import { Styles } from '../styles/Styles';

interface Props {
    title: string;
}
export const HeaderFondo_Component: React.FC<Props> = ({ title }) => {

    const profileImage = require("../../assets/dummy-profile.png");

    const navigator = useNavigation();


    return (
        <View style={Styles.headerBarFondo}>
            <View style={Styles.headerBarLeft}/>
            <View style={Styles.headerBarRight}/>
        </View >
    )
}



