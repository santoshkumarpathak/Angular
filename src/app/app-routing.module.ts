import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CapisuleComponent } from './medication/capisule/capisule.component';
import { SyrupComponent } from './medication/syrup/syrup.component';
import { TabletComponent } from './medication/tablet/tablet.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent,pathMatch:"full"
  },

  {
    path: 'capisule', component: CapisuleComponent,
  },
  {
    path: 'syrup', component: SyrupComponent,
   },
   {
     path: 'tablet', component: TabletComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
