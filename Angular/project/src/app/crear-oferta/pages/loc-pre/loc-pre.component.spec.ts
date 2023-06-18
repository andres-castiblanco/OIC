import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocPreComponent } from './loc-pre.component';

describe('LocPreComponent', () => {
  let component: LocPreComponent;
  let fixture: ComponentFixture<LocPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
