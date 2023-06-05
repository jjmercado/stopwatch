import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { TimerComponent } from './timer/timer.component';
import { TimerDataService } from './timer-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TimerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
