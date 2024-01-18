import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/models/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
  btnAcao: string='Editar'
  btnTitulo: string='Editar departamento'
  departamento!: Departamento;




  constructor(private departamentoService: DepartamentoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.departamentoService.GetDepartamento(id).subscribe((data) => {
      this.departamento = data;
    })
  
    
  }

  editarDepartamento(departamento : Departamento){
    this.departamentoService.EditarDepartamento(departamento).subscribe((data)=>{
      this.router.navigate(['/'])
      
    })
  }

}
