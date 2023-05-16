import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceJavaEEComponent } from './competence-java-ee.component';

describe('CompetenceJavaEEComponent', () => {
  let component: CompetenceJavaEEComponent;
  let fixture: ComponentFixture<CompetenceJavaEEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceJavaEEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceJavaEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
