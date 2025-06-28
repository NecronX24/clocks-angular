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

export const routes: Routes =
[
    {path: '', component: SessionComponent},
    {path: 'testInput', component: TimeInputComponentTest},

    {path: 'testAnalog', component: AnalogClockComponent},
    {path: 'testHourglass', component: DigitalHourglassClockComponent},
    {path: 'testStar', component: StarClockComponent},
    {path: 'testRainbow', component: RainbowCardClockComponent},
    {path: 'testFlower', component: FlowerClockComponent},
    {path: 'testLoading', component: LoadingBarClockComponent},
    {path: 'test', component: BinaryClockComponent},
];
