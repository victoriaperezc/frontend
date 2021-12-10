import React from "react";
import { Image, StyleSheet, View, Platform, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SearchBar_Component } from "../components/SearchBar_Component";
import { HeaderFondo_Component } from '../components/HeaderFondo_Component';


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
      docName: "Póliza Excequial",
      weigth: 90,
      date: "10/29/2021",
    }
  ];

const DocumentosEmpleadoPagina = ({ navigation }) => {
    return (
    <View style={styles.container}>
      <HeaderFondo_Component/>
      <SearchBar_Component/>

      <View style={styles.backListApplicants}>
        <View style={styles.backWindowButtons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.buttonWindows}>
              <Text style={styles.textbuttonWindow}>Perfil</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DocumentosEmpleado")}>
            <View style={styles.buttonWindows}>
              <Text style={styles.textbuttonWindow}>Documentos</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.infoContainer}>

              <Text style={styles.name}>{item.docName}</Text>
              <View style={styles.lineDivider} />
              <Text style={styles.date}>{item.weigth}KB</Text>
              <View style={styles.lineDivider} />
              <Text style={styles.date}>{item.date}</Text>
              <View style={styles.lineDivider} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.buttonDownload}
                  activeOpacity={0.5}
                  onPress={() => {}}
                >
                  <Text style={styles.textButtonProfileDocuments}>Descargar</Text>
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
  lineDivider: {
    borderWidth: 0.5,
    backgroundColor: "#A0A0A0",
    borderColor: "#A0A0A0",
    height: hp("6%"),
    marginTop: hp("0.5%"),
    marginHorizontal: wp("2%"),
  },
  textbuttonWindow: {
    color: "#FE462C",
    fontSize: wp("1%"),
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  inputSearch: {
    ...Platform.select({
      android: {
        height: hp("5%"),
        width: wp("80%"),
        marginTop: hp("3%"),
        marginLeft: wp("2%"),
        borderWidth: wp("0.2%"),
        borderColor: "#9b9b9b",
        paddingLeft: wp("5%"),
        fontSize: wp("5%"),
      },
      default: {
        flex: 1,
        height: hp("6.3%"),
        borderColor: "transparent",
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: wp("2%"),
      },
    }),
  },
  sectionStyleInputSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    opacity: 0.5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    height: hp("6%"),
    borderRadius: 8,
    marginTop: hp("1.5%"),
    marginBottom: hp("1%"),
    marginHorizontal: hp("30%"),
    borderStyle: "solid",
  },
  imageStyleInputSearch: {
    padding: 10,
    margin: 5,
    height: 19,
    width: 19,
    marginRight: wp("1%"),
    resizeMode: "stretch",
    alignItems: "flex-end",
    borderColor: "#000",
  },
  container: {
    flex: 1,
    flexWrap: "wrap",
  },
  backListApplicants: {
    height: hp("90%"),
    width: wp("90%"),
    marginTop: hp("1%"),
    marginHorizontal: wp("2%"),
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  backWindowButtons: {
    height: hp("5%"),
    width: wp("85%"),
    flexDirection: "row",
    marginTop: wp("2%"),
    marginHorizontal: wp("2%"),
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 5,
  },
  progress: {
    height: 20,
    width: 170,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "#F9F9F9",
    padding: 20,
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
    marginHorizontal: wp("2%"),
    borderRadius: 15,
    borderColor: "#FE462C",
    borderWidth: "1.25px",
  },
  name: {
    fontFamily: "WorkSans",
    fontSize: hp("2.5%"),
    color: "#2C698D",
    flex: 4,
    alignItems: "center",
    paddingTop: hp("1.5%"),
    paddingLeft: wp("1.5%"),
  },
  progressContainer: {
    flexDirection: "column",
    flex: 3,
  },
  date: {
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
  buttonDownload: {
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

export default DocumentosEmpleadoPagina;