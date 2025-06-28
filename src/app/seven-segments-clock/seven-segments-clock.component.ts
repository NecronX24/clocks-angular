import { Component } from '@angular/core';
import { TimeInputComponent } from '../time-input/time-input.component';
import {Subscription, timer } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seven-segments-clock',
  imports: [CommonModule ,TimeInputComponent],
  templateUrl: './seven-segments-clock.component.html',
  styleUrl: './seven-segments-clock.component.css'
})
export class SevenSegmentsClockComponent{
  currentTime:string = '';
  currentHour:string = '';
  currentSuffix:string = 'AM';
  blinking:boolean= true;

  private timer!:Subscription;

  ngOnInit(){
    this.timer = timer(0,500).subscribe(()=>this.blinking=!this.blinking);
  }

  onTimeUpdate(time:string) {
    this.currentTime = time;
    this.currentHour=time.substring(0,2);
    if(parseInt(this.currentHour)> 11) this.currentSuffix='PM';
    else this.currentSuffix='AM';
    if(this.currentTime=='12:00:00') this.currentSuffix='M';
    if (parseInt(this.currentHour)>12) {
      const hour:number = parseInt(this.currentHour) - 12;
      this.currentHour= hour.toString().padStart(2,'0');
    } else if (this.currentHour=='00') this.currentHour='12';
  }
}
