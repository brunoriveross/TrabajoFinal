import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditaraPage } from './editara.page';

describe('EditaraPage', () => {
  let component: EditaraPage;
  let fixture: ComponentFixture<EditaraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
