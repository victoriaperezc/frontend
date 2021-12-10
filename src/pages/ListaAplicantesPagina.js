import React from "react";
import { StyleSheet, View, Platform, Text, TouchableOpacity, FlatList } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SearchBar_Component } from "../components/SearchBar_Component";
import { HeaderFondo_Component } from '../components/HeaderFondo_Component';
import { Styles } from '../styles/Styles';
import SwitchSelector from "react-native-switch-selector";

const DATA = [
  {
    id: "1",
    name: "Alejandra Rincon",
    progress: 0.5,
    state: "Tarea 3",
  },
  {
    id: "2",
    name: "Nicolas Sarmiento",
    progress: 0.6,
    state: "Tarea 4",
  },
  {
    id: "3",
    name: "Karen Helena Roa",
    progress: 0.3,
    state: "Tarea 2",
  },
];


const ListaAplicantesPagina = ({ navigation }) => {
  const options = [
    { label: "Filtros", value: 'filtros' },
    { label: "Actualizaciones Recientes", value: 'actualizaciones' },
    { label: "Procesos Finalizados", value: 'finalizados' },
    { label: "Nuevos Ingresos", value: 'ingresos' },
    { label: "Póliza Exequial", value: 'poliza' },
  ];

  const setView = (component) => {
    if (component == 'perfil') {
        setShouldShow(true);
    } else {
        setShouldShow(false);
    }
}

  return (
    <View style={styles.container}>
      <HeaderFondo_Component />
      <SearchBar_Component />
      <View style={Styles.backListApplicants}>
        <View style={Styles.backWindowButtons}>
          <SwitchSelector
            options={options}
            initial={0}
            onPress={(value) => setView(value.toString())}
            textColor="#FE462C"
            buttonColor="#FFFFFF"
            selectedColor="#FE462C"
            backgroundColor="#FFFFFF"
            selectedTextStyle={Styles.profileOptionsButtonText}
          />
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={Styles.applicantInfoContainer}>
              <Text style={Styles.nameText}>{item.name}</Text>
              <View style={[Styles.containerColumn, { flex: 3, alignContent:'flex-end'}]}>
                <ProgressBar
                  style={Styles.progressBar}
                  progress={item.progress}
                  color="#2C698D"
                />
                <View style={[Styles.containerRow, { justifyContent: "flex-end", marginTop: '2%' }]}>
                  <Text style={Styles.progressText}>{item.progress * 100}%</Text>
                </View>
              </View>
              <View style={Styles.lineDivider} />
              <Text style={styles.state}>{item.state}</Text>
              <View style={Styles.lineDivider} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.buttonPerfil}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("PerfilEmpleado", item)}
                >
                  <Text style={styles.textButtonProfileDocuments}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonDocs}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("DocumentosEmpleado")}
                >
                  <Text style={styles.textButtonProfileDocuments}>
                    Documentos
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  textbuttonWindow: {
    color: "#FE462C",
    fontSize: wp("1%"),
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    flexWrap: "wrap"
  },
  
  progress: {
    height: 20,
    width: 170,
    borderRadius: 4,
  },
  state: {
    fontFamily: "WorkSans",
    fontSize: hp("2.5%"),
    color: "#2C698D",
    flex: 2,
    textAlign: "center",
    paddingTop: hp("1.5%"),
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    width: wp("16%"),
  },
  buttonWindows: {
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("1.7%"),
  },
  textButtonProfileDocuments: {
    fontFamily: "WorkSans",
    fontSize: wp("1%"),
    color: "#ffffff",
    textAlign: "center",
  },
  buttonPerfil: {
    display: "flex",
    backgroundColor: "#FE8171",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
    width: wp("7%"),
  },
  buttonDocs: {
    display: "flex",
    backgroundColor: "#FE8171",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: wp("10%"),
  },
});

export default ListaAplicantesPagina;
