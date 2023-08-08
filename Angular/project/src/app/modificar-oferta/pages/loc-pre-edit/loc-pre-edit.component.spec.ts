import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocPreEditComponent } from './loc-pre-edit.component';

describe('LocPreEditComponent', () => {
  let component: LocPreEditComponent;
  let fixture: ComponentFixture<LocPreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocPreEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocPreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
