import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdenPreValComponent } from './iden-pre-val.component';

describe('IdenPreValComponent', () => {
  let component: IdenPreValComponent;
  let fixture: ComponentFixture<IdenPreValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdenPreValComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdenPreValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
