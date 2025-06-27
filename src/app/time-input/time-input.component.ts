import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TimeInputComponent implements OnDestroy {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isAutoUpdating: boolean = true;
  private updateInterval: any;

  @Output() timeUpdated = new EventEmitter<string>();
  @Output() hourUpdated = new EventEmitter<string>();
  @Output() minuteUpdated = new EventEmitter<string>();
  @Output() secondUpdated = new EventEmitter<string>();

  constructor() {
    this.updateCurrentTime();
    this.startAutoUpdate();
  }

  ngOnDestroy(): void {
    this.stopAutoUpdate();
  }

  private updateCurrentTime(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    this.emitTime();
  }

  private startAutoUpdate(): void {
    this.stopAutoUpdate();
    this.updateInterval = setInterval(() => {
      if (this.isAutoUpdating) {
        this.updateCurrentTime();
      }
    }, 1000);
  }

  private stopAutoUpdate(): void {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }

  toggleAutoUpdate(): void {
    this.isAutoUpdating = !this.isAutoUpdating;
    if (this.isAutoUpdating) {
      this.updateCurrentTime();
    }
  }

  updateTime(): void {
    this.isAutoUpdating = false;
    this.emitTime();
  }

  private emitTime(): void {
    this.timeUpdated.emit(this.getTimeString());
    this.hourUpdated.emit(this.pad(this.hours))
    this.minuteUpdated.emit(this.pad(this.minutes))
    this.secondUpdated.emit(this.pad(this.seconds))
  }

  private getTimeString(): string {
    return `${this.pad(this.hours)}:${this.pad(this.minutes)}:${this.pad(this.seconds)}`;
  }

  private pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  validateHour(value:number):number{
    let newNumber:number = 0;
    if(value>23) newNumber=0;
    else if (value<0) newNumber=23;
    else newNumber = value;
    this.hours = newNumber;
    return newNumber;
  }

  validateMinute(value:number):number{
    let newNumber:number = 0;
    if(value>59){
      newNumber=0;
      this.validateHour(this.hours+1);
    }
    else if (value<0){
      newNumber=59;
      this.validateHour(this.hours-1);
    }
    else newNumber = value;
    this.minutes = newNumber;
    return newNumber;
  }

  validateNumber(event: any, type:string): void {
    const value = event.target.value;
    let newNumber:number = 0;
    if (type=='hours' && (value>23 || value<0)){
      event.target.value = this.validateHour(value);
    } else if(value>59 || value<0){
      if(type=='seconds'){
        if(value>59) {
          newNumber=0;
          this.validateMinute(this.minutes+1);
        }
        else if (value<0) {
          newNumber=59;
          this.validateMinute(this.minutes-1);
        }
        this.seconds = newNumber;
      } else if (type=='minutes'){
        if(value>59) {
          newNumber=0;
          this.validateHour(this.hours+1)
        }
        else if (value<0) {
          newNumber=59;
          this.validateHour(this.hours-1);
        }
        this.minutes = newNumber;
      }
      event.target.value = newNumber; 
    } 
    this.updateTime();
  }
}