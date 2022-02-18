import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpurpleComponent } from './layout/loginpurple/loginpurple.component';
import { LoginblueComponent } from './layout/loginblue/loginblue.component';
import { LogincolumnComponent } from './layout/logincolumn/logincolumn.component';
import { LogintwosideComponent } from './layout/logintwoside/logintwoside.component';
import { CepComponent } from './layout/cep/cep.component';
import { ResizeComponent } from './layout/resize/resize.component';
import { ColorpickermaterialComponent } from './layout/colorpickermaterial/colorpickermaterial.component';
import { BackgroundchangingComponent } from './layout/backgroundchanging/backgroundchanging.component';
import { InputcrudComponent } from './layout/inputcrud/inputcrud.component';
import { compileClassMetadata } from '@angular/compiler';
import { RasterComponent } from './layout/raster/raster.component';
import { RulesComponent } from './layout/rules/rules.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'purple',
    pathMatch: 'full'
  },
  {
    //Default route => layout/login
    path: 'purple',
    component: LoginpurpleComponent
  },
  {
    path: 'blue',
    component: LoginblueComponent
  },
  {
    path: 'column',
    component: LogincolumnComponent
  },
  {
    path: 'twoside',
    component: LogintwosideComponent
  },
  {
    path: 'cep',
    component: CepComponent,
  },
  {
    path: 'resize',
    component: ResizeComponent
  },
  {
    path: 'colormaterial',
    component: ColorpickermaterialComponent
  },
  {
    path: 'background',
    component: BackgroundchangingComponent
  },
  {
    path: 'listcrud',
    component: InputcrudComponent
  },
  {
    path: 'raster',
    component: RasterComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
