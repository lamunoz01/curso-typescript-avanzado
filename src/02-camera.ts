// ********************** Example Lib. CAPACITOR ********************** //
import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri, //Es un ENUM (ir a definición para ver su set de opciones).
    direction: CameraDirection.Front  //Otro enum
  });
};