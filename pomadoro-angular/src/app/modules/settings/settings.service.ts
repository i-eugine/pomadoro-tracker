import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Settings } from '../../models/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  get() {
    const settings = localStorage.getItem("settings");

    return of(settings ? JSON.parse(settings) : {
      workTime: 0,
      workIterations: 0,
      shortBreak: 0,
      longBreak: 0,
    }).pipe(delay(1000));
  }

  save(settings: Settings) {
    localStorage.setItem("settings", JSON.stringify(settings));

    return of(settings).pipe(delay(1000));
  }
}
