import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ConversorService} from "./conversor.service";

@Component({
  selector: 'app-converter-real-dolar',
  templateUrl: './converter-real-dolar.component.html',
  styleUrls: ['./converter-real-dolar.component.css']
})
export class ConverterRealDolarComponent implements OnInit {
  title = 'Conversor-Moedas';

  formulario: any;
  valorConvert: number | undefined;
  visualizarVar: boolean | undefined;

  constructor(private conversorService : ConversorService) { }

  ngOnInit(): void {
    this.visualizarVar = false;
    this.formulario = new FormGroup({
      valor: new FormControl(null)
    });
  }
  Converter(): void {
    const valor = this.formulario.value.valor;
    this.visualizarVar = true;
    this.conversorService.FazerConversao().subscribe(resultado => {
      this.valorConvert = Number(valor * resultado.result.toFixed(2))

    })

  }


}
