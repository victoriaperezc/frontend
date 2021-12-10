import React, { useState } from "react";
import {View, TextInput, Image, TouchableOpacity, Text, ScrollView, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import ProgressBar from "react-animated-progress-bar";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";
import { HeaderFondo_Component } from "../components/HeaderFondo_Component";
import { Styles } from "../styles/Styles";
import SwitchSelector from "react-native-switch-selector";
import { Documents_ComponentList } from "../components/Documents_ComponentList"
import { LinearGradient } from 'expo-linear-gradient';

const PerfilEmpleado = ({ route, navigation }) => {
  const [component, setComponent] = useState("verificacion");
  const [shouldShow, setShouldShow] = useState(true);

  const options = [
    { label: "Perfil", value: "perfil" },
    { label: "Documentos", value: "documentos" },
  ];

  const setView = (component) => {
    if (component == "perfil") {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }
  };

  const item = route.params;
  const [text, onChangeText] = React.useState("");

  //#region ApprovadeVisible
  const [isVisibleApprovade, setVisibleApprovade] = useState(false);

  const toggleApprovade = () => {
    setVisibleApprovade(!isVisibleApprovade);
  };

  const [isVisibleApprovade1, setVisibleApprovade1] = useState(false);

  const toggleApprovade1 = () => {
    setVisibleApprovade1(!isVisibleApprovade1);
  };

  const [isVisibleApprovade2, setVisibleApprovade2] = useState(false);

  const toggleApprovade2 = () => {
    setVisibleApprovade2(!isVisibleApprovade2);
  };

  const [isVisibleApprovade3, setVisibleApprovade3] = useState(false);

  const toggleApprovade3 = () => {
    setVisibleApprovade3(!isVisibleApprovade3);
  };

  const [isVisibleApprovade4, setVisibleApprovade4] = useState(false);

  const toggleApprovade4 = () => {
    setVisibleApprovade4(!isVisibleApprovade4);
  };

  const [isVisibleApprovade5, setVisibleApprovade5] = useState(false);

  const toggleApprovade5 = () => {
    setVisibleApprovade5(!isVisibleApprovade5);
  };

  const [isVisibleApprovade6, setVisibleApprovade6] = useState(false);

  const toggleApprovade6 = () => {
    setVisibleApprovade6(!isVisibleApprovade6);
  };

  const [isVisibleApprovade7, setVisibleApprovade7] = useState(false);

  const toggleApprovade7 = () => {
    setVisibleApprovade7(!isVisibleApprovade7);
  };

  const [isVisibleApprovade8, setVisibleApprovade8] = useState(false);

  const toggleApprovade8 = () => {
    setVisibleApprovade8(!isVisibleApprovade8);
  };

  const [isVisibleApprovade9, setVisibleApprovade9] = useState(false);

  const toggleApprovade9 = () => {
    setVisibleApprovade9(!isVisibleApprovade9);
  };

  //#endregion

  //#region UndoVisible
  const [isVisibleUndo, setVisibleUndo] = useState(false);

  const toggleUndo = () => {
    setVisibleUndo(!isVisibleUndo);
  };

  const [isVisibleUndo1, setVisibleUndo1] = useState(false);

  const toggleUndo1 = () => {
    setVisibleUndo1(!isVisibleUndo1);
  };

  const [isVisibleUndo2, setVisibleUndo2] = useState(false);

  const toggleUndo2 = () => {
    setVisibleUndo2(!isVisibleUndo2);
  };

  const [isVisibleUndo3, setVisibleUndo3] = useState(false);

  const toggleUndo3 = () => {
    setVisibleUndo3(!isVisibleUndo3);
  };

  const [isVisibleUndo4, setVisibleUndo4] = useState(false);

  const toggleUndo4 = () => {
    setVisibleUndo4(!isVisibleUndo4);
  };

  const [isVisibleUndo5, setVisibleUndo5] = useState(false);

  const toggleUndo5 = () => {
    setVisibleUndo5(!isVisibleUndo5);
  };

  const [isVisibleUndo6, setVisibleUndo6] = useState(false);

  const toggleUndo6 = () => {
    setVisibleUndo6(!isVisibleUndo6);
  };

  const [isVisibleUndo7, setVisibleUndo7] = useState(false);

  const toggleUndo7 = () => {
    setVisibleUndo7(!isVisibleUndo7);
  };

  const [isVisibleUndo8, setVisibleUndo8] = useState(false);

  const toggleUndo8 = () => {
    setVisibleUndo8(!isVisibleUndo8);
  };

  const [isVisibleUndo9, setVisibleUndo9] = useState(false);

  const toggleUndo9 = () => {
    setVisibleUndo9(!isVisibleUndo9);
  };

  const [isVisibleUndoTask2, setVisibleUndoTask2] = useState(false);

  const toggleUndoTask2 = () => {
    setVisibleUndoTask2(!isVisibleUndoTask2);
  };

  //#endregion

  //#region ModalVisible
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isModalVisible1, setModalVisible1] = useState(false);

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const [isModalVisible3, setModalVisible3] = useState(false);

  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
  };

  const [isModalVisible4, setModalVisible4] = useState(false);

  const toggleModal4 = () => {
    setModalVisible4(!isModalVisible4);
  };

  const [isModalVisible5, setModalVisible5] = useState(false);

  const toggleModal5 = () => {
    setModalVisible5(!isModalVisible5);
  };

  const [isModalVisible6, setModalVisible6] = useState(false);

  const toggleModal6 = () => {
    setModalVisible6(!isModalVisible6);
  };

  const [isModalVisible7, setModalVisible7] = useState(false);

  const toggleModal7 = () => {
    setModalVisible7(!isModalVisible7);
  };

  const [isModalVisible8, setModalVisible8] = useState(false);

  const toggleModal8 = () => {
    setModalVisible8(!isModalVisible8);
  };

  const [isModalVisible9, setModalVisible9] = useState(false);

  const toggleModal9 = () => {
    setModalVisible9(!isModalVisible9);
  };

  const [isModalVisibleTask2, setModalVisibleTask2] = useState(false);

  const toggleModalTask2 = () => {
    setModalVisibleTask2(!isModalVisibleTask2);
  };

  //#endregion

  //#region functionCombined
  const functionCombined = () => {
    toggleUndo();
    toggleModal();
  };

  const functionCombined1 = () => {
    toggleModal1();
    toggleUndo1();
  };

  const functionCombined2 = () => {
    toggleModal2();
    toggleUndo2();
  };

  const functionCombined3 = () => {
    toggleModal3();
    toggleUndo3();
  };

  const functionCombined4 = () => {
    toggleModal4();
    toggleUndo4();
  };

  const functionCombined5 = () => {
    toggleModal5();
    toggleUndo5();
  };

  const functionCombined6 = () => {
    toggleModal6();
    toggleUndo6();
  };

  const functionCombined7 = () => {
    toggleModal7();
    toggleUndo7();
  };

  const functionCombined8 = () => {
    toggleModal8();
    toggleUndo8();
  };

  const functionCombined9 = () => {
    toggleModal9();
    toggleUndo9();
  };

  const functionCombinedTask2 = () => {
    toggleModalTask2();
    toggleUndoTask2();
  };
  //#endregion
  //#region isVisibleCompleteTask
  const [isVisibleCompleteTask2, setVisibleCompleteTask2] = useState(false);

  const toggleCompleteTask2 = () => {
    setVisibleCompleteTask2(!isVisibleCompleteTask2);
  };

  const [isVisibleCompleteTask3, setVisibleCompleteTask3] = useState(false);

  const toggleCompleteTask3 = () => {
    setVisibleCompleteTask3(!isVisibleCompleteTask3);
  };

  const [isVisibleEndTask2, setVisibleEndTask2] = useState(false);

  const toggleEndTask2 = () => {
    setVisibleEndTask2(!isVisibleEndTask2);
  };

  const [isVisibleEndTask4, setVisibleEndTask4] = useState(false);

  const toggleEndTask4 = () => {
    setVisibleEndTask4(!isVisibleEndTask4);
  };

  const [isVisibleEndTask5, setVisibleEndTask5] = useState(false);

  const toggleEndTask5 = () => {
    setVisibleEndTask5(!isVisibleEndTask5);
  };

  const [isVisibleCompleteTask6, setVisibleCompleteTask6] = useState(false);

  const toggleCompleteTask6 = () => {
    setVisibleCompleteTask6(!isVisibleCompleteTask6);
  };

  const [isVisibleEndTask6, setVisibleEndTask6] = useState(false);

  const toggleEndTask6 = () => {
    setVisibleEndTask6(!isVisibleEndTask6);
  };

  const [isVisibleNextTask1, setVisibleNextTask1] = useState(false);

  const toggleNextTask1 = () => {
    setVisibleNextTask1(!isVisibleNextTask1);
  };

  const [isVisibleNextTask3, setVisibleNextTask3] = useState(false);

  const toggleNextTask3 = () => {
    setVisibleNextTask3(!isVisibleNextTask3);
  };

  const [isVisibleNextTask4, setVisibleNextTask4] = useState(false);

  const toggleNextTask4 = () => {
    setVisibleNextTask4(!isVisibleNextTask4);
  };

  const [isVisibleNextTask5, setVisibleNextTask5] = useState(false);

  const toggleNextTask5 = () => {
    setVisibleNextTask5(!isVisibleNextTask5);
  };

  const [isVisibleNextTask6, setVisibleNextTask6] = useState(false);

  const toggleNextTask6 = () => {
    setVisibleNextTask6(!isVisibleNextTask6);
  };

  //#endregion
  const profileImage = require("../../assets/dummy-profile.png");
  const successIcon = require('../../assets/successIcon.PNG')
  const pendingIcon = require('../../assets/pendingIcon.PNG')

  const DATA = [
    {
      id: "1",
      docName: "Documento de Identificación",
      weigth: 50,
      date: "10/29/2021",
    },
    {
      id: "2",
      docName: "Oferta Laboral",
      weigth: 72,
      date: "10/29/2021",
    },
    {
      id: "3",
      docName: "Certificación Bancaria",
      weigth: 80,
      date: "10/29/2021",
    },
    {
      id: "4",
      docName: "Póliza Exequial",
      weigth: 90,
      date: "10/29/2021",
    },
  ];

  const linkDocId = 'http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf'
  const linkOferLab = 'http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf'
  const linkCerBank = 'http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf'
  const linkPolEx = 'http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf'
  const linkCarta2 = "http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf"
  const linkCarta1 = 'http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf'
  const linkCartaDec = 'http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf'
  const linkFormCon = 'http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf'

  return (
    <View style={Styles.container}>
      <HeaderFondo_Component />
      <View style={Styles.containerColumn}>
        <View style={Styles.containerRow}>
          {/* ------------------------------------PERFIL------------------------ */}
          <View style={[Styles.containerColumn, { flex: 2 }]}>
            <View style={Styles.profileCard}>
              <Image source={profileImage} style={Styles.profileCardImage} />
              <Text style={Styles.profileCardTextName}>{item.name}</Text>
              <Text style={Styles.profileCardText}>Empleado de IBM</Text>
              <Text style={Styles.profileCardText}>Documento</Text>
              <View style={Styles.profileCardMailSlackContainer}>
                <Text style={Styles.profileCardTextMailSlack}>Correo</Text>
                <View style={Styles.verticalDivider} />
                <Text style={Styles.profileCardTextMailSlack}>Slack</Text>
              </View>
              <View style={Styles.circles}>
                <ProgressBar
                  width={JSON.stringify(wp("10%"))}
                  trackWidth="13"
                  percentage={JSON.stringify(item.progress * 100)}
                  fontColor="#ffffff"
                  trackPathColor="#F9F9F9"
                  trackBorderColor="#bfbfbf"
                  hollowBackgroundColor="#0072C3"
                  defColor={{
                    fair: "orangered",
                    good: "yellow",
                    excellent: "green",
                    poor: "red",
                  }}
                />
              </View>
              <LinearGradient
                style={Styles.statusCardBottom}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                colors={["#FFFFFF", "#0072C3"]}
              />
            </View>
          </View>

          <View style={[Styles.containerColumn, { flex: 4 }]}>
            {/* -----------------CAMBIO DE PANTALLAS (PERFIL/DOCS) ----------------*/}
            <View style={Styles.profileOptionsButtonContainer}>
              <SwitchSelector
                options={options}
                initial={0}
                onPress={(value) => setView(value.toString())}
                textColor="#FE462C"
                buttonColor="#ffffff"
                selectedColor="#FE462C"
                backgroundColor="#ffffff"
                selectedTextStyle={Styles.profileOptionsButtonText}
              />
            </View>
            {/* ------------------------CONTENEDOR TAREAS -----------------------*/}
            <View style={[Styles.profileBodyRightContainer,{ paddingTop: hp("3%") }]}>
              <View style={[Styles.containerColumn,{ justifyContent: "flex-start" }]}>
                {/* ------------------------ LÓGICA TAREAS------------------------------- */}
                {shouldShow ? (
                  <View style={Styles.backTasksFondo}>
                    <Text style={Styles.taskTitle}>Tareas</Text>

                    <ScrollView style={[Styles.container, { width: wp("57%") }]}>
                      {/* ------------------------ LÓGICA TAREA # 1------------------------------- */}
                      {isVisibleNextTask1 ? (
                        <View style={Styles.infoContainerAprovedTask1}>
                          {/*-------------------------- TAREA 1 COMPLETADA -----------------------------*/}
                          <View style={Styles.infoContainerAprovedRow}>
                            <Text style={Styles.taskTitle1}>Tarea 1</Text>
                            <Icon
                              name="check"
                              color="#0072C3"
                              setModalVisible="false"
                            />
                            <TouchableOpacity
                              style={Styles.buttonUndo}
                              onPress={toggleNextTask1}
                            >
                              <Text style={Styles.textUndo}>Deshacer</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={Styles.buttonsApproved}
                              onPress={toggleNextTask1}
                            >
                              <Text style={Styles.textApprovade}>Revisar</Text>
                            </TouchableOpacity>
                          </View>
                          <LinearGradient
                            style={Styles.statusCardBottomFondo}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            colors={["#0072C3", "#FFFFFF"]}
                          />
                        </View>
                      ) : (
                        // ------------------------ TAREA 1 PARA REALIZAR --------------------------------
                        <View style={Styles.infoContainerAproved}>
                          <Text style={Styles.taskTitle1}>Tarea 1</Text>
                          <View style={Styles.infoContainerTask}>
                            <View style={Styles.infoTaskHeaders}>
                              <Text style={[Styles.textHeadersTasks, {justifyContent:'flex-start'}]}>Nombre</Text>
                              <Text style={[Styles.textHeadersTasks,{marginLeft: wp("6%")}]}>Archivo</Text>
                              <Text style={[Styles.textHeadersTasks,{marginLeft: wp("3.5%")}]}>Estado</Text>
                              <Text style={[Styles.textHeadersTasks,{marginLeft: wp("1%")}]}>Verificación</Text>
                            </View>

                            <View style={Styles.horizontalDivider} />
                            {/*---------------------- TAREA 1 - 1 FLUJO PRIMER DOCUMENTO-------------------------- */}
                            <View style={Styles.infoTask}>
                              <View style={Styles.widthTask}>
                                <Text style={Styles.widthTasksText}>Documento de Identificación</Text>
                              </View>
                              <TouchableOpacity
                                style={[Styles.widthTask,{ justifyContent: "center" }]}
                                onPress={() => window.open(linkDocId, "_blank")}
                              >
                                <Text style={Styles.widthTasksText}>Cédula.pdf</Text>
                              </TouchableOpacity>

                              {isVisibleApprovade ? (
                                <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                  <View style={Styles.buttonApproved}>
                                    <Image
                                      source={successIcon}
                                      style={Styles.iconBottom}
                                    />
                                    <Text style={Styles.buttonApprovedText}>Aprovado</Text>
                                  </View>
                                </View>
                              ) : null}
                              {isVisibleUndo ? (
                                <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                  <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                    <Image
                                      source={pendingIcon}
                                      style={Styles.iconBottom}
                                    />
                                    <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                  </View>
                                </View>
                              ) : null}

                              <View style={Styles.infoTaskHalf}>
                                {isVisibleUndo ? null : isVisibleApprovade ? null : (
                                  <View style={[Styles.widthTask, { justifyContent: "center" }]}>
                                    <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                      <Image
                                        source={pendingIcon}
                                        style={Styles.iconBottom}
                                      />
                                      <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                    </View>
                                  </View>
                                )}

                                {isVisibleUndo ? null : isVisibleApprovade ? (
                                  <View style={Styles.widthTask}>
                                    <TouchableOpacity
                                      style={Styles.buttonUndoRed}
                                      onPress={toggleApprovade}
                                    >
                                      <Text style={Styles.textUndoRed}>Deshacer</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                      style={Styles.buttonsApprovedRed}
                                      onPress={toggleModal}
                                    >
                                      <Text style={Styles.textApprovade}>Revisar</Text>
                                    </TouchableOpacity>
                                  </View>
                                ) : (
                                  <View style={[Styles.widthTask,{ justifyContent: "center", marginLeft:  wp("1.4%") }]}>
                                    <TouchableOpacity
                                      style={Styles.buttonsApprovedRed}
                                      onPress={toggleModal}
                                    >
                                      <Text style={Styles.textApprovade}>Validar</Text>
                                    </TouchableOpacity>
                                  </View>
                                )}
                                {isVisibleUndo ? 
                                  <Text style={[Styles.textApprovade, {color:'#2C698D'}]}>Pendiente</Text> 
                                : null}
                              </View>
                            </View>

                            {/*---------------------- TAREA 1 - 2 FLUJO SEGUNDO DOCUMENTO-------------------------- */}
                            <View style={Styles.infoTask}>
                              <View style={Styles.widthTask}>
                                <Text style={Styles.widthTasksText}>Oferta Laboral</Text>
                              </View>
                              <TouchableOpacity
                                style={[Styles.widthTask,{ justifyContent: "center" }]}
                                onPress={() => window.open(linkOferLab, "_blank")}
                              >
                                <Text style={Styles.widthTasksText}>Carta de Oferta Laboral.pdf</Text>
                              </TouchableOpacity>

                              {isVisibleApprovade1 ? (
                                <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                <View style={Styles.buttonApproved}>
                                  <Image
                                    source={successIcon}
                                    style={Styles.iconBottom}
                                  />
                                  <Text style={Styles.buttonApprovedText}>Aprovado</Text>
                                </View>
                              </View>
                              ) : null}

                              {isVisibleUndo1 ? (
                                <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                  <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                    <Image
                                      source={pendingIcon}
                                      style={Styles.iconBottom}
                                    />
                                  <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                </View>
                              </View>
                              ) : null}

                              <View style={Styles.infoTaskHalf}>
                                {isVisibleUndo1 ? null : isVisibleApprovade1 ? null : (
                                  <View style={[Styles.widthTask, { justifyContent: "center" }]}>
                                    <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                      <Image
                                        source={pendingIcon}
                                        style={Styles.iconBottom}
                                      />
                                      <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                    </View>
                                  </View>
                                )}
                                {isVisibleUndo1 ? null : isVisibleApprovade1 ? (
                                  <View style={Styles.widthTask}>
                                    <TouchableOpacity
                                      style={Styles.buttonUndoRed}
                                      onPress={toggleApprovade1}
                                    >
                                      <Text style={Styles.textUndoRed}>Deshacer</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                      style={Styles.buttonsApprovedRed}
                                      onPress={toggleModal1}
                                    >
                                      <Text style={Styles.textApprovade}>Revisar</Text>
                                    </TouchableOpacity>
                                </View>
                                ) : (
                                  <View style={[Styles.widthTask,{ justifyContent: "center", marginLeft:  wp("1.4%") }]}>
                                    <TouchableOpacity
                                      style={Styles.buttonsApprovedRed}
                                      onPress={toggleModal1}
                                    >
                                      <Text style={Styles.textApprovade}>Validar</Text>
                                    </TouchableOpacity>
                                  </View>
                                )}

                                {isVisibleUndo1 ? 
                                  <Text style={[Styles.textApprovade, {color:'#2C698D'}]}>Pendiente</Text> 
                                : null}
                              </View>
                            </View>

                            {/*---------------------- TAREA 1 - 3 FLUJO TERCER DOCUMENTO-------------------------- */}
                            <View style={Styles.infoTask}>
                              <View style={Styles.widthTask}>
                                <Text style={Styles.widthTasksText}>Certificación Bancaria</Text>
                              </View>
                              <TouchableOpacity
                                style={[Styles.widthTask,{ justifyContent: "center" }]}
                                onPress={() => window.open(linkCerBank, "_blank")}
                              >
                                <Text style={Styles.widthTasksText}>Certificaciuón Bancaria.pdf</Text>
                              </TouchableOpacity>

                              {isVisibleApprovade2 ? (
                                <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                  <View style={Styles.buttonApproved}>
                                    <Image
                                      source={successIcon}
                                      style={Styles.iconBottom}
                                    />
                                    <Text style={Styles.buttonApprovedText}>Aprovado</Text>
                                  </View>
                                </View>
                              ) : null}

                              {isVisibleUndo2 ? (
                                <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                  <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                    <Image
                                      source={pendingIcon}
                                      style={Styles.iconBottom}
                                    />
                                    <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                  </View>
                                </View>
                              ) : null}

                              <View style={Styles.infoTaskHalf}>
                                {isVisibleUndo2 ? null : isVisibleApprovade2 ? null : (
                                  <View style={[Styles.widthTask, { justifyContent: "center" }]}>
                                    <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                      <Image
                                        source={pendingIcon}
                                        style={Styles.iconBottom}
                                      />
                                      <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                    </View>
                                  </View>
                                )}
                                {isVisibleUndo2 ? null : isVisibleApprovade2 ? (
                                  <View style={Styles.widthTask}>
                                    <TouchableOpacity
                                      style={Styles.buttonUndoRed}
                                      onPress={toggleApprovade2}
                                    >
                                      <Text style={Styles.textUndoRed}>Deshacer</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                      style={Styles.buttonsApprovedRed}
                                      onPress={toggleModal2}
                                    >
                                      <Text style={Styles.textApprovade}>Revisar</Text>
                                    </TouchableOpacity>
                                  </View>
                                ) : (
                                  <View style={[Styles.widthTask,{ justifyContent: "center", marginLeft:  wp("1.4%") }]}>
                                    <TouchableOpacity
                                      style={Styles.buttonsApprovedRed}
                                      onPress={toggleModal2}
                                    >
                                      <Text style={Styles.textApprovade}>Validar</Text>
                                    </TouchableOpacity>
                                  </View>
                                )}
                                {isVisibleUndo2 ? 
                                  <Text style={[Styles.textApprovade, {color:'#2C698D'}]}>Pendiente</Text> 
                                : null}
                              </View>
                            </View>
                            {/*---------------------- TAREA 1 - 4 FLUJO CUARTO DOCUMENTO-------------------------- */ }
                            <View style={Styles.infoTask}>
                              <View style={Styles.widthTask}>
                                <Text style={Styles.widthTasksText}>Póliza Exequial</Text>
                              </View>
                              <TouchableOpacity
                                style={[Styles.widthTask,{ justifyContent: "center" }]}
                                onPress={() => window.open(linkPolEx, "_blank")}
                              >
                                <Text style={Styles.widthTasksText}>Póliza Exequial.pdf</Text>
                              </TouchableOpacity>
                              {isVisibleApprovade3 ? (
                                <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                  <View style={Styles.buttonApproved}>
                                    <Image
                                      source={successIcon}
                                      style={Styles.iconBottom}
                                    />
                                  <Text style={Styles.buttonApprovedText}>Aprovado</Text>
                                </View>
                              </View>
                              ) : null}

                              {isVisibleUndo3 ? (
                                <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                  <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                    <Image
                                      source={pendingIcon}
                                      style={Styles.iconBottom}
                                    />
                                    <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                  </View>
                                </View>
                              ) : null}

                              <View style={Styles.infoTaskHalf}>
                                {isVisibleUndo3 ? null : isVisibleApprovade3 ? null : (
                                  <View style={[Styles.widthTask, { justifyContent: "center" }]}>
                                    <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                      <Image
                                        source={pendingIcon}
                                        style={Styles.iconBottom}
                                      />
                                      <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                    </View>
                                  </View>                                  
                                )}
                                {isVisibleUndo3 ? null : isVisibleApprovade3 ? (
                                  <View style={Styles.widthTask}>
                                    <TouchableOpacity
                                      style={Styles.buttonUndoRed}
                                      onPress={toggleApprovade3}
                                    >
                                      <Text style={Styles.textUndoRed}>Deshacer</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                      style={Styles.buttonsApprovedRed}
                                      onPress={toggleModal3}
                                    >
                                      <Text style={Styles.textApprovade}>Revisar</Text>
                                    </TouchableOpacity>
                                  </View>
                                ) : (
                                  <View style={[Styles.widthTask,{ justifyContent: "center", marginLeft:  wp("1.4%") }]}>
                                    <TouchableOpacity
                                      style={Styles.buttonsApprovedRed}
                                      onPress={toggleModal3}
                                    >
                                      <Text style={Styles.textApprovade}>Validar</Text>
                                    </TouchableOpacity>
                                  </View>
                                )}

                                {isVisibleUndo3 ? 
                                  <Text style={[Styles.textApprovade, {color:'#2C698D'}]}>Pendiente</Text> 
                                : null}
                              </View>
                            </View>
                          </View>
                          <LinearGradient
                            style={Styles.statusCardBottomFondoToDo}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            colors={["#FFFFFF", "#FE462C"]}
                          />
                        </View>
                      )}
                    {/*---------------- POP-UP VALIDACIÓN TAREA 1-1 ----------------------*/}
                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>
                            <Text style={Styles.textFeedBack}>Documento de Identificación</Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <View style={Styles.inputPDF}/>
                            <View style={Styles.ContainerAviso}>
                              <View style={Styles.ContainerAviso2}> 
                                <Icon 
                                  name="info"
                                  color="#3B82F6"
                                />
                                <Text style={Styles.infoContainerAviso}>                        
                                  Aviso {"\n"}
                                  Después de leer el documento y 
                                  en caso de ser toda la información correcta, 
                                  de click en el botón de
                                  <Text style={Styles.infoContainerAviso2}> Validar</Text>. En caso de haber algún error 
                                  de click en el botón de <Text style={Styles.infoContainerAviso2}>Devolver</Text>.
                                </Text>                              
                              </View>
                              <View style={Styles.ContainerComentario}>
                                <Text style={Styles.infoContainerAviso1}>Comentarios</Text>
                                <View style={Styles.horizontalDivider1}/>
                                  <TextInput
                                    style={Styles.inputFeedBack}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Añadir Comentario de devolución"
                                  />         
                              </View>
                              <View style={Styles.containerBotones}>
                                <TouchableOpacity
                                  style={[Styles.buttonsApprovedRed,{backgroundColor: "#EFEFEF",marginRight: wp("0.5%")}]}
                                  onPress={functionCombined}
                                >
                                  <Text style={[Styles.textApprovade,{color: '#FE8171'}]}>Devolver</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={Styles.buttonsApprovedRed}
                                  onPress={toggleApprovade}
                                >
                                  <Text style={Styles.textApprovade}>Validar</Text>
                                </TouchableOpacity>                                
                              </View>                              
                            </View>                             
                          </View>
                        </View>                                                                   
                      </Modal>
                      {/*---------------- POP-UP VALIDACIÓN TAREA 1-2 ----------------------*/}
                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible1}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal1}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>
                            <Text style={Styles.textFeedBack}>Oferta Laboral</Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <View style={Styles.inputPDF}/>
                            <View style={Styles.ContainerAviso}>
                              <View style={Styles.ContainerAviso2}> 
                                <Icon 
                                  name="info"
                                  color="#3B82F6"
                                />
                                <Text style={Styles.infoContainerAviso}>                        
                                  Aviso {"\n"}
                                  Después de leer el documento y 
                                  en caso de ser toda la información correcta, 
                                  de click en el botón de
                                  <Text style={Styles.infoContainerAviso2}> Validar</Text>. En caso de haber algún error 
                                  de click en el botón de <Text style={Styles.infoContainerAviso2}>Devolver</Text>.
                                </Text>                              
                              </View>
                              <View style={Styles.ContainerComentario}>
                                <Text style={Styles.infoContainerAviso1}>Comentarios</Text>
                                <View style={Styles.horizontalDivider1}/>
                                  <TextInput
                                    style={Styles.inputFeedBack}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Añadir Comentario de devolución"
                                  />         
                              </View>
                              <View style={Styles.containerBotones}>
                                <TouchableOpacity
                                  style={[Styles.buttonsApprovedRed,{backgroundColor: "#EFEFEF",marginRight: wp("0.5%")}]}
                                  onPress={functionCombined1}
                                >
                                  <Text style={[Styles.textApprovade,{color: '#FE8171'}]}>Devolver</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={Styles.buttonsApprovedRed}
                                  onPress={toggleApprovade1}
                                >
                                  <Text style={Styles.textApprovade}>Validar</Text>
                                </TouchableOpacity>                                
                              </View>                              
                            </View>                             
                          </View>
                        </View>                                                                   
                      </Modal>
                      
                      {/*---------------- POP-UP VALIDACIÓN TAREA 1-3 ----------------------*/}
                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible2}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal2}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>
                            <Text style={Styles.textFeedBack}>Certificación Bancaria</Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <View style={Styles.inputPDF}/>
                            <View style={Styles.ContainerAviso}>
                              <View style={Styles.ContainerAviso2}> 
                                <Icon 
                                  name="info"
                                  color="#3B82F6"
                                />
                                <Text style={Styles.infoContainerAviso}>                        
                                  Aviso {"\n"}
                                  Después de leer el documento y 
                                  en caso de ser toda la información correcta, 
                                  de click en el botón de
                                  <Text style={Styles.infoContainerAviso2}> Validar</Text>. En caso de haber algún error 
                                  de click en el botón de <Text style={Styles.infoContainerAviso2}>Devolver</Text>.
                                </Text>                              
                              </View>
                              <View style={Styles.ContainerComentario}>
                                <Text style={Styles.infoContainerAviso1}>Comentarios</Text>
                                <View style={Styles.horizontalDivider1}/>
                                  <TextInput
                                    style={Styles.inputFeedBack}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Añadir Comentario de devolución"
                                  />         
                              </View>
                              <View style={Styles.containerBotones}>
                                <TouchableOpacity
                                  style={[Styles.buttonsApprovedRed,{backgroundColor: "#EFEFEF",marginRight: wp("0.5%")}]}
                                  onPress={functionCombined2}
                                >
                                  <Text style={[Styles.textApprovade,{color: '#FE8171'}]}>Devolver</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={Styles.buttonsApprovedRed}
                                  onPress={toggleApprovade2}
                                >
                                  <Text style={Styles.textApprovade}>Validar</Text>
                                </TouchableOpacity>                                
                              </View>                              
                            </View>                             
                          </View>
                        </View>                                                                   
                      </Modal>

                      {/*---------------- POP-UP VALIDACIÓN TAREA 1-4 ----------------------*/}
                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible3}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal3}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>
                            <Text style={Styles.textFeedBack}>Póliza Exequial</Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <View style={Styles.inputPDF}/>
                            <View style={Styles.ContainerAviso}>
                              <View style={Styles.ContainerAviso2}> 
                                <Icon 
                                  name="info"
                                  color="#3B82F6"
                                />
                                <Text style={Styles.infoContainerAviso}>                        
                                  Aviso {"\n"}
                                  Después de leer el documento y 
                                  en caso de ser toda la información correcta, 
                                  de click en el botón de
                                  <Text style={Styles.infoContainerAviso2}> Validar</Text>. En caso de haber algún error 
                                  de click en el botón de <Text style={Styles.infoContainerAviso2}>Devolver</Text>.
                                </Text>                              
                              </View>
                              <View style={Styles.ContainerComentario}>
                                <Text style={Styles.infoContainerAviso1}>Comentarios</Text>
                                <View style={Styles.horizontalDivider1}/>
                                  <TextInput
                                    style={Styles.inputFeedBack}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Añadir Comentario de devolución"
                                  />         
                              </View>
                              <View style={Styles.containerBotones}>
                                <TouchableOpacity
                                  style={[Styles.buttonsApprovedRed,{backgroundColor: "#EFEFEF",marginRight: wp("0.5%")}]}
                                  onPress={functionCombined3}
                                >
                                  <Text style={[Styles.textApprovade,{color: '#FE8171'}]}>Devolver</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={Styles.buttonsApprovedRed}
                                  onPress={toggleApprovade3}
                                >
                                  <Text style={Styles.textApprovade}>Validar</Text>
                                </TouchableOpacity>                                
                              </View>                              
                            </View>                             
                          </View>
                        </View>                                                                   
                      </Modal>
                      {/* -----------------LÓGICA BOTÓN SIGUIENTE TAREA 1 A TAREA 2--------------- */}
                      {isVisibleNextTask1 ? null : isVisibleApprovade ? (
                        isVisibleApprovade1 ? (
                          isVisibleApprovade2 ? (
                            isVisibleApprovade3 ? (
                              <TouchableOpacity
                                style={Styles.widthTasks}
                                onPress={toggleNextTask1}
                              >
                                <View style={Styles.nextButtonTasks}>
                                  <Text style={Styles.textApprovadeNext}>
                                    Siguiente
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            ) : null
                          ) : null
                        ) : null
                      ) : null}

                      {/* -----------------------LÓGICA TAREA 2 ------------------------*/}
                      {isVisibleApprovade ? (
                        isVisibleApprovade1 ? (
                          isVisibleApprovade2 ? (
                            isVisibleApprovade3 ? (
                              isVisibleNextTask1 ? (
                                isVisibleCompleteTask2 ? (
                                  <View style={Styles.infoContainerAprovedTask1} >
                                    <View style={Styles.infoContainerAprovedRow} >
                                      <Text style={Styles.taskTitle1}> Tarea 2 </Text>
                                      <Icon
                                        name="check"
                                        color="#0072C3"
                                        setModalVisible="false"
                                      />
                                      <TouchableOpacity
                                        style={Styles.buttonUndo}
                                        onPress={toggleCompleteTask2}
                                      >
                                        <Text style={Styles.textUndo}> Deshacer </Text>
                                      </TouchableOpacity>

                                      <TouchableOpacity
                                        style={Styles.buttonsApproved}
                                        onPress={toggleCompleteTask2}
                                      >
                                        <Text style={Styles.textApprovade}> Revisar </Text>
                                      </TouchableOpacity>
                                    </View>
                                    <LinearGradient
                                      style={Styles.statusCardBottomFondo}
                                      start={{ x: 1, y: 0 }}
                                      end={{ x: 0, y: 0 }}
                                      colors={["#0072C3", "#FFFFFF"]}
                                    />
                                  </View>
                                ) : isVisibleUndoTask2 ? (
                                  <View style={ Styles.infoContainerTaskApprovedTask2 } >
                                    <Text style={Styles.taskTitle1}> Tarea 2{" "} </Text>
                                    <Icon
                                      style={Styles.iconTask2}
                                      name="undo"
                                      color="#828282"
                                      setModalVisible="false"
                                    />
                                    <Text>Pendiente</Text>
                                  </View>
                                ) : (
                                  <View style={Styles.infoContainerPerfil}>
                                    <Text style={Styles.taskTitle1}>
                                      Tarea 2{" "}
                                    </Text>
                                    {isVisibleCompleteTask2 ? null : isVisibleUndoTask2 ? null : (
                                      <Text style={Styles.taskText}>
                                        {" "}
                                        Verificación de información de
                                        formulario FEL{" "}
                                      </Text>
                                    )}

                                    <View
                                      style={Styles.infoContainerButtonsTask2}
                                    >
                                      {isVisibleCompleteTask2 ? null : (
                                        <TouchableOpacity
                                          style={Styles.widthTasksThree}
                                          onPress={toggleModalTask2}
                                        >
                                          <View style={Styles.buttonsBack2}>
                                            <Text style={Styles.textUndo}>  Devolver </Text>
                                          </View>
                                        </TouchableOpacity>
                                      )}

                                      {isVisibleCompleteTask2 ? null : (
                                        <TouchableOpacity
                                          style={Styles.widthTasks4}
                                          onPress={toggleCompleteTask2}
                                        >
                                          <View style={ Styles.buttonsApprovedComplete } >
                                            <Text style={Styles.textApprovade}> Completado </Text>
                                          </View>
                                        </TouchableOpacity>
                                      )}
                                    </View>
                                  </View>
                                )
                              ) : null
                            ) : null
                          ) : null
                        ) : null
                      ) : null}

                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisibleTask2}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModalTask2}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>

                            <Text style={Styles.textFeedBack}>
                              Comentario de Devolución
                            </Text>
                          </View>

                          <TextInput
                            style={Styles.inputFeedBack}
                            onChangeText={onChangeText}
                            placeholder="Añadir Texto"
                            value={text}
                          />

                          <TouchableOpacity onPress={functionCombinedTask2}>
                            <View style={Styles.buttonTextSend}>
                              <Text style={Styles.textbuttonTaskValidar}>
                                Enviar
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </Modal>

                      {isVisibleApprovade ? (
                        isVisibleApprovade1 ? (
                          isVisibleApprovade2 ? (
                            isVisibleApprovade3 ? (
                              isVisibleNextTask1 ? (
                                isVisibleCompleteTask2 ? (
                                  isVisibleEndTask4 ? (
                                    <View
                                      style={Styles.infoContainerAprovedTask1}
                                    >
                                      <View
                                        style={Styles.infoContainerAprovedRow}
                                      >
                                        <Text style={Styles.taskTitle1}>
                                          Tarea 3
                                        </Text>
                                        <Icon
                                          name="check"
                                          color="#0072C3"
                                          setModalVisible="false"
                                        />
                                        <TouchableOpacity
                                          style={Styles.buttonUndo}
                                          onPress={toggleEndTask4}
                                        >
                                          <Text style={Styles.textUndo}>
                                            Deshacer
                                          </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                          style={Styles.buttonsApproved}
                                          onPress={toggleEndTask4}
                                        >
                                          <Text style={Styles.textApprovade}>
                                            Revisar
                                          </Text>
                                        </TouchableOpacity>
                                      </View>
                                      <LinearGradient
                                        style={Styles.statusCardBottomFondo}
                                        start={{ x: 1, y: 0 }}
                                        end={{ x: 0, y: 0 }}
                                        colors={["#0072C3", "#FFFFFF"]}
                                      />
                                    </View>
                                  ) : (
                                    <View style={Styles.infoContainerPerfil}>
                                      <Text style={Styles.taskTitle1}>
                                        Tarea 3
                                      </Text>
                                      <Text style={Styles.taskText}>
                                        {" "}
                                        Envío de cartas de vinculación
                                      </Text>
                                      {isVisibleNextTask3 ? null : (
                                        <View
                                          style={
                                            Styles.infoContainerButtonsTask2
                                          }
                                        >
                                          <TouchableOpacity
                                            style={Styles.widthTasksThree}
                                            onPress={toggleNextTask3}
                                          >
                                            <View
                                              style={Styles.buttonsApprovedSend}
                                            >
                                              <Text
                                                style={Styles.textApprovade}
                                              >
                                                Enviar
                                              </Text>
                                            </View>
                                          </TouchableOpacity>
                                        </View>
                                      )}
                                    </View>
                                  )
                                ) : null
                              ) : null
                            ) : null
                          ) : null
                        ) : null
                      ) : null}

                      {isVisibleEndTask4 ? null : isVisibleApprovade ? (
                        isVisibleApprovade1 ? (
                          isVisibleApprovade2 ? (
                            isVisibleApprovade3 ? (
                              isVisibleNextTask3 ? (
                                <TouchableOpacity
                                  style={Styles.widthTasks}
                                  onPress={toggleEndTask4}
                                >
                                  <View style={Styles.nextButtonTasks}>
                                    <Text style={Styles.textApprovadeNext}>
                                      Siguiente
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              ) : null
                            ) : null
                          ) : null
                        ) : null
                      ) : null}

                      {isVisibleApprovade ? (
                        isVisibleApprovade1 ? (
                          isVisibleApprovade2 ? (
                            isVisibleApprovade3 ? (
                              isVisibleNextTask1 ? (
                                isVisibleCompleteTask2 ? (
                                  isVisibleEndTask4 ? (
                                    isVisibleEndTask5 ? (
                                      <View
                                        style={Styles.infoContainerAprovedTask1}
                                      >
                                        <View
                                          style={Styles.infoContainerAprovedRow}
                                        >
                                          <Text style={Styles.taskTitle1}>
                                            Tarea 4
                                          </Text>
                                          <Icon
                                            name="check"
                                            color="#0072C3"
                                            setModalVisible="false"
                                          />
                                          <TouchableOpacity
                                            style={Styles.buttonUndo}
                                            onPress={toggleEndTask5}
                                          >
                                            <Text style={Styles.textUndo}>
                                              Deshacer
                                            </Text>
                                          </TouchableOpacity>

                                          <TouchableOpacity
                                            style={Styles.buttonsApproved}
                                            onPress={toggleEndTask5}
                                          >
                                            <Text style={Styles.textApprovade}>
                                              Revisar
                                            </Text>
                                          </TouchableOpacity>
                                        </View>
                                        <LinearGradient
                                          style={Styles.statusCardBottomFondo}
                                          start={{ x: 1, y: 0 }}
                                          end={{ x: 0, y: 0 }}
                                          colors={["#0072C3", "#FFFFFF"]}
                                        />
                                      </View>
                                    ) : (
                                      <View style={Styles.infoContainerAproved}>
                                        <Text style={Styles.taskTitle1}> Tarea 4</Text>
                                        <View style={Styles.infoContainerTask}>
                                        <View style={Styles.infoTaskHeaders}>
                                          <Text style={[Styles.textHeadersTasks, {justifyContent:'flex-start'}]}>Nombre</Text>
                                          <Text style={[Styles.textHeadersTasks,{marginLeft: wp("6%")}]}>Archivo</Text>
                                          <Text style={[Styles.textHeadersTasks,{marginLeft: wp("3.5%")}]}>Estado</Text>
                                          <Text style={[Styles.textHeadersTasks,{marginLeft: wp("1%")}]}>Verificación</Text>
                                        </View>
                                        <View style={Styles.horizontalDivider} />
                                        {/*---------------------- TAREA 4 - 1 FLUJO PRIMER DOCUMENTO-------------------------- */}
                                          <View style={Styles.infoTask}>
                                            <View style={Styles.widthTask}>
                                              <Text style={Styles.widthTasksText}>Formulario de Conocimiento</Text>
                                            </View>
                                            <TouchableOpacity
                                              style={[Styles.widthTask,{ justifyContent: "center" }]}
                                              onPress={() => window.open(linkFormCon, "_blank")}
                                            >
                                              <Text style={Styles.widthTasksText}>Form.pdf</Text>
                                            </TouchableOpacity>

                                            {isVisibleApprovade4 ? (
                                              <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                                <View style={Styles.buttonApproved}>
                                                  <Image
                                                    source={successIcon}
                                                    style={Styles.iconBottom}
                                                  />
                                                  <Text style={Styles.buttonApprovedText}>Aprovado</Text>
                                                </View>
                                              </View>
                                            ) : null}

                                            {isVisibleUndo4 ? (
                                              <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                                <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                                  <Image
                                                    source={pendingIcon}
                                                    style={Styles.iconBottom}
                                                  />
                                                  <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                                </View>
                                              </View>
                                            ) : null}

                                                <View style={Styles.infoTaskHalf}>
                                                  {isVisibleUndo4 ? null : isVisibleApprovade4 ? null : (
                                                    <View style={[Styles.widthTask, { justifyContent: "center" }]}>
                                                      <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                                        <Image
                                                          source={pendingIcon}
                                                          style={Styles.iconBottom}
                                                        />
                                                        <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                                      </View>
                                                    </View>
                                                  )}

                                                  {isVisibleUndo4 ? null : isVisibleApprovade4 ? (
                                                    <View style={Styles.widthTask}>
                                                      <TouchableOpacity
                                                        style={Styles.buttonUndoRed}
                                                        onPress={toggleApprovade4}
                                                      >
                                                        <Text style={Styles.textUndoRed}>Deshacer</Text>
                                                      </TouchableOpacity>

                                                      <TouchableOpacity
                                                        style={Styles.buttonsApprovedRed}
                                                        onPress={toggleModal4}
                                                      >
                                                        <Text style={Styles.textApprovade}>Revisar</Text>
                                                      </TouchableOpacity>
                                                    </View>
                                                  ) : (
                                                    <View style={[Styles.widthTask,{ justifyContent: "center", marginLeft:  wp("1.4%") }]}>
                                                      <TouchableOpacity
                                                        style={Styles.buttonsApprovedRed}
                                                        onPress={toggleModal4}
                                                      >
                                                        <Text style={Styles.textApprovade}>Validar</Text>
                                                      </TouchableOpacity>
                                                    </View>
                                                  )}
                                                  {isVisibleUndo4 ? 
                                                    <Text style={[Styles.textApprovade, {color:'#2C698D'}]}>Pendiente</Text> 
                                                  : null}
                                                </View>
                                          </View>

                                          <View style={Styles.infoTask}>
                                            <View style={Styles.widthTask}>
                                              <Text style={Styles.widthTasksText}>Carta de Declaración</Text>
                                            </View>
                                            <TouchableOpacity
                                              style={[Styles.widthTask,{ justifyContent: "center" }]}
                                              onPress={() => window.open(linkCartaDec, "_blank")}
                                            >
                                              <Text style={Styles.widthTasksText}>Carta de Declaración.pdf</Text>
                                            </TouchableOpacity>

                                            {isVisibleApprovade5 ? (
                                              <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                                <View style={Styles.buttonApproved}>
                                                  <Image
                                                    source={successIcon}
                                                    style={Styles.iconBottom}
                                                  />
                                                  <Text style={Styles.buttonApprovedText}>Aprovado</Text>
                                                </View>
                                              </View>
                                            ) : null}

                                            {isVisibleUndo5 ? (
                                              <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                                <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                                  <Image
                                                    source={pendingIcon}
                                                    style={Styles.iconBottom}
                                                  />
                                                  <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                                </View>
                                              </View>
                                            ) : null}

                                          <View style={Styles.infoTaskHalf}>
                                            {isVisibleUndo5 ? null : isVisibleApprovade5 ? null : (
                                              <View style={[Styles.widthTask, { justifyContent: "center" }]}>
                                                <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                                  <Image
                                                    source={pendingIcon}
                                                    style={Styles.iconBottom}
                                                  />
                                                  <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                                </View>
                                              </View>
                                            )}
                                            {isVisibleUndo5 ? null : isVisibleApprovade5 ? (
                                              <View style={Styles.widthTask}>
                                                <TouchableOpacity
                                                  style={Styles.buttonUndoRed}
                                                  onPress={toggleApprovade5}
                                                >
                                                  <Text style={Styles.textUndoRed}>Deshacer</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                  style={Styles.buttonsApprovedRed}
                                                  onPress={toggleModal5}
                                                >
                                                  <Text style={Styles.textApprovade}>Revisar</Text>
                                                </TouchableOpacity>
                                            </View>
                                            ) : (
                                              <View style={[Styles.widthTask,{ justifyContent: "center", marginLeft:  wp("1.4%") }]}>
                                                <TouchableOpacity
                                                  style={Styles.buttonsApprovedRed}
                                                  onPress={toggleModal5}
                                                >
                                                  <Text style={Styles.textApprovade}>Validar</Text>
                                                </TouchableOpacity>
                                              </View>
                                            )}

                                            {isVisibleUndo5 ? 
                                              <Text style={[Styles.textApprovade, {color:'#2C698D'}]}>Pendiente</Text> 
                                            : null}
                                          </View>
                                          </View>
                                          {/*---------------------- TAREA 4 - 3 FLUJO TERCER DOCUMENTO-------------------------- */}
                                          <View style={Styles.infoTask}>
                                            <View style={Styles.widthTask}>
                                              <Text style={Styles.widthTasksText}>Carta de Autorización 1</Text>
                                            </View>
                                            <TouchableOpacity
                                              style={[Styles.widthTask,{ justifyContent: "center" }]}
                                              onPress={() => window.open(linkCarta1, "_blank")}
                                            >
                                              <Text style={Styles.widthTasksText}>Certificaciuón Bancaria.pdf</Text>
                                            </TouchableOpacity>

                                            {isVisibleApprovade6 ? (
                                              <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                                <View style={Styles.buttonApproved}>
                                                  <Image
                                                    source={successIcon}
                                                    style={Styles.iconBottom}
                                                  />
                                                  <Text style={Styles.buttonApprovedText}>Aprovado</Text>
                                                </View>
                                              </View>
                                            ) : null}

                                            {isVisibleUndo6 ? (
                                              <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                                <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                                  <Image
                                                    source={pendingIcon}
                                                    style={Styles.iconBottom}
                                                  />
                                                  <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                                </View>
                                              </View>
                                            ) : null}

                                            <View style={Styles.infoTaskHalf}>
                                              {isVisibleUndo6 ? null : isVisibleApprovade6 ? null : (
                                                <View style={[Styles.widthTask, { justifyContent: "center" }]}>
                                                  <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                                    <Image
                                                      source={pendingIcon}
                                                      style={Styles.iconBottom}
                                                    />
                                                    <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                                  </View>
                                                </View>
                                              )}
                                              {isVisibleUndo6 ? null : isVisibleApprovade6 ? (
                                                <View style={Styles.widthTask}>
                                                  <TouchableOpacity
                                                    style={Styles.buttonUndoRed}
                                                    onPress={toggleApprovade6}
                                                  >
                                                    <Text style={Styles.textUndoRed}>Deshacer</Text>
                                                  </TouchableOpacity>

                                                  <TouchableOpacity
                                                    style={Styles.buttonsApprovedRed}
                                                    onPress={toggleModal6}
                                                  >
                                                    <Text style={Styles.textApprovade}>Revisar</Text>
                                                  </TouchableOpacity>
                                                </View>
                                              ) : (
                                                <View style={[Styles.widthTask,{ justifyContent: "center", marginLeft:  wp("1.4%") }]}>
                                                  <TouchableOpacity
                                                    style={Styles.buttonsApprovedRed}
                                                    onPress={toggleModal6}
                                                  >
                                                    <Text style={Styles.textApprovade}>Validar</Text>
                                                  </TouchableOpacity>
                                                </View>
                                              )}
                                              {isVisibleUndo6 ? 
                                                <Text style={[Styles.textApprovade, {color:'#2C698D'}]}>Pendiente</Text> 
                                              : null}
                                            </View>
                                          </View>
                                          {/*---------------------- TAREA 4 - 4 FLUJO CUARTO DOCUMENTO-------------------------- */ }
                            
                                          <View style={Styles.infoTask}>
                                            <View style={Styles.widthTask}>
                                              <Text style={Styles.widthTasksText}>Carta de Autorización 2</Text>
                                            </View>
                                            <TouchableOpacity
                                              style={[Styles.widthTask,{ justifyContent: "center" }]}
                                              onPress={() => window.open(linkCarta2, "_blank")}
                                            >
                                              <Text style={Styles.widthTasksText}>Carta 2.pdf</Text>
                                            </TouchableOpacity>
                                            {isVisibleApprovade7 ? (
                                              <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                                <View style={Styles.buttonApproved}>
                                                  <Image
                                                    source={successIcon}
                                                    style={Styles.iconBottom}
                                                  />
                                                  <Text style={Styles.buttonApprovedText}>Aprovado</Text>
                                                </View>
                                              </View>
                                            ) : null}

                                            {isVisibleUndo7 ? (
                                              <View style={[Styles.widthTask,{ justifyContent: "center" }]}>
                                                <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                                  <Image
                                                    source={pendingIcon}
                                                    style={Styles.iconBottom}
                                                  />
                                                  <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                                </View>
                                              </View>
                                            ) : null}

                                            <View style={Styles.infoTaskHalf}>
                                              {isVisibleUndo7 ? null : isVisibleApprovade7 ? null : (
                                                <View style={[Styles.widthTask, { justifyContent: "center" }]}>
                                                  <View style={[Styles.buttonApproved,{ backgroundColor: "#FFF7E1" }]}>
                                                    <Image
                                                      source={pendingIcon}
                                                      style={Styles.iconBottom}
                                                    />
                                                    <Text style={[Styles.buttonApprovedText,{ color: "#FFAD0D" }]}>En Revisión</Text>
                                                  </View>
                                                </View>                                  
                                              )}
                                              {isVisibleUndo7 ? null : isVisibleApprovade7 ? (
                                                <View style={Styles.widthTask}>
                                                  <TouchableOpacity
                                                    style={Styles.buttonUndoRed}
                                                    onPress={toggleApprovade7}
                                                  >
                                                    <Text style={Styles.textUndoRed}>Deshacer</Text>
                                                  </TouchableOpacity>

                                                  <TouchableOpacity
                                                    style={Styles.buttonsApprovedRed}
                                                    onPress={toggleModal7}
                                                  >
                                                    <Text style={Styles.textApprovade}>Revisar</Text>
                                                  </TouchableOpacity>
                                                </View>
                                              ) : (
                                                <View style={[Styles.widthTask,{ justifyContent: "center", marginLeft:  wp("1.4%") }]}>
                                                  <TouchableOpacity
                                                    style={Styles.buttonsApprovedRed}
                                                    onPress={toggleModal7}
                                                  >
                                                    <Text style={Styles.textApprovade}>Validar</Text>
                                                  </TouchableOpacity>
                                                </View>
                                              )}

                                              {isVisibleUndo7 ? 
                                                <Text style={[Styles.textApprovade, {color:'#2C698D'}]}>Pendiente</Text> 
                                              : null}
                                            </View>
                                          </View>
                                        </View>
                                        <LinearGradient
                                          style={Styles.statusCardBottomFondoToDo}
                                          start={{ x: 1, y: 0 }}
                                          end={{ x: 0, y: 0 }}
                                          colors={["#FFFFFF", "#FE462C"]}
                                        />
                                      </View>
                                    )
                                  ) : null
                                ) : null
                              ) : null
                            ) : null
                          ) : null
                        ) : null
                      ) : null}

                      {/*---------------- POP-UP VALIDACIÓN TAREA 4-1 ----------------------*/}
                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible4}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal4}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>
                            <Text style={Styles.textFeedBack}>Formulario de Conocimiento</Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <View style={Styles.inputPDF}/>
                            <View style={Styles.ContainerAviso}>
                              <View style={Styles.ContainerAviso2}> 
                                <Icon 
                                  name="info"
                                  color="#3B82F6"
                                />
                                <Text style={Styles.infoContainerAviso}>                        
                                  Aviso {"\n"}
                                  Después de leer el documento y 
                                  en caso de ser toda la información correcta, 
                                  de click en el botón de
                                  <Text style={Styles.infoContainerAviso2}> Validar</Text>. En caso de haber algún error 
                                  de click en el botón de <Text style={Styles.infoContainerAviso2}>Devolver</Text>.
                                </Text>                              
                              </View>
                              <View style={Styles.ContainerComentario}>
                                <Text style={Styles.infoContainerAviso1}>Comentarios</Text>
                                <View style={Styles.horizontalDivider1}/>
                                  <TextInput
                                    style={Styles.inputFeedBack}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Añadir Comentario de devolución"
                                  />         
                              </View>
                              <View style={Styles.containerBotones}>
                                <TouchableOpacity
                                  style={[Styles.buttonsApprovedRed,{backgroundColor: "#EFEFEF",marginRight: wp("0.5%")}]}
                                  onPress={functionCombined4}
                                >
                                  <Text style={[Styles.textApprovade,{color: '#FE8171'}]}>Devolver</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={Styles.buttonsApprovedRed}
                                  onPress={toggleApprovade4}
                                >
                                  <Text style={Styles.textApprovade}>Validar</Text>
                                </TouchableOpacity>                                
                              </View>                              
                            </View>                             
                          </View>
                        </View>                                                                   
                      </Modal>
                      {/*---------------- POP-UP VALIDACIÓN TAREA 4-2 ----------------------*/}
                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible5}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal5}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>
                            <Text style={Styles.textFeedBack}>Carta de Declaración de Voluntad</Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <View style={Styles.inputPDF}/>
                            <View style={Styles.ContainerAviso}>
                              <View style={Styles.ContainerAviso2}> 
                                <Icon 
                                  name="info"
                                  color="#3B82F6"
                                />
                                <Text style={Styles.infoContainerAviso}>                        
                                  Aviso {"\n"}
                                  Después de leer el documento y 
                                  en caso de ser toda la información correcta, 
                                  de click en el botón de
                                  <Text style={Styles.infoContainerAviso2}> Validar</Text>. En caso de haber algún error 
                                  de click en el botón de <Text style={Styles.infoContainerAviso2}>Devolver</Text>.
                                </Text>                              
                              </View>
                              <View style={Styles.ContainerComentario}>
                                <Text style={Styles.infoContainerAviso1}>Comentarios</Text>
                                <View style={Styles.horizontalDivider1}/>
                                  <TextInput
                                    style={Styles.inputFeedBack}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Añadir Comentario de devolución"
                                  />         
                              </View>
                              <View style={Styles.containerBotones}>
                                <TouchableOpacity
                                  style={[Styles.buttonsApprovedRed,{backgroundColor: "#EFEFEF",marginRight: wp("0.5%")}]}
                                  onPress={functionCombined5}
                                >
                                  <Text style={[Styles.textApprovade,{color: '#FE8171'}]}>Devolver</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={Styles.buttonsApprovedRed}
                                  onPress={toggleApprovade5}
                                >
                                  <Text style={Styles.textApprovade}>Validar</Text>
                                </TouchableOpacity>                                
                              </View>                              
                            </View>                             
                          </View>
                        </View>                                                                   
                      </Modal>
                      
                      {/*---------------- POP-UP VALIDACIÓN TAREA 4-3 ----------------------*/}
                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible6}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal6}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>
                            <Text style={Styles.textFeedBack}>Carta de Autorización 1</Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <View style={Styles.inputPDF}/>
                            <View style={Styles.ContainerAviso}>
                              <View style={Styles.ContainerAviso2}> 
                                <Icon 
                                  name="info"
                                  color="#3B82F6"
                                />
                                <Text style={Styles.infoContainerAviso}>                        
                                  Aviso {"\n"}
                                  Después de leer el documento y 
                                  en caso de ser toda la información correcta, 
                                  de click en el botón de
                                  <Text style={Styles.infoContainerAviso2}> Validar</Text>. En caso de haber algún error 
                                  de click en el botón de <Text style={Styles.infoContainerAviso2}>Devolver</Text>.
                                </Text>                              
                              </View>
                              <View style={Styles.ContainerComentario}>
                                <Text style={Styles.infoContainerAviso1}>Comentarios</Text>
                                <View style={Styles.horizontalDivider1}/>
                                  <TextInput
                                    style={Styles.inputFeedBack}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Añadir Comentario de devolución"
                                  />         
                              </View>
                              <View style={Styles.containerBotones}>
                                <TouchableOpacity
                                  style={[Styles.buttonsApprovedRed,{backgroundColor: "#EFEFEF",marginRight: wp("0.5%")}]}
                                  onPress={functionCombined6}
                                >
                                  <Text style={[Styles.textApprovade,{color: '#FE8171'}]}>Devolver</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={Styles.buttonsApprovedRed}
                                  onPress={toggleApprovade6}
                                >
                                  <Text style={Styles.textApprovade}>Validar</Text>
                                </TouchableOpacity>                                
                              </View>                              
                            </View>                             
                          </View>
                        </View>                                                                   
                      </Modal>

                      {/*---------------- POP-UP VALIDACIÓN TAREA 4-4 ----------------------*/}
                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible7}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal7}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>
                            <Text style={Styles.textFeedBack}>Carta de Autorización 2</Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <View style={Styles.inputPDF}/>
                            <View style={Styles.ContainerAviso}>
                              <View style={Styles.ContainerAviso2}> 
                                <Icon 
                                  name="info"
                                  color="#3B82F6"
                                />
                                <Text style={Styles.infoContainerAviso}>                        
                                  Aviso {"\n"}
                                  Después de leer el documento y 
                                  en caso de ser toda la información correcta, 
                                  de click en el botón de
                                  <Text style={Styles.infoContainerAviso2}> Validar</Text>. En caso de haber algún error 
                                  de click en el botón de <Text style={Styles.infoContainerAviso2}>Devolver</Text>.
                                </Text>                              
                              </View>
                              <View style={Styles.ContainerComentario}>
                                <Text style={Styles.infoContainerAviso1}>Comentarios</Text>
                                <View style={Styles.horizontalDivider1}/>
                                  <TextInput
                                    style={Styles.inputFeedBack}
                                    onChangeText={onChangeText}
                                    value={text}
                                    placeholder="Añadir Comentario de devolución"
                                  />         
                              </View>
                              <View style={Styles.containerBotones}>
                                <TouchableOpacity
                                  style={[Styles.buttonsApprovedRed,{backgroundColor: "#EFEFEF",marginRight: wp("0.5%")}]}
                                  onPress={functionCombined7}
                                >
                                  <Text style={[Styles.textApprovade,{color: '#FE8171'}]}>Devolver</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={Styles.buttonsApprovedRed}
                                  onPress={toggleApprovade7}
                                >
                                  <Text style={Styles.textApprovade}>Validar</Text>
                                </TouchableOpacity>                                
                              </View>                              
                            </View>                             
                          </View>
                        </View>                                                                   
                      </Modal>

                      {isVisibleApprovade4 ? (
                        isVisibleApprovade5 ? (
                          isVisibleApprovade6 ? (
                            isVisibleApprovade7 ? (
                              isVisibleEndTask5 ? null : (
                                <TouchableOpacity
                                  style={Styles.widthTasks}
                                  onPress={toggleEndTask5}
                                >
                                  <View style={Styles.nextButtonTasks}>
                                    <Text style={Styles.textApprovadeNext}>
                                      Siguiente
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              )
                            ) : null
                          ) : null
                        ) : null
                      ) : null}

                      {isVisibleEndTask6 ? (
                        <View style={Styles.infoContainerAprovedTask1}>
                          <View style={Styles.infoContainerAprovedRow}>
                            <Text style={Styles.taskTitle1}>Tarea 5</Text>
                            <Icon
                              name="check"
                              color="#0072C3"
                              setModalVisible="false"
                            />
                            <TouchableOpacity
                              style={Styles.buttonUndo}
                              onPress={toggleEndTask6}
                            >
                              <Text style={Styles.textUndo}>Deshacer</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={Styles.buttonsApproved}
                              onPress={toggleEndTask6}
                            >
                              <Text style={Styles.textApprovade}>Revisar</Text>
                            </TouchableOpacity>
                          </View>
                          <LinearGradient
                            style={Styles.statusCardBottomFondo}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            colors={["#0072C3", "#FFFFFF"]}
                          />
                        </View>
                      ) : isVisibleApprovade ? (
                        isVisibleApprovade1 ? (
                          isVisibleApprovade2 ? (
                            isVisibleApprovade3 ? (
                              isVisibleNextTask1 ? (
                                isVisibleCompleteTask2 ? (
                                  isVisibleEndTask4 ? (
                                    isVisibleEndTask5 ? (
                                      <View style={Styles.infoContainerPerfil}>
                                        <Text style={Styles.taskTitle1}>
                                          Tarea 5
                                        </Text>
                                        <Text style={Styles.taskText}>
                                          {" "}
                                          Realizar consulta en listas
                                        </Text>
                                        {isVisibleNextTask5 ? null : (
                                          <View
                                            style={
                                              Styles.infoContainerButtonsTask2
                                            }
                                          >
                                            <TouchableOpacity
                                              style={Styles.widthTasksThree}
                                              onPress={toggleModal8}
                                            >
                                              <View
                                                style={
                                                  Styles.buttonsApprovedSend
                                                }
                                              >
                                                <Text
                                                  style={Styles.textApprovade}
                                                >
                                                  Ejecutar
                                                </Text>
                                              </View>
                                            </TouchableOpacity>
                                          </View>
                                        )}
                                      </View>
                                    ) : null
                                  ) : null
                                ) : null
                              ) : null
                            ) : null
                          ) : null
                        ) : null
                      ) : null}

                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible8}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal8}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>

                            <Text style={Styles.textFeedBack}>
                              La persona no tiene riesgos
                            </Text>
                          </View>

                          <TextInput
                            style={Styles.inputFeedBack}
                            value="La persona no tiene riesgos"
                          />

                          <TouchableOpacity onPress={functionCombined8}>
                            <View style={Styles.buttonTextSend}>
                              <Text style={Styles.textbuttonTaskValidar}>
                                Enviar
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </Modal>

                      <Modal
                        style={Styles.modalBack}
                        isVisible={isModalVisible9}
                      >
                        <View style={Styles.backgroundModal}>
                          <View style={Styles.backModal}>
                            <TouchableOpacity
                              style={Styles.buttonHideModal}
                              onPress={toggleModal9}
                            >
                              <Text style={Styles.textHideModal}>X</Text>
                            </TouchableOpacity>

                            <Text style={Styles.textFeedBack}>
                              La persona tiene riesgos
                            </Text>
                          </View>

                          <TextInput
                            style={Styles.inputFeedBack}
                            onChangeText={onChangeText}
                            placeholder="Añadir Razón"
                            value={text}
                          />

                          <TouchableOpacity onPress={functionCombined9}>
                            <View style={Styles.buttonTextSend}>
                              <Text style={Styles.textbuttonTaskValidar}>
                                Enviar
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </Modal>

                      {isVisibleEndTask5 ? (
                        isVisibleEndTask6 ? null : isVisibleApprovade ? (
                          isVisibleApprovade1 ? (
                            isVisibleApprovade2 ? (
                              isVisibleApprovade3 ? (
                                isVisibleNextTask3 ? (
                                  isVisibleEndTask4 ? (
                                    <TouchableOpacity
                                      style={Styles.widthTasks}
                                      onPress={toggleEndTask6}
                                    >
                                      <View style={Styles.nextButtonTasks}>
                                        <Text style={Styles.textApprovadeNext}>
                                          Siguiente
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  ) : null
                                ) : null
                              ) : null
                            ) : null
                          ) : null
                        ) : null
                      ) : null}

                      {isVisibleEndTask6 ? (
                        isVisibleApprovade ? (
                          isVisibleApprovade1 ? (
                            isVisibleApprovade2 ? (
                              isVisibleApprovade3 ? (
                                isVisibleNextTask1 ? (
                                  <View style={Styles.infoContainerPerfil}>
                                    {isVisibleCompleteTask6 ? (
                                      <View
                                        style={Styles.infoContainerAprovedTask1}
                                      >
                                        <View
                                          style={Styles.infoContainerAprovedRow}
                                        >
                                          <Text style={Styles.taskTitle1}>
                                            Tarea 6
                                          </Text>
                                          <Icon
                                            name="check"
                                            color="#0072C3"
                                            setModalVisible="false"
                                          />
                                          <TouchableOpacity
                                            style={Styles.buttonUndo}
                                            onPress={toggleCompleteTask6}
                                          >
                                            <Text style={Styles.textUndo}>
                                              Deshacer
                                            </Text>
                                          </TouchableOpacity>

                                          <TouchableOpacity
                                            style={Styles.buttonsApproved}
                                            onPress={toggleCompleteTask6}
                                          >
                                            <Text style={Styles.textApprovade}>
                                              Revisar
                                            </Text>
                                          </TouchableOpacity>
                                        </View>
                                        <LinearGradient
                                          style={Styles.statusCardBottomFondo1}
                                          start={{ x: 1, y: 0 }}
                                          end={{ x: 0, y: 0 }}
                                          colors={["#0072C3", "#FFFFFF"]}
                                        />
                                      </View>
                                    ) : (
                                      <View style={Styles.infoContainerPerfil}>
                                        <Text style={Styles.taskTitle1}>
                                          Tarea 6
                                        </Text>{" "}
                                        <Text style={Styles.taskText}>
                                          {" "}
                                          Verificación de pagare Deceval{" "}
                                        </Text>
                                        <View
                                          style={
                                            Styles.infoContainerButtonsTask2
                                          }
                                        >
                                          {isVisibleCompleteTask6 ? null : (
                                            <TouchableOpacity
                                              style={Styles.widthTasksThree}
                                            >
                                              <View style={Styles.buttonsBack3}>
                                                <Text style={Styles.textUndo}>
                                                  Deshacer
                                                </Text>
                                              </View>
                                            </TouchableOpacity>
                                          )}

                                          {isVisibleCompleteTask6 ? null : (
                                            <TouchableOpacity
                                              style={Styles.widthTasksThree}
                                              onPress={toggleCompleteTask6}
                                            >
                                              <View
                                                style={
                                                  Styles.buttonsApprovedComplete2
                                                }
                                              >
                                                <Text
                                                  style={Styles.textApprovade}
                                                >
                                                  Completado
                                                </Text>
                                              </View>
                                            </TouchableOpacity>
                                          )}
                                        </View>
                                      </View>
                                    )}
                                  </View>
                                ) : null
                              ) : null
                            ) : null
                          ) : null
                        ) : null
                      ) : null}

                      {isVisibleCompleteTask6 ? null : isVisibleApprovade ? (
                        isVisibleApprovade1 ? (
                          isVisibleApprovade2 ? (
                            isVisibleApprovade3 ? (
                              isVisibleNextTask1 ? (
                                isVisibleEndTask6 ? (
                                  <TouchableOpacity
                                    style={Styles.widthTasks}
                                    onPress={toggleCompleteTask6}
                                  >
                                    <View style={Styles.nextButtonTasks}>
                                      <Text style={Styles.textApprovadeNext}>
                                        Finalizar
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                ) : null
                              ) : null
                            ) : null
                          ) : null
                        ) : null
                      ) : null}
                    </ScrollView>
                  </View>
                ) : (
                  <View>
                    <FlatList
                      data={DATA}
                      renderItem={({ item }) => (
                        <Documents_ComponentList
                          docName={item.docName}
                          weigth={item.weigth}
                          date={item.date}
                        />
                      )}
                      keyExtractor={(item) => item.id}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PerfilEmpleado;
