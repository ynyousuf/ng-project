import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAllComponent } from './test-all/test-all.component';
import { MainFrameComponent } from './test-all/main-frame/main-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAllComponent,
    MainFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
