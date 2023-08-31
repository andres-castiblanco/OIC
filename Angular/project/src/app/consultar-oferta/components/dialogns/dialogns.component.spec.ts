import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialognsComponent } from './dialogns.component';

describe('DialognsComponent', () => {
  let component: DialognsComponent;
  let fixture: ComponentFixture<DialognsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialognsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialognsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
