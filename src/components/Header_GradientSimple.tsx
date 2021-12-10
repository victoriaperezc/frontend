import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'
import { Styles } from '../styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    title: string;
}
export const Header_GradientSimple: React.FC<Props> = ({ title }) => {

    const navigator = useNavigation();

    const onNotifications = () => {
        navigator.dispatch(CommonActions.navigate({ name: 'AffiliatedProfile_Page', }));
    }

    return (
        <View style={Styles.headerBar}>
            <LinearGradient
            start={{x: 1, y: 0}} end={{x: 0, y: 0}}
            colors={['#FE462C', '#E5E5E5', '#0072C3']}
            style={Styles.headerBackground}
            />
            <View style={Styles.headerBarLeft}/>
            <View style={Styles.headerBarRight}/>
        </View >
    )
}



