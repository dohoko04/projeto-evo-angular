import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editarfuncionario',
  templateUrl: './editarfuncionario.component.html',
  styleUrls: ['./editarfuncionario.component.css']
})
export class EditarfuncionarioComponent implements OnInit {

  btnAcao: string = 'Editar'
  btnTitulo: string = 'Editar Funcionário'
  funcionario!: Funcionario;

  constructor(private funcionarioService : FuncionarioService, private route : ActivatedRoute, private router: Router ){}


  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(id).subscribe((data) =>{
      this.funcionario = data;

    });

    

  }

  editarFuncionario(funcionario : Funcionario){
    this.funcionarioService.EditarFuncionario(funcionario).subscribe((data) =>{
      this.router.navigate(['/funcionarios'])

    });

  }

}
