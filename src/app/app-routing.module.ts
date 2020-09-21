import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'code',
    loadChildren: () => import('./pages/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'verificate',
    loadChildren: () => import('./pages/verificate/verificate.module').then( m => m.VerificatePageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./pages/market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'prize',
    loadChildren: () => import('./pages/prize/prize.module').then( m => m.PrizePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'newhome',
    loadChildren: () => import('./pages/newhome/newhome.module').then( m => m.NewhomePageModule)
  },
  {
    path: 'person-detail',
    loadChildren: () => import('./pages/person-detail/person-detail.module').then( m => m.PersonDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
