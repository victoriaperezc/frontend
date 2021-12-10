import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { document } from '../pages/AffiliatedProfile_Page'
import { Styles } from '../styles/Styles'
import { ModalDocument_Component } from './ModalDocument_Component'
import { StepBar_Component } from './StepBar_Component'

interface Props {
    type: string;
}

export const ModalView_Component: React.FC<Props> = ({ type }) => {


    var documentsData: { [id: string]: document } = { //Dev
        'asociacion': { docName: 'Solicitud de Asociación', docSize: '1kb', isApproved: true },
        'ahorros': { docName: 'Autorización Deducción de Ahorro', docSize: '1kb', isApproved: true },
        'ingresos': { docName: 'Autorización Deducción de Ingresos Para Pagos FEIBM', docSize: '1kb', isApproved: true },
        'voluntad': { docName: 'Declaración Voluntad', docSize: '1kb', isApproved: false }
    }

    const onSend = () => {

    }

    const showView = () => {
        if (type == 'verificacion') {
            return (
                <View style={[Styles.containerColumn]}>
                    <View style={Styles.modalHeader}>
                        <StepBar_Component />
                    </View>
                    <View style={Styles.modalBody}>
                        <View style={Styles.modalBodyInnerContainer}>
                            <ActivityIndicator
                                color="#1F3159"
                                size={wp('8%')} />
                            <Text style={Styles.modalText}>En proceso de verificación</Text>
                        </View>
                    </View>
                </View >)
        } else if (type == 'deceval') {
            return (
                <View style={Styles.containerColumn}>
                    <View style={Styles.modalHeader}>
                        <StepBar_Component />
                        <Text style={Styles.modalText}>
                            Firme el pagaré de Deceval
                        </Text>
                    </View>
                    <View style={Styles.modalBody}>
                        
                        <View style={Styles.modalBodyInnerContainer}>
                        <Text style={Styles.modalText}>Recibirá un enlace en su correo electrónico para firmar el pagaré de DECEVAL.
                            Una vez haya completado esta tarea, su firma será verificada por un funcionario del Fondo para así continuar con su proceso.</Text>
                        </View>
                        
                        <TouchableOpacity
                            style={Styles.modalSendButton}
                            onPress={onSend}>
                            <Text style={Styles.modalButtonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else if (type == 'firma') {
            return (
                <View style={Styles.containerColumn}>
                    <View style={Styles.modalHeader}>
                        <StepBar_Component />
                    </View>
                    <View style={Styles.modalBody}>
                        <View style={Styles.modalBodyInnerContainer}>
                            <ModalDocument_Component documento={documentsData["asociacion"]} />
                            <ModalDocument_Component documento={documentsData["ahorros"]} />
                            <ModalDocument_Component documento={documentsData["ingresos"]} />
                            <ModalDocument_Component documento={documentsData["voluntad"]} />
                        </View>
                        <TouchableOpacity
                            style={Styles.modalSendButton}
                            onPress={onSend}>
                            <Text style={Styles.modalButtonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else if (type == 'devolucion') {
            return (
                <View style={Styles.containerColumn}>
                    <View style={Styles.modalHeader}>
                        <StepBar_Component />
                        <Text style={Styles.modalText}>Crea tu firma digital</Text>
                    </View>
                    <View style={Styles.modalBody}>
                        <View style={Styles.modalBodyInnerContainer}>
                            <View style={Styles.modalSignsContainer}>
                                <TouchableOpacity style={Styles.signOptionContainer}>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.signOptionContainer}>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.signOptionContainer}>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={Styles.modalSendButton}
                            onPress={onSend}>
                            <Text style={Styles.modalButtonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else if (type == 'adicional1') {
            return (
                <View style={Styles.containerColumn}>
                    <View style={Styles.modalHeader}>
                        <StepBar_Component />
                        
                    </View>
                    <View style={Styles.modalBody}>
                        
                        <View style={Styles.modalBodyInnerContainer}>
                        <Text style={Styles.modalText}>Se están realizando los últimos pasos de su proceso.</Text>
                        </View>
                        <TouchableOpacity
                            style={Styles.modalSendButton}
                            onPress={onSend}>
                            <Text style={Styles.modalButtonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else if (type == 'verificacionFormulario'){
            return (
                <View style={[Styles.containerColumn]}>
                    <View style={Styles.modalHeader}>
                        <StepBar_Component />
                    </View>
                    <View style={Styles.modalBody}>
                        <View style={Styles.modalBodyInnerContainer}>
                            <ActivityIndicator
                                color="#1F3159"
                                size={wp('8%')} />
                            <Text style={Styles.modalText}>Información del formulario pendiente de verificación</Text>
                        </View>
                    </View>
                </View >)
        } else if (type == 'riesgos'){
            return (
                <View style={[Styles.containerColumn]}>
                    <View style={Styles.modalHeader}>
                        <StepBar_Component />
                    </View>
                    <View style={Styles.modalBody}>
                        <View style={Styles.modalBodyInnerContainer}>
                            <ActivityIndicator
                                color="#1F3159"
                                size={wp('8%')} />
                            <Text style={Styles.modalText}>Pendiente la validación de riesgos</Text>
                        </View>
                    </View>
                </View >)
        }
    }
    return (
        <View style={Styles.containerColumn}>
            {showView()}
        </View>
    )
}
