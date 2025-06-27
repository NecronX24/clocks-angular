import { Component } from '@angular/core'; // Ya no necesitamos Input aquí
import { CommonModule } from '@angular/common';
import { DigitalHourglassComponent } from './digital-hourglass.component';
import { TimeInputComponent } from '../time-input/time-input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-digital-hourglass-clock',
  standalone: true,
  imports: [CommonModule, FormsModule, DigitalHourglassComponent, TimeInputComponent],
  template: `
  <div class="clock-container">
      <app-digital-hourglass [currentTime]="currentHour" [maxValue]="24"/>
      <app-digital-hourglass [currentTime]="currentMinute" [maxValue]="60"/>
      <app-digital-hourglass [currentTime]="currentSecond" [maxValue]="60"/>
    </div>
    <app-time-input
        (hourUpdated)="onHourUpdate($event)"
        (minuteUpdated)="onMinuteUpdate($event)"
        (secondUpdated)="onSecondUpdate($event)">
    </app-time-input>
  `,
  styles:[`
    .clock-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
    `]
})
export class DigitalHourglassClockComponent {
  currentHour: string = '00';
  currentMinute: string = '00';
  currentSecond: string = '00';

  onHourUpdate(time: string) {
    this.currentHour = time;
    
  }  
  onMinuteUpdate(time: string) {
    this.currentMinute = time;
  }  
  onSecondUpdate(time: string) {
    this.currentSecond = time;
  }
}