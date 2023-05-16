import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencePythonComponent } from './competence-python.component';

describe('CompetencePythonComponent', () => {
  let component: CompetencePythonComponent;
  let fixture: ComponentFixture<CompetencePythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencePythonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencePythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
