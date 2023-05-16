import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceJavaComponent } from './competence-java.component';

describe('CompetenceJavaComponent', () => {
  let component: CompetenceJavaComponent;
  let fixture: ComponentFixture<CompetenceJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceJavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
