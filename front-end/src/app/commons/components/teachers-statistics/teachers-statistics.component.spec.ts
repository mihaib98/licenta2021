import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersStatisticsComponent } from './teachers-statistics.component';

describe('TeachersStatisticsComponent', () => {
  let component: TeachersStatisticsComponent;
  let fixture: ComponentFixture<TeachersStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
