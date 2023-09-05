import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarpPage } from './editarp.page';

describe('EditarpPage', () => {
  let component: EditarpPage;
  let fixture: ComponentFixture<EditarpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
