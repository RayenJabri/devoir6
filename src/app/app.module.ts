import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { AddBoissonComponent } from './add-boisson/add-boisson.component';
import { FormsModule } from '@angular/forms';
import { UpdateBoissonComponent } from './update-boisson/update-boisson.component';
@NgModule({
  declarations: [
    AppComponent,
    BoissonsComponent,
    AddBoissonComponent,
    UpdateBoissonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
