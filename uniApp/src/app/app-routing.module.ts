import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './pages/ads/ads.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PtComponent } from './pages/pt/pt.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pt', component: PtComponent},
  {path: 'ads', component: AdsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
