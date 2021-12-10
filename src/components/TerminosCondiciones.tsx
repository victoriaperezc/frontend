import React, { useState } from 'react'
import { Text, View, TextInput, Button, NativeSyntheticEvent, TargetedEvent, TouchableOpacity } from 'react-native';
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Checkbox } from 'react-native-paper';
import { Styles } from '../styles/Styles';



export const TerminosCondiciones = () => {

    const [isSelected, setSelection] = useState(false);

    return (
        <Collapse style={{ alignItems: 'center' }}>
            <CollapseHeader >
                <View style={Styles.windowDocuments}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Terminos y condiciones
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
                <>
                    <Checkbox
                        color="#FE462C"
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setSelection(!isSelected);
                        }}
                    />
                    <Text style={{color:"#4B4B4B", fontFamily:"WorkSans"}}>
                        Confidencialidad de acuerdo a las políticas del FEIBM para el manejo de información. Con la firma de este documento usted autoriza al FEIBM el manejo de sus datos conforme a los principios y deberes definidos en la ley 1581 de 2012 - Protección de datos personales y demás normas que traten y regulen sobre esta.
                        De acuerdo al artículo 12° del Estatuto: "Se entenderá adquirida la calidad de asociado, cuando la solicitud de asociación sea aprobada por la gerencia o por quien ésta delegue dentro de los
                        30 días siguientes a la presentación y se verifique el pago de la primera cuota periódica."
                    </Text>
                </>
            </CollapseBody>
        </Collapse>

    )
}