import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfEcoComponent } from './inf-eco.component';

describe('InfEcoComponent', () => {
  let component: InfEcoComponent;
  let fixture: ComponentFixture<InfEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfEcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
