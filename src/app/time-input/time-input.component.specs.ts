import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeInputComponent } from './time-input.component';

@Component({
  selector: 'time-input-test',
  standalone: true,
  imports: [CommonModule, FormsModule, TimeInputComponent],
  template: `
    <h2>Control de Hora</h2>
    <app-time-input
        (timeUpdated)="onTimeUpdate($event)"
        (hourUpdated)="onHourUpdate($event)"
        (minuteUpdated)="onMinuteUpdate($event)"
        (secondUpdated)="onSecondUpdate($event)">
    </app-time-input>
    <p>Hora actual: {{ currentTime }}</p>
  `
})
export class TimeInputComponentTest {
  currentTime: string = '';
  currentHour: string = '';
  currentMinute: string = '';
  currentSecond: string = '';
  isUpdating: boolean = true;

  onTimeUpdate(time: string) {
    this.currentTime = time;
  }  
  onHourUpdate(time: string) {
    this.currentHour = time;
  }  
  onMinuteUpdate(time: string) {
    this.currentMinute = time;
  }  
  onSecondUpdate(time: string) {
    this.currentSecond = time;
    console.log(this.currentSecond);
  }
}