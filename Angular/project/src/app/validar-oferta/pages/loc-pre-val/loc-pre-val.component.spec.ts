import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocPreValComponent } from './loc-pre-val.component';

describe('LocPreValComponent', () => {
  let component: LocPreValComponent;
  let fixture: ComponentFixture<LocPreValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocPreValComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocPreValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
