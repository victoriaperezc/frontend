const multer = require("multer");
const multerS3 = require("multer-s3");
const ibm = require("ibm-cos-sdk");

const config = {
  endpoint: 's3.us-south.cloud-object-storage.appdomain.cloud',
  apiKeyId:'uC77cqV3sR29yJQhIFU9BS6MpKJd9RtE-dZ0RrDf4P38',
  serviceInstanceId:'crn:v1:bluemix:public:cloud-object-storage:global:a/93ad45a81bbf49ba8d0a12de58d6ddf6:8ca0fc3c-8a6f-4db7-b186-05b2d22284aa::',
  region: 'us-south',
  accessKeyId: 'e6ebf67745c94788bcf2f0b37edfa5ab',
  secretAccessKey: '379b45b5ea8df688a05c853c755c86446694b1d444c311c1',
}

const s3 = new ibm.S3(config);

const createObject = (file) => {
  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'docs-afiliacion',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
    },
      key: undefined,
    }),
  });    
  return upload; 
}

const uploadFileFunction = (itemName, file) => {
  console.log(`Creating new item: ${itemName}`);
  // s3.deleteBucketCors({
  //   Bucket: myBucket,
  // })
  var req = s3.putObject({
      ACL: "public-read", 
      Bucket: 'docs-afiliacion',
      Key: itemName,
      Body: file,
      ContentEncoding: 'base64',
  })
  req.promise().then(() => {
    console.log(`Item: ${itemName} created!`);
    })
    .catch((e) => {
      console.error(`ERROR: ${e.code} - ${e.message}\n`);
    });
  
};

const doCreateObject = (itemName, file) => {
  console.log('Creating object');
  return s3.putObject({
      Bucket: myBucket,
      Key: itemName,
      Body: file
  }).promise();
}

export default uploadFileFunction;