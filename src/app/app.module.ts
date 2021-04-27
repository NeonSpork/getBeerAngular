import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorsComponent } from './sensors/sensors.component';
import { TempComponent } from './sensors/temp/temp.component';
import { PintsComponent } from './sensors/pints/pints.component';
import { NeonSignComponent } from './neon-sign/neon-sign.component';
import { BeerButtonComponent } from './beer-button/beer-button.component';
import { SecretSensorsComponent } from './secret-sensors/secret-sensors.component';
import { SecretNeonSignComponent } from './secret-neon-sign/secret-neon-sign.component';
import { SecretAppComponent } from './secret-app/secret-app.component';
import { CrossbonesComponent } from './crossbones/crossbones.component';
import { DefaultAppComponent } from './default-app/default-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    TempComponent,
    PintsComponent,
    NeonSignComponent,
    BeerButtonComponent,
    SecretSensorsComponent,
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
