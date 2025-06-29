import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TimeInputComponent } from "../time-input/time-input.component";
import { RainbowCardComponent } from "./rainbow-card.component";

@Component({
    selector: 'app-rainbow-card-clock',
    standalone:true,
    imports: [CommonModule, TimeInputComponent, RainbowCardComponent],
    template:`
        <div class="clock-container">
            <app-rainbow-card [cardAngle]="15" [currentTime]="currentHour"/>
            <app-rainbow-card [cardAngle]="6" [currentTime]="currentMinute"/>
            <app-rainbow-card [cardAngle]="6" [currentTime]="currentSecond"/>
        </div>
        <div class="time-container">
            <app-time-input
                (hourUpdated)="onHourUpdate($event)"
                (minuteUpdated)="onMinuteUpdate($event)"
                (secondUpdated)="onSecondUpdate($event)">
            </app-time-input>
        </div>
    `,
    styles:[`
        .clock-container{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .time-container{
            align-items: center;
            display: flex;
            flex-direction: column;
        }
    `]
})

export class RainbowCardClockComponent{
    currentHour: string = '';
    currentMinute: string = '';
    currentSecond: string = '';

    onHourUpdate(time: string) {
    this.currentHour = time;
    }  
    onMinuteUpdate(time: string) {
    this.currentMinute = time;
    }  
    onSecondUpdate(time: string) {
    this.currentSecond = time;
    }
}