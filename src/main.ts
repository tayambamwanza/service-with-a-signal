import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { providers } from './app.config';

bootstrapApplication(AppComponent, {providers});
