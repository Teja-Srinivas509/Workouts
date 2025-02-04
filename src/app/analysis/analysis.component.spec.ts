import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalysisComponent } from './analysis.component';
import { AppConfigService } from '../app-config.service';
import { DesignerService } from '../designer.service';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AnalysisComponent', () => {
  let component: AnalysisComponent;
  let fixture: ComponentFixture<AnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ChartModule, AnalysisComponent],
      providers: [
        { provide: AppConfigService, useValue: { transitionComplete: () => true } },
        { provide: DesignerService, useValue: { preset: () => true } },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalysisComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call initChart() on component initialization', () => {
    spyOn(component, 'initChart');
    fixture.detectChanges(); 
    expect(component.initChart).toHaveBeenCalled();
  });

  it('should handle themeEffect trigger correctly', () => {
    fixture.detectChanges();
    expect(component.themeEffect).toBeDefined();
  });

  it('should load data from localStorage if available', () => {
    const mockData = JSON.stringify([{ id: 1, name: 'User1', workouts: [] }]);
    spyOn(localStorage, 'getItem').and.returnValue(mockData);
    fixture.detectChanges();
    expect(component.userData.length).toBeGreaterThan(0);
  });
});
