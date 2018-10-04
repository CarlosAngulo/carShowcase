// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { CarsService } from './services/cars.service'

// Components
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarsComponent } from './components/cars/cars.component';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    NavbarComponent,
    CarsComponent,
    DetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
