import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfFueEditComponent } from './inf-fue-edit.component';

describe('InfFueEditComponent', () => {
  let component: InfFueEditComponent;
  let fixture: ComponentFixture<InfFueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfFueEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfFueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
