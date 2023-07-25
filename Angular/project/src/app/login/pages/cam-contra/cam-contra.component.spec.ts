import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamContraComponent } from './cam-contra.component';

describe('CamContraComponent', () => {
  let component: CamContraComponent;
  let fixture: ComponentFixture<CamContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamContraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
