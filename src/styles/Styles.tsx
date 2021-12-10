import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
  simpleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerColumn: {
    display: "flex",
    flex: 1,
    height: " 100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerRow: {
    display: "flex",
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
        fontFamily: 'WorkSans'
      },
      default: {
        flex: 1,
        height: hp("6.3%"),
        borderColor: "transparent",
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: wp("2%"),
        color: '#CACACA',
        fontFamily: 'WorkSans'
      },
    }),
  },
  sectionStyleInputSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: "#E1E1E1",
    height: hp("6%"),
    borderRadius: 8,
    marginTop: hp("6%"),
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
  loginContainer: {
    display: "flex",
    height: "100%",
    width: "45%",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  registryContainer: {
    display: "flex",
    height: "100%",
    width: "55%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loginComponents: {
    display: "flex",
    height: "50%",
    width: "60%",
    flexDirection: "column",
  },
  registryComponents: {
    height: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-around",
  },
  welcomeText: {
    fontSize: hp("3.6%"),
    textAlign: 'center',
    fontFamily: 'MontserratBold',
    color: '#2C698D',
    marginBottom: hp("2%"),
    marginTop: hp("6%"),
  },
  loginTextField: {
    ...Platform.select({
      web: {
        outlineStyle: 'none',
        marginTop: hp("5%"),
        display: "flex",
        width: "100%",
        height: "100%",
        fontSize: hp("2%"),
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        paddingBottom: "3%",
        fontFamily: 'WorkSans',
        color: '#2C698D'
      },
    }),
  },
  loginButton: {
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#0072C3",
    textAlign: "center",
    width: "fit-content",
    height: wp("3%"),
    marginHorizontal: "1%",
  },
  registerButton: {
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#F1F1F1",
    borderWidth: 1,
    borderColor: '#0072C3',
    textAlign: "center",
    width: "fit-content",
    height: hp("6%"),
    marginHorizontal: "1%",
  },
  logginButtonText: {
    fontSize: wp("1%"),
    color: "#ffffff",
    paddingHorizontal: 25,
    paddingVertical: 5,
    fontFamily: "WorkSans",
  },
  registerButtonText: {
    fontSize: hp("2%"),
    color: "#0072C3",
    paddingHorizontal: 25,
    paddingVertical: 5,
    fontFamily: "WorkSans",
  },
  hugeTextLogin: {
    color: "#2C698D",
    fontFamily: "MontserratBold",
    textAlign: "center",
    fontSize: hp("5%"),
  },
  hugeText: {
    color: "#001D6C",
    fontFamily: "MontserratLight",
    textAlign: "center",
    fontSize: hp("5%"),
  },
  mediumTextLogin: {
    color: "#2C698D",
    fontFamily: "WorkSans",
    textAlign: "center",
    fontSize: hp("2.5%"),
  },
  mediumText: {
    textAlign: "center",
    fontSize: hp("2%"),
  },
  smallText: {
    textAlign: "center",
    fontSize: hp("1.5%"),
  },
  bigText: {
    textAlign: "center",
    fontSize: hp("3%"),
  },
  progressText: {
    fontSize: hp("2%"),
    fontFamily: "WorkSans",
    color: "rgba(44, 105, 141, 0.8)",
    paddingRight: wp("3%"),
  },
  nameText: {
    fontFamily: "WorkSans",
    fontSize: hp("2.5%"),
    color: "#2C698D",
    flex: 4,
    alignItems: "center",
    paddingTop: hp("1.5%"),
    paddingLeft: wp("1.5%"),
  },
  lineDivider: {
    borderWidth: 0.5,
    backgroundColor: "#dbdbdb",
    borderColor: "#dbdbdb",
    opacity: 0.7,
    height: hp("6%"),
    marginTop: hp("0.5%"),
    marginHorizontal: wp("2%"),
  },
  headerBar: {
    display: "flex",
    height: hp("10%"),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerBarFondo: {
    display: "flex",
    height: hp("10%"),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#0072C3",
    left: 0,
    right: 0,
    top: 0,
  },
  headerBarLeft: {
    width: "90%",
    height: "100%",
    justifyContent: "center",
  },
  headerText: {
    color: "#ffffff",
    fontFamily: "MontserratExtraLight",
    textAlign: "center",
    fontSize: hp("5%"),
  },
  headerBarRight: {
    display: "flex",
    width: wp("8%"),
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("10%"),
  },
  bottomBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("4.8%"),
  },
  circles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    flex: 1,
    width: "45%",
    height: "45%",
    resizeMode: "center",
  },
  profileImageButton: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginRight: wp("3%"),
    width: wp("8%"),
  },
  profileCardImage: {
    width: "40%",
    height: "40%",
    resizeMode: "center",
  },
  profileCardBottom: {
    //backgroundColor: "#FE462C", //Kyndril
    backgroundColor: '#0072C3', //IBM
    marginTop: hp("21%"),
    height: hp("3%"),
    width: wp("22%"),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileCardBottomLogin: {
    backgroundColor: "#FE462C",
    height: '10%',
    width: wp("45%"),
    marginLeft: wp("-9%"),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileCardBottomFondo: {
    backgroundColor: '#0072C3',
    height: hp("3%"),
    width: wp("22%"),
    marginTop: hp("10%"),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileCardText: {
    fontFamily: "WorkSans",
    color: "#2C698D",
    textAlign: "center",
    marginTop: hp("0.3%"),
    marginBottom: hp("2%"),
    fontSize: hp("2.5%"),
  },
  profileCardTextName: {
    fontFamily: "MontserratBold",
    color: "#2C698D",
    textAlign: "center",
    marginTop: hp("1%"),
    marginBottom: hp("2%"),
    fontSize: hp("3%"),
  },
  profileCardMailSlackContainer: {
    height: hp("10%"),
    width: wp("25%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  profileCardTextMailSlack: {
    fontFamily: "WorkSans",
    color: "#2C698D",
    textAlign: "center",
    marginTop: hp("1.5%"),
    fontSize: hp("2.5%"),
  },
  profileCard: {
    display: "flex",
    flexDirection: "column",
    height: hp("85%"),
    width: wp("22%"),
    borderRadius: 10,
    marginTop: hp("2%"),
    marginLeft: wp("3%"),
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  verticalDivider: {
    borderWidth: 0.5,
    backgroundColor: "#A0A0A0",
    borderColor: "#A0A0A0",
    height: hp("6%"),
    marginTop: hp("0.5%"),
  },
  horizontalDivider: {
    borderWidth: 0.5,
    backgroundColor: "#A0A0A0",
    borderColor: "#A0A0A0",
    width: wp("50%"),
    marginTop: wp("0.75%"),
  },
  profileBodyRightContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    height: "80%",
    width: "94%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginRight: wp("3%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    paddingTop: hp("6%"),
  },
  backListApplicants: {
    height: hp("90%"),
    width: wp("90%"),
    alignSelf: 'center',
    marginTop: hp("1%"),
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
    width: "100%",
    flexDirection: "row",
    marginBottom: hp("2%"),
    marginTop: hp("4%"),
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
  profileOptionsButtonContainer: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    marginBottom: hp("2%"),
    marginTop: hp("2%"),
    alignItems: "center",
    justifyContent: "center",
  },
  profileOptionsButton: {
    marginHorizontal: wp("1%"),
  },
  profileOptionsButtonText: {
    marginHorizontal: wp("3%"),
    fontSize: hp("2.5%"),
    paddingBottom: hp("1%"),
    color: "#FE462C",
    textAlign: "center",
    fontFamily: "MontserratBold",
    textDecorationLine: "underline",
  },
  processStateContainer: {
    flexDirection: "column",
    display: "flex",
    height: wp("9%"),
    width: wp("55%"),
    marginBottom: wp("1%"),
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("5%"),
  },
  statusCardBottom: {
    marginTop: 70,
    height: hp("3%"),
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  statusCardBottomFondo: {
    marginTop: hp("2.5%"),
    height: hp("3%"),
    width: wp("55%"),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  statusCardBottomFondoToDo: {
    marginTop: hp("2.5%"),
    height: hp("3%"),
    width: wp("55%"),
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  statusCardBottomFondo1: {
    marginTop: 50,
    marginLeft: -20,
    height: hp("3%"),
    width: wp("55%"),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  statusCardBottomTask: {
    marginTop: hp("2.5%"),
    height: hp("3%"),
    width: wp("55%"),
    marginLeft: -40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  statusBottomBackground: {
    flex: 1,
  },
  docummentsContainer: {
    flexDirection: "column",
    display: "flex",
    height: wp("5%"),
    width: wp("55%"),
    marginBottom: hp("2%"),
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    height: wp("5%"),
    width: wp("55%"),
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    marginBottom: hp("1%"),
    borderRadius: 15,
    borderColor: "#FE462C",
    borderWidth: 1.25,
  },
  name: {
    fontFamily: "WorkSans",
    fontSize: hp("2.5%"),
    color: "#2C698D",
    width: "35%",
    alignItems: "center",
    paddingLeft: wp("1.5%"),
  },
  date: {
    fontFamily: "WorkSans",
    fontSize: hp("2.5%"),
    color: "#2C698D",
    width: "20%",
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "35%",
  },
  textButtonDocuments: {
    fontFamily: "WorkSans",
    fontSize: wp("1%"),
    color: "#ffffff",
    textAlign: "center",
  },
  progressBar: {
    borderRadius: 10,
    height: hp("2%"),
    width: wp("13%")
  },
  formViewBody: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  formViewUpperBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: wp("10%"),
  },
  stepBar: {
    display: "flex",
    flexDirection: "row",
    height: wp('3%'),
    width: wp('35%'),
    justifyContent: "space-between",
    alignItems: "center",
  },

  stepBox: {
    borderRadius: 20,
    height: "60%",
    width: "5%",
    backgroundColor: "gray",

  },

  stepLine: {
    height: 0.5,
    backgroundColor: "#2C698D",
    border: 0.01,
    width: "12%",
  },

  container1: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 3.5,
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    height: "70%",
    width: "60%",
    backgroundColor: "#ffffff",
  },
  container4: {
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  container5: {
    height: "50%",
  },
  applicantInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "#F9F9F9",
    padding: 17,
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
    marginHorizontal: wp("2%"),
    borderRadius: 15,
    borderColor: "#FE462C",
    borderWidth: 1.25
  },
  textProfile: {
    textAlign: "center",
    fontSize: hp("3%"),
  },
  DocumentsPannelStyle: {
    height: "70%",
    width: "80%",
  },
  DocummentsPannelMenuStyle: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  DocummentsPannelStepsStyle: {
    marginVertical: "4%",
    borderWidth: 2,
    borderColor: "rgb(220,220,220)",
    borderRadius: 40,
    height: "30%",
    alignItems: "center",
  },
  backProfileFormulario: {
    height: "20%",
    width: "80%",
    flexDirection: "row",
  },
  paso1Formulario: {
    height: hp("5%"), // 70% of height device screen
    width: wp("10%"), // 80% of width device screen
    //flexDirection: 'row',
    marginLeft: wp("15%"),
    marginTop: wp("4%"),
    //justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "#D0D3D4",
    backgroundColor: "#D0D3D4",
    borderWidth: wp("0.2%"),
  },
  linea: {
    height: hp("0.1%"), // 70% of height device screen
    width: wp("4.5%"), // 80% of width device screen
    marginLeft: wp("0%"),
    marginRight: wp("0%"),
    marginTop: wp("5%"),
    borderColor: "#808080",
    borderWidth: wp("0.1%"),
  },
  paso2Formulario: {
    height: hp("5%"), // 70% of height device screen
    width: wp("10%"), // 80% of width device screen
    //flexDirection: 'row',
    marginLeft: wp("0%"),
    marginTop: wp("4%"),
    //justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "#808080",
    backgroundColor: "#808080",
    borderWidth: wp("0.2%"),
  },
  paso3Formulario: {
    height: hp("5%"), // 70% of height device screen
    width: wp("10%"), // 80% of width device screen
    //flexDirection: 'row',
    marginLeft: wp("0%"),
    marginTop: wp("4%"),
    //justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "#D0D3D4",
    backgroundColor: "#D0D3D4",
    borderWidth: wp("0.2%"),
  },
  DocumentsFieldStyle: {
    height: "90%",
  },
  formContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    paddingTop: "4%",
    backgroundColor: "#ffffff",
    height: "70%",
    width: "80%",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 1,
  },

  formFieldsContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "80%",
  },
  windowDocuments: {
    marginTop: wp("1%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    height: hp("5%"),
    width: wp("70%"),
    backgroundColor: "#f9f9f9",
  },
  formFillFont: {
    color: "#4B4B4B",
    fontFamily: "workSans",
    textAlign: "center",
  },
  textInputInformacionGeneral: {
    backgroundColor: "white",
    marginTop: "1%",
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "white",
    marginTop: "1%",
  },
  picker: {
    marginTop: "1%",
  },
  pickerError: {
    marginTop: "1%",
    borderColor: "red",
    borderWidth: 2,
  },
  errorText: {
    //fontSize: 10,
    color: "red",
    fontFamily: "cursive",
  },
  textInputDireccion: {
    backgroundColor: "white",
    marginTop: "1%",
    height: "70%",
    marginRight: "1%",
    width: "32%",
  },
  errorInputDireccion: {
    backgroundColor: "white",
    marginTop: "1%",
    height: "70%",
    marginRight: "1%",
    width: "32%",
    borderColor: "red",
    borderWidth: 2,
  },
  textInputGrandeInformacionGeneral: {
    height: hp("20%"),
    backgroundColor: "white",
    justifyContent: "flex-start",
    marginTop: "1%",
  },
  errorInputGrandeInformacionGeneral: {
    height: hp("20%"),
    backgroundColor: "white",
    justifyContent: "flex-start",
    marginTop: "1%",
    borderColor: "red",
    borderWidth: 2,
  },
  loginTextFieldContainer: {
    display: "flex",
    height: "55%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D0D3D4',
    width: wp('75%'),
    height: wp('35%'),
    alignSelf: 'center',
    marginVertical: 'auto',
  },
  modalHeader: {
    display: 'flex',
    marginBottom: 'auto',
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    display: 'flex',
    height: '75%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBodyInnerContainer: {
    backgroundColor: '#c9c9c9',
    display: 'flex',
    height: '85%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
  },
  modalCloseButton: {
    margin: wp('0.5%'),
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
    marginRight: 'auto',
    width: wp('2%'),
    height: wp('2%'),
  },
  modalCloseButtonText: {
    fontSize: wp('2%'),
    color: '#808080',
  },
  modalText: {
    textAlign: 'center',
    fontFamily: 'workSans',
    margin: wp('1%'),
  },
  modalSignsContainer: {
    backgroundColor: '#d9d9d9',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signOptionContainer: {
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: wp('3%'),
    display: 'flex',
    height: wp('15%'),
    width: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalSendButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('5%'),
    height: wp('2%'),
    backgroundColor: '#1F3159',
    borderColor: '#1F3159',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 'auto',
    margin: wp('1%'),
  },
  modalButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    width: wp('8%'),
    height: wp('2%'),
    margin: wp('1%'),
    borderWidth: 1,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: wp('1%'),
    textAlign: 'center',
    fontFamily: 'worksans',
  },
  iconTask2: {
    marginLeft: wp("20%"),
  },
  lineProfile: {
    borderWidth: wp("0.1%"),
    height: hp("68%"),
    marginTop: hp("0%"),
    marginLeft: wp("3%"),
  },
  taskTitle: {
    fontFamily: "MontserratBold",
    textAlign: "left",
    fontSize: wp("1.5%"),
    color: '#2C698D'
  },
  taskTitle1: {
    fontFamily: "MontserratSemiBold",
    textAlign: "center",
    fontSize: wp("1.3%"),
    color: '#2C698D',
    marginRight: wp('1%')
  },
  taskTitle1Approved: {
    fontFamily: "WorkSansSemiBold",
    textAlign: "center",
    fontSize: wp("1.3%"),
    color: '#0072C3'
  },
  taskTitle4: {
    fontFamily: "Montserrat",
    textAlign: "left",
    fontSize: wp("1.2%"),
    paddingTop: hp("1%"),
  },
  taskText: {
    fontFamily: "Montserrat",
    textAlign: "left",
    fontSize: wp("1.2%"),
    marginTop: 20,
  },
  widthTask: {
    width: wp("12.5%"),
    height: hp("10%"),
    alignItems: 'center',
    flexDirection: 'row',
  },
  widthTasks: {
    width: wp("12.5%"),
    height: hp("10%"),
    fontFamily: "WorkSans",
    fontSize: wp("1.2%"),
    color: '#2C698D',
    alignItems: 'center'
  },
  widthTasksText: {
    fontFamily: "WorkSans",
    fontSize: wp("1.2%"),
    color: '#2C698D'
  },
  widthTasksTwo: {
    width: wp("20%"),
    height: hp("10%"),
    fontFamily: "WorkSans",
    fontSize: wp("1.2%"),
    color: "#2C698D"

  },
  widthTasksThree: {
    width: wp("7%"),
    height: hp("10%"),
    fontFamily: "WorkSans",
    marginTop: -10,
    marginLeft: -525
  },
  widthTasks4: {
    width: wp("10%"),
    height: hp("10%"),
    fontFamily: "WorkSans",
    marginTop: -10,
    marginLeft: -525
  },
  widthTasksUndo: {
    width: wp("12%"),
    height: hp("10%"),
    fontFamily: "WorkSans",
  },
  widthButtonUndo: {
    height: hp("10%"),
    fontFamily: "WorkSans",
    marginLeft: wp("15%"),
    color: '#FE8171'
  },
  widthButtonBack: {
    width: wp("10%"),
    height: hp("10%"),
    fontFamily: "WorkSans",
    marginLeft: wp("0%"),
  },
  nextButtonTasks: {
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: wp("46%"),
    backgroundColor: "#EFEFEF",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  butonsPDFTask: {
    width: wp("10%"),
    height: hp("12%"),
    backgroundColor: "#f9f9f9",
  },
  buttonsBack: {
    width: wp("7%"),
    height: hp("5%"),
    backgroundColor: "#fe8171",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fe462c",
  },
  buttonsBack2: {
    width: wp("7%"),
    height: hp("4%"),
    backgroundColor: "#fffff",
    borderRadius: 10,
    marginTop: 42
  },
  buttonsBack3: {
    width: wp("7%"),
    height: hp("4%"),
    backgroundColor: "#fffff",
    borderRadius: 10,
    marginTop: 42,
    marginLeft: 80,    
  },
  buttonUndo: {
    width: wp("7%"),
    backgroundColor: '#F9F9F9',
    marginLeft: wp("22%")
  },
  buttonUndoRed: {
    backgroundColor: '#F9F9F9'
  },
  buttonsApproved: {
    display: "flex",
    width: wp("7%"),
    height: hp("6%"),
    alignItems: 'center',
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#0072c3",
    borderRadius: 20,
  },
  buttonsApprovedRed: {
    display: "flex",
    width: wp("7%"),
    height: hp("6%"),
    alignItems: 'center',
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#FE8171",
    borderRadius: 20,
  },
  buttonsApprovedComplete: {
    display: "flex",
    width: wp("7%"),
    height: hp("6%"),
    alignItems: 'center',
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#0072c3",
    borderRadius: 20,
    marginLeft: -25,
    marginTop: 35
  },
  buttonsApprovedComplete2: {
    display: "flex",
    width: wp("7%"),
    height: hp("6%"),
    alignItems: 'center',
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#0072c3",
    borderRadius: 20,
    marginLeft: 40,
    marginTop: 35
  },
  buttonsApprovedSend: {
    display: "flex",
    width: wp("7%"),
    height: hp("6%"),
    alignItems: 'center',
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#0072c3",
    borderRadius: 20,
    marginLeft: 90,
    marginTop: 35
  },
  buttonsApprovedUndo: {
    width: wp("9%"),
    height: hp("4%"),
    backgroundColor: "#0072c3",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#001d6c",
  },
  buttonApproved: {
    flexDirection: 'row',
    height: hp("4%"),
    width: wp("8%"),
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#E5F5EC",
    borderRadius: 20,
    marginLeft: wp("1%"),
    paddingHorizontal: wp("3"),
  },
  buttonApprovedText: {
    fontFamily: "WorkSans",
    fontSize: wp("1%"),
    color: '#47B881',
  },
  iconBottom: {
    width: "80%",
    height: "80%",
    resizeMode: 'contain',
    marginRight: wp("0.5%"),
  },
  containerBotones: {
    width: wp("20%"),
    height: hp("8%"),
    paddingRight: wp("0.5%"),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomRightRadius: 10,
    marginTop: hp("9%"),
  },
  textFeedBack: {
    ...Platform.select({
      android: {
        color: "#1F1F1F",
        fontSize: wp("5%"),
        textAlign: "center",
        fontFamily: "MontserratLight",
        fontWeight: "bold",
        
      },
      default: {
        color: "#1F1F1F",
        fontSize: wp("1%"),
        textAlign: "center",
        marginLeft: hp("1%"),
        marginTop: wp("1%"),
        fontFamily: "MontserratLight",
        fontWeight: "bold",      
      },
    }),
  },
  buttonTextSend: {
    width: wp("5%"),
    marginTop: hp("2%"),
    backgroundColor: "#808080",
    borderColor: "#808080",
    borderWidth: wp("0.25%"),
  },
  buttonTextSend1: {
    width: wp("5%"),
    marginTop: -29,
    marginLeft: wp("68%"),
    backgroundColor: "#fff",
    borderColor: "#FE8171",
    borderWidth: wp("0.1%"),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  textbuttonTaskValidar: {
    ...Platform.select({
      android: {
        color: "#fff",
        fontSize: wp("0.8%"),
        textAlign: "center",
        backgroundColor: "#808080",
        borderColor: "#808080",
      },
      default: {
        color: "#fff",
        fontSize: wp("0.8%"),
        textAlign: "center",
        backgroundColor: "#808080",
        borderColor: "#808080",
      },
    }),
  },
  textbuttonTaskValidar1: {
    ...Platform.select({
      android: {
        color: "#FE8171",
        fontSize: wp("1%"),
        textAlign: "center",
        backgroundColor: "#fff",
        borderColor: "#fff",
        fontFamily: "WorkSans"
      },
      default: {
        color: "#FE8171",
        fontSize: wp("0.8%"),
        textAlign: "center",
        backgroundColor: "#ffff",
        borderColor: "#fff",
        borderWidth: 2,
        fontFamily: "WorkSans"
      },
    }),
  },
  inputPDF: {
    height: hp("80%"), 
    width: wp("60%"), 
    backgroundColor: "#A0A0A0",
    borderBottomLeftRadius: 10
  },
  inputFeedBack: {
    height: hp("28%"), 
    width: wp("16.5%"), 
    backgroundColor: "#FFFFFF",
    padding: hp("1%"),
    fontFamily: 'WorkSans'
  },
  widthTasksButtons: {
    width: wp("12%"),
    height: hp("12%"),
  },
  textHideModal: {
    fontSize: wp("1%"),
    fontFamily: "MontserratExtraLight",
    color: "#8E8E8E",
  },
  ContainerAviso: {
    width: wp("20%"),
    height: hp("80%"),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F5F5F5",
    borderBottomRightRadius: 10,
    padding: wp("4%"),
    flexDirection: "column",
  },
  ContainerAviso1: {
    width: wp("18%"),
    height: hp("18%"),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F1F8FF",
    borderWidth: 1,
    borderColor: "#3B82F6",
    borderRadius: 4,
    padding: wp("4%")
  },
  ContainerAviso2: {
    width: wp("18%"),
    height: 'fit-content',
    padding: wp("1%"),
    justifyContent: "flex-start",
    backgroundColor: "#F1F8FF",
    borderWidth: 1,
    borderColor: "#BDDDFF",
    borderRadius: 4,
    flexDirection: "row",
    marginTop: hp("3%"),
  },
  infoContainerAviso:{
    fontFamily: "WorkSans",
    textAlign: "left",
    fontSize: wp("0.8%"),
    color: '#4B4B4B',
    marginLeft: 5,
    
  },
  infoContainerAviso1:{
    fontFamily: "Montserrat",
    textAlign: "left",
    fontSize: wp("1.1%"),
    color: '#4B4B4B'    
  },
  infoContainerAviso2:{
    fontFamily: "WorkSansBold",
    textAlign: "left",
    fontSize: wp("0.8%"),
    color: '#4B4B4B',
  },
  ContainerComentario: {
    width: wp("18.5%"),
    height: hp("34%"),
    alignItems: 'flex-start',
    backgroundColor: "#ffffff", 
    borderRadius: 4,
    marginBottom: hp("2%"),
    marginTop: hp("5%"),
    padding: wp("1%"),
    flexDirection: 'column',
  },
  horizontalDivider1: {
    borderWidth: 0.1,
    backgroundColor: "#EEEEEE",
    borderColor: "#EEEEEE",
    width: wp("16.5%"),
    marginVertical: hp("2%"),
  },
  textHeadersTasks: {
    height: hp("1%"),
    width: wp("12.5%"),
    justifyContent: 'center',
    fontSize: hp("3%"),
    fontFamily: "WorkSansMedium",
    color: '#2C698D'
  },
  infoContainerPerfil: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 8,
    marginRight: 8,
    borderRadius: 10,
    height: hp("20%"),
  },
  infoContainerTaskApprovedTask2: {
    flex: 1,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "#f9f9f9",
    paddingTop: hp("5%"),
    marginRight: wp("0%"),
    marginTop: hp("3%"),
    marginBottom: hp("3%"),
    paddingLeft: wp("1%"),
    flexDirection: "row",
    borderRadius: 10,
  },
  infoContainerAprovedRow: {
    width: wp("55%"),
    alignItems: 'center',
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    paddingLeft: wp("4%"),
    flexDirection: "row",
  },
  infoContainerAproved: {
    width: wp("55%"),
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    borderColor: "#FE462C",
    borderWidth: 1.25,
    paddingTop: hp("3%"),
    marginTop: hp("3%"),
    marginBottom: hp("3%"),
    flexDirection: "column",
  },
  infoContainerAprovedTask1: {
    height: hp("14%"),
    width: wp("55%"),
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    marginBottom: hp("3%"),
    marginTop: hp("5%"),
    flexDirection: "column",
    paddingTop: hp("3%"),
  },
  infoContainerAprovedTask4: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    paddingTop: hp("5%"),
    marginRight: wp("0%"),
    marginTop: hp("3%"),
    marginBottom: hp("3%"),
    flexDirection: "row",
    borderRadius: 10,
    //height: 400,
    //width: 800,
  },
  infoContainerAprovedTask41: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginTop: hp("3%"),
  },
  infoContainerButtonsTask2: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#f9f9f9",
    paddingTop: hp("5%"),
    marginRight: wp("0%"),
    marginLeft: wp("23.8%"),
    marginTop: hp("3%"),
    marginBottom: hp("3%"),
    flexDirection: "row",
    borderRadius: 10,
    width: wp("23%"),
  },
  infoContainerTask: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: "wrap",
    backgroundColor: "#F9F9F9",
  },
  infoContainerTask4: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 8,
    marginRight: 8,
    borderRadius: 10,
    height: hp("80%"),
    width: wp("80%"),
  },
  infoContainerTask2: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 5,
    marginRight: 8,
    flexDirection: "row",
    borderRadius: 10,
    height: hp("6%"),
  },
  infoTask: {
    display: 'flex',
    flexDirection: "row",
    width: wp("50%"), 
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: hp("2%"),
    backgroundColor: "#F9F9F9", 
  },
  infoTaskHalf: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "#F9F9F9", 
    textAlign: "center",
    borderRadius: 5,
  },
  infoTaskHeaders: {
    display: 'flex',
    flexDirection: "row",
    width: wp("50%"),
    height: hp("5%"),   
    alignItems: 'center',
    marginTop: hp("2%"),
    backgroundColor: "#F9F9F9"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalBack: {   
    justifyContent: "center"
  },
  checkbox: {
    alignSelf: "stretch",
    height: hp("3%"),
  },
  backgroundModal: {
    backgroundColor: "#ffffff",
    width: wp("80%"),
    height: hp("85%"),
    marginLeft: wp("4%"),
    marginTop: hp("4.2%"),
    borderRadius: 10
  },

  backModal: {
    height: hp("5%"), 
    width: wp("80%"), 
    flexDirection: "row",
    marginTop: wp("0%"),
    backgroundColor: "ffff"
  },
  buttonHideModal: {
    borderRadius: 20,
    justifyContent: "center",
    textAlign: "center",
    width: "fit-content",
    height: hp("6%"),
    marginHorizontal: "1%",
  },
  backProfileDocuments: {
    height: hp("90%"),
    width: wp("100%"),
    marginTop: hp("1%"),
    marginLeft: wp("5%"),
    backgroundColor: "#fffff",
    paddingLeft: wp("0%"),
    paddingTop: hp("1%"),
  },

  backButtonProfileDocuments: {
    ...Platform.select({
      android: {
        height: hp("5%"),
        width: wp("80%"),
        flexDirection: "row",
        justifyContent: "center",
      },
      default: {
        height: hp("5%"),
        width: wp("80%"),
        flexDirection: "row",
        marginTop: wp("0%"),
        justifyContent: "center",
      },
    }),
  },

  buttonProfileDocuments: {
    paddingVertical: hp("0%"),
    paddingHorizontal: wp("1%"),
    backgroundColor: "#ffffff",
  },

  textbuttonProfileDocuments: {
    ...Platform.select({
      android: {
        color: "#000",
        fontSize: wp("3%"),
        textAlign: "center",
      },
      default: {
        color: "#000",
        fontSize: wp("1.5%"),
        textAlign: "center",
        fontFamily: "Montserrat",
        fontWeight: "bold",
      },
    }),
  },

  textViewPDF: {
    ...Platform.select({
      android: {
        color: "#2C698D",
        fontSize: wp("3%"),
        textAlign: "center",
      },
      default: {
        color: "#2C698D",
        fontSize: wp("1.2%"),
        textAlign: "center",
      },
    }),
  },
  textViewPDF1: {
    ...Platform.select({
      android: {
        color: "#fff",
        fontSize: wp("2%"),
        textAlign: "center",
        margintop: 10,
      },
      default: {
        color: "#fff",
        fontSize: wp("1%"),
        textAlign: "center",
        margintop: 10,
      },
    }),
  },

  textUndo: {
    ...Platform.select({
      android: {
        color: "#0072C3",
        fontSize: wp("3%"),
        fontFamily: 'WorkSans',
        textAlign: "center",
        textDecorationLine: 'underline'
      },
      default: {
        color: "#0072C3",
        fontSize: wp("1.3%"),
        textAlign: "center",
        fontFamily: 'WorkSans',
        textDecorationLine: 'underline'
      },
    }),
  },

  textUndoRed: {
    ...Platform.select({
      android: {
        color: "#FE462C",
        fontSize: wp("1.1%"),
        fontFamily: 'WorkSans',
        textAlign: "center",
        textDecorationLine: 'underline',
        marginRight: wp("0.5%"),
      },
      default: {
        color: "#FE462C",
        fontSize: wp("1.1%"),
        textAlign: "center",
        fontFamily: 'WorkSans',
        textDecorationLine: 'underline',
        marginRight: wp("0.5%"),
      },
    }),
    
  },

  textApprovade: {
    ...Platform.select({
      android: {
        color: "#fff",
        fontSize: wp("2%"),
        textAlign: "center",
        fontFamily: "WorkSans",
      },
      default: {
        color: "#fff",
        fontSize: wp("1%"),
        textAlign: "center",
        fontFamily: "WorkSans",
      },
    }),
  },
  textApprovadeNext: {
    ...Platform.select({
      android: {
        color: "#0072C3",
        fontSize: wp("2%"),
        textAlign: "center",
        fontFamily: "WorkSans",
      },
      default: {
        color: "#0072C3",
        fontSize: wp("1%"),
        textAlign: "center",
        fontFamily: "WorkSans",
        marginTop: 15
      },
    }),
  },


  backProfileDocumentsSplit: {
    height: hp("20%"),
    width: wp("70%"),
    flexDirection: "row",
    marginLeft: wp("0%"),
    justifyContent: "space-between",
    left: wp("3%"),
    bottom: hp("3%"),
    top: hp("1.5%"),
  },

  backProfile: {
    height: hp("68%"),
    width: wp("30%"),
    marginTop: hp("0%"),
    marginLeft: wp("0%"),
    backgroundColor: "#f9f9f9",
    paddingLeft: wp("0.1%"),
    alignContent: "center",
    borderRadius: 10,
  },

  backTasks: {
    height: hp("66%"),
    width: wp("50%"),
    marginTop: hp("0%"),
    marginLeft: wp("2%"),
    backgroundColor: "#ffffff",
    paddingLeft: wp("1%"),
  },

  backTasksFondo: {
    height: hp("62%"),
    width: wp("60%"),
    backgroundColor: "#ffffff",
    paddingLeft: wp("2.5%"),
  },

  imgProfileUser: {
    marginLeft: wp("12%"),
    marginTop: hp("7%"),
    height: hp("10%"),
    width: wp("50%"),
    borderRadius: 40,
  },

  imgProfile: {
    height: hp("13%"),
    width: wp("6.3%"),
    borderRadius: 40,
  },

  textNameUserProfile: {
    textAlign: "center",
    marginTop: hp("8%"),
    fontFamily: "MontserratBoldItalic",
  },

  textDocumentUserProfile: {
    textAlign: "center",
    marginTop: hp("4%"),
    fontFamily: "WorkSans",
  },

  textIBMUserProfile: {
    textAlign: "center",
    marginTop: hp("2%"),
    fontFamily: "WorkSans",
  },

  textEmailUserProfile: {
    textAlign: "center",
    marginTop: hp("4%"),
    marginLeft: wp("9%"),
    fontFamily: "WorkSans",
  },

  textSlackUserProfile: {
    textAlign: "center",
    marginTop: hp("4%"),
    fontFamily: "WorkSans",
  },

  backProfileEmailSlackSplit: {
    height: hp("10%"),
    width: wp("20%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  lineStyle: {
    color: "#D4DADE",
    margin: 2,
    marginTop: -11,
    // height: hp("5%"),
  },
  text: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontFamily: "WorkSans",
    fontSize: 10,
    marginTop: 4
  },

  textEnd: {
    textAlign: 'center',
    color: "#8E8E8E",
    fontFamily: "WorkSans",
    fontSize: 10,
    marginTop: 4
  },

  textForm: {
    width: '48%',
    color: '#4B4B4B',
    fontFamily: "WorkSans",
    fontSize: 13
  },

  fieldForm: {

    backgroundColor: '#f9f9f9',
    borderColor: '#f9f9f9',
    borderRadius: 3
  }

});
