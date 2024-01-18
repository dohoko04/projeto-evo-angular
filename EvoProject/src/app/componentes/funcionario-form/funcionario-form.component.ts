import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/models/Departamento';
import { Funcionario } from 'src/app/models/Funcionario';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionario | null = null;

  funcionarioForm!: FormGroup;
  departamentos: Departamento []=[]

  constructor(private departamentoService: DepartamentoService){}

  gerarLinkFoto(id?:number):string{return environment.ApiUrl+`/Funcionario/Foto/${id}`}

  ngOnInit(): void {

    this.departamentoService.GetDepartamentos().subscribe(data => {
      this.departamentos = data;
      console.log(this.departamentos);
    });

    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id: 0),
      nome:  new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome: '', [Validators.required]),
      rg: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.rg: '', [Validators.required]),
      departamentoId: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamentoId: '', [Validators.required]),
      foto: new FormControl(null)

    });
    
  }

  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.funcionarioForm.patchValue({foto: fileList[0]})
      
    }
  }

  submit(){

    this.onSubmit.emit(this.funcionarioForm.value);
    

  }

}
