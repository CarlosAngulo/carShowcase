import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { DetailComponent } from './components/detail/detail.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: CarsComponent,},
    { path: 'detail/:id', component: DetailComponent,},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);