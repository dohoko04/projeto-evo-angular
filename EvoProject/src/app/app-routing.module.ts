import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { PageFuncionariosComponent } from './pages/page-funcionarios/page-funcionarios.component';
import { FuncionariocadastroComponent } from './pages/pages/funcionariocadastro/funcionariocadastro.component';
import { EditarfuncionarioComponent } from './pages/editarfuncionario/editarfuncionario.component';

const routes: Routes = [
  {path: 'cadastro' , component: CadastroComponent},
  {path: '' , component: HomeComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'funcionarios/cadastro' , component: FuncionariocadastroComponent},
  {path: 'funcionarios' , component: PageFuncionariosComponent},
  {path: 'funcionarios/editar/:id', component: EditarfuncionarioComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
