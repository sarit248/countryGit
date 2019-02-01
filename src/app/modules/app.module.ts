import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { CountriesComponent } from '../components/countries/countries.component';
import { Page404Component } from '../components/page404/page404.component';
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from '../pipes/myfilter.pipe';


@NgModule({
    declarations: [
        LayoutComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        CountriesComponent,
        Page404Component,
        ThumbnailComponent,
        FilterPipe
    ],

    imports: [
        BrowserModule,
        Ng2SearchPipeModule,
        RoutingModule,
        RouterModule,
        HttpClientModule,
        FormsModule

    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
