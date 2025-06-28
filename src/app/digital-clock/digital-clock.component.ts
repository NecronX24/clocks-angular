import { Component } from '@angular/core';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
  selector: 'app-digital-clock',
  imports: [TimeInputComponent],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent {
    currentTime:string = '';

    onTimeUpdate(time:string) {
      this.currentTime = time;
    }
}
