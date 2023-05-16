import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencePHPComponent } from './competence-php.component';

describe('CompetencePHPComponent', () => {
  let component: CompetencePHPComponent;
  let fixture: ComponentFixture<CompetencePHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencePHPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencePHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
