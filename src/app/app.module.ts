import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { provideIonicAngular } from '@ionic/angular/standalone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresenterService } from './presenter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PresenterService,
    provideIonicAngular(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
