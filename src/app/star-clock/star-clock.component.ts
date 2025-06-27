import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
  selector: 'app-star-clock',
  standalone: true,
  imports: [CommonModule, TimeInputComponent],
  templateUrl: './star-clock.component.html',
  styleUrls: ['./star-clock.component.css']
})
export class StarClockComponent implements OnInit {
  currentHour: string = '0';
  currentMinute: string = '0';
  currentSecond: string = '0';
  
  hourAngle: number = 0;
  minuteAngle: number = 0;
  secondAngle: number = 0;
  
  private animationFrameId: number = 0;

  ngOnInit(): void {
    this.animate();
  }

  onHourUpdate(time: string) {
    this.currentHour = time;
  }

  onMinuteUpdate(time: string) {
    this.currentMinute = time;
  }

  onSecondUpdate(time: string) {
    this.currentSecond = time;
  }

  private animate(): void {
    const hours = parseInt(this.currentHour) || 0;
    const minutes = parseInt(this.currentMinute) || 0;
    const seconds = parseInt(this.currentSecond) || 0;
    
    this.hourAngle = (hours*60 + minutes) / 4; 
    this.minuteAngle = (minutes*60 + seconds) /10  ; 
    this.secondAngle = seconds * 6; 
    
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  getPlanetPosition(angle: number, distance: number): any {
    const radian = (angle - 90) * (Math.PI / 180);
    return {
      transform: `translate(-50%, -50%) translate(${distance * Math.cos(radian)}px, ${distance * Math.sin(radian)}px)`
    };
  }
}