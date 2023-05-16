import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechophpComponent } from './techophp.component';

describe('TechophpComponent', () => {
  let component: TechophpComponent;
  let fixture: ComponentFixture<TechophpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechophpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechophpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
