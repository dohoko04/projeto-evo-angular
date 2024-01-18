import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';


@Component({
  selector: 'app-funcionariocadastro',
  templateUrl: './funcionariocadastro.component.html',
  styleUrls: ['./funcionariocadastro.component.css']
})
export class FuncionariocadastroComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar funcionário"


  constructor(private funcionarioService : FuncionarioService, private router: Router, private currentRoute: ActivatedRoute){

  }

  createFuncionario(funcionario: Funcionario){

    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/funcionarios'])

    });
  }

}
