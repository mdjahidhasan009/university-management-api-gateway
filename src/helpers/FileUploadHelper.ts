import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
// import * as fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';
import config from "../config";
import {MAXIMUM_FILE_SIZE} from "../constants/global";
import * as stream from "stream";

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   }
// });
// const upload = multer({ storage: storage })

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: MAXIMUM_FILE_SIZE, // Set your file size limit
  },
});


// const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse | undefined> => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(file.path,
//       (error: Error, result: ICloudinaryResponse) => {
//         fs.unlinkSync(file.path);
//         if (error) {
//           reject(error)
//         }
//         else {
//           resolve(result)
//         }
//       })
//   })
// };
const uploadToCloudinary = async (file: Express.Multer.File): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      // @ts-ignore
      (error: Error, result: ICloudinaryResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });

    // Create a stream from the buffer and pipe it to Cloudinary
    const bufferStream = new stream.PassThrough();
    bufferStream.end(file.buffer);
    bufferStream.pipe(uploadStream);
  });
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
}