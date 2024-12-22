import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Default route
    loadComponent: () =>
      import('./smart/components/landing/landing.component').then(m => m.LandingComponent),
  },
  {
    path: 'guests',
    loadChildren: () =>
      import('./smart/components/guests/guests.routes').then(m => m.guestsRoutes),
  },
  {
      path: 'game', loadComponent: () => import('./smart/components/game/game.component').then(m => m.GameComponent)
    }
//   {
//     path: '**', // Wildcard route for 404
//     loadComponent: () =>
//       import('./ui/components/not-found/not-found.component').then(m => m.NotFoundComponent),
//   },
];
