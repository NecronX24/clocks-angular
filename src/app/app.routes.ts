import { Routes } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { TimeInputComponentTest } from './time-input/time-input.component.specs';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { DigitalHourglassClockComponent } from './digital-hourglass/digital-hourglass-clock.component';
import { StarClockComponent } from './star-clock/star-clock.component';

export const routes: Routes =
[
    {path: '', component: SessionComponent},
    {path: 'testInput', component: TimeInputComponentTest},
    {path: 'testAnalog', component: AnalogClockComponent},
    {path: 'testHourglass', component: DigitalHourglassClockComponent},
    {path: 'testStar', component: StarClockComponent},
];
