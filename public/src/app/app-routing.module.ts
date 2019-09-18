import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component'



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'new', component:NewauthorComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'**', pathMatch:'full', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
