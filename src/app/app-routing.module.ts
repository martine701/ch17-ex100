import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PepperoniComponent, EverythingComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/pepperoni',
    pathMatch: 'full'
  },
  {
    path: 'pepperoni',
    component: PepperoniComponent,
    pathMatch: 'full'
  },
  {
    path: 'everything/:size',
    component: EverythingComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
