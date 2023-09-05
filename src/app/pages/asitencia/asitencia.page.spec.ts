import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsitenciaPage } from './asitencia.page';

describe('AsitenciaPage', () => {
  let component: AsitenciaPage;
  let fixture: ComponentFixture<AsitenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsitenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
