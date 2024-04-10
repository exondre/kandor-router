// app-routing.module.ts
import { Routes } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'hidden_home', component: AppComponent },
    { path: '', redirectTo: 'redirect', pathMatch: 'full' },
    { path: 'redirect', component: RedirectComponent },
    { path: '**', redirectTo: 'redirect' }, // Redirige cualquier ruta no coincidente a RedirectComponent
];

export default routes;
