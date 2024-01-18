import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Departamento } from '../models/Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrl = `${environment.ApiUrl}/Departamento`

  constructor(private http: HttpClient) { }

  GetDepartamentos() : Observable<Departamento[]>{
    return this.http.get<Departamento[]>(`${this.apiUrl}/Todos`);

  }
  
  GetDepartamento(id: number): Observable<Departamento>{
    return this.http.get <Departamento>(`${this.apiUrl}/Encontrar/${id}`);
  }

  createDepartamento(departamento: Departamento) : Observable<Departamento[]>{
    return this.http.post<Departamento[]>(`${this.apiUrl}/Adicionar`, departamento);
  }

  EditarDepartamento(departamento : Departamento) : Observable<Departamento[]>{
    return this.http.put<Departamento[]>(`${this.apiUrl}/Atualizar/${departamento.id}`, departamento);
  }

  ExcluirDepartamento(id : number): Observable<any> {
    return this.http.delete <Departamento[]>(`${this.apiUrl}/Excluir/${id}`);
  }


}
