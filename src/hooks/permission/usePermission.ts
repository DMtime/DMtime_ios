import React, { useState } from "react";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { launchCamera } from "react-native-image-picker";
import ImagePicker from "react-native-image-crop-picker";
import { decode } from "base-64";

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

  const openGallery = async () => {
    const response = await ImagePicker.openPicker({
      mediaType: "photo",
      includeBase64: true,
      multiple: true,
    });
    const files = response.map(
      (image) =>
        ({
          uri: `data:image/png;base64,${image.data}`,
          type: image.mime,
          name: image.filename,
        } as any)
    );
    setFiles(files);
  };

  return {
    requestCameraPermission,
    requestGalleryPermission,
    openCamera,
    openGallery,
    files,
  };
};
