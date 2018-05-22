import { DrilldownMenuModule } from './drilldown-menu/drilldown-menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DrilldownMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
