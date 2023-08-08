import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfFisValComponent } from './inf-fis-val.component';

describe('InfFisValComponent', () => {
  let component: InfFisValComponent;
  let fixture: ComponentFixture<InfFisValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfFisValComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfFisValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
