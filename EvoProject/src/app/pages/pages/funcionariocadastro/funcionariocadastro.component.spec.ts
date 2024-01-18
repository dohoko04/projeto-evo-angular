import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariocadastroComponent } from './funcionariocadastro.component';

describe('FuncionariocadastroComponent', () => {
  let component: FuncionariocadastroComponent;
  let fixture: ComponentFixture<FuncionariocadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariocadastroComponent]
    });
    fixture = TestBed.createComponent(FuncionariocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
