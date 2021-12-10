import React, { useRef, useState, useEffect } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Platform,Image, Modal, Pressable} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import axios from 'axios';

const TerminoFijo_Component = () => {

    const postUrl = "http://localhost:3000/v1/formulario-inicial";

    const fileInputRef1 = useRef();
    const progressRef = useRef();
    const uploadRef = useRef();
    const uploadModalRef = useRef();

    const fileInputRef2 = useRef();
    const fileInputRef3 = useRef();
    const fileInputRef4 = useRef();
    const fileInputRef5 = useRef();

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [validFiles, setValidFiles] = useState([]);
    const [unsupportedFiles, setUnsupportedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let filteredArr = selectedFiles.reduce((acc, current) => {
            const x = acc.find(item => item.name === current.name);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
        setValidFiles([...filteredArr]);
        
    }, [selectedFiles]);

    const preventDefault = (e) => {
        e.preventDefault();
    }
    const dragOver = (e) => {
        preventDefault(e);
    }
    const dragEnter = (e) => {
        preventDefault(e);
    }
    const dragLeave = (e) => {
        preventDefault(e);
    }

    const fileDrop = (e) => {
        preventDefault(e);
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const filesSelected = () => {
      if (fileInputRef1.current.files.length) {
        handleFiles(fileInputRef1.current.files);
      }
      if (fileInputRef2.current.files.length) {
        handleFiles(fileInputRef2.current.files);
      }
      if (fileInputRef2.current.files.length) {
        handleFiles(fileInputRef2.current.files);
      }
      if (fileInputRef3.current.files.length) {
        handleFiles(fileInputRef3.current.files);
      }
      if (fileInputRef3.current.files.length) {
        handleFiles(fileInputRef3.current.files);
      }
    }

    const fileInputClicked1 = () => {
      fileInputRef1.current.click();
    }
    const fileInputClicked2 = () => {
      fileInputRef2.current.click();
    }
    const fileInputClicked3 = () => {
      fileInputRef3.current.click();
    }
    const fileInputClicked4 = () => {
      fileInputRef4.current.click();
    }
    const fileInputClicked5 = () => {
      fileInputRef5.current.click();
    }

    const handleFiles = (files) => {
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } else {
                files[i]['invalid'] = true;
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                setErrorMessage('File type not permitted');
                setUnsupportedFiles(prevArray => [...prevArray, files[i]]);
            }
        }
    }

    const validateFile = (file) => {
        const validTypes = ['application/pdf'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    const fileSize = (size) => {
        if (size === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const removeFile = (name) => {
        const index = validFiles.findIndex(e => e.name === name);
        const index2 = selectedFiles.findIndex(e => e.name === name);
        const index3 = unsupportedFiles.findIndex(e => e.name === name);
        validFiles.splice(index, 1);
        selectedFiles.splice(index2, 1);
        setValidFiles([...validFiles]);
        setSelectedFiles([...selectedFiles]);
        if (index3 !== -1) {
            unsupportedFiles.splice(index3, 1);
            setUnsupportedFiles([...unsupportedFiles]);
        }
    }

    const uploadFiles = async () => {
        uploadModalRef.current.style.display = 'block';
        uploadRef.current.innerHTML = 'File(s) Uploading...';
        for (let i = 0; i < validFiles.length; i++) {
            const formData = new FormData();
            formData.append('document', validFiles[i]);
            formData.append('key', '');

            axios.post(postUrl, formData, {
                onUploadProgress: (progressEvent) => {
                    const uploadPercentage = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
                    progressRef.current.innerHTML = `${uploadPercentage}%`;
                    progressRef.current.style.width = `${uploadPercentage}%`;

                    if (uploadPercentage === 100) {
                        uploadRef.current.innerHTML = 'File(s) Uploaded';
                        validFiles.length = 0;
                        setValidFiles([...validFiles]);
                        setSelectedFiles([...validFiles]);
                        setUnsupportedFiles([...validFiles]);
                    }
                },
            })
            .catch(() => {
                uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`;
                progressRef.current.style.backgroundColor = 'red';
            })
        }
    }

    const profileImage = require("../../assets/generic.png");
    
    return (
    <>
    <View style={styles.backProfile}>    
    <View style={styles.backContrato}>
            {unsupportedFiles.length === 0 && validFiles.length ? (
            <TouchableOpacity onPress={() => uploadFiles()}>
                <Text style={styles.textbutton}>Upload File</Text>
            </TouchableOpacity>
            ) : ( "" )} {unsupportedFiles.length ? (
            <Text>Please remove all unsupported files.</Text>
            ) : ( "" )}
        <Text style={styles.textStyling}>Término Fijo</Text>
        <View style={styles.containerIde} onPress={() => navigation.navigate('TerminoFijo')}>
            <Text style={styles.text}>Documento de Identificación</Text>
        </View>
        <View style={styles.containerIdeBox}>
                <TouchableOpacity 
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                    onPress={fileInputClicked1}
                >
                    <input
                    ref={fileInputRef1}
                    className="file-input"
                    type="file"
                    multiple
                    onChange={filesSelected}
                    />
                </TouchableOpacity>
        </View>

        <View style={styles.containerIde}>
            <Text style={styles.text}>Oferta laboral</Text>
        </View>
        <View style={styles.containerIdeBox}>
                <TouchableOpacity 
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                    onPress={fileInputClicked2}
                >
                   <input
                    ref={fileInputRef2}
                    className="file-input"
                    type="file"
                    multiple
                    onChange={filesSelected}
                    />
                </TouchableOpacity>
        </View>

        <View style={styles.containerIde}>
            <Text style={styles.text}>Certificación Bancaria</Text>
        </View>
        <View style={styles.containerIdeBox}>
                <TouchableOpacity 
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                    onPress={fileInputClicked3}
                >
                    <input
                    ref={fileInputRef3}
                    className="file-input"
                    type="file"
                    multiple
                    onChange={filesSelected}
                    />
                </TouchableOpacity>
        </View>

        <View style={styles.containerIde}>
            <Text style={styles.text}>Formato de Póliza Exequial</Text>
        </View>
        <View style={styles.containerIdeBox}>
                <TouchableOpacity 
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                    onPress={fileInputClicked4}
                >
                    
                    <input
                    ref={fileInputRef4}
                    className="file-input"
                    type="file"
                    multiple
                    onChange={filesSelected}
                    />
                </TouchableOpacity>
        </View>

        <View style={styles.containerIde}>
            <Text style={styles.text}>Copia del Contrato</Text>
        </View>
        <View style={styles.containerIdeBox}>
                <TouchableOpacity 
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                    onPress={fileInputClicked5}
                >
                    <input
                    ref={fileInputRef5}
                    className="file-input"
                    type="file"
                    multiple
                    onChange={filesSelected}
                    />
                </TouchableOpacity>
        </View>
    </View>
    <View style={styles.fileDisplayContainer}>
        {validFiles.map((data, i) => (
            <View>
                <View style={styles.fileStatusBar} key={i}>
                    <View>                        
                        <Image 
                            style={styles.fileTypeLogo}
                            source={profileImage}/>
                        <Text style={styles.textFileName}>{data.name}</Text>
                        <Text style={styles.textFileName}>({fileSize(data.size)})</Text>
                        {" "}
                        {data.invalid && (
                        <Text style={styles.textFileName}>({errorMessage})</Text>
                        )}
                    </View>
                    <View style={styles.fileRemove} onClick={() => removeFile(data.name)}>X</View>                
                </View>                
            </View>            
        ))}
    </View> 
    </View> 
    </>
    );
}

export default TerminoFijo_Component;

const styles = StyleSheet.create({
  backProfile: {
    height: hp("65%"), // 70% of height device screen
    width: wp("36%"), // 80% of width device screen
    marginTop: hp('5%'),
    marginLeft: wp('0%'),
    backgroundColor: '#FFFFFF',
    paddingLeft: wp('2%'),
  },
  progressBar: {
    position: "absolute",
    backgroundColor: "#4aa1f3",
    height: "20px",
    borderRadius: 5,
    textAlign: "center",
    color: "white",
  },
  progress: {
    width: "90%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#efefef",
    height: "20px",
    borderRadius: 5,
  },
  progressContainer: {
    background: "white",
    width: "500px",
    height: "300px",
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textFileName: {
    fontSize: 10,
    marginTop: hp("4%"),
    textAlign: "center",
  },
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
  fileRemove: {
    position: "absolute",
    top: "20px",
    right: "10px",
    lineHeight: "15px",
    color: "red",
    marginRight: "10px",
  },
  fileDisplayContainer: {
    position: "absolute",
    width: wp("40%"),
  },
  fileTypeLogo: {
    width: "20px",
    height: "20px",
  },
  fileStatusBar: {
    width: wp("13%"),
    height: hp("20%"),
    marginVertical: hp("1%"),
    lineHeight: hp("10%"),
  },
  containerIde: {
    height: hp("6.7%"), // 70% of height device screen
    width: wp("13%"), // 80% of width device screen
    marginLeft: wp("-1%"),
    marginTop: wp("1%")
  },
  containerIdeBox: {
    height: hp("3.8%"), // 70% of height device screen
    width: wp("13%"), // 80% of width device screen
    marginLeft: wp("12%"),
    marginTop: wp("-2.7%")
  },
  backProfile: {
    height: hp("65%"), // 70% of height device screen
    width: wp("36%"), // 80% of width device screen
    marginTop: hp("-35.6%"),
    marginLeft: wp("-3.95%"),
    backgroundColor: "#FFFFFF",
    paddingLeft: wp("2%"),
  },
  backContrato: {
    height: hp('45%'),
    width: wp('31%'), 
    marginTop: hp('7%'),
    marginLeft: wp('2%'),
    backgroundColor: '#F9F9F9',
    paddingLeft: wp('3%'),
    borderRadius: 10,
  },
  backOrderButtonFijo: {
    ...Platform.select({
      android: {
        height: hp("6.7%"), // 70% of height device screen
        width: wp("13%"), // 80% of width device screen
        //flexDirection: 'row',
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.25%'),
      },
      default: {
        height: hp("6.7%"), // 70% of height device screen
        width: wp("13%"), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp("-0.6%"),
        marginTop: wp("4%"),
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.2%'),
      },
    }),
  },
  backOrderButtonIndefinido: {
    ...Platform.select({
      android: {
        height: hp("6.7%"), // 70% of height device screen
        width: wp("13%"), // 80% of width device screen
        //flexDirection: 'row',
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.25%'),
      },
      default: {
        height: hp("6.7%"), // 70% of height device screen
        width: wp("13%"), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp("15%"),
        marginTop: wp("-3%"),
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.2%'),
      },
    }),
  },
  textbutton: {
    ...Platform.select({
      android: {
        color: "#808080",
        fontSize: wp("1%"),
        textAlign: "center",
        backgroundColor: "#FBFCFC",
        borderColor: "#808080",
      },
      default: {
        color: "#808080",
        fontSize: wp("1%"),
        textAlign: "center",
        backgroundColor: "#FBFCFC",
        borderColor: "#808080",
      },
    }),
  },
  textbuttonEnviar: {
    ...Platform.select({
      android: {
        color: "#fff",
        fontSize: wp("1%"),
        textAlign: "center",
        backgroundColor: "#D0D3D4",
        borderColor: "#808080",
      },
      default: {
        color: "#fff",
        fontSize: wp("1%"),
        textAlign: "center",
        backgroundColor: "#D0D3D4",
        borderColor: "#808080",
      },
    }),
  },
});
  