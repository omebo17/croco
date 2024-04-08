import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'slots', pathMatch: 'full' },
  { path: 'slots', loadChildren: () => import('./pages/slots/slots.module').then(m => m.SlotsModule) },
  { path: 'casino', loadChildren: () => import('./pages/casino/casino.module').then(m => m.CasinoModule) },
  { path: 'live', loadChildren: () => import('./pages/live/live.module').then(m => m.LiveModule) },
  { path: 'sport', loadChildren: () => import('./pages/sport/sport.module').then(m => m.SportModule) },
  { path: 'casino', loadChildren: () => import('./pages/casino/casino.module').then(m => m.CasinoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }