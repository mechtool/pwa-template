import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MaterialModule} from "./modules/material/material.module";
import {GeneralModule} from "./modules/general/general.module";
import {NgxsModule} from "@ngxs/store";
import {AppContextState, LocalStorageState, StatusIndicatorsState} from "./store/states";
import { HttpClientModule} from "@angular/common/http";
import {AppContextService} from "./services/app-context.service";
import {AppResolverService} from "./services/app-resolver.service";
import {ColorThemeService} from "./services/color-theme.service";
import {OnlineService} from "./services/online.service";
import {SettingsDefaultService} from "./services/settings-default.service";
import {AppErrorHandler} from "./services/error-handle.service";
import {PermissionsService} from "./services/permissions.service";
import {ScreenInstallService} from "./services/screen-install.service";
import {StatusColorsService} from "./services/status-colors.service";
import {FirebaseService} from "./services/firebase.service";
import {FirebaseAuthService} from "./services/firebase-auth.service";
import {FirebaseDatabaseService} from "./services/firebase-database.service";
import {FirebaseStorageService} from "./services/firebase-storage.service";
import {FirebaseMessagingService} from "./services/firebase-messaging.service";
import {HardwareService} from "./services/hardware.service";
import {LocalizationService} from "./services/localization.service";
import {WebRtcService} from "./services/web-rtc.service";
import {SmsService} from "./services/sms.service";
import {SwUpdateService} from "./services/sw-update.service";
import {StreamRecorderService} from "./services/stream-recorder.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
    BrowserAnimationsModule,
      NgxsModule.forRoot([LocalStorageState, AppContextState, StatusIndicatorsState], {developmentMode: !environment.production}),
      ServiceWorkerModule.register('firebase-messaging-sw.js', { enabled: true, registrationStrategy : 'registerImmediately' , scope : './' }),
      MaterialModule,
      GeneralModule,
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
    AppContextService,
    AppResolverService,
    ColorThemeService,
    OnlineService,
    SettingsDefaultService,
    PermissionsService,
    ScreenInstallService,
    StatusColorsService,
    FirebaseService,
    FirebaseAuthService,
    FirebaseDatabaseService,
    FirebaseStorageService,
    FirebaseMessagingService,
    HardwareService,
    LocalizationService,
      WebRtcService,
      SmsService,
      SwUpdateService,
      StreamRecorderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
