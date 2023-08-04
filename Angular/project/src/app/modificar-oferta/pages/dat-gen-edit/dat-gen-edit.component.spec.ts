import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatGenEditComponent } from './dat-gen-edit.component';

describe('DatGenEditComponent', () => {
  let component: DatGenEditComponent;
  let fixture: ComponentFixture<DatGenEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatGenEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatGenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
