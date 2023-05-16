import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceApiComponent } from './competence-api.component';

describe('CompetenceApiComponent', () => {
  let component: CompetenceApiComponent;
  let fixture: ComponentFixture<CompetenceApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
