import { loadRemoteModule } from '@angular-architects/module-federation'
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://teddy-frontend-welcome.vercel.app/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
         remoteEntry: 'https://teddy-frontend-home.vercel.app/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
    loadChildren: () => [
      {
        path: 'clientes',
        loadComponent: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'https://teddy-frontend-one.vercel.app/remoteEntry.js', 
            exposedModule: './Component',
          }).then((m) => m.AppComponent),
      },
      { path: '', redirectTo: 'clientes', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
