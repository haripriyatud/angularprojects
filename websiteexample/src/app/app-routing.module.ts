import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewbookdetailsComponent } from './viewbookdetails/viewbookdetails.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: ViewbooksComponent},
  { path: 'viewbookDetails/:title', component:ViewbookdetailsComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
