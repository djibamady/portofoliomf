import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauCompetenceComponent } from './tableau-competence.component';

describe('TableauCompetenceComponent', () => {
  let component: TableauCompetenceComponent;
  let fixture: ComponentFixture<TableauCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauCompetenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
