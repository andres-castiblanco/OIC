import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfFisEditComponent } from './inf-fis-edit.component';

describe('InfFisEditComponent', () => {
  let component: InfFisEditComponent;
  let fixture: ComponentFixture<InfFisEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfFisEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfFisEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
