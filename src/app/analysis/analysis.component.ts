import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from './../app-config.service';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ActivatedRoute, Router } from '@angular/router';
import { DesignerService } from './../designer.service'; 

@Component({
  selector: 'app-analysis',
  standalone:true,
  imports: [CommonModule, ChartModule],
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  platformId = inject(PLATFORM_ID);
  configService = inject(AppConfigService);
  designerService: DesignerService; 
  selectedUser: string | null = null;
  showChart: boolean = false;
  userData: { id: number; name: string; workouts: { type: string; minutes: number }[] }[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    designerService: DesignerService  
  ) 
  {
    this.designerService = designerService;  
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.userData = JSON.parse(localStorage.getItem('workouts') || '[]');
      if (this.userData.length > 0) {
        console.log('userData', this.userData);
      } else {
        alert('No workout data found.');
      }
    }
    this.initChart();
  }

  themeEffect = effect(() => {
    if (this.configService.transitionComplete()) {
      if (this.designerService && this.designerService.preset()) {
        this.initChart();
      }
    }
  });

  onUserClick(user: any) {
    this.selectedUser = user.name;
    this.showChart = true;
    const workoutLabels = user.workouts.map((workout: any) => workout.type);
    const workoutMinutes = user.workouts.map((workout: any) => workout.minutes);
    console.log('user clicked', this.selectedUser);

    this.basicData = {
      labels: workoutLabels,
      datasets: [
        {
          label: `${user.name}'s Workouts`,
          data: workoutMinutes,
          backgroundColor: [
            'rgba(249, 115, 22, 0.2)',
            'rgba(6, 182, 212, 0.2)',
            'rgb(107, 114, 128, 0.2)',
            'rgba(139, 92, 246, 0.2)',
          ],
          borderColor: [
            'rgb(249, 115, 22)',
            'rgb(6, 182, 212)',
            'rgb(107, 114, 128)',
            'rgb(139, 92, 246)',
          ],
          borderWidth: 1,
        },
      ],
    };
    this.cd.markForCheck();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.basicOptions = {
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    }
  }
}
