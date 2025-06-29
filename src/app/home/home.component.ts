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
import { NgIf, NgFor } from '@angular/common'; // Import NgIf and NgFor

@Component({
  selector: 'app-home',
  standalone: true, // If your component is not standalone, remove this line.
  imports: [
    AnalogClockComponent,
    BinaryClockComponent,
    DigitalClockComponent,
    DigitalHourglassClockComponent,
    FlowerClockComponent,
    LoadingBarClockComponent,
    RainbowCardClockComponent,
    SevenSegmentsClockComponent,
    StarClockComponent,
    TextClockComponent,
    NgIf, // Add NgIf to imports
    NgFor // Add NgFor to imports
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentSlide: number = 0;
  totalSlides: number[] = Array(10).fill(0); // Assuming you have 10 clock components

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides.length) % this.totalSlides.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}