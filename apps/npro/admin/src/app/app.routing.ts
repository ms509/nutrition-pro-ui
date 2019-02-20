import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, LoginComponent, RegisterComponent, ListRecipesComponent, AddRecipesComponent } from './components';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'my-recipes', component: ListRecipesComponent },
    { path: 'recipes/add', component: AddRecipesComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);