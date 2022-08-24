import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentViewComponent } from './document-view/document-view.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, 
    data: {title: 'Digio | Login'}},
  {path: 'document-view', component: DocumentViewComponent, data: {title: 'Digio | Document View'}},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
