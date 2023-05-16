import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBlueComponent } from './big-blue.component';

describe('BigBlueComponent', () => {
  let component: BigBlueComponent;
  let fixture: ComponentFixture<BigBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigBlueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
