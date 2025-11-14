import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class Photo {
  photos: string[] = [];
  async addToGallery(){
    try {
      const captured = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        presentationStyle: 'fullscreen',
      });

      const base64 = captured.dataUrl!;
      this.photos.unshift(base64);
      return base64;
    } catch (error) {
      console.error('Camera error:', error);
      throw error;
    }
  }
}