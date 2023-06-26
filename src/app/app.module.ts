import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegionsComponent } from './regions/regions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RegionsRoutingModule } from './regions/regions-routing.module';
import { RegionCountriesComponent } from './countries/countries.component';
import { LetModule } from '@ngrx/component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegionsComponent,
    RegionCountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegionsRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    LetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
