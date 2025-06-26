import { Component, Input } from '@angular/core';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
  selector: 'app-analog-clock',
  standalone: true,
  imports:[TimeInputComponent],
  templateUrl: 'analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent {
  currentHour: string = '';
  currentMinute: string = '';
  currentSecond: string = '';

  onHourUpdate(time: string) {
    this.currentHour = time;
  }

  onMinuteUpdate(time: string) {
    this.currentMinute = time;
  }

  onSecondUpdate(time: string) {
    this.currentSecond = time;
  }

  getHourNumber(): number {
    return parseInt(this.currentHour, 10) || 0;
  }

  getMinuteNumber(): number {
    return parseInt(this.currentMinute, 10) || 0;
  }

  getSecondNumber(): number {
    return parseInt(this.currentSecond, 10) || 0;
  }
}
