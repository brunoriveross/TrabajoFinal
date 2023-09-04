import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarProfesorPage } from './listar-profesor.page';

describe('ListarProfesorPage', () => {
  let component: ListarProfesorPage;
  let fixture: ComponentFixture<ListarProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
