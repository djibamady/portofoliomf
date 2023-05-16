import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechoangularComponent } from './techoangular.component';

describe('TechoangularComponent', () => {
  let component: TechoangularComponent;
  let fixture: ComponentFixture<TechoangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechoangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechoangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
