import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    title: string;
}
export const Header_Component: React.FC<Props> = ({ title }) => {

    const profileImage = require("../../assets/dummy-profile.png");

    const navigator = useNavigation();

    const onNotifications = () => {
        // Open notification
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
            <View style={Styles.headerBarRight}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={Styles.profileImageButton}
                    onPress={onNotifications}>
                    <Image
                        source={profileImage}
                        style={Styles.profileImage} />
                </TouchableOpacity >
            </View>
        </View >
    )
}



