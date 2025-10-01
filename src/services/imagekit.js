const imagekit = require("imagekit");

const imageKitInstance = new imagekit({
  urlEndpoint: process.env.IMAGEKIT_URL,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const sendFiles = async (data) => {
  return await imageKitInstance.upload({
    file: data.file,
    fileName: data.fileName,
    folder: "post-app",
  });
};

module.exports = {
  imageKitInstance,
  sendFiles,
};