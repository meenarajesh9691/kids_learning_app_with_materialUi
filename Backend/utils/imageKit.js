import ImageKit from "imagekit";

export const initImageKit = function () {
  var imagekit = new ImageKit({
    publicKey: process.env.PUBLICKEY_IMAGEKIT,
    privateKey: process.env.PRIVATEKEY_IMAGEKIT,
    urlEndpoint: process.env.URLENDPOINT_IMAGEKIT,
  });
  return imagekit;
};
