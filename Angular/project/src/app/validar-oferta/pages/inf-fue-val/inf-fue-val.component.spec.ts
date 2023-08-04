import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfFueValComponent } from './inf-fue-val.component';

describe('InfFueValComponent', () => {
  let component: InfFueValComponent;
  let fixture: ComponentFixture<InfFueValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfFueValComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfFueValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
