import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModOferComponent } from './mod-ofer.component';

describe('ModOferComponent', () => {
  let component: ModOferComponent;
  let fixture: ComponentFixture<ModOferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModOferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModOferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
