import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar novo departamento"



constructor(private DepartamentoService: DepartamentoService, private router: Router) {
  
}

  createDepartamento(departamento: Departamento){
    this.DepartamentoService.createDepartamento(departamento).subscribe((data) => {
      this.router.navigate(['/'])
    },(error) => {
      if (error.error && error.error.errors) {
        const errorMessages = Object.entries(error.error.errors)
          .flatMap(([key, msgs]) => 
            Array.isArray(msgs) ? msgs.map(msg => `${key}: ${msg}`) : []
          );

        alert(errorMessages.join(','));
      }

    });
  }

}
