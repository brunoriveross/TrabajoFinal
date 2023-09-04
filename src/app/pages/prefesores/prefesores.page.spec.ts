import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrefesoresPage } from './prefesores.page';

describe('PrefesoresPage', () => {
  let component: PrefesoresPage;
  let fixture: ComponentFixture<PrefesoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrefesoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
