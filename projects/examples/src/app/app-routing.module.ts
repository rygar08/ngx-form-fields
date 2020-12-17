import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'fieldxBs',
    loadChildren: () => import('./fieldxBs/fieldxBsExample.module').then((m) => m.FieldxBsExample),
  },
  {
    path: 'fieldxNz',
    loadChildren: () => import('./fieldxNz/fieldxNzExample.module').then((m) => m.FieldxNzExample),
  },
  {
    path: 'aggrid',
    loadChildren: () => import('./aggrid/aggrid.module').then((m) => m.AggridExampleModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
