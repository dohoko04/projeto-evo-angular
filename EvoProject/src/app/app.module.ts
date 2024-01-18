import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DepartamentoFormComponent } from './componentes/departamento-form/departamento-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './pages/editar/editar.component';
import { PageFuncionariosComponent } from './pages/page-funcionarios/page-funcionarios.component';
import { FuncionariocadastroComponent } from './pages/pages/funcionariocadastro/funcionariocadastro.component';
import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';
import { EditarfuncionarioComponent } from './pages/editarfuncionario/editarfuncionario.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    DepartamentoFormComponent,
    EditarComponent,
    PageFuncionariosComponent,
    FuncionariocadastroComponent,
    FuncionarioFormComponent,
    EditarfuncionarioComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
