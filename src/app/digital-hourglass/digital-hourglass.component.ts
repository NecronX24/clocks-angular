import { Component, Input } from '@angular/core'; // Ya no necesitamos Input aquí
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-hourglass',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'digital-hourglass.component.html',
  styleUrls: ['digital-hourglass.component.css']
})
export class DigitalHourglassComponent  { 
  @Input() currentTime: string = '00'; 
  @Input() maxValue: number = 60;

  particles: any[] = Array(100).fill(0).map((_, i) => ({
    animationDelay: `${Math.random() * 5}s`
  }));

  get topFillPercentage(): number {
    const normalizedValue = (this.maxValue - parseInt(this.currentTime)) / this.maxValue;
    return Math.min(100, Math.max(0, normalizedValue * 100));
  }

  get bottomFillPercentage(): number {
    const normalizedValue = parseInt(this.currentTime) / this.maxValue;
    return Math.min(100, Math.max(0, normalizedValue * 100));
  }
}