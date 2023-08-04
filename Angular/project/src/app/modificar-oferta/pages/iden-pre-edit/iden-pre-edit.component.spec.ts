import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdenPreEditComponent } from './iden-pre-edit.component';

describe('IdenPreEditComponent', () => {
  let component: IdenPreEditComponent;
  let fixture: ComponentFixture<IdenPreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdenPreEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdenPreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
