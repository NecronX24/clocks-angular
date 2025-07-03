import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TimeInputComponent } from "../time-input/time-input.component";
import { RainbowCardComponent } from "./rainbow-card.component";

@Component({
    selector: 'app-rainbow-card-clock',
    standalone:true,
    imports: [CommonModule, TimeInputComponent, RainbowCardComponent],
    template:`
            <div class="switch-container">
                <div class="toggle-switch" (click)="changeBalatro()">
                    <div class="switch" [class.active]="isBalatro"></div>
                </div>
                <p>{{!isBalatro ? '¿Balatro?': '🤡'}}
            </div>
        <div class="clock-container">
            <app-rainbow-card [isBalatro]="isBalatro" [cardAngle]="15" [currentTime]="currentHour"/>
            <app-rainbow-card [isBalatro]="isBalatro" [cardAngle]="6" [currentTime]="currentMinute"/>
            <app-rainbow-card [isBalatro]="isBalatro" [cardAngle]="6" [currentTime]="currentSecond"/>
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
        .switch-container{
            display:flex;
            flex-direction:row;
            align-items: center;
        }
        .toggle-switch {
            width: 60px;
            height: 30px;
            background-color: #1f1f1f;
            border-radius: 15px;
            position: relative;
            cursor: pointer;
        }
        p{
            color:white;
            margin-left:10px;
        }
        .switch {
            width: 28px;
            height: 28px;
            background-color: #ccc;
            border-radius: 50%;
            position: absolute;
            top: 1px;
            transition: transform 0.3s;
        }
        .switch.active {
            transform: translateX(30px);
        }

    `]
})

export class RainbowCardClockComponent{
    currentHour: string = '';
    currentMinute: string = '';
    currentSecond: string = '';
    isBalatro:boolean = false;

    changeBalatro(){
        this.isBalatro = !this.isBalatro;
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
}