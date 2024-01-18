import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarfuncionarioComponent } from './editarfuncionario.component';

describe('EditarfuncionarioComponent', () => {
  let component: EditarfuncionarioComponent;
  let fixture: ComponentFixture<EditarfuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarfuncionarioComponent]
    });
    fixture = TestBed.createComponent(EditarfuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
