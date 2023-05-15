import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdenPreComponent } from './iden-pre.component';

describe('IdenPreComponent', () => {
  let component: IdenPreComponent;
  let fixture: ComponentFixture<IdenPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdenPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdenPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
