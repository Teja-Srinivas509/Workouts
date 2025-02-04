import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-display-workout',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './display-workout.component.html',
  styleUrls: ['./display-workout.component.css'] 
})

export class DisplayWorkoutComponent implements OnInit {

  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;
  userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
    {
      id: 4,
      name: 'Harry Potter',
      workouts: [
        { type: 'Swimming', minutes: 45 },
        { type: 'Yoga', minutes: 25 }
      ]
    },
    {
      id: 5,
      name: 'Hermione Granger',
      workouts: [
        { type: 'Cycling', minutes: 20 },
        { type: 'Running', minutes: 40 },
        {type:'yoga',minutes:32}
      ]
    },
    {
      id: 6,
      name: 'Ron Weasley',
      workouts: [
        { type: 'Running', minutes: 40 },
        { type: 'Cycling', minutes: 30 }
      ]
    },
    {
      id: 7,
      name: 'Tony Stark',
      workouts: [
        { type: 'Swimming', minutes: 40 },
        { type: 'Yoga', minutes: 30 }
      ]
    },
    {
      id: 8,
      name: 'Steve Rogers',
      workouts: [
        { type: 'Running', minutes: 40 },
        { type: 'Cycling', minutes: 60 }
      ]
    },
    {
      id: 9,
      name: 'Natasha Romanoff',
      workouts: [
        { type: 'Swimming', minutes: 25},
        { type: 'Yoga', minutes: 30 }
      ]
    },
    {
      id: 10,
      name: 'Bruce Banner',
      workouts: [
        { type: 'Yoga', minutes: 10 },
        { type: 'Swimming', minutes: 24 }
      ]
    },
    {
      id: 11,
      name: 'Thor Odinson',
      workouts: [
        { type: 'Running', minutes: 16 },
        { type: 'Cycling', minutes: 12 },
        { type: 'Yoga', minutes: 32 }
      ]
    },
    {
      id: 12,
      name: 'Monica Geller',
      workouts: [
        { type: 'Swimming', minutes: 14 },
        { type: 'Yoga', minutes: 90 }
      ]
    },
    {
      id: 13,
      name: 'Chandler Bing',
      workouts: [
        { type: 'Running', minutes: 50 },
        { type: 'Cycling', minutes: 10 },
        { type: 'Yoga', minutes: 20 }
      ]
    },
    {
      id: 14,
      name: 'Rachel Green',
      workouts: [
        { type: 'Swimming', minutes: 20 },
        { type: 'Yoga', minutes: 60 }
      ]
    },
    {
      id: 15,
      name: 'Joey Tribbiani',
      workouts: [
        { type: 'Running', minutes: 180 },
        { type: 'Cycling', minutes: 120 }
      ]
    },
    {
      id: 16,
      name: 'Phoebe Buffay',
      workouts: [
        { type: 'Swimming', minutes: 90 },
        { type: 'Yoga', minutes: 150 }
      ]
    },
    {
      id: 17,
      name: 'Loki Laufeyson',
      workouts: [
        { type: 'Running', minutes: 160 },
        { type: 'Cycling', minutes: 110 }
      ]
    },
    {
      id: 18,
      name: 'Dr. Strange',
      workouts: [
        { type: 'Yoga', minutes: 200 },
        { type: 'Swimming', minutes: 180 }
      ]
    },
    {
      id: 19,
      name: 'Wanda Maximoff',
      workouts: [
        { type: 'Running', minutes: 15 },
        { type: 'Cycling', minutes: 20 },
        {type:'yoga',minutes:45}
      ]
    },
    {
      id: 20,
      name: 'Vision',
      workouts: [
        { type: 'Yoga', minutes: 220 },
        { type: 'Swimming', minutes: 140 }
      ]
    }
  ];
  storedData : any;

  searchQuery: string = '';
  selectedWorkoutType: string = '';
  availableWorkoutTypes = ['Running', 'Cycling', 'Swimming', 'Yoga'];
  currentPage: number = 1;
  itemsPerPage: number = 5;


  constructor(private route: ActivatedRoute, private router: Router) {}
  

  
  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    try {
      this.storedData = JSON.parse(localStorage.getItem('workouts') || '[]');
      if (!Array.isArray(this.storedData) || this.storedData.length === 0) {
        localStorage.setItem('workouts', JSON.stringify(this.userData));
      } else {
        this.userData = this.storedData;
      }
    } catch (error) {
      console.error('Invalid data in localStorage. Resetting data.');
      localStorage.setItem('workouts', JSON.stringify(this.userData));
    }
  }

  saveWorkoutsToLocalStorage(): void {
    localStorage.setItem('workouts', JSON.stringify(this.userData));
  }

  
  getTotalPages(): number {
    return Math.ceil(this.filteredUsers().length / this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  getPagedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers().slice(startIndex, endIndex);
  }

  getTotalMinutes(workouts: { type: string; minutes: number }[]) {
    return workouts.reduce((sum, workout) => sum + workout.minutes, 0);
  }

  getWorkoutTypes(workouts: { type: string; minutes: number }[]) {
    return workouts.map(workout => workout.type).join(', ');
  }

  filteredUsers() {
    return this.userData.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesWorkoutType = this.selectedWorkoutType === '' ||
        user.workouts.some(workout => workout.type === this.selectedWorkoutType);
      return matchesSearch && matchesWorkoutType;
    });
  }
  goToAnalysis(): void {
    this.router.navigate(['/analysis']);
  }  
  
}
