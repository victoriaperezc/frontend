import React, {useState} from 'react';
import {
  //SafeAreaView,
  //ScrollView,
  //StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  CheckBox,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Styles } from '../styles/Styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const TerminoIndefinido = ({navigation}) => {

  const [isSelected, setSelection] = useState(false);

  
  const [file, setFile] = useState(null);
  const [uploading, startUploading] = useState(false);

  const pickFile = async() => {
    let pick = await DocumentPicker.getDocumentAsync({}); 
    console.log(pick)   
    setFile(pick)
  };
  
  const uploadFile = () => {
    if(file){
      const fileUri = file.uri;
      const filename = file.name;      
      const type = file.mimeType;
      setFile(null);
      startUploading(true);
 
      let formData = new FormData();
      formData.append('documento', {
        uri: fileUri, 
        name: filename, 
        type: type 
      });

      const response = API_docs.uploadDocument(formData) 
      return response;           
    }
  };
  
  return (
    <View style={styles.backProfile}>
      <View style={styles.backContrato}>
        <Text style={styles.textStyling}>Término Indefinido</Text>

        <View style={{ flexDirection: 'row', marginTop: wp('4%'), width: wp('31%'), marginLeft: wp('-2%') }}>
          <View style={{width: '45%'}} onPress={() => navigation.navigate('TerminoIndefinido')}>
            <Text style={styles.text}>Documento de identificación</Text>
          </View>
          <View style={{width: '49%', marginTop:'1%'}}>
            <TouchableOpacity onPress={() => pickFile()}>
              <Text style={styles.textbutton}>Escoger archivo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: wp('2%'), width: wp('31%'), marginLeft: wp('-2%')}}>
          <View style={{width: '45%'}}>
            <Text style={styles.text}>Oferta laboral</Text>
          </View>
          <View style={{width: '49%', marginTop:'1%'}}>
            <TouchableOpacity onPress={() => pickFile()}>
              <Text style={styles.textbutton}>Escoger Archivo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>



  );
};

const styles = StyleSheet.create({
  textStyling: {
    fontFamily: 'WorkSans',
    fontSize: hp('3.5%'),
    marginTop: hp('4%'),
    textAlign: 'center',
    color: '#2C698D',
    marginLeft: wp('-2%')
  },
  text: {
    textAlign: "left",
    marginTop: hp("1%"),
    fontSize: wp("0.9%"),
    margin: 5,
    fontFamily: 'WorkSans',
    color: '#2C698D'
  },
  textinput: {
    height: hp('5%'),     
    backgroundColor: '#FBFCFC',
  },
  textinputError: {
    height: hp('5%'),     
    backgroundColor: '#FBFCFC',
    borderColor:'red',
    borderWidth:2
  },
  backProfile: {
    height: hp("65%"), // 70% of height device screen
    width: wp("36%"),
    marginLeft: wp('0%'),
    backgroundColor: '#FFFFFF',
    paddingLeft: wp('2%'),
  },
  backContrato: {
    height: hp('40%'),
    width: wp('31%'),
    marginLeft: wp('0.5%'),
    marginTop: hp('-25%'),
    backgroundColor: '#F9F9F9',
    paddingLeft: wp('3%'),
    borderRadius: 10,
  },
  lineProfile: {
    borderWidth: wp('0.05%'),
    height: hp('50%'),
    marginTop: hp('13%'),
  },
  divider: {
    height: hp('10%'),
  },
  backOrderButtonFijo: {
    ...Platform.select({
      android: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        //flexDirection: 'row',
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.25%'),
      },
      default: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('-0.6%'),
        marginTop: wp('4%'),
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.2%'),
      },
    }),
  },
  backOrderButtonIndefinido: {
    ...Platform.select({
      android: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        //flexDirection: 'row',
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.25%'),
      },
      default: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('15%'),
        marginTop: wp('-3%'),
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.2%'),
      },
    }),
  },
  textbutton: {
    ...Platform.select({
      android: {
        color: '#808080',
        fontSize: wp('1%'),
        textAlign: 'center',
        backgroundColor: '#FBFCFC',
        borderColor: '#808080',
      },
      default: {
        color: '#808080',
        fontSize: wp('1%'),
        textAlign: 'center',
        backgroundColor: '#FBFCFC',
        borderColor: '#808080',
      },
    }),
  },
});

export default TerminoIndefinido;