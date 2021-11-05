import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './template/topo/topo.component';
import { PrincipalComponent } from './template/principal/principal.component';
import { ConverterMoedasComponent } from './converter-moedas/converter-moedas.component';
import { ConverterRealDolarComponent } from './converter-real-dolar/converter-real-dolar.component';
import { ListarSimbolosComponent } from './listar-simbolos/listar-simbolos.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    ConverterMoedasComponent,
    ConverterRealDolarComponent,
    ListarSimbolosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent, TopoComponent]
})
export class AppModule { }
