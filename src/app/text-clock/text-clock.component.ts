import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
  selector: 'app-text-clock',
  templateUrl: './text-clock.component.html',
  styleUrls: ['./text-clock.component.css'],
  standalone: true,
  imports: [CommonModule, TimeInputComponent]
})
export class TextClockComponent {
  currentTime: string = '';

  onTimeUpdate(time: string) {
    this.currentTime = time;
  }  

  getTextHour(): string {
    let [hour, minute, second] = this.currentTime.split(':').map(Number);

    let timeOfDay:string='';
    if(hour>=0 && hour<6) timeOfDay=' de la madrugada';
    if(hour>=6 && hour<12) timeOfDay=' de la mañana';
    if(hour>=12 && hour<18) timeOfDay=' de la tarde';
    if(hour>=18 && hour<24) timeOfDay=' de la noche';

    let textHour:string;
    if (hour==1 || hour==13) textHour= 'una';
    else{
      if (hour>12) hour=hour-12;
      else if (hour==0) hour=12;
      textHour = this.transformNumber(hour);
    }

    let textMinute:string;
    if(minute==0) textMinute = ' en punto';
    else if(minute==15) textMinute = ' y cuarto';
    else if(minute==30) textMinute = ' y media';
    else if(minute==45) textMinute = ' menos cuarto';
    else textMinute = ` y ${this.transformNumber(minute)}`;

    let textSecond:string;
    if(second==0) textSecond='';
    else textSecond = ` con ${this.transformNumber(second)} segundos`;

    return `Son las ${textHour}${textMinute}${textSecond}${timeOfDay}`;
  }

  private transformNumber(num: number): string {
    const units = ['', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const tens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte'];
    const decimal = ['','veinti','veinte', 'treinta', 'cuarenta', 'cincuenta'];
    if (num < 10) return units[num];
    if (num >= 10 && num <= 20) return tens[num - 10];
    if (num > 20 && num <= 29) return `${decimal[1]}${units[num-20]}`;
    if (num >= 30 && num < 60) {
      const ten = Math.floor(num / 10);
      const unit = num % 10;
      return decimal[ten] + (unit !== 0 ? ` y ${units[unit]}` : '');
    }
    return '';
  }

}
