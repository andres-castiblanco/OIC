import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConOferComponent } from './con-ofer.component';

describe('ConOferComponent', () => {
  let component: ConOferComponent;
  let fixture: ComponentFixture<ConOferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConOferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConOferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
