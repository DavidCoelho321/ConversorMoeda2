import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./template/principal/principal.component";
import {ListarSimbolosComponent} from "./listar-simbolos/listar-simbolos.component";
import {ConverterRealDolarComponent} from "./converter-real-dolar/converter-real-dolar.component";
import {ConverterMoedasComponent} from "./converter-moedas/converter-moedas.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'listar-simbolos', component: ListarSimbolosComponent},
  {path: 'converter-real-dolar', component: ConverterRealDolarComponent},
  {path: 'converter-moedas', component: ConverterMoedasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
