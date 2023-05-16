import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechosuiteComponent } from './techosuite.component';

describe('TechosuiteComponent', () => {
  let component: TechosuiteComponent;
  let fixture: ComponentFixture<TechosuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechosuiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechosuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
