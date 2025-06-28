import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TimeInputComponent } from "../time-input/time-input.component";
import { FlowerComponent } from "./flower.component";

@Component({
    selector:'app-flower-clock',
    standalone:true,
    imports:[CommonModule, TimeInputComponent, FlowerComponent],
    template:`
        <div class="clock-container">
            <app-flower [petalsMode]=24 [value]="currentHour"/>
            <app-flower [petalsMode]=60 [value]="currentMinute"/>
            <app-flower [petalsMode]=60 [value]="currentSecond"/>
        </div>
        <app-time-input
            (hourUpdated)="onHourUpdate($event)"
            (minuteUpdated)="onMinuteUpdate($event)"
            (secondUpdated)="onSecondUpdate($event)"/>
    `,
    styles:`
        .clock-container{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    `
})

export class FlowerClockComponent {
    currentHour: number = 0;
    currentMinute: number = 0;
    currentSecond: number = 0;

    onHourUpdate(time: string) {
    this.currentHour = parseInt(time);
    }  
    onMinuteUpdate(time: string) {
    this.currentMinute = parseInt(time);
    }  
    onSecondUpdate(time: string) {
    this.currentSecond = parseInt(time);
    }
}