import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { Photo } from '../photo';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonIcon, IonFab, IonFabButton],
})
export class HomePage {
  
  constructor(public photo:Photo) {}
  async addPhoto(){
    try {
      await this.photo.addToGallery();
    } catch (error) {
      console.error('Failed to add photo:', error);
    }
  }
}

