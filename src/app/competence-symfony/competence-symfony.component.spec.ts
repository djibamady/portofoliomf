import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceSymfonyComponent } from './competence-symfony.component';

describe('CompetenceSymfonyComponent', () => {
  let component: CompetenceSymfonyComponent;
  let fixture: ComponentFixture<CompetenceSymfonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceSymfonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceSymfonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
