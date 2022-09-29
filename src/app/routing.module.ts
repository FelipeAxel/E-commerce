import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewNaoEncotradaComponent } from './new-nao-encotrada/new-nao-encotrada.component';

const routes: Routes =[
  {path: 'produtos', loadChildren:()=> import('./produtos/produtos.module').then(m=>m.ProdutosModule)},
  {path:"", redirectTo: "produtos", pathMatch:"full"},
  {path:"**", component:NewNaoEncotradaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
