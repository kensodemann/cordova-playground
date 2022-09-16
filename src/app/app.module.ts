import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { KeyValueStorage } from '@ionic-enterprise/secure-storage/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const appInit = (plt: Platform): (() => Promise<void>) => async () => {
  console.log('start appInit');
  await plt.ready();
  console.log('end appInit');
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, KeyValueStorage,
    /* {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      deps: [Platform],
      multi: true
    } */
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
