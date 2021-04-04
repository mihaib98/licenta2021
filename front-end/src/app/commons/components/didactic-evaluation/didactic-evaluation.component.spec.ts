import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidacticEvaluationComponent } from './didactic-evaluation.component';

describe('DidacticEvaluationComponent', () => {
  let component: DidacticEvaluationComponent;
  let fixture: ComponentFixture<DidacticEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidacticEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DidacticEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
