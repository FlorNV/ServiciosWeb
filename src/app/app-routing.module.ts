import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TranslatorComponent } from './components/translator/translator.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { MusicComponent } from './components/music/music.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

const routes: Routes = [
  { path: 'traductor', component: TranslatorComponent},
  { path: 'peliculas', component: MoviesComponent},
  { path: 'divisas', component: CurrencyComponent},
  { path: 'musica', component: MusicComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'traductor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TranslatorComponent, MoviesComponent, CurrencyComponent, MusicComponent];
