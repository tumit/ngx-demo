import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from '@app/pages/demo-page/demo-page.component';

const routes: Routes = [
  { path: 'demo', component: DemoPageComponent },
  { path: '', redirectTo: '/demo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
