import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechojavaeeComponent } from './techojavaee.component';

describe('TechojavaeeComponent', () => {
  let component: TechojavaeeComponent;
  let fixture: ComponentFixture<TechojavaeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechojavaeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechojavaeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
