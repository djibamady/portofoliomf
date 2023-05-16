import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceGestionDataComponent } from './competence-gestion-data.component';

describe('CompetenceGestionDataComponent', () => {
  let component: CompetenceGestionDataComponent;
  let fixture: ComponentFixture<CompetenceGestionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceGestionDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceGestionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
