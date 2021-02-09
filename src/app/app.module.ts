import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import {NgxFsModule} from 'ngx-fs';


import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { CreateCanvasComponent } from './components/create-canvas/create-canvas.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { PropertiesControlService } from './components/independent-properties-panel/services/properties-control.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { DynamicFormPropertyComponent } from './components/dynamic-form-property/dynamic-form-property.component';
import { IndependentPropertiesPanelComponent } from './components/independent-properties-panel/independent-properties-panel.component';
import { SharedModule } from './components/shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    IndependentPropertiesPanelComponent,
    CreateCanvasComponent,
    DynamicFormComponent,
    DynamicFormPropertyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgxFsModule,
    AngularSplitModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    MatSliderModule,
    SharedModule
  ],
  providers: [PropertiesControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
