import { Departamento } from "./Departamento";

export interface Funcionario{

    id? : number;
    nome : string;
    foto : File;
    rg : string;
    departamentoId? : number;
    departamento: Departamento;
}