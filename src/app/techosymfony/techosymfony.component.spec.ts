import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechosymfonyComponent } from './techosymfony.component';

describe('TechosymfonyComponent', () => {
  let component: TechosymfonyComponent;
  let fixture: ComponentFixture<TechosymfonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechosymfonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechosymfonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
