import React, { useState } from "react";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { launchCamera } from "react-native-image-picker";
import ImagePicker, { Image } from "react-native-image-crop-picker";
import { addImage } from "../api/image";

export const useCamera = () => {
  const [cameraPermission, setCameraPermission] = useState<boolean>(false);
  const [galleryPermission, setGalleryPermission] = useState<boolean>(false);
  const [files, setFiles] = useState<Blob[]>([]);

  const requestCameraPermission = async () => {
    const res = await check(PERMISSIONS.IOS.CAMERA);
    if (res === RESULTS.GRANTED) {
      setCameraPermission(true);
    } else if (res === RESULTS.DENIED) {
      const res2 = await request(PERMISSIONS.IOS.CAMERA);
      res2 === RESULTS.GRANTED
        ? setCameraPermission(true)
        : setCameraPermission(false);
    }
  };

  const requestGalleryPermission = async () => {
    const res = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (res === RESULTS.GRANTED) {
      setGalleryPermission(true);
    } else if (res === RESULTS.DENIED) {
      const res2 = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      res2 === RESULTS.GRANTED
        ? setGalleryPermission(true)
        : setGalleryPermission(false);
    }
  };

  const openCamera = () => {
    if (cameraPermission)
      launchCamera(
        {
          mediaType: "photo",
        },
        (e) => {
          console.log(e);
        }
      );
  };

  const responseToFile = (response: Image) => ({
    uri: `data:image/png;base64,${response.data}`,
    type: response.mime,
    name: response.filename,
  });

  const openGallery = async (multiple: boolean = true) => {
    let files;
    const response = await ImagePicker.openPicker({
      mediaType: "photo",
      includeBase64: true,
      multiple,
    });
    if (multiple) {
      files = (response as any).map(responseToFile);
    } else {
      files = [responseToFile(response)];
    }
    setFiles(files as Blob[]);
  };

  const addImagesAndGetUrls = async (files: Blob[]) => {
    const requests = files.map(async (file) => {
      const image = await addImage(file);
      return image;
    });
    try {
      const urls = await Promise.all(requests);
      return urls;
    } catch (error) {
      console.log(error.response);
    }
  };

  return {
    requestCameraPermission,
    requestGalleryPermission,
    openCamera,
    openGallery,
    files,
    addImagesAndGetUrls,
  };
};
