import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'formfields',
    loadChildren: () => import('./formfields/formFieldExample.module').then((m) => m.FormFieldsExample),
  },
  {
    path: 'formfieldsnz',
    loadChildren: () => import('./formfieldsNz/formFieldExample.module').then((m) => m.FormFieldsNzExample),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
