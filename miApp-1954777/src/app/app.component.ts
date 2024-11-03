import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  platform: string;

  constructor() {
    this.platform = Capacitor.getPlatform();
    this.detectPlatform();
  }

  detectPlatform() {
    if (this.platform === 'android') {
      console.log('Estás en Android');
   
    } else if (this.platform === 'ios') {
      console.log('Estás en iOS');
   
    } else if (this.platform === 'web') {
      console.log('Estás en Web');
  
    }
  }
}
