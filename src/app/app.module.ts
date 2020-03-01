import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import {NgxFsModule} from 'ngx-fs';


import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { IndependentPropertiesPanelComponent } from './components/independent-properties-panel/independent-properties-panel.component';
import { CreateCanvasComponent } from './components/create-canvas/create-canvas.component';
import { InputTextContainerComponent } from './shared/input-text-container/input-text-container.component';
import { InputTextareaContainerComponent } from './shared/input-textarea-container/input-textarea-container.component';
import { InputSelectContainerComponent } from './shared/input-select-container/input-select-container.component';
import { DynamicFormComponent } from './shared/dynamic-form/dynamic-form.component';
import { PropertiesControlService } from './components/independent-properties-panel/properties-control.service';
import { DynamicFormPropertyComponent } from './shared/dynamic-form-property/dynamic-form-property.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { MultiSelectComponent } from './shared/multi-select/multi-select.component';



@NgModule({
  declarations: [
    AppComponent,
    IndependentPropertiesPanelComponent,
    CreateCanvasComponent,
    InputTextContainerComponent,
    InputTextareaContainerComponent,
    InputSelectContainerComponent,
    DynamicFormComponent,
    DynamicFormPropertyComponent,
    MultiSelectComponent
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
    MatSliderModule
  ],
  providers: [PropertiesControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
