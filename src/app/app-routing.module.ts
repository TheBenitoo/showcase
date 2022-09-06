import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImdbComponent } from './modules/api/imdb/imdb.component';

const routes: Routes = [
  {path: 'imdb', component: ImdbComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
