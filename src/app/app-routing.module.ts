import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryPageModule)
  },
  {
    path: 'letter',
    loadChildren: () => import('./letter/letter.module').then(m => m.LetterPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingPageModule)
  },
  {
    path: 'firstDate',
    loadChildren: () => import('./gallery/first-date/first-date-routing.module').then(m => m.FirstDatePageRoutingModule)
  },
  {
    path: 'poem',
    loadChildren: () => import('./poem/poem.module').then(m => m.PoemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
