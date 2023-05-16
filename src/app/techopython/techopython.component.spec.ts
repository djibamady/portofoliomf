import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechopythonComponent } from './techopython.component';

describe('TechopythonComponent', () => {
  let component: TechopythonComponent;
  let fixture: ComponentFixture<TechopythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechopythonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechopythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
