import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { SplashScreen, SplashScreenPlugin } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

 constructor(){
  this.mostrarSplashScreen();
 }
   
 async mostrarSplashScreen(){

  await SplashScreen.show({
  autoHide: false,
  showDuration: 2000
  });

  }
}
