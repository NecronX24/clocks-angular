import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
  selector: 'app-loading-bar-clock',
  standalone: true,
  imports: [CommonModule, TimeInputComponent],
  templateUrl: './loading-bar-clock.component.html',
  styleUrls: ['./loading-bar-clock.component.css'],
})
export class LoadingBarClockComponent {
  currentHour: number = 0;
  currentMinute: number = 0;
  currentSecond: number = 0;
  
  onTimeUpdate(time: string) {
    this.currentSecond = parseInt(time[6]+time[7]);
    this.currentMinute = parseInt(time[3]+time[4]) + (this.currentSecond/60);
    this.currentHour = parseInt(time[0]+time[1]) + (this.currentMinute/60);
  }

  getBarPercentage(value: number, total: number): number {
    return (value / total) * 100; // Porcentaje de llenado
  }

}
