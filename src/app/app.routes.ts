import { Routes } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { TimeInputComponentTest } from './time-input/time-input.component.specs';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { DigitalHourglassClockComponent } from './digital-hourglass/digital-hourglass-clock.component';
import { StarClockComponent } from './star-clock/star-clock.component';
import { RainbowCardClockComponent } from './rainbow-card/rainbow-card-clock.component';
import { FlowerClockComponent } from './flower/flower-clock.component';
import { LoadingBarClockComponent } from './loading-bar-clock/loading-bar-clock.component';
import { BinaryClockComponent } from './binary-clock/binary-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { SevenSegmentsClockComponent } from './seven-segments-clock/seven-segments-clock.component';
import { TextClockComponent } from './text-clock/text-clock.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes =
[
    {path: '', component: HomeComponent},
    {path: 'session', component: SessionComponent},
    {path: 'testInput', component: TimeInputComponentTest},

    {path: 'testAnalog', component: AnalogClockComponent},
    {path: 'testHourglass', component: DigitalHourglassClockComponent},
    {path: 'testStar', component: StarClockComponent},
    {path: 'testRainbow', component: RainbowCardClockComponent},

    {path: 'testFlower', component: FlowerClockComponent},
    {path: 'testLoading', component: LoadingBarClockComponent},
    {path: 'testBinary', component: BinaryClockComponent},
    {path: 'testDigital', component: DigitalClockComponent},

    {path: 'testSeven', component: SevenSegmentsClockComponent},
    {path: 'testClock', component: TextClockComponent},
];
