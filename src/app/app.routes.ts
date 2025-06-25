import { Routes } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { TimeInputComponentTest } from './time-input/time-input.component.specs';

export const routes: Routes =
[
    {path: '', component: SessionComponent},
    {path: 'test', component: TimeInputComponentTest},
];
