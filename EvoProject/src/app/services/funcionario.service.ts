import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {


  private apiUrl = `${environment.ApiUrl}/Funcionario`

  constructor(private http: HttpClient){ }

  GetFuncionarios(id?:number) : Observable <Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.apiUrl}/Todos${(id?`?departamentoId=${id}`:'')}`);
    
  }

  GetFuncionario(id : number) : Observable<Funcionario>{
    return this.http.get<Funcionario>(`${this.apiUrl}/Encontrar/${id}`);
  }

  EditarFuncionario(funcionario: Funcionario): Observable<Funcionario[]> {

    const formData: FormData = new FormData();
    
    formData.append('id', funcionario.id ? funcionario.id.toString() : '0');
    formData.append('nome', funcionario.nome);
    formData.append('rg', funcionario.rg);
    formData.append('foto', funcionario.foto);
    formData.append('departamentoid', funcionario.departamentoId ? funcionario.departamentoId.toString() : '0');


    return this.http.put<Funcionario[]>(`${this.apiUrl}/Atualizar/${funcionario.id}`, formData);
  }

  CreateFuncionario(funcionario: Funcionario): Observable<Funcionario[]> {
    const formData: FormData = new FormData();
    
    formData.append('id', funcionario.id ? funcionario.id.toString() : '0');
    formData.append('nome', funcionario.nome);
    formData.append('rg', funcionario.rg);
    formData.append('foto', funcionario.foto);
    formData.append('departamentoid', funcionario.departamentoId ? funcionario.departamentoId.toString() : '0');

    

    return this.http.post<Funcionario[]>(`${this.apiUrl}/Adicionar`, formData);
  }

  ExcluirFuncionario(id : number): Observable<any> {
    return this.http.delete <Funcionario[]>(`${this.apiUrl}/Excluir/${id}`);
  }

}
