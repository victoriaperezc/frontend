import React, { useState } from "react";
import {StyleSheet,Text,View, TouchableOpacity, Platform} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import * as DocumentPicker from "expo-document-picker";
//import upDoc from "../../logic/API_docs";
import uploadDocument from "../../logic/API_docs";
import TerminoFijo_Component from "./TerminoFijo_Component";

export const TerminoFijo = () => {
  const [file, setFile] = useState(null);
  const [uploading, startUploading] = useState(false);

  const pickFile = async () => {
    let pick = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf'
    });
    console.log(pick);
    setFile(pick);
    
  };  

  const uploadFile = async () => {
    let form = new FormData();
    let base64String = file.uri;
    let base64 = base64String.split(";base64,").pop();
    console.log(base64);
    if (file) {
      form.append("documento", {
        //file: file.output[0]
        uri: base64,
        name: file.name,
        type: file.mimeType,
      });
      const response = uploadDocument(form)
      setFile(null);
      startUploading(true);
      return response;
    }
  };

  const upFile = () => {
    if (file) {
      var myHeaders = new Headers();
      myHeaders.append("X-Amz-Content-Sha256", "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
      myHeaders.append("X-Amz-Date", "20211201T012258Z");
      myHeaders.append("Authorization", "AWS4-HMAC-SHA256 Credential=e6ebf67745c94788bcf2f0b37edfa5ab/20211201/us-south/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=69a2a20a217b3a8a3b9c3ca27b5deb6c5a387a32dbc0690549635f2a498c1201");

      myHeaders.append("Content-Type", "multipart/form-data")
      var formdata = new FormData();
      formdata.append(
        "doc",
        file.uri
      );

      fetch( "https://s3.us-south.cloud-object-storage.appdomain.cloud/docs-afiliacion",
      {
        method: "POST",
        headers: myHeaders,
        body: file.uri,
        redirect: "follow",
        mode: 'no-cors',
      }
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }    
  };

  const options = {
    url: 'http://localhost:3001/upload-file',
    path: 'file://path/to/file/on/device',
    method: 'POST',
    type: 'raw',
    maxRetries: 2, // set retry count (Android only). Default 2
    headers: {
      'content-type': 'application/octet-stream', // Customize content-type
      'my-custom-header': 's3headervalueorwhateveryouneed'
    },
    // Below are options only supported on Android
    notification: {
      enabled: true
    },
    useUtf8Charset: true
  }

  const up = () => {

  }

  const upFilev2 = () => {
    if (file) {
      var formdata = new FormData();
      formdata.append(
        "doc",
        file.file,
        "/C:/Users/001922661/Documents/DOCS/2021_Red_Hat_Developer_DevNation_Camps_v4.pdf"
      );

      fetch( "http://localhost:3001/upload-file",
      {
        method: "POST",
        body: formdata,
        redirect: "follow"
      }
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }    
  };

  return (
    <TerminoFijo_Component/>
  );
};

const styles = StyleSheet.create({
  
  backProfile: {
    height: hp("65%"), // 70% of height device screen
    width: wp("36%"), // 80% of width device screen
    marginTop: hp("-35.6%"),
    marginLeft: wp("-3.95%"),
    backgroundColor: "#dde9f1",
    paddingLeft: wp("2%"),
  }
});
