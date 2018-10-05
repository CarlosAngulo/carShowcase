// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { CarsService } from './services/cars.service'
import { CompareService } from './services/compare.service'

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarsComponent } from './components/cars/cars.component';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/shared/card/card.component';
import { CompareComponent } from './components/compare/compare.component';
import { SortByBrandPipe } from './pipes/sort-by-brand.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsComponent,
    DetailComponent,
    SearchComponent,
    CardComponent,
    CompareComponent,
    SortByBrandPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    CarsService,
    CompareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
