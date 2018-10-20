import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Bio1Page } from '../pages/bio1/bio1';
import { CaratulaPage } from '../pages/caratula/caratula';
import { Album1Page } from '../pages/album1/album1';
import { Reseña1Page } from '../pages/reseña1/reseña1';
import { Caratula2Page } from '../pages/caratula2/caratula2';
import { Bio2Page } from '../pages/bio2/bio2';
import { Album2Page } from '../pages/album2/album2';
import { Reseña2Page } from '../pages/reseña2/reseña2';
import { Bio3Page } from '../pages/bio3/bio3';
import { Caratula3Page } from '../pages/caratula3/caratula3';
import { Album3Page } from '../pages/album3/album3';
import { Reseña3Page } from '../pages/reseña3/reseña3';
import { Bio4Page } from '../pages/bio4/bio4';
import { Caratula4Page } from '../pages/caratula4/caratula4';
import { Album4Page } from '../pages/album4/album4';
import { Reseña4Page } from '../pages/reseña4/reseña4';
import { Bio5Page } from '../pages/bio5/bio5';
import { Caratula5Page } from '../pages/caratula5/caratula5';
import { Album5Page } from '../pages/album5/album5';
import { Reseña5Page } from '../pages/reseña5/reseña5';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Bio1Page,
    CaratulaPage,
    Album1Page,
    Reseña1Page,
    Bio2Page,
    Caratula2Page,
    Album2Page,
    Reseña2Page,
    Bio3Page,
    Caratula3Page,
    Album3Page,
    Reseña3Page,
    Bio4Page,
    Caratula4Page,
    Album4Page,
    Reseña4Page,
    Bio5Page,
    Caratula5Page,
    Album5Page,
    Reseña5Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Bio1Page,
    CaratulaPage,
    Album1Page,
    Reseña1Page,
    Bio2Page,
    Caratula2Page,
    Album2Page,
    Reseña2Page,
    Bio3Page,
    Caratula3Page,
    Album3Page,
    Reseña3Page,
    Bio4Page,
    Caratula4Page,
    Album4Page,
    Reseña4Page,
    Bio5Page,
    Caratula5Page,
    Album5Page,
    Reseña5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
