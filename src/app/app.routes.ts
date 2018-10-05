import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { DetailComponent } from './components/detail/detail.component';
import { CompareComponent } from './components/compare/compare.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: CarsComponent,},
    { path: 'search/:term', component: SearchComponent,},
    { path: 'detail/:id', component: DetailComponent,},
    { path: 'compare', component: CompareComponent,},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);