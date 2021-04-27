import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorsComponent } from './sensors/sensors.component';
import { TempComponent } from './sensors/temp/temp.component';
import { PintsComponent } from './sensors/pints/pints.component';
import { NeonSignComponent } from './pages/default/neon-sign/neon-sign.component';
import { BeerButtonComponent } from './pages/default/beer-button/beer-button.component';
import { SecretNeonSignComponent } from './pages/secret/secret-neon-sign/secret-neon-sign.component';
import { SecretAppComponent } from './pages/secret/secret-app/secret-app.component';
import { CrossbonesComponent } from './pages/secret/crossbones/crossbones.component';
import { DefaultAppComponent } from './pages/default/default-app/default-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    TempComponent,
    PintsComponent,
    NeonSignComponent,
    BeerButtonComponent,
    SecretNeonSignComponent,
    SecretAppComponent,
    CrossbonesComponent,
    DefaultAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
