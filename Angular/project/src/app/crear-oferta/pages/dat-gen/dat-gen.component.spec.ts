import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatGenComponent } from './dat-gen.component';

describe('DatGenComponent', () => {
  let component: DatGenComponent;
  let fixture: ComponentFixture<DatGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
