import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutFormComponent } from './workout-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { fakeAsync, tick } from '@angular/core/testing';

describe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutFormComponent, FormsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error message when user name is empty', () => {
    component.userName = '';
    component.workoutType = 'Cardio';
    component.workoutMinutes = 30;
    component.addWorkout();

    expect(component.errors['userName']).toBe('User Name is required.');
  });

  it('should display an error message when workout type is not selected', () => {
    component.userName = 'John';
    component.workoutType = '';
    component.workoutMinutes = 30;
    component.addWorkout();

    expect(component.errors['workoutType']).toBe('Please select a workout type.');
  });

  it('should display an error message when workout minutes is less than or equal to zero', () => {
    component.userName = 'John';
    component.workoutType = 'Cardio';
    component.workoutMinutes = 0;
    component.addWorkout();

    expect(component.errors['workoutMinutes']).toBe('Workout minutes must be greater than zero.');
  });

  it('should add a new workout and update localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('[]'); 
    spyOn(localStorage, 'setItem');

    component.userName = 'John';
    component.workoutType = 'Cardio';
    component.workoutMinutes = 30;

    component.addWorkout();
    fixture.detectChanges();

    expect(localStorage.setItem).toHaveBeenCalledWith('workouts', JSON.stringify([{
      id: 1,
      name: 'John',
      workouts: [{ type: 'Cardio', minutes: 30 }]
    }]));
  });

  it('should update workout minutes if workout type already exists for the user', () => {
    const existingWorkoutData = [{
      id: 1,
      name: 'John',
      workouts: [{ type: 'Cardio', minutes: 30 }]
    }];

    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(existingWorkoutData));
    spyOn(localStorage, 'setItem'); 

    component.userName = 'John';
    component.workoutType = 'Cardio';
    component.workoutMinutes = 20;

    component.addWorkout();
    fixture.detectChanges();

    expect(localStorage.setItem).toHaveBeenCalledWith('workouts', JSON.stringify([{
      id: 1,
      name: 'John',
      workouts: [{ type: 'Cardio', minutes: 50 }]
    }]));
  });

  it('should navigate to /display after adding a workout', fakeAsync(() => {
    const navigateSpy = spyOn(router, 'navigate');
  
    component.userName = 'John';
    component.workoutType = 'Cardio';
    component.workoutMinutes = 30;
  
    component.addWorkout();
    tick(1000); 
    fixture.detectChanges();
  
    expect(navigateSpy).toHaveBeenCalledWith(['/display']);
  }));
});
