import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamento } from 'src/app/models/Departamento';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Departamento>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosDepartamento: Departamento| null = null;

  departamentoform!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    
    this.departamentoform = new FormGroup({
      id: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.id: 0),
      sigla: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.sigla: '', [Validators.required]),
      name: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.name: '', [Validators.required])


    });



  }

  submit(){
    this.onSubmit.emit(this.departamentoform.value);
  }

}
