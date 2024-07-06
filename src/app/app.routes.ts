import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'products',
        loadComponent: () =>
            import('@home-inventory/products').then((m) => m.ProductsComponent),
    },
];
