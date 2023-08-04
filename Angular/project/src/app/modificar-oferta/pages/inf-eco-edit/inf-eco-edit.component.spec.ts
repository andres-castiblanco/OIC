import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfEcoEditComponent } from './inf-eco-edit.component';

describe('InfEcoEditComponent', () => {
  let component: InfEcoEditComponent;
  let fixture: ComponentFixture<InfEcoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfEcoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfEcoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
