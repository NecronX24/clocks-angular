import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
  selector: 'app-binary-clock',
  templateUrl: './binary-clock.component.html',
  styleUrls: ['./binary-clock.component.css'],
  standalone: true,
  imports: [CommonModule, TimeInputComponent]
})
export class BinaryClockComponent  {
  currentTime:string =''
  onTimeUpdate(time:string){
    this.currentTime = time;
  }

  convertToBinaryArray(value: string, length: number): number[] {
    return parseInt(value).toString(2).padStart(length, '0').split('').map(Number);
  }
}
