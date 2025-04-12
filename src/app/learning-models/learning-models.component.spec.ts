import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningModelsComponent } from './learning-models.component';

describe('LearningModelsComponent', () => {
  let component: LearningModelsComponent;
  let fixture: ComponentFixture<LearningModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
