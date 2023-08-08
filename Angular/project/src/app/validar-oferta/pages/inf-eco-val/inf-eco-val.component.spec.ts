import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfEcoValComponent } from './inf-eco-val.component';

describe('InfEcoValComponent', () => {
  let component: InfEcoValComponent;
  let fixture: ComponentFixture<InfEcoValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfEcoValComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfEcoValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
