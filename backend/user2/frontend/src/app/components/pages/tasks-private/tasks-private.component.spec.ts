import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPrivateComponent } from './tasks-private.component';

describe('TasksPrivateComponent', () => {
  let component: TasksPrivateComponent;
  let fixture: ComponentFixture<TasksPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPrivateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
