import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CountriesComponent } from '../components/countries/countries.component';
import { Page404Component } from '../components/page404/page404.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "countries", component: CountriesComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
