import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxGanttModule } from 'devextreme-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DxGanttModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
