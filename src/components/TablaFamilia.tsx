import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, Button, NativeSyntheticEvent, TargetedEvent } from 'react-native';
import { Styles } from '../styles/Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { id } from './PantallaRegistro';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';
import { ScrollView } from 'react-native-gesture-handler';


export default function TablaFamilia  ()  {
    const [data, setData] =useState([])
     console.log(id)

    async function postData(){
        try {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const response = await fetch(`http://localhost:3000/v1/tabla-familiar/${id}`, options);
            const respuesta = await response.json();
            console.log(respuesta)
            setData(respuesta.data);
            return respuesta
        }
        catch (error) { console.log(error) }
    }

    useEffect(() => {
        postData()
    }, []);

    console.log(data);

    return(
        <>
            <View style={{marginTop: wp("1%"),justifyContent: "space-between", display: "flex",height: hp("5%"),width: wp("60%"),backgroundColor: "#33B1FF"}}>
                <View style={{ margin: '1%', alignItems: "center" }} >
                    <Text style={Styles.formFillFont}>
                        Familia 
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: "row",marginTop:'0.3%', alignSelf:'flex-start', marginLeft:'7.2%'}}>
                <View style={{justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("8.95%"),backgroundColor: "#33B1FF"}}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Parentesco 
                        </Text>
                    </View>
                </View>
                <View style={{marginLeft:'0.5%',justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("12%"),backgroundColor: "#33B1FF"}}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Tipo Documento 
                        </Text>
                    </View>
                </View>
                <View style={{marginLeft:'0.5%',justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("10%"),backgroundColor: "#33B1FF"}}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Identificación 
                        </Text>
                    </View>
                </View>
                <View style={{marginLeft:'0.5%',justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("10%"),backgroundColor: "#33B1FF"}}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Nombres 
                        </Text>
                    </View>
                </View>
                <View style={{marginLeft:'0.5%',justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("10.6%"),backgroundColor: "#33B1FF"}}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Apellidos 
                        </Text>
                    </View>
                </View>
                
            </View>
            <View>
                {data.map((element, index) => (
                    <View key={index}>
                        <View style={{flexDirection: "row",marginTop:'0.3%', marginLeft:'-1.95%'}}>
                            <View style={{justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("8.95%"),backgroundColor: "#33B1FF"}}>
                                <View style={{ margin: '2%' }} >
                                    <Text style={{fontFamily: "workSans",textAlign: "center",color:'black'}}>
                                        {element.PARENTESCO} 
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginLeft:'0.5%',justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("12%"),backgroundColor: "#33B1FF"}}>
                                <View style={{ margin: '2%' }} >
                                    <Text style={Styles.formFillFont}>
                                        {element.TIPO} 
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginLeft:'0.5%',justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("10%"),backgroundColor: "#33B1FF"}}>
                                <View style={{ margin: '2%' }} >
                                    <Text style={Styles.formFillFont}>
                                        {element.DOCUMENTO} 
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginLeft:'0.5%',justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("10%"),backgroundColor: "#33B1FF"}}>
                                <View style={{ margin: '2%' }} >
                                    <Text style={Styles.formFillFont}>
                                        {element.NOMBRES} 
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginLeft:'0.5%',justifyContent: "space-between", alignItems: "center", display: "flex",height: hp("5%"),width: wp("10.6%"),backgroundColor: "#33B1FF"}}>
                                <View style={{ margin: '2%' }} >
                                    <Text style={Styles.formFillFont}>
                                        {element.APELLIDOS} 
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>

        </>
    )
}