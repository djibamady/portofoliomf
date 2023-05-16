import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechojavaComponent } from './techojava.component';

describe('TechojavaComponent', () => {
  let component: TechojavaComponent;
  let fixture: ComponentFixture<TechojavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechojavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechojavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
