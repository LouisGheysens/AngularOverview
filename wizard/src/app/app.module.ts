import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpurpleComponent } from './layout/loginpurple/loginpurple.component';
import { LoginblueComponent } from './layout/loginblue/loginblue.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LogincolumnComponent } from './layout/logincolumn/logincolumn.component';
import { LogintwosideComponent } from './layout/logintwoside/logintwoside.component';
import { CepComponent } from './layout/cep/cep.component';
import { DraganddropComponent } from './layout/draganddrop/draganddrop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizeComponent } from './layout/resize/resize.component';
import { BackgroundchangingComponent } from './layout/backgroundchanging/backgroundchanging.component';
import { InputcrudComponent } from './layout/inputcrud/inputcrud.component';
import { RasterComponent } from './layout/raster/raster.component';
import { RulesComponent } from './layout/rules/rules.component';
import { MaskComponent } from './layout/mask/mask.component';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { ColorpickermaterialComponent } from './layout/colorpickermaterial/colorpickermaterial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpurpleComponent,
    LoginblueComponent,
    NavbarComponent,
    LogincolumnComponent,
    LogintwosideComponent,
    CepComponent,
    DraganddropComponent,
    ResizeComponent,
    BackgroundchangingComponent,
    InputcrudComponent,
    RasterComponent,
    RulesComponent,
    MaskComponent,
    ColorpickermaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgxMatColorPickerModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
  ],
  providers: [ { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
