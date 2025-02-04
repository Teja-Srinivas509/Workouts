import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayWorkoutComponent } from './display-workout.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DisplayWorkoutComponent', () => {
  let component: DisplayWorkoutComponent;
  let fixture: ComponentFixture<DisplayWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayWorkoutComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
