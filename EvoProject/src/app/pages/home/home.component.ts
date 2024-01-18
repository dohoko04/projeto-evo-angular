import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamento } from 'src/app/models/Departamento';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  departamentos: Departamento[] = [];
  departamentoGeral: Departamento[] = [];

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.departamentoService.GetDepartamentos().subscribe(data => {
      this.departamentoGeral = data;
      this.departamentos = data;
      console.log(this.departamentos);
    });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.departamentos = this.departamentoGeral.filter(departamento =>{
      return departamento.name.toLocaleLowerCase().startsWith(value);
    })
  }

  excluir(id: number) {
    if (confirm("Tem certeza que deseja exluir?")) {
      this.departamentoService.ExcluirDepartamento(id).subscribe(data => {
        this.ngOnInit();
      })
    }
  }
  
  

}
