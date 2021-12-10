import React from 'react';
import { StyleSheet, View} from 'react-native';
import { WebView } from 'react-native-webview';
import { Styles } from '../styles/Styles';
import  Pdf  from 'react-native-pdf';
import PDFView from 'react-native-view-pdf/lib/index';
import * as WebBrowser from 'expo-web-browser';


export const VisualizacionDocumentos = () => { 

    const source = 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
 
    return ( 
       
            WebBrowser.openBrowserAsync('https://expo.dev')
       
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
