import { Routes } from '@angular/router';


export const routes: Routes = [
    {path:'',
        loadComponent: () => import('./workout-form/workout-form.component').then(m => m.WorkoutFormComponent)  
    },
    {
        path: 'display',
        loadComponent: () => import('./display-workout/display-workout.component').then(m => m.DisplayWorkoutComponent)
      },
      {
        path: 'analysis',
        loadComponent: () => import('./analysis/analysis.component').then(m => m.AnalysisComponent)
      },
];
