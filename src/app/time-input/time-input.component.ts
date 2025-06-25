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

  validateNumber(event: any, max: number): void {
    const value = event.target.value;
    if (value > max) {
      event.target.value = max;
      if (max === 23) this.hours = max;
      else if (max === 59) this.minutes = max;
    } else if (value < 0) {
      event.target.value = 0;
      if (max === 23) this.hours = 0;
      else if (max === 59) this.minutes = 0;
    }
    this.updateTime();
  }
}