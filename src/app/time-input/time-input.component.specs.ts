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
    <app-time-input (timeUpdated)="onTimeUpdate($event)"></app-time-input>
    <p>Hora actual: {{ currentTime }}</p>
  `
})
export class TimeInputComponentTest {
  currentTime: string = '';
  isUpdating: boolean = true;

  onTimeUpdate(time: string) {
    this.currentTime = time;
    console.log('Hora actualizada:', time);
  }
}