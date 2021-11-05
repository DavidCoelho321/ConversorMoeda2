import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ListarSimboloService} from "./listar-simbolo.service";

export class Moeda {
  code: String = '';
  description: String = '';
}

@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css']
})
export class ListarSimbolosComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) protected paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  moedas: Moeda[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['code', 'description']

  constructor(private listarSimboloService: ListarSimboloService) {
  }

  ngOnInit(): void {
    this.carregarMoedas();
    this.dataSource.data = this.moedas;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  carregarMoedas() {
    this.listarSimboloService.listarSimbolos().subscribe(value => {
      for (let symbol in value.symbols) {
        let moeda: Moeda = new Moeda();
        moeda.code = value.symbols[symbol].code;
        moeda.description = value.symbols[symbol].description;
        this.moedas.push(moeda);
      }
      this.dataSource.data = this.moedas;
    });
  }

}
