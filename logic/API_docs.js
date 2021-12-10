import axios from "axios";

const baseUrl = 'http://localhost:3001';

const upDoc = async(formData) => {    
    var config = {
      method: 'post',
      url:`${baseUrl}/upload-file`,    
      data: formData
    }
    const res = await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    return res

}

const uploadDocument = async(formData) => {    
  const res = await fetch('https://ptsv2.com/t/j7so8-1638393369/post',{ 
  //const res = await fetch(`${baseUrl}/upload-file`,{ 
      method:'post',   
      body:formData,
      redirect: 'follow',
      mode: 'no-cors',
      headers: {
        //'Accept': '*/*',
        'Content-Type': 'multipart/form-data'
      },
    })  
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    return res
}

const getDocument = async (filename) => {
    const res = await fetch(
        `${baseUrl}/view/${filename}`,
        { method: 'GET'}
      );
      return await res.json();
};

const deleteDocument = async (filename) => {
    const res = await fetch(
        `${baseUrl}/del/${filename}`,
        { method: 'DELETE' }
    )
      const responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Deleted Successful');
      }    
};

const getAllDocuments = async () => {
    const res = await fetch(
        `${baseUrl}/documents`,
        { method: 'GET'}
      );
      return await res.json();
};

//export default upDoc;
export default uploadDocument;
