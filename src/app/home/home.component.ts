import { Component } from '@angular/core';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { BinaryClockComponent } from "../binary-clock/binary-clock.component";
import { DigitalClockComponent } from "../digital-clock/digital-clock.component";
import { DigitalHourglassClockComponent } from "../digital-hourglass/digital-hourglass-clock.component";
import { FlowerClockComponent } from "../flower/flower-clock.component";
import { LoadingBarClockComponent } from "../loading-bar-clock/loading-bar-clock.component";
import { RainbowCardClockComponent } from "../rainbow-card/rainbow-card-clock.component";
import { SevenSegmentsClockComponent } from "../seven-segments-clock/seven-segments-clock.component";
import { StarClockComponent } from "../star-clock/star-clock.component";
import { TextClockComponent } from "../text-clock/text-clock.component";

@Component({
  selector: 'app-home',
  imports: [AnalogClockComponent, BinaryClockComponent, DigitalClockComponent, DigitalHourglassClockComponent, FlowerClockComponent, LoadingBarClockComponent, RainbowCardClockComponent, SevenSegmentsClockComponent, StarClockComponent, TextClockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
