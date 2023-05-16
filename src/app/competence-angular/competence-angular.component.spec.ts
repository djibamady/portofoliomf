import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceAngularComponent } from './competence-angular.component';

describe('CompetenceAngularComponent', () => {
  let component: CompetenceAngularComponent;
  let fixture: ComponentFixture<CompetenceAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
