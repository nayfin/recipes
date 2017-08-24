import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../modules/material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ]
})
export class CoreModule { }