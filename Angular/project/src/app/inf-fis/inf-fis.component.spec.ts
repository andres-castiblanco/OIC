import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfFisComponent } from './inf-fis.component';

describe('InfFisComponent', () => {
  let component: InfFisComponent;
  let fixture: ComponentFixture<InfFisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfFisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfFisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
