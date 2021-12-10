import React from 'react'
import { Image, Text, View } from 'react-native'
import { Styles } from '../styles/Styles'

export type usuario = {
    name: string;
    num_doc: string;
    type: string;
  }
interface Props {
    usuario: usuario;
}


export const ProfileCard_Component: React.FC<Props> = ({ usuario }) => {

    const profileImage = require("../../assets/dummy-profile.png");
    return (
        <View style={Styles.profileCard}>
            <Image
                source={profileImage}
                style={Styles.profileCardImage}>
            </Image>
            <Text style={Styles.profileCardTextName}>{usuario.name}</Text>
            <Text style={Styles.profileCardText}>Empleado de {usuario.type}</Text>
            <Text style={Styles.profileCardText}>{usuario.num_doc}</Text>
            <View style={Styles.profileCardMailSlackContainer}>
                <Text style={Styles.profileCardTextMailSlack}>Correo</Text>
                <View style={Styles.verticalDivider}/>
                <Text style={Styles.profileCardTextMailSlack}>Slack</Text>
            </View>            
            <View style={Styles.profileCardBottom}/>
        </View>
        
    )
}

