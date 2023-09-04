import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarUserPage } from './listar-user.page';

describe('ListarUserPage', () => {
  let component: ListarUserPage;
  let fixture: ComponentFixture<ListarUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
