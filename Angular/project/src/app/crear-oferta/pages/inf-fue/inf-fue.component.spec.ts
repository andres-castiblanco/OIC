import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfFueComponent } from './inf-fue.component';

describe('InfFueComponent', () => {
  let component: InfFueComponent;
  let fixture: ComponentFixture<InfFueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfFueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfFueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
