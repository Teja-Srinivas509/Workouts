import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {

  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;
  workoutAdded: boolean = false;

  errors: { userName?: string; workoutType?: string; workoutMinutes?: string } = {};

  constructor(private router: Router) {}
  addWorkout(): void {
    this.errors = {};
    let hasError = false;

    if (!this.userName.trim()) {
      this.errors['userName'] = 'User Name is required.';
      hasError = true;
    }

    if (!this.workoutType) {
      this.errors['workoutType'] = 'Please select a workout type.';
      hasError = true;
    }

    if (this.workoutMinutes === null || this.workoutMinutes <= 0) {
      this.errors['workoutMinutes'] = 'Workout minutes must be greater than zero.';
      hasError = true;
    }

    if (hasError) return;

    let userData = JSON.parse(localStorage.getItem('workouts') || '[]');
    
    const existingUserIndex = userData.findIndex((user: any) => user.name === this.userName);
    if (existingUserIndex !== -1) {
      const existingWorkout = userData[existingUserIndex].workouts.find(
        (workout: any) => workout.type === this.workoutType
      );
      if (existingWorkout) {
        existingWorkout.minutes += this.workoutMinutes;
      } else {
        userData[existingUserIndex].workouts.push({
          type: this.workoutType,
          minutes: this.workoutMinutes
        });
      }
    } else {
      userData.push({
        id: userData.length + 1,
        name: this.userName,
        workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }]
      });
    }

    localStorage.setItem('workouts', JSON.stringify(userData));
    this.workoutAdded = true;
    console.log('workout',userData)

    setTimeout(() => this.router.navigate(['/display']), 1000);
  }
}
