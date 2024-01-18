import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/Funcionario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-funcionarios',
  templateUrl: './page-funcionarios.component.html',
  styleUrls: ['./page-funcionarios.component.css']
})
export class PageFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];

  constructor( private funcionarioService: FuncionarioService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=> {
      this.funcionarioService.GetFuncionarios(params['departamentoId']||null).subscribe(data =>{
        this.funcionarios = data
  
         this.funcionariosGeral = data;
      },(error) => {
        if (error.error && error.error.errors) {
          const errorMessages = Object.entries(error.error.errors)
            .flatMap(([key, msgs]) => 
              Array.isArray(msgs) ? msgs.map(msg => `${key}: ${msg}`) : []
            );
  
          alert(errorMessages.join(','));
        }
  
      });
  });
}

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario =>{
      return funcionario.nome.toLocaleLowerCase().startsWith(value);
    })
  }

  excluir(id: number) {
    if (confirm("Tem certeza que deseja exluir?")) {
      this.funcionarioService.ExcluirFuncionario(id).subscribe(data => {
        this.ngOnInit();
      })
    }
  }

}
