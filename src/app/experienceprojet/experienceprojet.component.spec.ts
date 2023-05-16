import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceprojetComponent } from './experienceprojet.component';

describe('ExperienceprojetComponent', () => {
  let component: ExperienceprojetComponent;
  let fixture: ComponentFixture<ExperienceprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
