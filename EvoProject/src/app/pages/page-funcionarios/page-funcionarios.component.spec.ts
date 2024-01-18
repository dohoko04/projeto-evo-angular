import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFuncionariosComponent } from './page-funcionarios.component';

describe('PageFuncionariosComponent', () => {
  let component: PageFuncionariosComponent;
  let fixture: ComponentFixture<PageFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFuncionariosComponent]
    });
    fixture = TestBed.createComponent(PageFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
