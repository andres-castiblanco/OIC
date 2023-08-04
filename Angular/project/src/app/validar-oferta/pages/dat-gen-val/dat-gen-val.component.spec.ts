import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatGenValComponent } from './dat-gen-val.component';

describe('DatGenValComponent', () => {
  let component: DatGenValComponent;
  let fixture: ComponentFixture<DatGenValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatGenValComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatGenValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
