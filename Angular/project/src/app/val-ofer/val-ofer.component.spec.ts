import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValOferComponent } from './val-ofer.component';

describe('ValOferComponent', () => {
  let component: ValOferComponent;
  let fixture: ComponentFixture<ValOferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValOferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValOferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
