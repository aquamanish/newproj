import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NamesTagComponent } from './names-tag/names-tag.component';


@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NamesTagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
